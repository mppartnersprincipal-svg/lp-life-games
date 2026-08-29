import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { RevealGroup, RevealItem } from "./Reveal";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export type FaqItem = { q: string; a: ReactNode };

/**
 * Accordion de perguntas frequentes — navegável por teclado
 * (botões nativos com aria-expanded/aria-controls).
 */
export function FaqAccordion({
  items,
  idPrefix = "faq",
  initialOpen = 0,
}: {
  items: FaqItem[];
  idPrefix?: string;
  initialOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(initialOpen);
  const reduced = usePrefersReducedMotion();

  return (
    <RevealGroup
      className="mx-auto mt-10 max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10"
      stagger={0.07}
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <RevealItem key={item.q} className="bg-white/[0.02]">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-panel-${i}`}
                id={`${idPrefix}-trigger-${i}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display font-semibold text-white transition-colors hover:text-cyan"
              >
                <span>{item.q}</span>
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className={`shrink-0 text-cyan transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${idPrefix}-panel-${i}`}
                  role="region"
                  aria-labelledby={`${idPrefix}-trigger-${i}`}
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
