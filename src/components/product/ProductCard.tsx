"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Product, useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import { ProductImage } from "@/components/product/ProductImage";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-surface rounded overflow-hidden border border-surface-border/50 hover:border-gold/20 transition-colors duration-700"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-20 px-3 py-1 bg-gold/90 text-background text-[9px] font-semibold tracking-[0.15em] uppercase rounded-sm">
          {product.badge}
        </div>
      )}

      {/* Image */}
      <Link href={`/produto/${product.slug}`} className="block relative aspect-square overflow-hidden">
        <ProductImage src={product.images[0]} productName={product.name} size="md" />

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full py-3 bg-gold text-background text-[10px] font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Adicionar
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="p-5">
        <Link href={`/produto/${product.slug}`}>
          <p className="text-gold/40 text-[9px] tracking-[0.25em] uppercase mb-2">
            {product.category}
          </p>
          <h3 className="font-[family-name:var(--font-heading)] text-[17px] text-cream group-hover:text-gold transition-colors duration-500 leading-[1.3] min-h-[2.75rem]">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-baseline gap-2.5 mt-4 pt-4 border-t border-surface-border/50">
          <span className="text-gold text-[15px] font-medium">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-cream-muted/25 text-xs line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
