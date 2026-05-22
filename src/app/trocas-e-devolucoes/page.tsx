import type { Metadata } from "next";
export const metadata: Metadata = { title: "Trocas e Devoluções" };

export default function ReturnsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 lg:px-8 py-14">
      <h1 className="font-[family-name:var(--font-heading)] text-3xl text-ink mb-8">Trocas e Devoluções</h1>
      <div className="prose prose-neutral max-w-none text-ink/70 text-sm leading-[1.8]">
        <h3>Direito de arrependimento</h3><p>Conforme o Art. 49 do Código de Defesa do Consumidor, você tem 7 dias corridos após o recebimento para solicitar a devolução do produto, sem necessidade de justificativa.</p>
        <h3>Produtos de higiene íntima</h3><p>Por questões de higiene e segurança, produtos íntimos só podem ser devolvidos se estiverem lacrados, em sua embalagem original e sem sinais de uso. Esta restrição é prevista em lei e visa a segurança de todos os nossos clientes.</p>
        <h3>Produtos com defeito</h3><p>Se o produto apresentar defeito de fabricação, entre em contato conosco em até 30 dias. Providenciaremos a troca ou reembolso integral, incluindo custos de envio.</p>
        <h3>Como solicitar</h3><p>Envie um e-mail para contato@nivelsecreto.com.br com o número do pedido e motivo. Responderemos em até 24 horas úteis.</p>
        <h3>Reembolso</h3><p>Após recebermos o produto devolvido e confirmarmos as condições, o reembolso será processado em até 10 dias úteis, pelo mesmo método de pagamento utilizado na compra.</p>
        <h3>Discrição na devolução</h3><p>O processo de devolução é tão discreto quanto a compra. Fornecemos etiqueta de envio sem identificação do conteúdo.</p>
      </div>
    </div>
  );
}
