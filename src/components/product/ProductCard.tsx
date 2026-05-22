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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group bg-surface rounded-sm overflow-hidden"
    >
      {/* Image */}
      <Link href={`/produto/${product.slug}`} className="block relative aspect-[3/4] overflow-hidden">
        <ProductImage src={product.images[0]} productName={product.name} size="md" />

        {/* Hover zoom on image */}
        <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-105" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500" />

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full py-3 bg-gold/90 backdrop-blur-sm text-background text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Adicionar
          </button>
        </div>
      </Link>

      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 px-3 py-1 bg-background/60 backdrop-blur-sm text-gold text-[10px] tracking-[0.15em] uppercase rounded-sm">
          {product.badge}
        </div>
      )}

      {/* Info */}
      <div className="p-5">
        <Link href={`/produto/${product.slug}`}>
          <p className="text-cream-muted/50 text-[10px] tracking-[0.2em] uppercase mb-2">
            {product.category}
          </p>
          <h3 className="font-[family-name:var(--font-heading)] text-lg text-cream group-hover:text-gold transition-colors duration-500 leading-snug min-h-[3rem]">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-baseline gap-2.5 mt-3">
          <span className="text-gold font-medium text-[15px]">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-cream-muted/30 text-xs line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
