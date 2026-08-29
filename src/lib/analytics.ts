/**
 * Evento de conversão para o Google Ads / GA4.
 *
 * Empurra um evento para o dataLayer (GTM) e, se o gtag estiver presente,
 * dispara também via gtag(). Configure o ID em index.html ([PREENCHER]) e
 * crie a conversão no Google Ads apontando para o evento "whatsapp_click".
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type ConversionSource =
  | "header"
  | "hero"
  | "symptoms"
  | "services"
  | "switch"
  | "pillars"
  | "final_cta"
  | "fab"
  | "footer";

export function trackWhatsappClick(source: ConversionSource): void {
  // "page" distingue as landings (/ = assistência, /impressao-3d = 3D)
  // sem precisar de outro evento no GTM.
  const payload = {
    event: "whatsapp_click",
    source,
    page: window.location.pathname,
  };

  // GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  // gtag direto (caso GA4/Ads esteja via gtag.js)
  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", { source });
  }

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info("[analytics] whatsapp_click", payload);
  }
}
