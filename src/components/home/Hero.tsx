"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Subtle texture line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-cream-muted/[0.07] to-transparent"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-cream-muted/50 text-xs tracking-[0.4em] uppercase mb-10"
        >
          Para quem valoriza intimidade
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-cream leading-[1.05] tracking-tight"
        >
          Eleve a sua
          <br />
          <span className="italic text-gold">experiência</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-cream-muted/60 text-base md:text-lg max-w-lg mx-auto leading-relaxed mt-8 mb-12"
        >
          Produtos criteriosamente selecionados para casais que buscam
          qualidade, discrição e sofisticação.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#categorias"
            className="px-12 py-4 bg-gold text-background text-xs font-medium tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-500"
          >
            Explorar
          </Link>
          <Link
            href="/categoria/vibradores"
            className="px-12 py-4 text-cream-muted/50 text-xs tracking-[0.2em] uppercase hover:text-gold transition-colors duration-500"
          >
            Ver Coleção
          </Link>
        </motion.div>

        {/* Minimal trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 flex items-center justify-center gap-6 text-cream-muted/25 text-[10px] tracking-[0.3em] uppercase"
        >
          <span>Entrega Discreta</span>
          <span className="w-[3px] h-[3px] rounded-full bg-cream-muted/15" />
          <span>Pagamento Seguro</span>
          <span className="w-[3px] h-[3px] rounded-full bg-cream-muted/15" />
          <span>Privacidade Total</span>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-cream-muted/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
