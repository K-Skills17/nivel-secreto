"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { categories } from "@/lib/products";
import { ArrowUpRight } from "lucide-react";

export function Categories() {
  return (
    <section id="categorias" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gold text-xs tracking-[0.3em] uppercase"
        >
          Coleções
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-cream mt-4"
        >
          Nossas Categorias
        </motion.h2>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-surface-border">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <Link
              href={`/categoria/${cat.slug}`}
              className="group relative block h-56 bg-background p-8 flex flex-col justify-between transition-all duration-500 hover:bg-surface"
            >
              {/* Category number */}
              <span className="text-cream-muted/20 text-xs tracking-[0.2em] font-[family-name:var(--font-heading)]">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl text-cream group-hover:text-gold transition-colors duration-500">
                      {cat.name}
                    </h3>
                    <p className="text-cream-muted/60 text-sm mt-2 max-w-[250px] leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      {cat.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1}
                    className="text-cream-muted/30 group-hover:text-gold transition-all duration-500 transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-700" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
