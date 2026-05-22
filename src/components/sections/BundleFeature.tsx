"use client";

import { motion } from "framer-motion";
import { formatBRL, formatPixPrice } from "@/lib/format";
import { useCartStore } from "@/lib/cart-store";
import { products } from "@/data/products";
import Link from "next/link";

export function BundleFeature() {
  const kit = products.find((p) => p.id === "kit-reconexao")!;
  const addItem = useCartStore((s) => s.addItem);

  return (
    <section className="py-20 lg:py-28 px-5 lg:px-8 bg-ink text-cream">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-champagne text-[12px] tracking-[0.3em] uppercase mb-3"
        >
          Sugestão para começar
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream mb-4"
        >
          {kit.name}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-cream/50 text-base max-w-lg mx-auto leading-[1.8] mb-8"
        >
          {kit.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-2 mb-8"
        >
          {kit.compareAtBRL && (
            <span className="text-cream/30 text-sm line-through">{formatBRL(kit.compareAtBRL)}</span>
          )}
          <span className="font-[family-name:var(--font-heading)] text-4xl text-champagne">
            {formatBRL(kit.priceBRL)}
          </span>
          <span className="text-cream/40 text-sm">
            ou {formatPixPrice(kit.priceBRL)} no Pix (5% OFF)
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => addItem({ id: kit.id, slug: kit.slug, name: kit.name, priceBRL: kit.priceBRL, image: kit.images[0], category: kit.category })}
            className="px-8 py-3.5 bg-champagne text-ink text-[13px] font-medium tracking-wide rounded hover:bg-champagne/85 transition-colors"
          >
            Adicionar ao Carrinho
          </button>
          <Link href={`/produto/${kit.slug}`} className="text-cream/50 text-[13px] hover:text-cream transition-colors border-b border-cream/20 pb-0.5">
            Ver detalhes
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
