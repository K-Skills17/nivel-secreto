"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/lib/store";

interface Props {
  category: { name: string; slug: string; description: string };
  products: Product[];
}

export function CategoryPageClient({ category, products }: Props) {
  return (
    <div className="pt-28 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-gold text-xs tracking-[0.3em] uppercase">
          Categoria
        </span>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-cream mt-4">
          {category.name}
        </h1>
        <p className="text-cream-muted mt-4 max-w-xl mx-auto">
          {category.description}
        </p>
      </motion.div>

      {/* Products */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-cream-muted text-lg">
            Em breve novos produtos nesta categoria.
          </p>
        </div>
      )}
    </div>
  );
}
