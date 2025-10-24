// src/app/products/[slug]/page.tsx
import { getAllProductSlugs, getProductBySlug } from "@/lib/productData";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="px-4 md:px-0">
      <ProductDetails product={product!} />
    </div>
  );
}
