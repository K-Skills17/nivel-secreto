import type { Metadata } from "next";
export const metadata: Metadata = { title: "Nossa História" };

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 lg:px-8 py-14">
      <div className="text-center mb-10">
        <p className="text-wine text-[12px] tracking-[0.3em] uppercase mb-3">Sobre Nós</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-ink">Nossa História</h1>
      </div>
      <div className="prose prose-neutral max-w-none text-ink/80 text-[15px] leading-[1.8]">
        <p>A Nível Secreto nasceu de uma conversa honesta entre dois amigos sobre como a intimidade muda ao longo dos anos — e como ela pode ser redescoberta.</p>
        <p>Percebemos que o mercado de produtos íntimos no Brasil ainda era dominado por ambientes constrangedores e linguagem vulgar. Queríamos criar algo diferente: uma experiência de compra que fosse tão acolhedora e sofisticada quanto uma loja de perfumes ou uma boutique de bem-estar.</p>
        <p>Cada produto é selecionado com cuidado, priorizando materiais seguros, design elegante e funcionalidade real. Cada detalhe — da embalagem neutra ao nome discreto na fatura — foi pensado para que você se sinta confortável em cada etapa.</p>
        <p>Acreditamos que a intimidade é uma parte essencial do bem-estar de qualquer casal. E que cuidar dela com carinho, respeito e um toque de sofisticação pode transformar relacionamentos.</p>
        <p className="text-wine font-medium">Bem-vindos ao Nível Secreto. Seu espaço de reconexão.</p>
      </div>
    </div>
  );
}
