"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { categories } from "@/lib/products";
import { ArrowUpRight } from "lucide-react";

const categoryImages: Record<string, string> = {
  vibradores: "✨",
  masturbadores: "🔥",
  "plug-anal": "💎",
  "fetiche-e-sado": "⛓️",
  acessorios: "🌹",
  proteses: "👑",
};

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
          Explore
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <Link
              href={`/categoria/${cat.slug}`}
              className="group relative block h-64 bg-surface rounded-lg overflow-hidden border border-surface-border hover:border-gold/30 transition-all duration-500"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700">
                  {categoryImages[cat.slug]}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl text-cream group-hover:text-gold transition-colors duration-300">
                      {cat.name}
                    </h3>
                    <p className="text-cream-muted text-sm mt-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {cat.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-cream-muted group-hover:text-gold transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
