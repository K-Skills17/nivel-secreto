"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { XCircle } from "lucide-react";

export default function FailurePage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
        <XCircle size={56} className="text-destructive mx-auto mb-5" strokeWidth={1} />
        <h1 className="font-[family-name:var(--font-heading)] text-3xl text-ink mb-3">Pagamento não Aprovado</h1>
        <p className="text-muted text-sm leading-relaxed mb-6">Houve um problema com o pagamento. Tente novamente ou utilize outro método.</p>
        <Link href="/checkout" className="inline-block px-6 py-2.5 bg-champagne text-ink text-sm font-medium rounded hover:bg-champagne/85 transition-colors">
          Tentar Novamente
        </Link>
      </motion.div>
    </div>
  );
}
