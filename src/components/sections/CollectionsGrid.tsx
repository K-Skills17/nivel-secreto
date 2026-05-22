"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/products";

export function CollectionsGrid() {
  return (
    <section className="py-20 lg:py-28 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-wine text-[12px] tracking-[0.3em] uppercase mb-3"
          >
            Coleções
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-ink"
          >
            Encontre o que é perfeito para vocês
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {collections.slice(0, 3).map((col, i) => (
            <motion.div
              key={col.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/colecoes/${col.slug}`} className="group block">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4">
                  <Image src={col.image} alt={col.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/30 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white">{col.name}</h3>
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed">{col.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          {collections.slice(3).map((col, i) => (
            <motion.div
              key={col.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/colecoes/${col.slug}`} className="group block">
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-4">
                  <Image src={col.image} alt={col.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/30 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white">{col.name}</h3>
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed">{col.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
