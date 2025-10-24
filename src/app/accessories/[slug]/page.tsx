import { notFound } from 'next/navigation';
import { accessoriesProducts, getAccessoryBySlug } from '@/lib/accessoriesProducts';
import AccessoryProductClient from '@/components/AccessoryProductClient';

// ✅ Explicit return type to avoid Promise inference issues
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return accessoriesProducts.map((product) => ({
    slug: product.slug,
  }));
}

// ✅ Explicitly conforming to Next.js PageProps type
export default async function AccessoryProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getAccessoryBySlug(slug);

  if (!product) {
    notFound();
  }

  return <AccessoryProductClient product={product} />;
}
