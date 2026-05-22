"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useCartStore } from "@/lib/store";

export default function SuccessPage() {
  const clearCart = useCartStore((s) => s.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          <CheckCircle size={64} className="text-gold mx-auto mb-6" strokeWidth={1} />
        </motion.div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl text-cream mb-4">
          Pedido Confirmado!
        </h1>
        <p className="text-cream-muted mb-8 leading-relaxed">
          Seu pedido foi realizado com sucesso. Você receberá um e-mail com os detalhes e código de rastreio.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-gold text-background text-sm font-semibold tracking-wider uppercase rounded hover:bg-gold-light transition-colors"
        >
          Voltar à Loja
        </Link>
      </motion.div>
    </div>
  );
}
