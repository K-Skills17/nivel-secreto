"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Package } from "lucide-react";

export default function PendingPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
        <Clock size={56} className="text-champagne mx-auto mb-5" strokeWidth={1} />
        <h1 className="font-[family-name:var(--font-heading)] text-3xl text-ink mb-3">Pagamento Pendente</h1>
        <p className="text-muted text-sm leading-relaxed mb-3">Seu pagamento está sendo processado. Para pagamento via Pix, escaneie o QR Code gerado.</p>
        <div className="bg-mist rounded-lg p-4 mb-6 text-sm text-muted flex items-start gap-2">
          <Package size={16} className="text-wine flex-shrink-0 mt-0.5" />
          <span>Assim que confirmado, enviaremos um e-mail com os detalhes do pedido e rastreio.</span>
        </div>
        <Link href="/" className="inline-block px-6 py-2.5 bg-champagne text-ink text-sm font-medium rounded hover:bg-champagne/85 transition-colors">
          Voltar à Loja
        </Link>
      </motion.div>
    </div>
  );
}
