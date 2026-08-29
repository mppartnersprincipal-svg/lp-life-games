import { SprayCan, ClipboardCheck, MonitorPlay, Store } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { RevealGroup, RevealItem } from "../ui/Reveal";

const reasons: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: SprayCan,
    title: "Limpos por dentro e por fora",
    text: "Todos os aparelhos passam por limpeza interna e externa antes de ir pra prateleira.",
  },
  {
    icon: ClipboardCheck,
    title: "Rigorosamente testados",
    text: "Console, controle, leitor e portas: tudo conferido por quem conserta videogame todo dia.",
  },
  {
    icon: MonitorPlay,
    title: "Pronto pra TV de hoje",
    text: "Adaptador para TVs HDMI incluso nos kits de PS1 e Super Nintendo. Chega em casa e joga.",
  },
  {
    icon: Store,
    title: "Loja física em Goiânia",
    text: "Vem ver, testar e escolher os jogos pessoalmente. Assistência técnica no mesmo lugar.",
  },
];

export function WhyRetro() {
  return (
    <Section id="por-que">
      <SectionHeading title="Por que comprar retrô na Life Games" />

      <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {reasons.map(({ icon: Icon, title, text }) => (
          <RevealItem key={title} className="card-surface flex gap-4 rounded-2xl p-6">
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
