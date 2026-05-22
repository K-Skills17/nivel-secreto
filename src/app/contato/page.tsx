import type { Metadata } from "next";
export const metadata: Metadata = { title: "Contato" };

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 lg:px-8 py-14">
      <div className="text-center mb-10">
        <p className="text-wine text-[12px] tracking-[0.3em] uppercase mb-3">Fale Conosco</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-ink">Contato</h1>
      </div>
      <div className="bg-white border border-border rounded-lg p-8 text-center">
        <p className="text-muted text-sm leading-relaxed mb-6">Nosso atendimento é profissional e 100% sigiloso. Estamos aqui para ajudar com qualquer dúvida.</p>
        <div className="space-y-3 text-sm text-ink">
          <p><strong>E-mail:</strong> contato@nivelsecreto.com.br</p>
          <p><strong>WhatsApp:</strong> (00) 00000-0000</p>
          <p><strong>Horário:</strong> Segunda a sexta, 9h às 18h</p>
        </div>
        <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-6 py-2.5 bg-[#25D366] text-white text-sm font-medium rounded hover:bg-[#25D366]/90 transition-colors">
          Falar pelo WhatsApp
        </a>
      </div>
    </div>
  );
}
