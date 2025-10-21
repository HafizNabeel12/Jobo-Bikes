import { notFound } from 'next/navigation';
import { accessoriesProducts, getAccessoryBySlug } from '@/lib/accessoriesProducts';
import AccessoryProductClient from '@/components/AccessoryProductClient';

// Generate static params for all accessories
export async function generateStaticParams() {
  return accessoriesProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function AccessoryProductPage({ params }: { params: { slug: string } }) {
  // Await the async function
  const product = await getAccessoryBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <AccessoryProductClient product={product} />;
}
