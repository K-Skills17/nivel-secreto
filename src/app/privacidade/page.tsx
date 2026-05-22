import type { Metadata } from "next";
export const metadata: Metadata = { title: "Política de Privacidade" };

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 lg:px-8 py-14">
      <h1 className="font-[family-name:var(--font-heading)] text-3xl text-ink mb-8">Política de Privacidade</h1>
      <div className="prose prose-neutral max-w-none text-ink/70 text-sm leading-[1.8]">
        <p>A Nível Secreto está comprometida com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).</p>
        <h3>Dados coletados</h3><p>Coletamos apenas os dados necessários para processar seu pedido: nome, e-mail, CPF, telefone, endereço de entrega e dados de pagamento (processados pelo Mercado Pago).</p>
        <h3>Uso dos dados</h3><p>Seus dados são utilizados exclusivamente para: processar e entregar seu pedido, enviar confirmação e atualizações de entrega, e, caso autorizado, enviar comunicações sobre novos produtos e ofertas.</p>
        <h3>Compartilhamento</h3><p>Seus dados são compartilhados apenas com: Mercado Pago (processamento de pagamento) e transportadoras (entrega). Nunca vendemos ou compartilhamos seus dados com terceiros para fins de marketing.</p>
        <h3>Segurança</h3><p>Utilizamos criptografia SSL em todo o site. Dados de pagamento são processados diretamente pelo Mercado Pago — nunca armazenamos dados de cartão.</p>
        <h3>Discrição</h3><p>Na fatura do cartão, aparece um nome genérico. A embalagem é neutra. Seu histórico de compras é confidencial.</p>
        <h3>Seus direitos</h3><p>Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail contato@nivelsecreto.com.br.</p>
      </div>
    </div>
  );
}
