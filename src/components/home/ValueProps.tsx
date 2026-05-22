"use client";

import { motion } from "framer-motion";
import { Shield, Truck, Lock, HeartHandshake } from "lucide-react";

const props = [
  {
    icon: Truck,
    title: "Entrega Discreta",
    description: "Embalagem neutra, sem identificação do conteúdo. Rastreio disponível.",
  },
  {
    icon: Shield,
    title: "Pagamento Seguro",
    description: "Criptografia SSL e nome discreto na fatura do cartão.",
  },
  {
    icon: Lock,
    title: "Privacidade Garantida",
    description: "Seus dados protegidos com os mais altos padrões de segurança.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Reservado",
    description: "Suporte profissional, totalmente sigiloso e acolhedor.",
  },
];

export function ValueProps() {
  return (
    <section className="py-28 lg:py-32 px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {props.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/20 mb-6 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-500">
                <prop.icon size={22} strokeWidth={1} className="text-gold" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg text-cream mb-2">
                {prop.title}
              </h3>
              <p className="text-cream-muted/50 text-sm leading-[1.7]">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
