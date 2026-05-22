import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { AgeGate } from "@/components/layout/AgeGate";
import { CartDrawer } from "@/components/commerce/CartDrawer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nivelsecreto.com.br"),
  title: {
    default: "Nível Secreto | Intimidade com Sofisticação",
    template: "%s | Nível Secreto",
  },
  description:
    "Produtos íntimos premium para casais. Entrega 100% discreta, pagamento seguro e atendimento sigiloso. Redescubra a intimidade.",
  keywords: ["produtos íntimos", "casais", "intimidade", "loja íntima", "entrega discreta", "bem-estar íntimo"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nivelsecreto.com.br",
    siteName: "Nível Secreto",
    title: "Nível Secreto | Intimidade com Sofisticação",
    description: "Produtos íntimos premium para casais. Entrega 100% discreta.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <AgeGate />
        <AnnouncementBar />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CartDrawer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
