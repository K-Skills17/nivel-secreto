"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { formatBRL, formatPixPrice } from "@/lib/format";
import Link from "next/link";

export function CartDrawer() {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, total, freeShippingRemaining } = useCartStore();

  const remaining = freeShippingRemaining();
  const progress = Math.min(100, ((199 - remaining) / 199) * 100);

  return (
    <Sheet open={isOpen} onOpenChange={setCartOpen}>
      <SheetContent className="flex flex-col bg-cream w-full max-w-md">
        <SheetHeader>
          <SheetTitle className="font-[family-name:var(--font-heading)] text-xl text-ink">
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-muted">
            <ShoppingBag size={40} strokeWidth={1} className="mb-4 opacity-30" />
            <p className="text-sm">Seu carrinho está vazio</p>
          </div>
        ) : (
          <>
            {/* Free shipping bar */}
            <div className="px-1 pb-4">
              {remaining > 0 ? (
                <p className="text-xs text-muted mb-2">
                  Faltam <span className="text-wine font-medium">{formatBRL(remaining)}</span> para frete grátis
                </p>
              ) : (
                <p className="text-xs text-wine font-medium mb-2">Parabéns! Você tem frete grátis</p>
              )}
              <div className="h-1.5 bg-mist rounded-full overflow-hidden">
                <div
                  className="h-full bg-champagne rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto space-y-3">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3 p-3 bg-mist rounded-lg">
                  <div className="w-16 h-16 bg-cream rounded flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-ink text-sm font-medium truncate">{item.product.name}</h4>
                    <p className="text-wine text-sm mt-0.5">{formatBRL(item.product.priceBRL)}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 rounded border border-border flex items-center justify-center text-muted hover:border-wine hover:text-wine transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-ink text-sm w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 rounded border border-border flex items-center justify-center text-muted hover:border-wine hover:text-wine transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.product.id)} className="text-muted/40 hover:text-destructive self-start">
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Subtotal</span>
                <span className="text-ink font-medium">{formatBRL(total())}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">Com Pix (5% OFF)</span>
                <span className="text-wine font-medium">{formatPixPrice(total())}</span>
              </div>
              <Link href="/checkout" onClick={() => setCartOpen(false)}>
                <Button className="w-full bg-champagne text-ink hover:bg-champagne/90 font-medium tracking-wide mt-2">
                  Finalizar Compra
                </Button>
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
