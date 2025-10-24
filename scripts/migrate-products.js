
import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

// ------------------ SANITY CONFIG ------------------
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Editor or Write access required
  useCdn: false,
})

// ------------------ IMPORT PRODUCT DATA ------------------


// ------------------ HELPER FUNCTION: Upload Image ------------------
async function uploadImage(relativePath) {
  try {
    // Remove leading slashes if any
    const cleanPath = relativePath.replace(/^\/+/, '')
    const absolutePath = path.join(process.cwd(), 'public', cleanPath)

    // Check if file exists
    if (!fs.existsSync(absolutePath)) {
      console.warn(`⚠️ Image not found: ${absolutePath}`)
      return null
    }

    const imageBuffer = fs.readFileSync(absolutePath)
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: path.basename(absolutePath),
    })

    console.log(`📸 Uploaded image: ${relativePath}`)
    return {
      _type: 'image',
      asset: { _type: 'reference', _ref: asset._id },
    }
  } catch (error) {
    console.error(`❌ Failed to upload image: ${relativePath}`, error.message)
    return null
  }
}

// ------------------ MIGRATE PRODUCTS ------------------
async function migrateProducts() {
  console.log('🚀 Starting product migration...')
  console.log(`🧩 Total products: ${PRODUCTS_DATA.length}`)

  for (const product of PRODUCTS_DATA) {
    try {
      // Upload main image
      const mainImage = product.image ? await uploadImage(product.image) : null

      // Upload gallery images (if any)
      const productImages =
        Array.isArray(product.images) && product.images.length > 0
          ? await Promise.all(
              product.images.map(async (img) => await uploadImage(img))
            )
          : []

      // Prepare product data for Sanity
      const productDoc = {
        _type: 'product',
        title: product.title,
        slug: { _type: 'slug', current: product.slug || product.title.toLowerCase().replace(/\s+/g, '-') },
        price: product.price,
        category: product.category,
        description: product.description || '',
        mainImage,
        productImages: productImages.filter(Boolean),
      }

      // Check if product already exists
      const existing = await client.fetch(
        `*[_type == "product" && title == $title][0]`,
        { title: product.title }
      )

      if (existing) {
        await client
          .patch(existing._id)
          .set(productDoc)
          .commit()
        console.log(`🔁 Updated: ${product.title}`)
      } else {
        await client.create(productDoc)
        console.log(`🟢 Created: ${product.title}`)
      }
    } catch (err) {
      console.error(`❌ Error migrating ${product.title}:`, err.message)
    }
  }

  console.log('\n✅ Migration complete!')
}

// ------------------ RUN SCRIPT ------------------
migrateProducts()