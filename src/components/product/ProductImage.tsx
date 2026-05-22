"use client";

import Image from "next/image";

interface ProductImageProps {
  src?: string;
  productName: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ProductImage({ src, productName, size = "md", className = "" }: ProductImageProps) {
  const isRemote = src && (src.startsWith("http://") || src.startsWith("https://"));

  if (isRemote) {
    return (
      <div className={`relative w-full h-full bg-[#1a1820] overflow-hidden ${className}`}>
        {/* Dark vignette overlay to blend product into dark theme */}
        <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_60px_rgba(20,18,24,0.6)]" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#141218]/50 via-transparent to-[#141218]/30" />
        <Image
          src={src}
          alt={productName}
          fill
          sizes={size === "lg" ? "(max-width: 768px) 100vw, 50vw" : size === "md" ? "(max-width: 640px) 100vw, 25vw" : "80px"}
          className="object-contain p-4 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
        />
      </div>
    );
  }

  const initial = productName.charAt(0).toUpperCase();

  return (
    <div className={`relative w-full h-full bg-surface-light flex items-center justify-center overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent" />
      <span className={`font-[family-name:var(--font-heading)] text-cream-muted/[0.06] select-none ${
        size === "lg" ? "text-[10rem]" : size === "md" ? "text-[6rem]" : "text-[3rem]"
      }`}>
        {initial}
      </span>
    </div>
  );
}
