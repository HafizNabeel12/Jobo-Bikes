import { notFound } from 'next/navigation';
import { accessoriesProducts, getAccessoryBySlug } from '@/lib/accessoriesProducts';
import AccessoryProductClient from '@/components/AccessoryProductClient';

// Generate static params for all accessories
export async function generateStaticParams() {
  return accessoriesProducts.map((product) => ({
    slug: product.slug,
  }));
}

interface AccessoryProductPageProps {
  params: {
    slug: string;
  };
}

export default async function AccessoryProductPage({
  params,
}: AccessoryProductPageProps) {
  // Ensure that we await the async function call
  const product = await getAccessoryBySlug(params.slug);

  // Handle 404 if no product is found
  if (!product) {
    notFound();
  }

  return <AccessoryProductClient product={product} />;
}
