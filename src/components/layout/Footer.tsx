import Link from "next/link";
import { categories } from "@/lib/products";

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold tracking-[0.1em] text-cream mb-5">
              NÍVEL SECRETO
            </h2>
            <p className="text-cream-muted/40 text-sm leading-[1.8] max-w-xs">
              Produtos selecionados para casais que valorizam qualidade e discrição. Entrega discreta em todo Brasil.
            </p>
          </div>

          {/* Categories */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-cream/60 text-[10px] tracking-[0.25em] uppercase font-medium mb-6">
              Coleções
            </h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categoria/${cat.slug}`}
                    className="text-cream-muted/40 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="md:col-span-3">
            <h3 className="text-cream/60 text-[10px] tracking-[0.25em] uppercase font-medium mb-6">
              Informações
            </h3>
            <ul className="space-y-3">
              {["Sobre Nós", "Política de Privacidade", "Termos de Uso", "Trocas e Devoluções", "Rastreio de Pedidos"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-cream-muted/40 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-cream/60 text-[10px] tracking-[0.25em] uppercase font-medium mb-6">
              Contato
            </h3>
            <ul className="space-y-3 text-cream-muted/40 text-sm">
              <li>contato@nivelsecreto.com.br</li>
              <li>Seg a Sex, 9h às 18h</li>
              <li className="pt-2 text-xs text-cream-muted/25 leading-[1.6]">
                Embalagem neutra. Sua privacidade é inegociável.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-border/50 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream-muted/25 text-xs tracking-wide">
            © {new Date().getFullYear()} Nível Secreto. Todos os direitos reservados.
          </p>
          <p className="text-cream-muted/25 text-xs">
            Venda exclusiva para maiores de 18 anos.
          </p>
        </div>
      </div>
    </footer>
  );
}
