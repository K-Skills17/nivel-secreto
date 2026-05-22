"use client";

const categoryAccents: Record<string, string> = {
  vibradores: "from-gold/5 to-transparent",
  masturbadores: "from-gold/5 to-transparent",
  "plug-anal": "from-gold/5 to-transparent",
  "fetiche-e-sado": "from-gold/5 to-transparent",
  acessorios: "from-gold/5 to-transparent",
  proteses: "from-gold/5 to-transparent",
};

interface ProductImageProps {
  categorySlug: string;
  productName: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ProductImage({ categorySlug, productName, size = "md", className = "" }: ProductImageProps) {
  const accent = categoryAccents[categorySlug] || "from-gold/5 to-transparent";
  const initial = productName.charAt(0).toUpperCase();

  return (
    <div className={`relative w-full h-full bg-surface flex items-center justify-center overflow-hidden ${className}`}>
      {/* Subtle radial gradient */}
      <div className={`absolute inset-0 bg-radial-[at_50%_50%] ${accent} opacity-60`} />

      {/* Minimal monogram */}
      <span className={`font-[family-name:var(--font-heading)] text-cream-muted/[0.06] select-none ${
        size === "lg" ? "text-[10rem]" : size === "md" ? "text-[6rem]" : "text-[3rem]"
      }`}>
        {initial}
      </span>

      {/* Single subtle border line */}
      <div className="absolute inset-4 border border-cream-muted/[0.04] rounded-sm" />
    </div>
  );
}
