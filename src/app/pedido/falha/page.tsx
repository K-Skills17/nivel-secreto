"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { XCircle } from "lucide-react";

export default function FailurePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <XCircle size={64} className="text-danger mx-auto mb-6" strokeWidth={1} />
        <h1 className="font-[family-name:var(--font-heading)] text-4xl text-cream mb-4">
          Pagamento não Aprovado
        </h1>
        <p className="text-cream-muted mb-8 leading-relaxed">
          Houve um problema com o pagamento. Tente novamente ou utilize outro método de pagamento.
        </p>
        <Link
          href="/checkout"
          className="inline-block px-8 py-3 bg-gold text-background text-sm font-semibold tracking-wider uppercase rounded hover:bg-gold-light transition-colors"
        >
          Tentar Novamente
        </Link>
      </motion.div>
    </div>
  );
}
