"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://nivelsecreto.com.br/wp-content/uploads/elementor/thumbs/gwen-mamanoleas-ZwKAJ0zmk6Y-unsplash-scaled-r5rluv7n72gbjjzyiaveac261fcecy6svqnubggoqs.jpg"
          alt="Nível Secreto"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gold text-[11px] tracking-[0.4em] uppercase mb-8"
        >
          Para quem valoriza intimidade
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl font-light text-cream leading-[1.05]"
        >
          Eleve a sua
          <br />
          <span className="italic text-gold font-normal">experiência</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-cream/60 text-base max-w-md mx-auto leading-relaxed mt-6 mb-10"
        >
          Produtos criteriosamente selecionados para casais que buscam
          qualidade, discrição e sofisticação.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-6"
        >
          <Link
            href="#categorias"
            className="px-10 py-3.5 bg-gold text-background text-xs font-medium tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-500"
          >
            Explorar
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
