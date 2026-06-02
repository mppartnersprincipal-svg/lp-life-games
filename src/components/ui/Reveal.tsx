import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

/**
 * Fade + translateY ao entrar na viewport (uma vez).
 * Com `prefers-reduced-motion`, mantém o fade de opacidade mas zera o
 * deslize — assim a animação continua visível e acessível.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const reduced = usePrefersReducedMotion();
  const MotionTag = motion[as];
  const dy = reduced ? 0 : y;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: dy }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduced ? 0.5 : 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Container com stagger nos filhos diretos que usam <RevealItem>. */
export function RevealGroup({
  children,
  className = "",
  stagger = 0.1,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul";
}) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className = "",
  y = 24,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li";
}) {
  const reduced = usePrefersReducedMotion();
  const MotionTag = motion[as];
  const dy = reduced ? 0 : y;

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: dy },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduced ? 0.5 : 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
