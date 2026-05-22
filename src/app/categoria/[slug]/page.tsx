import { notFound } from "next/navigation";
import { categories, getProductsByCategory } from "@/lib/products";
import { CategoryPageClient } from "./CategoryPageClient";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // We need to handle this synchronously for static generation
  return {
    title: "Nível Secreto | Categoria",
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();
  const products = getProductsByCategory(slug);

  return <CategoryPageClient category={category} products={products} />;
}
