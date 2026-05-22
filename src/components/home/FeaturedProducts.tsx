"use client";

import { motion } from "framer-motion";
import { getBestSellers } from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";
import Link from "next/link";

export function FeaturedProducts() {
  const products = getBestSellers();

  return (
    <section className="py-28 lg:py-36 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-12 h-[1px] bg-gold mx-auto mb-8"
          />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gold text-[11px] tracking-[0.3em] uppercase"
          >
            Seleção Curada
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-cream mt-5"
          >
            Mais Procurados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-cream-muted/40 mt-5 max-w-md mx-auto text-sm leading-[1.8]"
          >
            Os favoritos de quem prioriza qualidade e experiência.
          </motion.p>
        </div>

        {/* Products grid — 2 cols on tablet, 4 on desktop with proper gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-14"
        >
          <Link
            href="/categoria/vibradores"
            className="inline-flex items-center gap-3 text-cream-muted/40 text-[11px] tracking-[0.2em] uppercase hover:text-gold transition-colors duration-500 group"
          >
            <span className="border-b border-cream-muted/15 group-hover:border-gold/40 pb-1 transition-colors duration-500">
              Ver Toda a Coleção
            </span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
