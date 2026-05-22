"use client";

import { motion } from "framer-motion";
import { Shield, Truck, Lock, HeartHandshake } from "lucide-react";

const props = [
  {
    icon: Truck,
    title: "Entrega Discreta",
    description: "Embalagem sem identificação do conteúdo. Sua privacidade garantida.",
  },
  {
    icon: Shield,
    title: "Pagamento Seguro",
    description: "Criptografia SSL e diversas formas de pagamento disponíveis.",
  },
  {
    icon: Lock,
    title: "Privacidade Total",
    description: "Seus dados protegidos. Na fatura aparece nome discreto.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Sigiloso",
    description: "Suporte profissional e discreto para todas as suas dúvidas.",
  },
];

export function ValueProps() {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {props.map((prop, i) => (
          <motion.div
            key={prop.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center group"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/20 mb-5 group-hover:border-gold/50 transition-colors duration-500">
              <prop.icon size={24} strokeWidth={1.5} className="text-gold" />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg text-cream mb-2">
              {prop.title}
            </h3>
            <p className="text-cream-muted text-sm leading-relaxed">
              {prop.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
