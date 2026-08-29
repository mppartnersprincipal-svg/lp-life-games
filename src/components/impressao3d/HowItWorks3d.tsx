import { MessageSquare, PenTool, Printer, PackageCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { EcgScrollDivider } from "../ui/EcgLine";

const steps: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: MessageSquare,
    title: "Conte sua ideia",
    text: "Manda o personagem ou a peça e uma referência no WhatsApp.",
  },
  {
    icon: PenTool,
    title: "A gente modela",
    text: "Definimos modelo, tamanho, cor e tema junto com você.",
  },
  {
    icon: Printer,
    title: "Impressão 3D",
    text: "Imprimimos e finalizamos com capricho no acabamento.",
  },
  {
    icon: PackageCheck,
    title: "Chegou!",
    text: "Retire na loja ou receba em casa, pronto pra exibir.",
  },
];

export function HowItWorks3d() {
  return (
    <Section id="como-funciona">
      <SectionHeading title="Da sua ideia à sua mão" />

      {/* Linha de ECG conectando os passos (desenha no scroll) */}
      <div className="mt-10">
        <EcgScrollDivider beats={4} />
      </div>

      <RevealGroup className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <RevealItem key={title} className="relative text-center">
            <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
              <span className="absolute inset-0 rounded-2xl bg-cyan/10" />
              <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-red font-display text-sm font-bold text-white shadow-[0_0_14px_rgba(230,51,41,0.6)]">
                {i + 1}
              </span>
              <Icon size={28} className="relative text-cyan" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
            <p className="mx-auto mt-1.5 max-w-xs text-sm text-muted">{text}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
