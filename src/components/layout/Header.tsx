"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";

const collections = [
  { name: "Para Casais", href: "/colecoes/casais" },
  { name: "Para Ela", href: "/colecoes/ela" },
  { name: "Para Ele", href: "/colecoes/ele" },
  { name: "Iniciantes", href: "/colecoes/iniciantes" },
  { name: "Bem-Estar", href: "/colecoes/bem-estar" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, itemCount } = useCartStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-cream"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-ink/70 hover:text-ink"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link href="/" className="group">
              <h1 className="font-[family-name:var(--font-heading)] text-xl lg:text-2xl font-semibold tracking-[0.06em] text-ink group-hover:text-wine transition-colors">
                NÍVEL SECRETO
              </h1>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {collections.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] text-muted hover:text-wine transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-wine group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Cart */}
            <button
              onClick={() => toggleCart()}
              className="relative p-2 text-ink/70 hover:text-wine transition-colors"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {itemCount() > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-champagne text-ink text-[10px] font-semibold rounded-full flex items-center justify-center"
                >
                  {itemCount()}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 z-30 bg-cream border-b border-border shadow-lg p-6 lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {collections.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-[family-name:var(--font-heading)] text-xl text-ink hover:text-wine transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-[1px] bg-border my-2" />
              <Link href="/sobre" onClick={() => setMobileOpen(false)} className="text-sm text-muted hover:text-wine">
                Nossa História
              </Link>
              <Link href="/faq" onClick={() => setMobileOpen(false)} className="text-sm text-muted hover:text-wine">
                Perguntas Frequentes
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
