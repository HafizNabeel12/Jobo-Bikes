import { notFound } from 'next/navigation';
import { accessoriesProducts, getAccessoryBySlug } from '@/lib/accessoriesProducts';
import AccessoryProductClient from '@/components/AccessoryProductClient';

// Ensure `generateStaticParams` returns a Promise
export async function generateStaticParams() {
  const params = await Promise.all(
    accessoriesProducts.map(async (product) => ({
      slug: product.slug,
    }))
  );
  return params;
}

interface AccessoryProductPageProps {
  params: { slug: string };
}

export default async function AccessoryProductPage({ params }: AccessoryProductPageProps) {
  // Await the async function call
  const product = await getAccessoryBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <AccessoryProductClient product={product} />;
}
