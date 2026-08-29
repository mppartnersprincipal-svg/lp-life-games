import type { ReactNode } from "react";
import { Section, SectionHeading } from "./ui/Section";
import { FaqAccordion } from "./ui/FaqAccordion";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "O orçamento tem custo?",
    a: (
      <>
        Não cobramos pelo orçamento. Você só aprova se quiser seguir. A cobrança
        só acontece caso a manutenção não seja autorizada e você queira o laudo
        técnico.
      </>
    ),
  },
  {
    q: "Vocês dão garantia?",
    a: "Não trabalhamos com garantia no serviço. Por isso fazemos um diagnóstico transparente e você aprova o orçamento antes de qualquer reparo.",
  },
  {
    q: "Quanto tempo demora o conserto?",
    a: "Em média 1 semana, mas pode variar conforme a demanda de serviço e a complexidade do defeito.",
  },
  {
    q: "Atendem outras cidades / enviam pelos Correios?",
    a: "Nosso atendimento é presencial, na loja em Goiânia. Não atendemos outras cidades nem trabalhamos com envio pelos Correios.",
  },
  {
    q: "Quais modelos vocês consertam?",
    a: "PlayStation 4 e 5, Xbox One e Series, Nintendo Switch e controles em geral.",
  },
  {
    q: "Onde vocês ficam?",
    a: (
      <>
        R. 24, 802 - St. Central, Goiânia - GO, 74030-060.
        <br />
        Horário: terça a sexta das 09h às 18h, sábado das 09h às 14h, domingo
        fechado.
      </>
    ),
  },
];

export function Faq() {
  return (
    <Section id="faq" className="bg-bg-2/40">
      <SectionHeading title="Perguntas frequentes" />
      <FaqAccordion items={faqs} />
    </Section>
  );
}
