import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Status do Pedido",
  robots: { index: false, follow: false },
};

export default function PedidoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
