"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProductCard } from "@/components/commerce/ProductCard";
import { Product } from "@/data/products";

interface Props {
  collection: { name: string; slug: string; description: string; image: string };
  products: Product[];
}

export function CollectionPageClient({ collection, products }: Props) {
  return (
    <div>
      {/* Hero banner */}
      <div className="relative h-52 md:h-72 overflow-hidden">
        <Image src={collection.image} alt={collection.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-5 lg:px-8 pb-8">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-champagne text-[11px] tracking-[0.3em] uppercase mb-2">Coleção</p>
              <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-white">{collection.name}</h1>
              <p className="text-white/60 text-sm mt-2 max-w-md">{collection.description}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 lg:py-16">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted text-sm">Em breve novos produtos nesta coleção.</p>
          </div>
        )}
      </div>
    </div>
  );
}
