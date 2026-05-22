"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, Eye } from "lucide-react";
import { Product, useCartStore } from "@/lib/store";
import { ProductImage } from "@/components/product/ProductImage";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="group relative bg-surface-light rounded-lg overflow-hidden border border-surface-border hover:border-gold/20 transition-all duration-500">
      {/* Image area */}
      <Link href={`/produto/${product.slug}`} className="block relative aspect-square bg-surface overflow-hidden">
        <ProductImage categorySlug={product.categorySlug} productName={product.name} size="md" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quick view */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full text-cream text-xs tracking-wider">
            <Eye size={14} /> Ver Detalhes
          </span>
        </div>
      </Link>

      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 px-3 py-1 bg-gold/90 text-background text-xs font-semibold tracking-wider rounded">
          {product.badge}
        </div>
      )}

      {/* Info */}
      <div className="p-4">
        <Link href={`/produto/${product.slug}`}>
          <p className="text-cream-muted text-xs tracking-wider uppercase mb-1">
            {product.category}
          </p>
          <h3 className="font-[family-name:var(--font-heading)] text-lg text-cream group-hover:text-gold transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-gold font-medium">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-cream-muted/40 text-sm line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={() => addItem(product)}
            className="p-2.5 rounded-full border border-surface-border hover:border-gold hover:bg-gold/10 text-cream-muted hover:text-gold transition-all duration-300"
            aria-label="Adicionar ao carrinho"
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
