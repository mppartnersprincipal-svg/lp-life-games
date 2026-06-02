import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { WhatsappButton, LinkButton } from "./ui/Button";
import { EcgHeroPulse } from "./ui/EcgLine";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const cascade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 * i },
  }),
};

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const animProps = (i: number) =>
    reduced
      ? {}
      : { variants: cascade, custom: i, initial: "hidden", animate: "show" };

  return (
    <section
      id="top"
      className="bg-depth relative z-[2] overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:pb-24 lg:pt-40"
    >
      {/* ECG ao fundo do hero */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 -translate-y-1/2 opacity-60">
        <EcgHeroPulse className="h-40 w-full sm:h-56 lg:h-64" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          {...animProps(0)}
          className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.22em] text-cyan sm:text-sm"
        >
          Assistência técnica especializada em videogames
        </motion.p>

        <motion.h1
          {...animProps(1)}
          className="text-glow-cyan text-3xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
        >
          Seu console parou?{" "}
          <span className="italic text-cyan">A gente traz ele de volta à vida.</span>
        </motion.h1>

        <motion.p
          {...animProps(2)}
          className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg"
        >
          Conserto e reparo de PlayStation, Xbox, Nintendo Switch e controles, com
          técnicos especializados, garantia no serviço e orçamento sem compromisso.
        </motion.p>

        <motion.div
          {...animProps(3)}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <WhatsappButton source="hero" className="w-full sm:w-auto">
            Falar com um técnico agora
          </WhatsappButton>
          <LinkButton href="#servicos" variant="ghost" className="w-full sm:w-auto">
            Ver o que consertamos
          </LinkButton>
        </motion.div>

        <motion.p
          {...animProps(4)}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted"
        >
          <ShieldCheck size={16} className="text-cyan" aria-hidden="true" />
          Diagnóstico transparente · Garantia no serviço · Atendimento rápido
        </motion.p>
      </div>
    </section>
  );
}
