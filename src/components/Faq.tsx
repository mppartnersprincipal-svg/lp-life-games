import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { Section, SectionHeading } from "./ui/Section";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "O orçamento tem custo?",
    a: (
      <>
        Não cobramos pelo orçamento — você só aprova se quiser seguir. A cobrança
        só acontece caso a manutenção não seja autorizada e você queira o laudo
        técnico.
      </>
    ),
  },
  {
    q: "Vocês dão garantia?",
    a: "Não trabalhamos com garantia no serviço. Por isso fazemos um diagnóstico transparente e você aprova o orçamento antes de qualquer reparo.",
  },
  {
    q: "Quanto tempo demora o conserto?",
    a: "Em média 1 semana, mas pode variar conforme a demanda de serviço e a complexidade do defeito.",
  },
  {
    q: "Atendem outras cidades / enviam pelos Correios?",
    a: "Nosso atendimento é presencial, na loja em Goiânia. Não atendemos outras cidades nem trabalhamos com envio pelos Correios.",
  },
  {
    q: "Quais modelos vocês consertam?",
    a: "PlayStation 4 e 5, Xbox One e Series, Nintendo Switch e controles em geral.",
  },
  {
    q: "Onde vocês ficam?",
    a: (
      <>
        R. 24, 802 - St. Central, Goiânia - GO, 74030-060.
        <br />
        Horário: terça a sexta das 09h às 18h, sábado das 09h às 14h, domingo
        fechado.
      </>
    ),
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = usePrefersReducedMotion();

  return (
    <Section id="faq" className="bg-bg-2/40">
      <SectionHeading title="Perguntas frequentes" />

      <div className="mx-auto mt-10 max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="bg-white/[0.02]">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
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
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
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
            </div>
          );
        })}
      </div>
    </Section>
  );
}
