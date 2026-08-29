import { MessageSquare, ClipboardCheck, Wrench, Gamepad } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { EcgScrollDivider } from "./ui/EcgLine";

const steps: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: MessageSquare, title: "Fale com a gente", text: "Chame no WhatsApp e descreva o problema, ou traga o aparelho na loja." },
  { icon: ClipboardCheck, title: "Diagnóstico e orçamento", text: "Avaliamos o aparelho e passamos o orçamento, sem compromisso." },
  { icon: Wrench, title: "Conserto na loja", text: "Aprovou? Fazemos o reparo de hardware com peças de qualidade." },
  { icon: Gamepad, title: "Seu game de volta", text: "Retire na loja ou combine a entrega. É só ligar e jogar." },
];

export function HowItWorks() {
  return (
    <Section id="como-funciona">
      <SectionHeading title={'Simples assim: do defeito ao "pronto pra jogar"'} />

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
