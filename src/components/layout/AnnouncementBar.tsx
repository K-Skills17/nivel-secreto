"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      className="bg-wine text-cream text-[12px] tracking-wide py-2.5 px-4 relative"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-center">
        <span>Entrega 100% discreta</span>
        <span className="w-1 h-1 rounded-full bg-cream/30" />
        <span>Pagamento seguro</span>
        <span className="w-1 h-1 rounded-full bg-cream/30" />
        <span className="font-medium">Pix com 5% OFF</span>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream transition-colors"
      >
        <X size={14} />
      </button>
    </motion.div>
  );
}
