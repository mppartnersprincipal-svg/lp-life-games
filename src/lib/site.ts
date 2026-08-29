/**
 * Constantes do site — edite aqui os dados da marca, links e textos de CTA.
 * Itens [PREENCHER] devem ser substituídos pelos dados reais antes de publicar.
 */

// Número da loja (E.164 sem símbolos) e mensagem pré-preenchida do WhatsApp.
export const WHATSAPP_NUMBER = "5562999136604";
export const WHATSAPP_MESSAGE =
  "Olá! Quero um orçamento de assistência técnica";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// Mensagem pré-preenchida da página de Impressão 3D (/impressao-3d).
export const WHATSAPP_MESSAGE_3D =
  "Olá! Quero encomendar uma peça 3D / action figure personalizada";

export const WHATSAPP_URL_3D = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE_3D
)}`;

// Telefone para click-to-call (tel:). [PREENCHER] com o número de ligação.
// Enquanto não confirmado, mantemos o mesmo do WhatsApp.
export const PHONE_DISPLAY = "(62) 99913-6604";
export const PHONE_TEL = "+5562999136604";

export const SOCIAL = {
  instagram: { handle: "@lojalifegames", url: "https://instagram.com/lojalifegames" },
  facebook: { handle: "Life Games", url: "https://facebook.com/" }, // [PREENCHER] URL exata
  store: { label: "Conheça nossa loja", url: "https://lifegames.com.br" },
};

// Endereço físico e horário de funcionamento.
export const STORE = {
  address: "R. 24, 802 - St. Central, Goiânia - GO, 74030-060",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("R. 24, 802 - St. Central, Goiânia - GO, 74030-060"),
  hours: [
    { days: "Terça a sexta", time: "09h às 18h" },
    { days: "Sábado", time: "09h às 14h" },
    { days: "Domingo", time: "Fechado" },
  ],
};

// Texto curto repetido nos CTAs primários.
export const CTA_PRIMARY = "Chamar no WhatsApp";
