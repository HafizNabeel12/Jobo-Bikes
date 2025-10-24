import { notFound } from 'next/navigation';
import { accessoriesProducts, getAccessoryBySlug } from '@/lib/accessoriesProducts';
import AccessoryProductClient from '@/components/AccessoryProductClient';

// ✅ Generate static params for all accessories
export async function generateStaticParams() {
  return accessoriesProducts.map((product) => ({
    slug: product.slug,
  }));
}

// ✅ Use correct typing (no Promise for params)
interface AccessoryProductPageProps {
  params: { slug: string };
}

// ✅ Async server component
export default async function AccessoryProductPage({
  params,
}: AccessoryProductPageProps) {
  const { slug } = params; // no await needed

  const product = await getAccessoryBySlug(slug);

  if (!product) {
    notFound();
  }

  return <AccessoryProductClient product={product} />;
}
