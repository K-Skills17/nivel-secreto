import type { Metadata } from "next";
import { FAQClient } from "./FAQClient";

export const metadata: Metadata = { title: "Perguntas Frequentes", description: "Respostas para as dúvidas mais comuns sobre entrega, pagamento, privacidade e trocas." };

export default function FAQPage() { return <FAQClient />; }
