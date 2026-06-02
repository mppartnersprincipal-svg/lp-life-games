import { Crosshair, Store, Eye, ShieldCheck, MessageCircleHeart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const reasons: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Crosshair, title: "Especialistas só em games", text: 'Não somos assistência de "tudo um pouco" — vivemos videogame todos os dias.' },
  { icon: Store, title: "Loja de verdade", text: "Endereço físico, equipe e reputação — não é conserto de fundo de quintal." },
  { icon: Eye, title: "Transparência total", text: "Você aprova o orçamento antes. Sem surpresa na conta." },
  { icon: ShieldCheck, title: "Garantia no serviço", text: "A gente confia no que faz e cobre o reparo." },
  { icon: MessageCircleHeart, title: "Atendimento humano", text: "Fala direto com quem entende, pelo WhatsApp." },
];

export function WhyLifeGames() {
  return (
    <Section id="por-que" className="bg-bg-2/40">
      <SectionHeading title="Por que confiar na Life Games" />

      <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ icon: Icon, title, text }) => (
          <RevealItem
            key={title}
            className="card-surface flex gap-4 rounded-2xl p-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
              <Icon size={22} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
