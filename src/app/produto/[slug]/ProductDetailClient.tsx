"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ArrowLeft, Shield, Truck, Lock } from "lucide-react";
import { ProductImage } from "@/components/product/ProductImage";
import Link from "next/link";
import { Product, useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";

export function ProductDetailClient({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [quantity, setQuantity] = useState(1);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="pt-28 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <Link
          href={`/categoria/${product.categorySlug}`}
          className="inline-flex items-center gap-2 text-cream-muted text-sm hover:text-gold transition-colors"
        >
          <ArrowLeft size={16} />
          {product.category}
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-square rounded border border-surface-border/50 overflow-hidden bg-[#1a1820]"
        >
          <ProductImage src={product.images[0]} productName={product.name} size="lg" />
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Category & Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-cream-muted text-xs tracking-[0.2em] uppercase">
              {product.category}
            </span>
            {product.badge && (
              <span className="px-3 py-1 bg-gold/10 text-gold text-xs tracking-wider rounded-full border border-gold/20">
                {product.badge}
              </span>
            )}
          </div>

          {/* Name */}
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight mb-6">
            {product.name}
          </h1>

          {/* Price */}
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-[family-name:var(--font-heading)] text-3xl text-gold">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-cream-muted/40 text-lg line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="px-2 py-0.5 bg-danger/10 text-danger text-xs font-semibold rounded">
                  -{discount}%
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-cream-muted leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border border-surface-border rounded">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 text-cream-muted hover:text-cream transition-colors"
              >
                -
              </button>
              <span className="px-4 py-3 text-cream min-w-[3rem] text-center border-x border-surface-border">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 text-cream-muted hover:text-cream transition-colors"
              >
                +
              </button>
            </div>

            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) addItem(product);
              }}
              className="flex-1 flex items-center justify-center gap-3 py-3.5 bg-gold text-background font-semibold text-sm tracking-wider uppercase rounded hover:bg-gold-light transition-colors duration-300"
            >
              <ShoppingBag size={18} />
              Adicionar ao Carrinho
            </button>
          </div>

          {/* Trust */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-surface-border">
            {[
              { icon: Truck, label: "Entrega Discreta" },
              { icon: Shield, label: "Compra Segura" },
              { icon: Lock, label: "Privacidade" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="text-center">
                <Icon size={20} strokeWidth={1.5} className="text-gold mx-auto mb-2" />
                <span className="text-cream-muted text-xs">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
