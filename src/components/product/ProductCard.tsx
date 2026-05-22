"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Product, useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import { ProductImage } from "@/components/product/ProductImage";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="group bg-background">
      {/* Image */}
      <Link href={`/produto/${product.slug}`} className="block relative aspect-[4/5] overflow-hidden">
        <ProductImage categorySlug={product.categorySlug} productName={product.name} size="md" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gold/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </Link>

      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 text-gold/60 text-[10px] tracking-[0.2em] uppercase">
          {product.badge}
        </div>
      )}

      {/* Info */}
      <div className="px-5 py-4">
        <Link href={`/produto/${product.slug}`}>
          <p className="text-cream-muted/40 text-[10px] tracking-[0.2em] uppercase mb-1.5">
            {product.category}
          </p>
          <h3 className="font-[family-name:var(--font-heading)] text-base text-cream group-hover:text-gold transition-colors duration-500 leading-snug min-h-[2.75rem]">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-surface-border">
          <div className="flex items-baseline gap-2">
            <span className="text-cream text-sm">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-cream-muted/25 text-xs line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={() => addItem(product)}
            className="p-2 text-cream-muted/30 hover:text-gold transition-colors duration-300"
            aria-label="Adicionar ao carrinho"
          >
            <ShoppingBag size={16} strokeWidth={1} />
          </button>
        </div>
      </div>
    </div>
  );
}
