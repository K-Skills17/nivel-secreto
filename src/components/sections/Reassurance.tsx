"use client";

import { motion } from "framer-motion";
import { Package, Eye, Truck } from "lucide-react";

export function Reassurance() {
  return (
    <section className="py-20 lg:py-28 px-5 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-ink mb-4"
        >
          Sua privacidade, nossa prioridade
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted text-base max-w-xl mx-auto leading-[1.8] mb-14"
        >
          Sabemos que a discrição é fundamental. Por isso, cuidamos de cada detalhe para que sua experiência de compra seja absolutamente privada.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Package, title: "Embalagem Neutra", desc: "Caixa parda sem marcas, logotipos ou qualquer referência ao conteúdo. Ninguém saberá." },
            { icon: Eye, title: "Fatura Discreta", desc: "Na fatura do cartão aparece um nome genérico. Sem constrangimentos." },
            { icon: Truck, title: "Entrega Segura", desc: "Rastreio disponível. Entregamos em todo o Brasil com transportadoras confiáveis." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-mist mb-4">
                <item.icon size={20} strokeWidth={1.5} className="text-wine" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg text-ink mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-[1.7]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
