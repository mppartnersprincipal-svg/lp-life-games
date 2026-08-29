import {
  Unlock,
  MonitorSmartphone,
  Gamepad2,
  PlugZap,
  BatteryCharging,
  Cpu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import { WhatsappButton } from "./ui/Button";

const switchServices: { icon: LucideIcon; name: string; text: string }[] = [
  {
    icon: Unlock,
    name: "Desbloqueio de Nintendo Switch",
    text: "Desbloqueio de Switch com avaliação de compatibilidade do seu modelo (V1, V2, OLED ou Lite), instalação e configuração completa. Aproveite sua biblioteca sem complicação.",
  },
  {
    icon: MonitorSmartphone,
    name: "Troca de tela e touch",
    text: "Tela trincada ou sem imagem no Switch, Switch OLED ou Switch Lite? Trocamos display e touch com peças de qualidade.",
  },
  {
    icon: Gamepad2,
    name: "Drift de Joy-Con e Pro Controller",
    text: "O analógico anda sozinho? Reparo e troca do módulo analógico dos Joy-Con e do Pro Controller, acabando com o drift.",
  },
  {
    icon: PlugZap,
    name: "Conector de carga (USB-C)",
    text: "Switch que não carrega ou conector solto: troca do conector USB-C e reparo na placa de carga.",
  },
  {
    icon: BatteryCharging,
    name: "Troca de bateria",
    text: "Bateria que não segura carga ou descarrega rápido? Substituímos a bateria e devolvemos a autonomia do seu Switch.",
  },
  {
    icon: Cpu,
    name: "Não liga e superaquecimento",
    text: "Console que não liga, trava, esquenta demais ou não lê o cartão de jogo: diagnóstico de hardware e reparo na placa.",
  },
];

export function SwitchRepair() {
  return (
    <Section id="nintendo-switch" className="bg-bg-2/40">
      <SectionHeading
        eyebrow="Nintendo Switch"
        title="Reparo e Desbloqueio de Nintendo Switch em Goiânia"
        subtitle="Conserto especializado e desbloqueio de Nintendo Switch: modelos V1, V2, Switch OLED e Switch Lite. Diagnóstico na hora e orçamento sem compromisso, na nossa loja física em Goiânia."
      />

      <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {switchServices.map(({ icon: Icon, name, text }) => (
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

      <Reveal className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted">
        <p>
          Procurando assistência técnica de Nintendo Switch em Goiânia? A Life
          Games faz reparo de hardware e desbloqueio de Switch com diagnóstico
          transparente e peças de qualidade. O atendimento é presencial: traga
          seu console na loja e descubra na hora a melhor solução para deixá-lo
          pronto pra jogar.
        </p>
      </Reveal>

      <Reveal className="mt-8 text-center" delay={0.1}>
        <WhatsappButton source="switch">
          Desbloquear ou consertar meu Switch →
        </WhatsappButton>
      </Reveal>
    </Section>
  );
}
