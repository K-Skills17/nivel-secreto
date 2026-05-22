"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { products } from "@/data/products";

const allReviews = products.flatMap((p) => (p.reviews || []).map((r) => ({ ...r, product: p.name }))).slice(0, 3);

export function Reviews() {
  return (
    <section className="py-20 lg:py-28 px-5 lg:px-8 bg-mist">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-wine text-[12px] tracking-[0.3em] uppercase mb-3">Depoimentos</p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-ink">
            O que nossos clientes dizem
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allReviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-lg"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-champagne text-champagne" />
                ))}
              </div>
              <p className="text-ink/80 text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
              <div className="text-muted text-xs">
                <span className="font-medium text-ink">{r.name}</span> · {r.product}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
