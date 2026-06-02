import { motion } from "framer-motion";
import { WHATSAPP_URL } from "../lib/site";
import { trackWhatsappClick } from "../lib/analytics";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

/**
 * Botão flutuante fixo no rodapé da viewport (mobile).
 * No desktop o CTA fica fixo no header (PRD), então escondemos em lg+.
 */
export function WhatsappFab() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-end p-4 lg:hidden">
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsappClick("fab")}
        aria-label="Chamar no WhatsApp"
        whileTap={{ scale: 0.92 }}
        className="relative flex min-h-[56px] items-center gap-2 rounded-full bg-cyan px-5 font-display font-semibold text-[#001014] glow-cyan"
      >
        {/* pulso contínuo */}
        {!reduced && (
          <motion.span
            className="absolute inset-0 -z-10 rounded-full bg-cyan"
            animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <WhatsAppIcon size={24} />
        <span>Chamar no WhatsApp</span>
      </motion.a>
    </div>
  );
}
