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
  const isPlaceholder = !src || (!isRemote && !src.startsWith("/products/real-"));

  if (isRemote) {
    return (
      <div className={`relative w-full h-full bg-surface overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={productName}
          fill
          sizes={size === "lg" ? "50vw" : size === "md" ? "25vw" : "80px"}
          className="object-cover"
        />
      </div>
    );
  }

  // Minimal placeholder for products without photos
  const initial = productName.charAt(0).toUpperCase();

  return (
    <div className={`relative w-full h-full bg-surface-light flex items-center justify-center overflow-hidden ${className}`}>
      <span className={`font-[family-name:var(--font-heading)] text-cream-muted/[0.08] select-none ${
        size === "lg" ? "text-[10rem]" : size === "md" ? "text-[6rem]" : "text-[3rem]"
      }`}>
        {initial}
      </span>
      <div className="absolute inset-4 border border-cream-muted/[0.04]" />
    </div>
  );
}
