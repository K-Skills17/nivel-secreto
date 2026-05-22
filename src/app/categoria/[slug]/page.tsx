import { notFound } from "next/navigation";
import { categories, getProductsByCategory } from "@/lib/products";
import { CategoryPageClient } from "./CategoryPageClient";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: "Categoria não encontrada" };

  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: `${category.name} | Nível Secreto`,
      description: category.description,
      url: `https://nivelsecreto.com.br/categoria/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();
  const products = getProductsByCategory(slug);

  return <CategoryPageClient category={category} products={products} />;
}
