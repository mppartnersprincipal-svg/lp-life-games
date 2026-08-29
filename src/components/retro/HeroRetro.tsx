import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { WhatsappButton, LinkButton } from "../ui/Button";
import { EcgHeroPulse } from "../ui/EcgLine";
import { Typewriter } from "../ui/Typewriter";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { RETRO_PHOTOS } from "../../lib/photosRetro";

// "Prateleira" de consoles no hero — levemente inclinados, como numa estante.
const shelf = [
  { photo: RETRO_PHOTOS.psone, tilt: -4 },
  { photo: RETRO_PHOTOS.superNintendo, tilt: 2.5 },
  { photo: RETRO_PHOTOS.megaDrive, tilt: -2 },
  { photo: RETRO_PHOTOS.nintendo64, tilt: 4 },
];

export function HeroRetro() {
  const reduced = usePrefersReducedMotion();

  // Mesmo com movimento reduzido, mantém o fade de opacidade (sem deslize).
  const cascade = {
    hidden: { opacity: 0, y: reduced ? 0 : 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 * i },
    }),
  };

  const animProps = (i: number) => ({
    variants: cascade,
    custom: i,
    initial: "hidden" as const,
    animate: "show" as const,
  });

  return (
    <section
      id="top"
      className="bg-depth relative z-[2] overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:pb-24 lg:pt-40"
    >
      {/* ECG ao fundo — assinatura da marca, também nesta página */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 -translate-y-1/2 opacity-60">
        <EcgHeroPulse className="h-40 w-full sm:h-56 lg:h-64" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-cyan/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-red/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          {...animProps(0)}
          className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.22em] text-cyan sm:text-sm"
        >
          Videogames retrô · Estamos de volta aos clássicos
        </motion.p>

        <motion.h1
          {...animProps(1)}
          className="text-glow-cyan text-3xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
        >
          <Typewriter
            speed={55}
            startDelay={650}
            segments={[
              { text: "Reviva o sonho " },
              { text: "de criança.", className: "italic text-cyan" },
            ]}
          />
        </motion.h1>

        <motion.p
          {...animProps(2)}
          className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg"
        >
          A Life Games está de volta aos consoles retrô. PlayStation 1, Super
          Nintendo, Mega Drive e Nintendo 64, todos limpos por dentro e por
          fora, rigorosamente testados e prontos pra ligar na sua TV.
        </motion.p>

        <motion.div
          {...animProps(3)}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <WhatsappButton source="hero" className="w-full sm:w-auto">
            Garantir o meu pelo WhatsApp
          </WhatsappButton>
          <LinkButton href="#consoles" variant="ghost" className="w-full sm:w-auto">
            Ver os consoles
          </LinkButton>
        </motion.div>

        <motion.p
          {...animProps(4)}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted"
        >
          <Sparkles size={16} className="text-cyan" aria-hidden="true" />
          Limpeza interna e externa · Rigorosamente testados · Adaptador pra TV HDMI
        </motion.p>
      </div>

      {/* Prateleira de consoles reais */}
      <motion.ul
        aria-label="Consoles retrô disponíveis na Life Games"
        className="relative mx-auto mt-12 grid w-full max-w-4xl grid-cols-4 gap-2 px-1 sm:gap-4"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.7 } },
        }}
      >
        {shelf.map(({ photo, tilt }, i) => (
          <motion.li
            key={photo.src}
            variants={{
              hidden: { opacity: 0, y: reduced ? 0 : 28, rotate: 0 },
              show: {
                opacity: 1,
                y: 0,
                rotate: reduced ? 0 : tilt,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            whileHover={reduced ? undefined : { rotate: 0, y: -6, scale: 1.04 }}
            className={`overflow-hidden rounded-xl border border-cyan/25 bg-bg-2 shadow-[0_16px_40px_-16px_rgba(108,199,212,0.45)] sm:rounded-2xl ${
              i % 2 ? "mt-4 sm:mt-8" : ""
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              loading={i < 2 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
              decoding="async"
              className="aspect-square w-full object-cover"
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
