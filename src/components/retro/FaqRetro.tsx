import { Section, SectionHeading } from "../ui/Section";
import { FaqAccordion, type FaqItem } from "../ui/FaqAccordion";

/** Marca visível de dado pendente — nunca inventado. */
function Placeholder({ children }: { children: string }) {
  return <span className="placeholder-fill">{children}</span>;
}

const faqs: FaqItem[] = [
  {
    q: "Os consoles funcionam em TV moderna (HDMI)?",
    a: "Sim. Os kits de PlayStation 1 e Super Nintendo já vêm com adaptador para TVs HDMI, além do cabo RCA/AV. Mega Drive e Nintendo 64 acompanham cabo AV; se sua TV não tiver entrada AV, fale com a gente que indicamos o adaptador.",
  },
  {
    q: "Os aparelhos são testados?",
    a: "Todos. Cada console é limpo internamente e externamente e rigorosamente testado antes de ser colocado à venda: console, controle, leitor e conexões.",
  },
  {
    q: "Quais jogos vêm com o console?",
    a: "Nos kits de PS1 você escolhe 5 jogos retrô do nosso catálogo. Também temos jogos originais de PS1 e PS2, cartuchos de Super Nintendo, Nintendo 64 e Mega Drive à venda na loja.",
  },
  {
    q: "Posso escolher os jogos do kit?",
    a: "Sim. No PlayStation 1 você escolhe os 5 jogos retrô; no Super Nintendo e Mega Drive o kit inclui 1 cartucho paralelo, e no Nintendo 64, 1 cartucho original. Quer mais jogos? Temos variedade de cartuchos pra completar.",
  },
  {
    q: "Tem garantia?",
    a: <Placeholder>[PREENCHER: prazo/condições de garantia]</Placeholder>,
  },
  {
    q: "Enviam para outras cidades?",
    a: <Placeholder>[PREENCHER envio]</Placeholder>,
  },
  {
    q: "Compram ou aceitam consoles antigos na troca?",
    a: <Placeholder>[PREENCHER: compra/troca]</Placeholder>,
  },
];

export function FaqRetro() {
  return (
    <Section id="faq" className="bg-bg-2/40">
      <SectionHeading title="Perguntas frequentes" />
      <FaqAccordion items={faqs} idPrefix="faqretro" initialOpen={null} />
    </Section>
  );
}
