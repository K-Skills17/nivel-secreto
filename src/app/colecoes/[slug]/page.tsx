import { notFound } from "next/navigation";
import { collections, getProductsByCollection } from "@/data/products";
import { CollectionPageClient } from "./CollectionPageClient";
import type { Metadata } from "next";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const col = collections.find((c) => c.slug === slug);
  if (!col) return { title: "Coleção não encontrada" };
  return {
    title: col.name,
    description: col.description,
    openGraph: { title: `${col.name} | Nível Secreto`, description: col.description },
  };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const col = collections.find((c) => c.slug === slug);
  if (!col) notFound();
  const prods = getProductsByCollection(slug);
  return <CollectionPageClient collection={col} products={prods} />;
}
