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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="text-gold text-xs tracking-[0.3em] uppercase">
          Exclusivo
        </span>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream mt-4 mb-4">
          Receba Ofertas Secretas
        </h2>
        <p className="text-cream-muted mb-8">
          Cadastre-se e receba promoções exclusivas e lançamentos em primeira mão.
        </p>

        {submitted ? (
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-gold text-lg"
          >
            Bem-vindo(a) ao clube secreto!
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="flex-1 px-5 py-3.5 bg-surface border border-surface-border rounded text-cream placeholder:text-cream-muted/40 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-gold text-background text-sm font-semibold tracking-wider uppercase rounded hover:bg-gold-light transition-colors duration-300"
            >
              Inscrever
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
