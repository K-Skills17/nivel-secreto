"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "A embalagem é discreta?", a: "Sim, 100%. Enviamos em caixa parda sem nenhuma marca, logotipo ou referência ao conteúdo. Nem o entregador sabe o que há dentro." },
  { q: "O que aparece na fatura do cartão?", a: "Um nome genérico que não revela a natureza da compra. Sua privacidade é nossa prioridade absoluta." },
  { q: "Quais formas de pagamento vocês aceitam?", a: "Aceitamos cartão de crédito (até 6x), cartão de débito, Pix (com 5% de desconto) e boleto bancário, tudo via Mercado Pago." },
  { q: "Qual o prazo de entrega?", a: "Depende da sua região. Em média, de 3 a 10 dias úteis. Após o envio, você recebe o código de rastreio por e-mail." },
  { q: "O frete é grátis?", a: "Sim, para compras acima de R$ 199. Para valores menores, o frete é de R$ 14,90." },
  { q: "Posso devolver um produto?", a: "Sim. Pelo Código de Defesa do Consumidor, você tem 7 dias após o recebimento para solicitar devolução. Produtos de higiene íntima devem estar lacrados e sem uso. Consulte nossa política completa de trocas e devoluções." },
  { q: "Os produtos são seguros?", a: "Sim. Trabalhamos apenas com materiais body-safe certificados, como silicone médico, ABS e TPE premium. Todos os produtos possuem informações de segurança detalhadas." },
  { q: "Preciso criar uma conta para comprar?", a: "Não. O checkout é como convidado — basta informar seus dados de entrega e pagamento. Rápido e sem burocracia." },
  { q: "Vocês vendem para menores de 18 anos?", a: "Não. A venda é exclusiva para maiores de 18 anos, conforme confirmado no acesso ao site." },
];

export function FAQClient() {
  return (
    <div className="max-w-3xl mx-auto px-5 lg:px-8 py-14">
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <p className="text-wine text-[12px] tracking-[0.3em] uppercase mb-3">Ajuda</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-ink">Perguntas Frequentes</h1>
      </motion.div>
      <Accordion className="space-y-2">
        {faqs.map((faq, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
            <AccordionItem value={`faq-${i}`} className="bg-white border border-border rounded-lg px-5">
              <AccordionTrigger className="text-sm font-medium text-ink text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted text-sm leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
}
