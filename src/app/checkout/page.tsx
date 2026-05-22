"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import { ShoppingBag, CreditCard, Lock } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    cep: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            id: i.product.id,
            title: i.product.name,
            quantity: i.quantity,
            unit_price: i.product.price,
          })),
          payer: {
            name: form.name,
            email: form.email,
            identification: { type: "CPF", number: form.cpf },
          },
          shipping: {
            address: form.address,
            number: form.number,
            complement: form.complement,
            neighborhood: form.neighborhood,
            city: form.city,
            state: form.state,
            cep: form.cep,
          },
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

  if (items.length === 0) {
    return (
      <div className="pt-28 pb-20 px-6 text-center min-h-screen flex flex-col items-center justify-center">
        <ShoppingBag size={64} strokeWidth={1} className="text-cream-muted/20 mb-6" />
        <h1 className="font-[family-name:var(--font-heading)] text-3xl text-cream mb-4">
          Carrinho Vazio
        </h1>
        <p className="text-cream-muted mb-8">Adicione produtos para continuar.</p>
        <Link
          href="/"
          className="px-8 py-3 bg-gold text-background text-sm font-semibold tracking-wider uppercase rounded hover:bg-gold-light transition-colors"
        >
          Explorar Produtos
        </Link>
      </div>
    );
  }

  const states = [
    "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG",
    "PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
  ];

  const inputClass =
    "w-full px-4 py-3 bg-surface border border-surface-border rounded text-cream placeholder:text-cream-muted/30 focus:outline-none focus:border-gold/50 transition-colors text-sm";

  return (
    <div className="pt-28 pb-20 px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="font-[family-name:var(--font-heading)] text-4xl text-cream">
          Finalizar Compra
        </h1>
      </motion.div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form fields */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Personal */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl text-cream mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full border border-gold/30 flex items-center justify-center text-gold text-xs">
                  1
                </span>
                Dados Pessoais
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" placeholder="Nome completo" value={form.name} onChange={handleChange} required className={inputClass} />
                <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleChange} required className={inputClass} />
                <input name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} required className={inputClass} />
                <input name="phone" placeholder="Telefone" value={form.phone} onChange={handleChange} required className={inputClass} />
              </div>
            </div>

            {/* Address */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-xl text-cream mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full border border-gold/30 flex items-center justify-center text-gold text-xs">
                  2
                </span>
                Endereço de Entrega
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="cep" placeholder="CEP" value={form.cep} onChange={handleChange} required className={inputClass} />
                <div className="hidden sm:block" />
                <input name="address" placeholder="Endereço" value={form.address} onChange={handleChange} required className={`${inputClass} sm:col-span-2`} />
                <input name="number" placeholder="Número" value={form.number} onChange={handleChange} required className={inputClass} />
                <input name="complement" placeholder="Complemento" value={form.complement} onChange={handleChange} className={inputClass} />
                <input name="neighborhood" placeholder="Bairro" value={form.neighborhood} onChange={handleChange} required className={inputClass} />
                <input name="city" placeholder="Cidade" value={form.city} onChange={handleChange} required className={inputClass} />
                <select name="state" value={form.state} onChange={handleChange} required className={inputClass}>
                  <option value="">Estado</option>
                  {states.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Order summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-surface border border-surface-border rounded-lg p-6 sticky top-28">
              <h2 className="font-[family-name:var(--font-heading)] text-xl text-cream mb-5">
                Resumo do Pedido
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-cream text-sm truncate">{item.product.name}</p>
                      <p className="text-cream-muted text-xs">Qtd: {item.quantity}</p>
                    </div>
                    <span className="text-cream-muted text-sm whitespace-nowrap">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-surface-border pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-cream-muted">Total</span>
                  <span className="font-[family-name:var(--font-heading)] text-2xl text-gold">
                    {formatPrice(total())}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-background font-semibold text-sm tracking-wider uppercase rounded hover:bg-gold-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="animate-pulse">Processando...</span>
                ) : (
                  <>
                    <CreditCard size={18} />
                    Pagar com MercadoPago
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-cream-muted/40 text-xs">
                <Lock size={12} />
                Pagamento 100% seguro
              </div>
            </div>
          </motion.div>
        </div>
      </form>
    </div>
  );
}
