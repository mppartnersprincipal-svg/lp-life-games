import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { WHATSAPP_URL } from "./site";

/**
 * URL do WhatsApp usada pelos CTAs (botões, FAB e rodapé).
 *
 * Cada página tem uma mensagem pré-preenchida diferente — a de assistência
 * técnica é o padrão; a de impressão 3D envolve a árvore no provider com a
 * WHATSAPP_URL_3D. Assim os componentes compartilhados não precisam saber
 * em qual página estão.
 */
const WhatsappUrlContext = createContext(WHATSAPP_URL);

export function WhatsappLinkProvider({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) {
  return (
    <WhatsappUrlContext.Provider value={url}>
      {children}
    </WhatsappUrlContext.Provider>
  );
}

export function useWhatsappUrl(): string {
  return useContext(WhatsappUrlContext);
}
