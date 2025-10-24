import { notFound } from "next/navigation";
import { PRODUCTS_DATA } from "@/lib/productData";
import CategoryClient from "@/components/CategoryClient";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = Array.from(
    new Set(
      PRODUCTS_DATA.flatMap((p) =>
        Array.isArray(p.category) ? p.category : [p.category]
      )
    )
  );

  return categories.map((cat) => ({ slug: cat }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const filteredProducts = PRODUCTS_DATA.filter((p) =>
    Array.isArray(p.category)
      ? p.category.includes(slug)
      : p.category === slug
  );

  if (filteredProducts.length === 0) {
    notFound();
  }

  return <CategoryClient products={filteredProducts} slug={slug} />;
}
