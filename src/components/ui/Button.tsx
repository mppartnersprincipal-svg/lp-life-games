import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { WHATSAPP_URL } from "../../lib/site";
import { trackWhatsappClick } from "../../lib/analytics";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Variant = "primary" | "ghost" | "red";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-display font-semibold " +
  "min-h-[48px] px-6 py-3 text-base tracking-wide transition-colors " +
  "focus-visible:outline-2 select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-cyan text-[#001014] glow-cyan hover:bg-cyan-glow active:bg-cyan-glow",
  ghost:
    "border border-cyan/50 text-cyan bg-transparent hover:border-cyan hover:bg-cyan/10 active:bg-cyan/15",
  red: "bg-red text-white hover:bg-red-bright active:bg-red-bright shadow-[0_8px_30px_-8px_rgba(206,37,44,0.6)]",
};

type WhatsappSource = Parameters<typeof trackWhatsappClick>[0];

/** Link de CTA para o WhatsApp (deep link + evento de conversão). */
export function WhatsappButton({
  source,
  children,
  variant = "primary",
  className = "",
  icon = true,
}: {
  source: WhatsappSource;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
}) {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsappClick(source)}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon && <WhatsAppIcon size={20} />}
      {children}
    </motion.a>
  );
}

/** Botão genérico (ex.: rolar para uma seção) com o mesmo visual. */
export function LinkButton({
  href,
  children,
  variant = "ghost",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
