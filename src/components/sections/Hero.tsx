"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 px-5 lg:px-8 overflow-hidden bg-mist">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-wine text-[12px] tracking-[0.3em] uppercase mb-6">
            Reconexão começa aqui
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-ink leading-[1.1]"
          >
            Redescubra a intimidade
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-1">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic text-wine font-normal leading-[1.1]"
          >
            com quem você ama
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-muted text-base md:text-lg max-w-xl mx-auto leading-[1.8] mt-8 mb-10"
        >
          Produtos criteriosamente selecionados para casais que buscam qualidade, discrição e momentos de verdadeira presença.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/colecoes/casais"
            className="px-8 py-3.5 bg-champagne text-ink text-[13px] font-medium tracking-wide rounded hover:bg-champagne/85 transition-colors"
          >
            Explorar Coleções
          </Link>
          <Link
            href="/colecoes/iniciantes"
            className="px-8 py-3.5 border border-ink/15 text-ink/70 text-[13px] tracking-wide rounded hover:border-wine hover:text-wine transition-colors"
          >
            Para Iniciantes
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
