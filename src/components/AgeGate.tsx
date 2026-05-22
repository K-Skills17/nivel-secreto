"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AGE_GATE_KEY = "nivel-secreto-age-verified";

export function AgeGate() {
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem(AGE_GATE_KEY);
    if (!verified) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem(AGE_GATE_KEY, "true");
    document.body.style.overflow = "";
    setExiting(true);
    setTimeout(() => setShow(false), 500);
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com";
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md w-full text-center"
          >
            {/* Logo */}
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold tracking-wider text-[#f5f0eb] mb-3">
              NÍVEL SECRETO
            </h1>

            {/* Divider */}
            <div className="w-16 h-[1px] bg-[#c9a96e]/40 mx-auto mb-8" />

            {/* Message */}
            <p className="text-[#f5f0eb] text-lg mb-2 font-[family-name:var(--font-heading)]">
              Confirmação de Idade
            </p>
            <p className="text-[#a89f95] text-sm leading-relaxed mb-10">
              Este site é destinado exclusivamente a maiores de 18 anos. Ao prosseguir, você confirma ter idade legal para acessar este conteúdo.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleConfirm}
                className="w-full sm:w-auto px-10 py-3.5 bg-[#c9a96e] text-[#0a0a0a] text-sm font-semibold tracking-[0.15em] uppercase rounded hover:bg-[#d4b97e] transition-colors duration-300"
              >
                Confirmo ter 18 anos ou mais
              </button>
              <button
                onClick={handleDeny}
                className="w-full sm:w-auto px-10 py-3.5 border border-[#2a2a2a] text-[#a89f95] text-sm tracking-[0.15em] uppercase rounded hover:border-[#a89f95] hover:text-[#f5f0eb] transition-colors duration-300"
              >
                Sair
              </button>
            </div>

            {/* Legal note */}
            <p className="text-[#a89f95]/40 text-xs mt-8">
              Ao prosseguir, você concorda com nossos Termos de Uso e Política de Privacidade.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
