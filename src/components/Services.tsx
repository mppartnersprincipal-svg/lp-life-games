import { Gamepad2, Joystick, Monitor, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import { WhatsappButton } from "./ui/Button";

const services: { icon: LucideIcon; name: string; text: string }[] = [
  {
    icon: Monitor,
    name: "PlayStation (PS4 e PS5)",
    text: "Troca de entrada HDMI, leitor de disco (Blu-ray), limpeza e troca de pasta térmica, fonte de alimentação, console que não liga e superaquecimento.",
  },
  {
    icon: Cpu,
    name: "Xbox (Series X|S e One)",
    text: "Entrada HDMI, leitor de disco, manutenção contra superaquecimento, fonte, falha ao ligar e travamentos.",
  },
  {
    icon: Gamepad2,
    name: "Nintendo Switch",
    text: "Troca de tela, conector de carga (USB-C), drift de Joy-Con, console que não liga ou não carrega, troca de bateria.",
  },
  {
    icon: Joystick,
    name: "Controles (DualSense, Xbox e Joy-Con)",
    text: "Reparo de drift do analógico, troca de botões e gatilhos, conector de carga, bateria e limpeza interna.",
  },
];

export function Services() {
  return (
    <Section id="servicos">
      <SectionHeading title="O que a gente conserta" />

      <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {services.map(({ icon: Icon, name, text }) => (
          <RevealItem
            key={name}
            className="card-surface group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:shadow-[0_12px_40px_-12px_rgba(108,199,212,0.5)] active:border-cyan/60 sm:p-7"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <Icon size={26} aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                {name}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{text}</p>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-10 text-center" delay={0.1}>
        <WhatsappButton source="services" variant="ghost">
          Não achou seu modelo? Chame no WhatsApp →
        </WhatsappButton>
      </Reveal>
    </Section>
  );
}
