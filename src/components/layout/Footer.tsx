import Link from "next/link";

const collections = [
  { name: "Para Casais", href: "/colecoes/casais" },
  { name: "Para Ela", href: "/colecoes/ela" },
  { name: "Para Ele", href: "/colecoes/ele" },
  { name: "Iniciantes", href: "/colecoes/iniciantes" },
  { name: "Bem-Estar", href: "/colecoes/bem-estar" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold tracking-[0.06em] text-cream mb-4">
              NÍVEL SECRETO
            </h2>
            <p className="text-cream/40 text-sm leading-[1.7] max-w-xs">
              Produtos íntimos selecionados para casais que valorizam qualidade, discrição e reconexão.
            </p>
          </div>

          {/* Collections */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-champagne text-[11px] tracking-[0.2em] uppercase font-medium mb-5">
              Coleções
            </h3>
            <ul className="space-y-2.5">
              {collections.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-cream/40 text-sm hover:text-cream transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="md:col-span-3">
            <h3 className="text-champagne text-[11px] tracking-[0.2em] uppercase font-medium mb-5">
              Ajuda
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Perguntas Frequentes", href: "/faq" },
                { name: "Trocas e Devoluções", href: "/trocas-e-devolucoes" },
                { name: "Política de Privacidade", href: "/privacidade" },
                { name: "Termos de Uso", href: "/termos" },
                { name: "Contato", href: "/contato" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cream/40 text-sm hover:text-cream transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-champagne text-[11px] tracking-[0.2em] uppercase font-medium mb-5">
              Contato
            </h3>
            <ul className="space-y-2.5 text-cream/40 text-sm">
              <li>contato@nivelsecreto.com.br</li>
              <li>Seg a Sex, 9h às 18h</li>
              <li className="pt-3">
                <span className="text-[11px] text-cream/25 leading-relaxed block">
                  Embalagem neutra. Na fatura, nome discreto. Sua privacidade é inegociável.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-cream/25 text-xs">
          <p>© {new Date().getFullYear()} Nível Secreto. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Venda exclusiva para maiores de 18 anos</span>
            <span>•</span>
            <Link href="/politica-18" className="hover:text-cream/50 transition-colors">
              Política 18+
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
