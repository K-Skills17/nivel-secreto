"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ArrowLeft, Package, CreditCard, Shield, Star, Minus, Plus } from "lucide-react";
import { Product, products } from "@/data/products";
import { formatBRL, formatPixPrice, formatInstallments } from "@/lib/format";
import { useCartStore } from "@/lib/cart-store";
import { ProductCard } from "@/components/commerce/ProductCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

export function ProductDetailClient({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [qty, setQty] = useState(1);
  const isRemote = product.images[0]?.src.startsWith("http");

  const discount = product.compareAtBRL
    ? Math.round(((product.compareAtBRL - product.priceBRL) / product.compareAtBRL) * 100)
    : 0;

  const categoryLabel =
    product.category === "casais"
      ? "Para Casais"
      : product.category === "ela"
      ? "Para Ela"
      : product.category === "ele"
      ? "Para Ele"
      : product.category === "iniciantes"
      ? "Iniciantes"
      : "Bem-Estar";

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addItem({
        id: product.id,
        slug: product.slug,
        name: product.name,
        priceBRL: product.priceBRL,
        image: product.images[0],
        category: product.category,
      });
    }
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-6 pb-16">
        {/* Breadcrumb */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
          <Link
            href={`/colecoes/${product.category}`}
            className="inline-flex items-center gap-1.5 text-muted text-sm hover:text-wine transition-colors"
          >
            <ArrowLeft size={14} /> {categoryLabel}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="aspect-square rounded-lg overflow-hidden bg-mist border border-border"
          >
            {isRemote ? (
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                width={600}
                height={600}
                className="w-full h-full object-contain p-8"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-[family-name:var(--font-heading)] text-ink/[0.04] text-[12rem] select-none">
                  {product.name.charAt(0)}
                </span>
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-wine text-[11px] tracking-[0.2em] uppercase mb-2">{categoryLabel}</p>

            <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-ink leading-tight mb-2">
              {product.name}
            </h1>

            <p className="text-muted text-base leading-relaxed mb-6">{product.shortBenefit}</p>

            {/* Reviews summary */}
            {product.reviews && product.reviews.length > 0 && (
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={
                        i <
                        Math.round(
                          product.reviews!.reduce((a, r) => a + r.rating, 0) / product.reviews!.length
                        )
                          ? "fill-champagne text-champagne"
                          : "text-border"
                      }
                    />
                  ))}
                </div>
                <span className="text-muted text-xs">({product.reviews.length} avaliações)</span>
              </div>
            )}

            {/* Price block */}
            <div className="bg-mist rounded-lg p-5 mb-6">
              <div className="flex items-baseline gap-3">
                <span className="font-[family-name:var(--font-heading)] text-3xl text-ink">
                  {formatBRL(product.priceBRL)}
                </span>
                {product.compareAtBRL && (
                  <>
                    <span className="text-muted/50 text-base line-through">
                      {formatBRL(product.compareAtBRL)}
                    </span>
                    <span className="px-2 py-0.5 bg-wine/10 text-wine text-xs font-medium rounded">
                      -{discount}%
                    </span>
                  </>
                )}
              </div>
              <p className="text-wine text-sm font-medium mt-1">
                {formatPixPrice(product.priceBRL)} no Pix (5% OFF)
              </p>
              <p className="text-muted text-xs mt-1">{formatInstallments(product.priceBRL)}</p>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center border border-border rounded">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-2.5 text-muted hover:text-ink transition-colors"
                >
                  <Minus size={15} />
                </button>
                <span className="px-3 py-2.5 text-ink text-sm min-w-[2.5rem] text-center border-x border-border">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-2.5 text-muted hover:text-ink transition-colors"
                >
                  <Plus size={15} />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-champagne text-ink text-[13px] font-medium tracking-wide rounded hover:bg-champagne/85 transition-colors"
              >
                <ShoppingBag size={16} /> Adicionar ao Carrinho
              </button>
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-4 text-muted text-xs mb-8 py-3 border-y border-border">
              <span className="flex items-center gap-1">
                <Package size={13} /> Entrega discreta
              </span>
              <span className="flex items-center gap-1">
                <CreditCard size={13} /> Fatura discreta
              </span>
              <span className="flex items-center gap-1">
                <Shield size={13} /> Compra segura
              </span>
            </div>

            {/* Description */}
            <p className="text-ink/80 text-sm leading-[1.8] mb-6">{product.description}</p>

            {/* Specs accordion */}
            {product.specs.length > 0 && (
              <Accordion className="mb-6">
                <AccordionItem value="specs">
                  <AccordionTrigger className="text-sm font-medium text-ink">
                    Especificações Técnicas
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {product.specs.map((s) => (
                        <div key={s.label} className="flex justify-between text-sm">
                          <span className="text-muted">{s.label}</span>
                          <span className="text-ink">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}

            {/* Reviews */}
            {product.reviews && product.reviews.length > 0 && (
              <Accordion>
                <AccordionItem value="reviews">
                  <AccordionTrigger className="text-sm font-medium text-ink">
                    Avaliações ({product.reviews.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      {product.reviews.map((r, i) => (
                        <div key={i} className="pb-3 border-b border-border last:border-0">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="flex gap-0.5">
                              {Array.from({ length: r.rating }).map((_, j) => (
                                <Star key={j} size={11} className="fill-champagne text-champagne" />
                              ))}
                            </div>
                            <span className="text-ink text-xs font-medium">{r.name}</span>
                          </div>
                          <p className="text-muted text-sm">&ldquo;{r.text}&rdquo;</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </motion.div>
        </div>

        {/* Sticky mobile add to cart */}
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-cream border-t border-border p-3 flex items-center gap-3 lg:hidden">
          <div className="flex-1">
            <p className="text-ink font-medium text-sm">{formatBRL(product.priceBRL)}</p>
            <p className="text-wine text-xs">{formatPixPrice(product.priceBRL)} no Pix</p>
          </div>
          <button
            onClick={handleAdd}
            className="px-6 py-2.5 bg-champagne text-ink text-[13px] font-medium rounded flex items-center gap-2"
          >
            <ShoppingBag size={15} /> Adicionar
          </button>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 lg:mt-24">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-ink mb-8">Combina com</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
