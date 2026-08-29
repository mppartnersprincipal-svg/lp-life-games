import { Wand2, BadgeCheck, Gamepad, Gem } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { RevealGroup, RevealItem } from "../ui/Reveal";

const reasons: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Wand2,
    title: "Personalização de verdade",
    text: "Não é só catálogo pronto; a gente cria o que você imaginar.",
  },
  {
    icon: BadgeCheck,
    title: "Acabamento caprichado",
    text: "Peças resistentes e bem finalizadas.",
  },
  {
    icon: Gamepad,
    title: "Gente do meio",
    text: "Feito por quem vive o mundo gamer e geek.",
  },
  {
    icon: Gem,
    title: "Exclusividade",
    text: "Sua peça é única, do seu jeito.",
  },
];

export function Why3d() {
  return (
    <Section id="por-que">
      <SectionHeading title="Por que a Life Games 3D" />

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
