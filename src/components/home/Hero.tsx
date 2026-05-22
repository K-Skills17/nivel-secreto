"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface" />

      {/* Animated gold accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-gold text-xs tracking-[0.3em] uppercase font-medium border border-gold/20 px-6 py-2 rounded-full">
            Experiências Premium
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-cream mt-8 mb-6 leading-[1.1]"
        >
          Seu Prazer
          <br />
          <span className="text-gold font-medium italic">em Outro Nível</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-cream-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Descubra uma coleção cuidadosamente selecionada de produtos premium.
          Entrega 100% discreta em todo o Brasil.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/categoria/vibradores"
            className="group relative px-10 py-4 bg-gold text-background text-sm font-semibold tracking-[0.15em] uppercase rounded overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)]"
          >
            <span className="relative z-10">Explorar Agora</span>
            <div className="absolute inset-0 bg-gold-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <Link
            href="#categorias"
            className="px-10 py-4 border border-cream-muted/20 text-cream text-sm tracking-[0.15em] uppercase rounded hover:border-gold hover:text-gold transition-all duration-500"
          >
            Ver Categorias
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-8 md:gap-12 text-cream-muted/40 text-xs tracking-wider uppercase"
        >
          <span>Entrega Discreta</span>
          <span className="w-1 h-1 rounded-full bg-gold/30" />
          <span>Pagamento Seguro</span>
          <span className="w-1 h-1 rounded-full bg-gold/30" />
          <span>+18 anos</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
