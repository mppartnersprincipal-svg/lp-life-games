import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Gera o "d" de um traço de eletrocardiograma com `beats` batimentos.
 * Baseline em y=50 dentro de um viewBox 0 0 (beats*260) 100.
 */
const BEAT_WIDTH = 260;
function buildEcgPath(beats: number): string {
  const B = 50; // baseline
  let d = `M0,${B}`;
  for (let i = 0; i < beats; i++) {
    const x = i * BEAT_WIDTH;
    d +=
      ` L${x + 60},${B}` + // flat
      ` L${x + 75},${B - 8} L${x + 90},${B}` + // P wave
      ` L${x + 110},${B}` + // PR flat
      ` L${x + 118},${B + 6}` + // Q
      ` L${x + 128},${B - 38}` + // R spike
      ` L${x + 138},${B + 12}` + // S
      ` L${x + 150},${B}` + // back to baseline
      ` L${x + 178},${B}` + // ST flat
      ` L${x + 196},${B - 12} L${x + 214},${B}` + // T wave
      ` L${x + BEAT_WIDTH},${B}`; // flat to end
  }
  return d;
}

/** Linha de ECG que se DESENHA conforme o scroll (divisor entre seções). */
export function EcgScrollDivider({ beats = 4 }: { beats?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 55%"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLength = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });
  const d = buildEcgPath(beats);
  const width = beats * BEAT_WIDTH;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative z-[2] mx-auto w-full max-w-6xl px-4 sm:px-6"
    >
      <svg
        viewBox={`0 0 ${width} 100`}
        className="h-12 w-full sm:h-16"
        preserveAspectRatio="none"
        role="presentation"
      >
        {/* baseline fantasma */}
        <path d={d} fill="none" stroke="rgba(206,37,44,0.12)" strokeWidth={2} />
        <motion.path
          d={d}
          fill="none"
          stroke="var(--color-red)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength, filter: "drop-shadow(0 0 6px rgba(230,51,41,0.55))" }}
        />
      </svg>
    </div>
  );
}

/** Linha de ECG do hero: começa "parada" e dá o pulso ao carregar. */
export function EcgHeroPulse({ className = "" }: { className?: string }) {
  const beats = 5;
  const d = buildEcgPath(beats);
  const width = beats * BEAT_WIDTH;

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${width} 100`}
      preserveAspectRatio="none"
      className={className}
      role="presentation"
    >
      <path d={d} fill="none" stroke="rgba(206,37,44,0.1)" strokeWidth={2} />
      <motion.path
        d={d}
        fill="none"
        stroke="var(--color-red)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0.9 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
        style={{ filter: "drop-shadow(0 0 8px rgba(230,51,41,0.6))" }}
      />
    </svg>
  );
}
