/**
 * Fotos reais dos consoles retrô (public/retro/*.webp), com dimensões para
 * reservar espaço no layout (sem CLS). Convertidas de "Fotos Video Game Retro".
 */
import type { Photo } from "./photos3d";

const p = (name: string, alt: string): Photo => ({
  src: `/retro/${name}.webp`,
  alt,
  w: 1000,
  h: 1000,
});

export const RETRO_PHOTOS = {
  psone: p(
    "psone",
    "PlayStation 1 Slim (PSone) branco com controle analógico na loja Life Games"
  ),
  ps1Fat: p(
    "ps1-fat",
    "PlayStation 1 Fat cinza na prateleira da Life Games, com o cartão da loja ao lado"
  ),
  superNintendo: p(
    "super-nintendo",
    "Super Nintendo com cartucho de Bubsy II encaixado, sobre a bancada da Life Games"
  ),
  megaDrive: p(
    "mega-drive",
    "Sega Mega Drive preto com cartucho de Mazin Saga encaixado"
  ),
  nintendo64: p(
    "nintendo-64",
    "Nintendo 64 com cartucho de International Superstar Soccer 64 encaixado"
  ),
} as const;
