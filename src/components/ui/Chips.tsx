import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

/**
 * "Chips" de personalização (ex.: Personagem · Modelo · Tamanho).
 * Elemento visual, não interativo — entra na viewport com um pop
 * escalonado; com `prefers-reduced-motion`, só o fade.
 */
export function Chips({
  items,
  label = "Opções de personalização",
  className = "",
}: {
  items: string[];
  label?: string;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.ul
      aria-label={label}
      className={`flex flex-wrap gap-2 ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
      }}
    >
      {items.map((item) => (
        <motion.li
          key={item}
          variants={{
            hidden: { opacity: 0, scale: reduced ? 1 : 0.7 },
            show: {
              opacity: 1,
              scale: 1,
              transition: { type: "spring", stiffness: 320, damping: 18 },
            },
          }}
          className="rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-cyan"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
