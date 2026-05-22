import type { MetadataRoute } from "next";
import { collections, products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nivelsecreto.com.br";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/colecoes`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...collections.map((c) => ({ url: `${base}/colecoes/${c.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...products.map((p) => ({ url: `${base}/produto/${p.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 })),
    { url: `${base}/sobre`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contato`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
