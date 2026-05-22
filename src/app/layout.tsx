import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { AgeGate } from "@/components/AgeGate";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nivelsecreto.com.br"),
  title: {
    default: "Nível Secreto | Seu Prazer em Outro Nível",
    template: "%s | Nível Secreto",
  },
  description:
    "Loja premium de produtos adultos. Vibradores, masturbadores, acessórios e mais com entrega 100% discreta em todo Brasil. Pagamento seguro.",
  keywords: [
    "sex shop online",
    "produtos adultos",
    "vibrador",
    "sex shop brasil",
    "loja adulta",
    "produtos eróticos",
    "entrega discreta",
    "sex shop premium",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nivelsecreto.com.br",
    siteName: "Nível Secreto",
    title: "Nível Secreto | Seu Prazer em Outro Nível",
    description:
      "Loja premium de produtos adultos com entrega 100% discreta em todo Brasil.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nível Secreto | Seu Prazer em Outro Nível",
    description:
      "Loja premium de produtos adultos com entrega 100% discreta em todo Brasil.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-background text-cream antialiased">
        <AgeGate />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
