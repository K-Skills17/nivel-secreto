"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AgeGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const verified = document.cookie.includes("age_verified=true");
    if (!verified) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleConfirm = () => {
    document.cookie = "age_verified=true; max-age=2592000; path=/"; // 30 days
    document.body.style.overflow = "";
    setShow(false);
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-sm px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-sm w-full bg-cream rounded-lg p-8 text-center"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-ink mb-2">
              Nível Secreto
            </h2>
            <div className="w-10 h-[1px] bg-champagne mx-auto my-4" />
            <p className="text-ink/80 text-sm leading-relaxed mb-2">
              Confirmação de Idade
            </p>
            <p className="text-muted text-sm leading-relaxed mb-8">
              Este site é destinado exclusivamente a maiores de 18 anos. Ao prosseguir, você confirma ter idade legal.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={handleConfirm}
                className="w-full py-3 bg-champagne text-ink text-sm font-medium tracking-wide rounded hover:bg-champagne/90 transition-colors"
              >
                Confirmo ter 18 anos ou mais
              </button>
              <button
                onClick={handleDeny}
                className="w-full py-3 border border-border text-muted text-sm rounded hover:border-muted transition-colors"
              >
                Sair
              </button>
            </div>
            <p className="text-muted/60 text-[11px] mt-6">
              Ao prosseguir, você concorda com nossos Termos de Uso e Política de Privacidade.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
