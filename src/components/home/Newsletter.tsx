"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-28 lg:py-36 px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-12 h-[1px] bg-gold mx-auto mb-8"
        />

        <span className="text-gold text-[11px] tracking-[0.3em] uppercase">
          Exclusivo
        </span>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-cream mt-5 mb-4">
          Acesso Antecipado
        </h2>
        <p className="text-cream-muted/50 text-sm leading-[1.8] mb-12 max-w-md mx-auto">
          Receba lançamentos e ofertas exclusivas antes de todos.
          Cadastro discreto e sem spam.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="w-10 h-[1px] bg-gold mx-auto" />
            <p className="text-gold text-sm tracking-wide">
              Cadastro realizado com sucesso.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="flex-1 px-6 py-4 bg-surface border border-surface-border rounded-sm text-cream text-sm placeholder:text-cream-muted/30 focus:outline-none focus:border-gold/40 transition-colors duration-500"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gold text-background text-[11px] font-medium tracking-[0.2em] uppercase rounded-sm hover:bg-gold-light transition-colors duration-500"
            >
              Inscrever
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
