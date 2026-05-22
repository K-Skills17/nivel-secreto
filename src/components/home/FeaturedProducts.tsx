"use client";

import { motion } from "framer-motion";
import { getBestSellers } from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";

export function FeaturedProducts() {
  const products = getBestSellers();

  return (
    <section className="py-24 px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold text-xs tracking-[0.3em] uppercase"
          >
            Seleção Curada
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-cream mt-4"
          >
            Mais Procurados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cream-muted/50 mt-4 max-w-md mx-auto text-sm leading-relaxed"
          >
            Os favoritos de quem prioriza qualidade e experiência.
          </motion.p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-surface-border">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-surface"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
