import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";
import { ProductDetailClient } from "./ProductDetailClient";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produto não encontrado" };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Nível Secreto`,
      description: product.description,
      url: `https://nivelsecreto.com.br/produto/${slug}`,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
