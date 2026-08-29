import { Disc3, Gamepad2, Cable, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { Chips } from "../ui/Chips";
import { WhatsappButton } from "../ui/Button";

const extras: { icon: LucideIcon; title: string; text: string; chips: string[] }[] = [
  {
    icon: Layers,
    title: "Cartuchos",
    text: "Variedade em cartuchos pra você montar (ou completar) a sua coleção.",
    chips: ["Super Nintendo", "Nintendo 64", "Mega Drive"],
  },
  {
    icon: Gamepad2,
    title: "Controles",
    text: "Controles 1ª linha e originais pra jogar em dupla como antigamente.",
    chips: ["Super Nintendo", "Nintendo 64", "Mega Drive"],
  },
  {
    icon: Disc3,
    title: "Jogos de PS1 e PS2",
    text: "Jogos originais de PlayStation 1 e PlayStation 2, além de jogos retrô.",
    chips: ["Originais", "Retrô"],
  },
  {
    icon: Cable,
    title: "Acessórios",
    text: "Cabos AV, adaptadores HDMI, fontes, memory cards e o que mais faltar pro seu setup retrô.",
    chips: ["Cabos", "Adaptadores", "Fontes", "Memory card"],
  },
];

export function Extras() {
  return (
    <Section id="jogos-e-acessorios" className="bg-bg-2/40">
      <SectionHeading
        eyebrow="Jogos e acessórios"
        title="Tudo pro seu retrô, num só lugar"
        subtitle="Cartuchos, controles, jogos originais de PS1 e PS2, jogos retrô e acessórios você encontra aqui na Life Games."
      />

      <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {extras.map(({ icon: Icon, title, text, chips }) => (
          <RevealItem
            key={title}
            className="card-surface flex flex-col rounded-2xl p-6 transition-colors duration-300 hover:border-cyan/60"
          >
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <Icon size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-muted">{text}</p>
              </div>
            </div>
            <Chips items={chips} label={`Disponível: ${chips.join(", ")}`} className="mt-5" />
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-10 text-center" delay={0.1}>
        <WhatsappButton source="extras" variant="ghost">
          Procurando um jogo específico? Pergunta no WhatsApp →
        </WhatsappButton>
      </Reveal>
    </Section>
  );
}
