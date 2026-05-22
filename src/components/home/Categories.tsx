"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/products";

export function Categories() {
  return (
    <section id="categorias" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gold text-[11px] tracking-[0.3em] uppercase"
        >
          Coleções
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream mt-3"
        >
          Nossas Categorias
        </motion.h2>
      </div>

      {/* Top row: 3 large */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-1">
        {categories.slice(0, 3).map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={`/categoria/${cat.slug}`}
              className="group relative block h-72 md:h-80 overflow-hidden"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl text-cream group-hover:text-gold transition-colors duration-500">
                  {cat.name}
                </h3>
                <p className="text-cream/40 text-sm mt-1">{cat.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom row: 3 smaller */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {categories.slice(3).map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i + 3) * 0.1 }}
          >
            <Link
              href={`/categoria/${cat.slug}`}
              className="group relative block h-56 md:h-64 overflow-hidden"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl text-cream group-hover:text-gold transition-colors duration-500">
                  {cat.name}
                </h3>
                <p className="text-cream/40 text-sm mt-1">{cat.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
