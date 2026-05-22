import type { Metadata } from "next";
export const metadata: Metadata = { title: "Termos de Uso" };

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 lg:px-8 py-14">
      <h1 className="font-[family-name:var(--font-heading)] text-3xl text-ink mb-8">Termos de Uso</h1>
      <div className="prose prose-neutral max-w-none text-ink/70 text-sm leading-[1.8]">
        <p>Ao acessar e utilizar o site nivelsecreto.com.br, você concorda com os seguintes termos e condições.</p>
        <h3>Idade mínima</h3><p>Este site é destinado exclusivamente a maiores de 18 anos. Ao acessar, você declara ter idade legal.</p>
        <h3>Produtos</h3><p>Os produtos são apresentados com a maior fidelidade possível. Cores e dimensões podem variar levemente em relação às imagens. Preços e disponibilidade estão sujeitos a alteração sem aviso prévio.</p>
        <h3>Pagamento</h3><p>Aceitamos cartão de crédito, débito, Pix e boleto bancário via Mercado Pago. O desconto de 5% no Pix é aplicado automaticamente.</p>
        <h3>Entrega</h3><p>Prazos de entrega são estimativas e podem variar conforme a região. Frete grátis para pedidos acima de R$ 199.</p>
        <h3>Propriedade intelectual</h3><p>Todo o conteúdo deste site (textos, imagens, logotipos) é de propriedade da Nível Secreto e não pode ser reproduzido sem autorização.</p>
      </div>
    </div>
  );
}
