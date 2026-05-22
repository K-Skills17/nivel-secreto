"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/products";

export function Categories() {
  return (
    <section id="categorias" className="py-28 lg:py-36 px-6 lg:px-8">
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
            Coleções
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-cream mt-5"
          >
            Nossas Categorias
          </motion.h2>
        </div>

        {/* Featured row: first 2 categories large */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {categories.slice(0, 2).map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/categoria/${cat.slug}`}
                className="group relative block h-[400px] md:h-[480px] overflow-hidden rounded-sm"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/[0.04] transition-colors duration-700" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "2rem" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                    className="h-[1px] bg-gold mb-4"
                  />
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl text-cream group-hover:text-gold transition-colors duration-500">
                    {cat.name}
                  </h3>
                  <p className="text-cream/40 text-sm mt-2 max-w-xs leading-relaxed transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {cat.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Grid row: remaining 4 categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.slice(2).map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/categoria/${cat.slug}`}
                className="group relative block h-[280px] overflow-hidden rounded-sm"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/[0.04] transition-colors duration-700" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl text-cream group-hover:text-gold transition-colors duration-500">
                    {cat.name}
                  </h3>
                  <p className="text-cream/35 text-xs mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
