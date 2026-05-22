"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Package } from "lucide-react";
import { useEffect } from "react";
import { useCartStore } from "@/lib/cart-store";

export default function SuccessPage() {
  const clearCart = useCartStore((s) => s.clearCart);
  useEffect(() => { clearCart(); }, [clearCart]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
          <CheckCircle size={56} className="text-wine mx-auto mb-5" strokeWidth={1} />
        </motion.div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl text-ink mb-3">Pedido Confirmado!</h1>
        <p className="text-muted text-sm leading-relaxed mb-3">Seu pedido foi realizado com sucesso. Você receberá um e-mail com os detalhes e o código de rastreio.</p>
        <div className="bg-mist rounded-lg p-4 mb-6 text-sm text-muted flex items-start gap-2">
          <Package size={16} className="text-wine flex-shrink-0 mt-0.5" />
          <span>Sua encomenda será enviada em embalagem totalmente neutra, sem qualquer identificação do conteúdo.</span>
        </div>
        <Link href="/" className="inline-block px-6 py-2.5 bg-champagne text-ink text-sm font-medium rounded hover:bg-champagne/85 transition-colors">
          Voltar à Loja
        </Link>
      </motion.div>
    </div>
  );
}
