import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import { ProductDetailClient } from "./ProductDetailClient";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produto não encontrado" };
  return {
    title: product.name,
    description: product.shortBenefit + ". " + product.description.slice(0, 120),
    openGraph: { title: `${product.name} | Nível Secreto`, description: product.shortBenefit },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetailClient product={product} />;
}
