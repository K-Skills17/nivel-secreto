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
    <section className="py-32 lg:py-40 px-6 lg:px-8 bg-surface">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-12 h-[1px] bg-gold mx-auto mb-8"
        />

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-gold text-[11px] tracking-[0.3em] uppercase"
        >
          Exclusivo
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream mt-5 mb-4"
        >
          Acesso Antecipado
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-cream-muted/50 text-sm leading-[1.8] mb-10"
        >
          Receba lançamentos e ofertas exclusivas antes de todos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {submitted ? (
            <div className="space-y-3">
              <div className="w-10 h-[1px] bg-gold mx-auto" />
              <p className="text-gold text-sm tracking-wide">
                Cadastro realizado com sucesso.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="w-full sm:w-auto sm:min-w-[280px] px-6 py-3.5 bg-background border border-surface-border rounded-sm text-cream text-sm placeholder:text-cream-muted/30 focus:outline-none focus:border-gold/40 transition-colors duration-500 text-center sm:text-left"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-gold text-background text-[11px] font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-gold-light transition-colors duration-500"
              >
                Inscrever
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
