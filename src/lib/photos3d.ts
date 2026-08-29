/**
 * Fotos reais das peças 3D (public/3d/*.webp), com dimensões para reservar
 * espaço no layout (sem CLS). Convertidas de "Fotos Action Figures".
 */
export type Photo = { src: string; alt: string; w: number; h: number };

const p = (name: string, alt: string, w: number, h: number): Photo => ({
  src: `/3d/${name}.webp`,
  alt,
  w,
  h,
});

export const PHOTOS = {
  subZeroBusto: p("sub-zero-busto", "Busto do Sub-Zero (Mortal Kombat) impresso em 3D e pintado à mão", 871, 1100),
  bowser: p("bowser", "Action figure do Bowser (Super Mario) impressa em 3D", 900, 972),
  harleyQuinn: p("harley-quinn", "Action figure da Arlequina impressa em 3D com base personalizada", 883, 1100),
  joelEllie: p("joel-ellie", "Action figure de Joel e Ellie (The Last of Us) impressa em 3D", 900, 1039),
  darthVader: p("darth-vader", "Action figure do Darth Vader impressa em 3D na loja Life Games", 900, 900),
  marioCustom: p("mario-custom", "Action figure personalizada do Mario com camisa da Itália", 900, 866),
  subZero: p("sub-zero", "Action figure do Sub-Zero em base de gelo impressa em 3D", 602, 1100),
  wolverine: p("wolverine", "Action figure do Wolverine impressa em 3D", 619, 1100),
  round6: p("round-6", "Trio de soldados de Round 6 impressos em 3D em base com símbolos", 719, 1100),
  nemesis: p("nemesis", "Action figure do Nemesis (Resident Evil) impressa em 3D", 900, 950),
  laraCroft: p("lara-croft", "Action figure da Lara Croft impressa em 3D", 825, 1100),
  suporteBulletBill: p("suporte-bullet-bill", "Suporte de controle temático do Bullet Bill impresso em 3D", 900, 1066),
  suporteHeadset: p("suporte-headset", "Suporte de headset temático de PS5 impresso em 3D", 873, 1100),
  suportesGodOfWar: p("suportes-god-of-war", "Suportes de controle com o símbolo de God of War em várias cores", 900, 642),
  suportesConsoles: p("suportes-consoles", "Suportes de controle com logos de PlayStation, Xbox e Nintendo", 900, 506),
  pecasCaveira: p("pecas-caveira", "Peças 3D: caveira, suportes com logos de GTA, Assassin's Creed e Fortnite", 900, 506),
} as const;
