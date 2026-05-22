"use client";

import { motion } from "framer-motion";
import { getBestSellers } from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";
import Link from "next/link";

export function FeaturedProducts() {
  const products = getBestSellers();

  return (
    <section className="py-28 lg:py-36 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
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
            transition={{ delay: 0.2 }}
            className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-cream mt-5"
          >
            Mais Procurados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-cream-muted/50 mt-5 max-w-md mx-auto text-sm leading-[1.8]"
          >
            Os favoritos de quem prioriza qualidade e experiência.
          </motion.p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/categoria/vibradores"
            className="inline-flex items-center gap-2 text-cream-muted/50 text-[11px] tracking-[0.2em] uppercase hover:text-gold transition-colors duration-500 border-b border-cream-muted/20 hover:border-gold/40 pb-1"
          >
            Ver Todos os Produtos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
