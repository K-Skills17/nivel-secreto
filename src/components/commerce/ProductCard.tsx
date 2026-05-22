"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { formatBRL, formatPixPrice } from "@/lib/format";
import { useCartStore } from "@/lib/cart-store";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const isRemote = product.images[0]?.src.startsWith("http");

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-lg overflow-hidden border border-border/50 hover:shadow-md transition-shadow duration-500"
    >
      <Link href={`/produto/${product.slug}`} className="block relative aspect-square overflow-hidden bg-mist">
        {isRemote ? (
          <Image src={product.images[0].src} alt={product.images[0].alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-contain p-6" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-[family-name:var(--font-heading)] text-ink/[0.05] text-8xl select-none">
              {product.name.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
          <button
            onClick={(e) => { e.preventDefault(); addItem({ id: product.id, slug: product.slug, name: product.name, priceBRL: product.priceBRL, image: product.images[0], category: product.category }); }}
            className="w-full py-2.5 bg-champagne text-ink text-[11px] font-medium tracking-wider uppercase rounded flex items-center justify-center gap-2 hover:bg-champagne/85 transition-colors"
          >
            <ShoppingBag size={14} /> Adicionar
          </button>
        </div>
      </Link>

      {product.tags.includes("best-seller") && (
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-wine text-cream text-[10px] tracking-wider uppercase rounded">
          Destaque
        </div>
      )}

      <div className="p-4">
        <Link href={`/produto/${product.slug}`}>
          <p className="text-muted text-[11px] tracking-wider uppercase mb-1">{product.category === "casais" ? "Para Casais" : product.category === "ela" ? "Para Ela" : product.category === "ele" ? "Para Ele" : product.category === "iniciantes" ? "Iniciantes" : "Bem-Estar"}</p>
          <h3 className="font-[family-name:var(--font-heading)] text-lg text-ink group-hover:text-wine transition-colors leading-snug mb-1">
            {product.name}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-3">{product.shortBenefit}</p>
        </Link>
        <div className="flex items-baseline gap-2">
          <span className="text-ink font-medium">{formatBRL(product.priceBRL)}</span>
          {product.compareAtBRL && <span className="text-muted/50 text-xs line-through">{formatBRL(product.compareAtBRL)}</span>}
        </div>
        <p className="text-wine text-xs mt-0.5">{formatPixPrice(product.priceBRL)} no Pix</p>
      </div>
    </motion.div>
  );
}
