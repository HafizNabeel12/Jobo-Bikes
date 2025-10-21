import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

/**
 * Sanity Client Configuration for Next.js
 * This client is used to fetch data from Sanity in your Next.js application
 */

// Get environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'


// Sanity client configuration
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production for better performance
  perspective: 'published', // Only fetch published documents
})

// Image URL builder helper
const builder = imageUrlBuilder(client)

/**
 * Helper function to generate image URLs from Sanity image assets
 * @param source - Sanity image source
 * @returns Image URL builder
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Helper to get optimized image URL
 * @param source - Sanity image source
 * @param width - Desired width
 * @param height - Desired height
 * @returns Optimized image URL
 */
export function getImageUrl(source: SanityImageSource, width?: number, height?: number): string {
  let imageBuilder = urlFor(source).auto('format').fit('max')
  
  if (width) imageBuilder = imageBuilder.width(width)
  if (height) imageBuilder = imageBuilder.height(height)
  
  return imageBuilder.url()
}