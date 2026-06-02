import {
  PowerOff,
  MonitorX,
  Flame,
  Disc3,
  Gamepad2,
  BatteryWarning,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import { WhatsappButton } from "./ui/Button";

const symptoms: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: PowerOff, title: "Não liga", text: "Tela preta, luz piscando ou nenhuma reação." },
  { icon: MonitorX, title: "Sem imagem", text: "Entrada HDMI queimada, console liga mas não aparece nada." },
  { icon: Flame, title: "Superaquecendo", text: "Esquenta demais, faz barulho ou desliga sozinho." },
  { icon: Disc3, title: "Não lê o disco", text: "Leitor não reconhece ou ejeta os jogos." },
  { icon: Gamepad2, title: "Controle com drift", text: "O analógico anda sozinho ou trava no jogo." },
  { icon: BatteryWarning, title: "Não carrega", text: "Switch ou controle não segura carga / conector solto." },
];

export function Symptoms() {
  return (
    <Section id="sintomas">
      <SectionHeading
        title="Reconhece algum desses sinais?"
        subtitle="Se o seu aparelho está com qualquer um desses sintomas, ele tem conserto. Faça um diagnóstico."
      />

      <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {symptoms.map(({ icon: Icon, title, text }) => (
          <RevealItem
            key={title}
            className="card-surface group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:shadow-[0_12px_40px_-12px_rgba(108,199,212,0.5)] active:border-cyan/60"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red/10 text-red-bright transition-colors group-hover:bg-cyan/10 group-hover:text-cyan">
              <Icon size={24} aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-1.5 text-sm text-muted">{text}</p>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-10 text-center" delay={0.1}>
        <WhatsappButton source="symptoms">
          Seja qual for o defeito, descubra a solução →
        </WhatsappButton>
      </Reveal>
    </Section>
  );
}
