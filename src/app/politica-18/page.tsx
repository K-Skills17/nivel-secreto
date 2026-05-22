import type { Metadata } from "next";
export const metadata: Metadata = { title: "Política 18+" };

export default function AdultPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 lg:px-8 py-14">
      <h1 className="font-[family-name:var(--font-heading)] text-3xl text-ink mb-8">Política de Conteúdo Adulto</h1>
      <div className="prose prose-neutral max-w-none text-ink/70 text-sm leading-[1.8]">
        <p>O site nivelsecreto.com.br comercializa produtos destinados exclusivamente a maiores de 18 anos.</p>
        <h3>Verificação de idade</h3><p>Ao acessar nosso site, o visitante deve confirmar ter 18 anos ou mais. Esta confirmação é registrada via cookie por 30 dias.</p>
        <h3>Responsabilidade</h3><p>A Nível Secreto não se responsabiliza por acessos realizados por menores que declarem falsamente sua idade. Pais e responsáveis devem utilizar sistemas de controle parental para restringir o acesso a conteúdo adulto.</p>
        <h3>Conteúdo</h3><p>Todo o conteúdo do site é apresentado de forma tasteful e não explícita. Não utilizamos imagens pornográficas, nudez ou linguagem vulgar.</p>
      </div>
    </div>
  );
}
