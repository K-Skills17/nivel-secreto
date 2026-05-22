"use client";

import { motion } from "framer-motion";
import { useCartStore } from "@/lib/cart-store";
import { formatBRL, formatPixPrice } from "@/lib/format";
import { Minus, Plus, X, ShoppingBag, Package } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, freeShippingRemaining } = useCartStore();

  const remaining = freeShippingRemaining();
  const progress = Math.min(100, ((199 - remaining) / 199) * 100);
  const shipping = remaining <= 0 ? 0 : 14.90;

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
        <ShoppingBag size={48} strokeWidth={1} className="text-muted/20 mb-5" />
        <h1 className="font-[family-name:var(--font-heading)] text-2xl text-ink mb-3">Seu carrinho está vazio</h1>
        <Link href="/" className="px-6 py-2.5 bg-champagne text-ink text-sm font-medium rounded hover:bg-champagne/85 transition-colors">
          Explorar Produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-5 lg:px-8 py-10">
      <h1 className="font-[family-name:var(--font-heading)] text-3xl text-ink mb-8">Seu Carrinho</h1>

      {/* Free shipping bar */}
      <div className="mb-6">
        {remaining > 0 ? (
          <p className="text-sm text-muted mb-2">Faltam <span className="text-wine font-medium">{formatBRL(remaining)}</span> para frete grátis</p>
        ) : (
          <p className="text-sm text-wine font-medium mb-2">Parabéns! Você tem frete grátis</p>
        )}
        <div className="h-2 bg-mist rounded-full overflow-hidden">
          <div className="h-full bg-champagne rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Items */}
      <div className="space-y-4 mb-8">
        {items.map((item) => (
          <motion.div key={item.product.id} layout className="flex items-center gap-4 p-4 bg-white border border-border rounded-lg">
            <div className="w-20 h-20 bg-mist rounded flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-ink text-sm font-medium">{item.product.name}</h3>
              <p className="text-wine text-sm mt-0.5">{formatBRL(item.product.priceBRL)}</p>
              <div className="flex items-center gap-2 mt-2">
                <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 rounded border border-border flex items-center justify-center text-muted hover:border-wine hover:text-wine transition-colors"><Minus size={13} /></button>
                <span className="text-ink text-sm w-6 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 rounded border border-border flex items-center justify-center text-muted hover:border-wine hover:text-wine transition-colors"><Plus size={13} /></button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-ink font-medium text-sm">{formatBRL(item.product.priceBRL * item.quantity)}</p>
              <button onClick={() => removeItem(item.product.id)} className="text-muted/40 hover:text-destructive mt-1"><X size={15} /></button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white border border-border rounded-lg p-6">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm"><span className="text-muted">Subtotal</span><span className="text-ink">{formatBRL(total())}</span></div>
          <div className="flex justify-between text-sm"><span className="text-muted">Frete</span><span className="text-ink">{shipping === 0 ? "Grátis" : formatBRL(shipping)}</span></div>
        </div>
        <div className="border-t border-border pt-3 mb-4">
          <div className="flex justify-between text-base font-medium"><span className="text-ink">Total</span><span className="text-ink">{formatBRL(total() + shipping)}</span></div>
          <div className="flex justify-between text-sm mt-1"><span className="text-wine">No Pix (5% OFF)</span><span className="text-wine font-medium">{formatPixPrice(total() + shipping)}</span></div>
        </div>
        <div className="bg-mist rounded p-3 text-xs text-muted flex items-start gap-2 mb-4">
          <Package size={13} className="text-wine flex-shrink-0 mt-0.5" />
          <span>Embalagem 100% discreta. Na fatura, aparece nome genérico.</span>
        </div>
        <Link href="/checkout" className="block w-full py-3.5 bg-champagne text-ink text-center text-[13px] font-medium tracking-wide rounded hover:bg-champagne/85 transition-colors">
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
}
