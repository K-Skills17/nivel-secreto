"use client";

import { motion } from "framer-motion";
import { getBestSellers } from "@/data/products";
import { ProductCard } from "@/components/commerce/ProductCard";

export function FeaturedProducts() {
  const featured = getBestSellers();

  return (
    <section className="py-20 lg:py-28 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-wine text-[12px] tracking-[0.3em] uppercase mb-3">Destaques</p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-ink">
            Mais Procurados
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
