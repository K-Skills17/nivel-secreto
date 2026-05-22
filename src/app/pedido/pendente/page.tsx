"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock } from "lucide-react";

export default function PendingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <Clock size={64} className="text-gold mx-auto mb-6" strokeWidth={1} />
        <h1 className="font-[family-name:var(--font-heading)] text-4xl text-cream mb-4">
          Pagamento Pendente
        </h1>
        <p className="text-cream-muted mb-8 leading-relaxed">
          Seu pagamento está sendo processado. Assim que confirmado, enviaremos um e-mail com os detalhes do pedido.
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
