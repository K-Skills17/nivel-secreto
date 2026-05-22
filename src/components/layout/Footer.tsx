import Link from "next/link";
import { categories } from "@/lib/products";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-border mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-cream mb-4">
              NÍVEL SECRETO
            </h2>
            <p className="text-cream-muted text-sm leading-relaxed">
              Seu prazer em outro nível. Produtos premium com entrega 100% discreta em todo Brasil.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-6">
              Categorias
            </h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categoria/${cat.slug}`}
                    className="text-cream-muted text-sm hover:text-gold transition-colors duration-300"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-6">
              Informações
            </h3>
            <ul className="space-y-3">
              {["Sobre Nós", "Política de Privacidade", "Termos de Uso", "Trocas e Devoluções", "Rastreio de Pedidos"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-cream-muted text-sm hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-6">
              Contato
            </h3>
            <ul className="space-y-3 text-cream-muted text-sm">
              <li>contato@nivelsecreto.com.br</li>
              <li>Atendimento: Seg-Sex 9h-18h</li>
              <li className="pt-2 text-xs text-cream-muted/60">
                Embalagem 100% discreta. Sua privacidade é nossa prioridade.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream-muted/50 text-xs">
            © {new Date().getFullYear()} Nível Secreto. Todos os direitos reservados.
          </p>
          <p className="text-cream-muted/50 text-xs">
            Venda exclusiva para maiores de 18 anos.
          </p>
        </div>
      </div>
    </footer>
  );
}
