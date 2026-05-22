"use client";

import { motion } from "framer-motion";
import { Package, Shield, CreditCard, Heart } from "lucide-react";

const trust = [
  { icon: Package, label: "Embalagem 100% discreta" },
  { icon: CreditCard, label: "Nome discreto na fatura" },
  { icon: Shield, label: "Pagamento seguro (Mercado Pago)" },
  { icon: Heart, label: "Satisfação garantida" },
];

export function TrustBand() {
  return (
    <section className="py-8 border-y border-border bg-cream">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trust.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <t.icon size={18} strokeWidth={1.5} className="text-wine flex-shrink-0" />
              <span className="text-ink/70 text-[13px] leading-tight">{t.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
