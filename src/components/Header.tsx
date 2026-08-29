import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WhatsappButton } from "./ui/Button";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export type NavLink = {
  href: string;
  label: string;
  /** Link para a outra página (destacado em ciano na navegação). */
  accent?: boolean;
};

const defaultLinks: NavLink[] = [
  { href: "#servicos", label: "Serviços" },
  { href: "#nintendo-switch", label: "Nintendo Switch" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#por-que", label: "Por que a Life Games" },
  { href: "#faq", label: "Perguntas frequentes" },
  { href: "#contato", label: "Contato" },
  { href: "/impressao-3d", label: "Impressão 3D", accent: true },
];

export function Header({ links = defaultLinks }: { links?: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const reduced = usePrefersReducedMotion();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center" aria-label="Life Games — início">
          <img
            src="/logo.jpeg"
            alt="Life Games"
            width={132}
            height={60}
            className="h-9 w-auto sm:h-10"
          />
        </a>

        {/* Navegação por seções — desktop */}
        <nav aria-label="Seções do site" className="hidden items-center gap-4 xl:flex">
          {links.map(({ href, label, accent }) => (
            <a
              key={href}
              href={href}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                accent
                  ? "text-cyan hover:text-cyan-glow"
                  : "text-muted hover:text-cyan"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WhatsappButton source="header" className="!min-h-[44px] !px-4 !py-2 text-sm">
            Chamar no WhatsApp
          </WhatsappButton>

          {/* Botão do menu — mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:border-cyan/60 hover:text-cyan xl:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Navegação por seções — painel mobile */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Seções do site"
            initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/5 bg-bg/95 backdrop-blur-md xl:hidden"
          >
            <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 py-1 sm:px-6">
              {links.map(({ href, label, accent }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-white/5 py-3.5 font-display text-sm font-semibold transition-colors hover:text-cyan ${
                      accent ? "text-cyan" : "text-white/90"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
