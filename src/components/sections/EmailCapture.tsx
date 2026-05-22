"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  return (
    <section className="py-20 lg:py-28 px-5 lg:px-8 bg-wine text-cream">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream mb-3"
        >
          Receba um guia gratuito
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-cream/60 text-sm leading-[1.8] mb-8"
        >
          Cadastre-se e receba nosso guia &ldquo;Primeiros Passos na Intimidade&rdquo; + 10% de desconto na primeira compra.
        </motion.p>

        {submitted ? (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-champagne text-sm">
            Pronto! Verifique seu e-mail.
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail" required
              className="w-full sm:w-auto sm:min-w-[280px] px-5 py-3 bg-white/10 border border-cream/20 rounded text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-champagne/50 transition-colors"
            />
            <button type="submit" className="w-full sm:w-auto px-7 py-3 bg-champagne text-ink text-[13px] font-medium tracking-wide rounded hover:bg-champagne/85 transition-colors">
              Quero o guia
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
