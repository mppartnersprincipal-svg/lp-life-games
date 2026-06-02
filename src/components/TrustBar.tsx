import { Wrench, Search, BadgeCheck, Zap } from "lucide-react";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const items = [
  { icon: Wrench, text: "Técnicos especializados só em games" },
  { icon: Search, text: "Orçamento sem compromisso" },
  { icon: BadgeCheck, text: "Garantia no serviço" },
  { icon: Zap, text: "Atendimento rápido pelo WhatsApp" },
];

export function TrustBar() {
  return (
    <div className="relative z-[2] border-y border-white/5 bg-bg-2/60 px-4 py-6 sm:px-6">
      <RevealGroup className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
        {items.map(({ icon: Icon, text }) => (
          <RevealItem
            key={text}
            className="flex items-center gap-3 text-sm text-white/90"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
              <Icon size={20} aria-hidden="true" />
            </span>
            <span>{text}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
