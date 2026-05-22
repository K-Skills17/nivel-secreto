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
    <section className="py-24 px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <span className="text-gold text-xs tracking-[0.3em] uppercase">
          Exclusivo
        </span>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream mt-4 mb-3">
          Acesso Antecipado
        </h2>
        <p className="text-cream-muted/50 text-sm mb-10 leading-relaxed">
          Receba lançamentos e ofertas exclusivas antes de todos.
        </p>

        {submitted ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold text-sm tracking-wide"
          >
            Cadastro realizado com sucesso.
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail"
              required
              className="flex-1 px-5 py-3.5 bg-transparent border border-surface-border text-cream text-sm placeholder:text-cream-muted/30 focus:outline-none focus:border-gold/40 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-gold text-background text-xs font-medium tracking-[0.15em] uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Inscrever
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
