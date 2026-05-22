"use client";

import { motion } from "framer-motion";
import { Shield, Truck, Lock, HeartHandshake } from "lucide-react";

const props = [
  {
    icon: Truck,
    title: "Entrega Discreta",
    description: "Embalagem neutra, sem identificação do conteúdo.",
  },
  {
    icon: Shield,
    title: "Pagamento Seguro",
    description: "Criptografia SSL. Na fatura, nome discreto.",
  },
  {
    icon: Lock,
    title: "Privacidade Garantida",
    description: "Seus dados protegidos com os mais altos padrões.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Reservado",
    description: "Suporte profissional e totalmente sigiloso.",
  },
];

export function ValueProps() {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {props.map((prop, i) => (
          <motion.div
            key={prop.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <prop.icon size={22} strokeWidth={1} className="text-gold/70 mx-auto mb-4" />
            <h3 className="font-[family-name:var(--font-heading)] text-base text-cream mb-2">
              {prop.title}
            </h3>
            <p className="text-cream-muted/40 text-xs leading-relaxed">
              {prop.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
