"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/lib/store";

interface Props {
  category: { name: string; slug: string; description: string; image: string };
  products: Product[];
}

export function CategoryPageClient({ category, products }: Props) {
  return (
    <div>
      {/* Category hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold text-[11px] tracking-[0.3em] uppercase">
                Coleção
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-cream mt-2">
                {category.name}
              </h1>
              <p className="text-cream/50 text-sm mt-2 max-w-md">
                {category.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-cream-muted text-sm">
              Em breve novos produtos nesta categoria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
