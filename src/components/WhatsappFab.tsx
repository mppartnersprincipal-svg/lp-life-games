import { motion } from "framer-motion";
import { useWhatsappUrl } from "../lib/whatsapp";
import { trackWhatsappClick } from "../lib/analytics";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

/**
 * Botão flutuante fixo no canto inferior direito, em todos os tamanhos.
 * No mobile mostra ícone + texto; no desktop fica compacto (só o ícone)
 * e revela o texto no hover/foco.
 */
export function WhatsappFab({ label = "Chamar no WhatsApp" }: { label?: string }) {
  const reduced = usePrefersReducedMotion();
  const whatsappUrl = useWhatsappUrl();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-end p-4 lg:p-6">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsappClick("fab")}
        aria-label={label}
        whileTap={{ scale: 0.92 }}
        className="group pointer-events-auto relative flex min-h-[56px] items-center gap-2 rounded-full bg-cyan px-5 lg:gap-0 font-display font-semibold text-[#001014] glow-cyan transition-colors hover:bg-cyan-glow lg:min-h-[60px] lg:px-[18px]"
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
        <span className="whitespace-nowrap lg:max-w-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-300 lg:group-hover:ml-2 lg:group-hover:max-w-[240px] lg:group-hover:opacity-100 lg:group-focus-visible:ml-2 lg:group-focus-visible:max-w-[240px] lg:group-focus-visible:opacity-100">
          {label}
        </span>
      </motion.a>
    </div>
  );
}
