"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

export function CartDrawer() {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, total } =
    useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-surface border-l border-surface-border z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-surface-border">
              <h2 className="font-[family-name:var(--font-heading)] text-xl text-cream">
                Seu Carrinho
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 text-cream-muted hover:text-cream transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-cream-muted">
                  <ShoppingBag size={48} strokeWidth={1} className="mb-4 opacity-30" />
                  <p className="text-sm">Seu carrinho está vazio</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      className="flex gap-4 p-4 bg-surface-light rounded-lg border border-surface-border"
                    >
                      {/* Placeholder image */}
                      <div className="w-20 h-20 bg-surface-border rounded-md flex items-center justify-center flex-shrink-0">
                        <ShoppingBag size={20} className="text-cream-muted/30" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-cream text-sm font-medium truncate">
                          {item.product.name}
                        </h3>
                        <p className="text-gold text-sm mt-1">
                          {formatPrice(item.product.price)}
                        </p>

                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="w-7 h-7 rounded border border-surface-border flex items-center justify-center text-cream-muted hover:border-gold hover:text-gold transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-cream text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="w-7 h-7 rounded border border-surface-border flex items-center justify-center text-cream-muted hover:border-gold hover:text-gold transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-cream-muted/50 hover:text-danger transition-colors self-start"
                      >
                        <X size={16} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-surface-border px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-cream-muted text-sm">Total</span>
                  <span className="font-[family-name:var(--font-heading)] text-xl text-gold">
                    {formatPrice(total())}
                  </span>
                </div>
                <Link
                  href="/checkout"
                  onClick={() => setCartOpen(false)}
                  className="block w-full py-3.5 bg-gold text-background text-center text-sm font-semibold tracking-wider uppercase rounded hover:bg-gold-light transition-colors duration-300"
                >
                  Finalizar Compra
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
