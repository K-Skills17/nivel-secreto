"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useCartStore } from "@/lib/cart-store";
import { formatBRL, formatPixPrice } from "@/lib/format";
import { ShoppingBag, CreditCard, Shield, Package } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, total, pixTotal, clearCart, freeShippingRemaining } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", cpf: "", phone: "",
    cep: "", address: "", number: "", complement: "", neighborhood: "", city: "", state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCepBlur = async () => {
    const cep = form.cep.replace(/\D/g, "");
    if (cep.length !== 8) return;
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();
      if (!data.erro) {
        setForm((f) => ({
          ...f,
          address: data.logradouro || f.address,
          neighborhood: data.bairro || f.neighborhood,
          city: data.localidade || f.city,
          state: data.uf || f.state,
        }));
      }
    } catch {}
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/checkout/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({ id: i.product.id, quantity: i.quantity })),
          payer: { name: form.name, email: form.email, cpf: form.cpf, phone: form.phone },
          shipping: { cep: form.cep, address: form.address, number: form.number, complement: form.complement, neighborhood: form.neighborhood, city: form.city, state: form.state },
        }),
      });
      const data = await res.json();
      if (data.init_point) {
        window.location.href = data.init_point;
      }
    } catch (err) {
      console.error("Checkout error:", err);
    } finally {
      setLoading(false);
    }
  };

  const shipping = freeShippingRemaining() <= 0 ? 0 : 14.90;
  const grandTotal = total() + shipping;

  const states = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];

  const inputClass = "w-full px-4 py-3 bg-white border border-border rounded text-ink text-sm placeholder:text-muted/40 focus:outline-none focus:border-champagne/60 focus:ring-1 focus:ring-champagne/20 transition-all";

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
        <ShoppingBag size={48} strokeWidth={1} className="text-muted/20 mb-5" />
        <h1 className="font-[family-name:var(--font-heading)] text-2xl text-ink mb-3">Carrinho vazio</h1>
        <p className="text-muted text-sm mb-6">Adicione produtos para continuar.</p>
        <Link href="/" className="px-6 py-2.5 bg-champagne text-ink text-sm font-medium rounded hover:bg-champagne/85 transition-colors">
          Explorar Produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-8 py-10">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-[family-name:var(--font-heading)] text-3xl text-ink text-center mb-10">
        Finalizar Compra
      </motion.h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h2 className="font-[family-name:var(--font-heading)] text-xl text-ink mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-wine text-cream text-xs flex items-center justify-center">1</span>
                Dados Pessoais
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input name="name" placeholder="Nome completo" value={form.name} onChange={handleChange} required className={inputClass} />
                <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleChange} required className={inputClass} />
                <input name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} required className={inputClass} />
                <input name="phone" placeholder="Telefone com DDD" value={form.phone} onChange={handleChange} required className={inputClass} />
              </div>
            </motion.div>

            {/* Address */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="font-[family-name:var(--font-heading)] text-xl text-ink mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-wine text-cream text-xs flex items-center justify-center">2</span>
                Endereço de Entrega
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input name="cep" placeholder="CEP" value={form.cep} onChange={handleChange} onBlur={handleCepBlur} required className={inputClass} />
                <div className="hidden sm:block" />
                <input name="address" placeholder="Endereço" value={form.address} onChange={handleChange} required className={`${inputClass} sm:col-span-2`} />
                <input name="number" placeholder="Número" value={form.number} onChange={handleChange} required className={inputClass} />
                <input name="complement" placeholder="Complemento" value={form.complement} onChange={handleChange} className={inputClass} />
                <input name="neighborhood" placeholder="Bairro" value={form.neighborhood} onChange={handleChange} required className={inputClass} />
                <input name="city" placeholder="Cidade" value={form.city} onChange={handleChange} required className={inputClass} />
                <select name="state" value={form.state} onChange={handleChange} required className={inputClass}>
                  <option value="">Estado</option>
                  {states.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </motion.div>
          </div>

          {/* Summary */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="bg-white border border-border rounded-lg p-6 sticky top-28">
              <h2 className="font-[family-name:var(--font-heading)] text-xl text-ink mb-5">Resumo</h2>

              <div className="space-y-3 mb-5">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <div className="flex-1 min-w-0">
                      <p className="text-ink truncate">{item.product.name}</p>
                      <p className="text-muted text-xs">Qtd: {item.quantity}</p>
                    </div>
                    <span className="text-ink ml-3">{formatBRL(item.product.priceBRL * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-2 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="text-ink">{formatBRL(total())}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Frete</span>
                  <span className="text-ink">{shipping === 0 ? "Grátis" : formatBRL(shipping)}</span>
                </div>
                <div className="flex justify-between text-sm font-medium pt-2 border-t border-border">
                  <span className="text-ink">Total</span>
                  <span className="text-ink">{formatBRL(grandTotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-wine">No Pix (5% OFF)</span>
                  <span className="text-wine font-medium">{formatPixPrice(grandTotal)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-champagne text-ink text-[13px] font-medium tracking-wide rounded hover:bg-champagne/85 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? "Processando..." : <><CreditCard size={16} /> Pagar com Mercado Pago</>}
              </button>

              <div className="flex items-center justify-center gap-1.5 mt-3 text-muted text-[11px]">
                <Shield size={11} /> Pagamento 100% seguro
              </div>

              <div className="mt-4 p-3 bg-mist rounded text-[11px] text-muted leading-relaxed">
                <Package size={12} className="inline mr-1" />
                Sua compra será enviada em embalagem neutra, sem qualquer identificação do conteúdo.
              </div>
            </div>
          </motion.div>
        </div>
      </form>
    </div>
  );
}
