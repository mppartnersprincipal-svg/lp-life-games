import { Section, SectionHeading } from "../ui/Section";
import { FaqAccordion, type FaqItem } from "../ui/FaqAccordion";

/** Marca visível de dado pendente — nunca inventado. */
function Placeholder({ children }: { children: string }) {
  return <span className="placeholder-fill">{children}</span>;
}

const faqs: FaqItem[] = [
  {
    q: "Vocês fazem qualquer personagem?",
    a: <Placeholder>[PREENCHER: limites/possibilidades]</Placeholder>,
  },
  {
    q: "Quais tamanhos posso pedir?",
    a: <Placeholder>[PREENCHER faixa de tamanhos]</Placeholder>,
  },
  {
    q: "Quanto tempo leva a produção?",
    a: <Placeholder>[PREENCHER prazo médio]</Placeholder>,
  },
  {
    q: "Qual material vocês usam?",
    a: <Placeholder>[PREENCHER: PLA / resina etc.]</Placeholder>,
  },
  {
    q: "Enviam para outras cidades?",
    a: <Placeholder>[PREENCHER envio]</Placeholder>,
  },
  {
    q: "Quanto custa?",
    a: "Cada peça é sob orçamento, de acordo com tamanho e complexidade. Chame no WhatsApp e peça o seu.",
  },
];

export function Faq3d() {
  return (
    <Section id="faq" className="bg-bg-2/40">
      <SectionHeading title="Perguntas frequentes" />
      <FaqAccordion items={faqs} idPrefix="faq3d" initialOpen={null} />
    </Section>
  );
}
