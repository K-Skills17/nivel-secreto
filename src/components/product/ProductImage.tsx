"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const categoryGradients: Record<string, string> = {
  vibradores: "from-purple-900/40 via-fuchsia-900/20 to-background",
  masturbadores: "from-blue-900/40 via-indigo-900/20 to-background",
  "plug-anal": "from-violet-900/40 via-purple-900/20 to-background",
  "fetiche-e-sado": "from-red-900/40 via-rose-900/20 to-background",
  acessorios: "from-amber-900/40 via-orange-900/20 to-background",
  proteses: "from-teal-900/40 via-cyan-900/20 to-background",
};

const categoryIcons: Record<string, string> = {
  vibradores: "✨",
  masturbadores: "🔥",
  "plug-anal": "💎",
  "fetiche-e-sado": "⛓️",
  acessorios: "🌹",
  proteses: "👑",
};

interface ProductImageProps {
  categorySlug: string;
  productName: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ProductImage({ categorySlug, productName, size = "md", className = "" }: ProductImageProps) {
  const gradient = categoryGradients[categorySlug] || "from-surface to-surface-light";
  const icon = categoryIcons[categorySlug] || "✨";

  const iconSize = size === "lg" ? "text-7xl" : size === "md" ? "text-5xl" : "text-3xl";
  const nameSize = size === "lg" ? "text-sm" : "text-xs";

  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center overflow-hidden ${className}`}>
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Icon */}
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`${iconSize} mb-3 select-none`}
      >
        {icon}
      </motion.span>

      {/* Product name hint */}
      {size === "lg" && (
        <p className={`${nameSize} text-cream-muted/30 text-center px-4 max-w-[200px] truncate`}>
          {productName}
        </p>
      )}

      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/10" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/10" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/10" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/10" />
    </div>
  );
}
