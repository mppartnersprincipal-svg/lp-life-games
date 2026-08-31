import { Check } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { TiltCard } from "../ui/TiltCard";
import { WhatsappButton } from "../ui/Button";
import { RETRO_PHOTOS } from "../../lib/photosRetro";
import type { Photo } from "../../lib/photos3d";

type Console = {
  photo: Photo;
  brand: string;
  name: string;
  /** O que acompanha o console. */
  items: string[];
  /**
   * Preço em reais (ex.: "R$ 499"). Enquanto não informado, o card mostra
   * um placeholder visível [PREENCHER] — nunca um valor inventado.
   */
  price?: string;
};

const consoles: Console[] = [
  {
    photo: RETRO_PHOTOS.psone,
    brand: "Sony",
    name: "PlayStation 1 Slim (PSone)",
    price: "R$ 599,99",
    items: [
      "1 controle 1ª linha",
      "1 memory card",
      "Cabo RCA/AV",
      "Adaptador para TVs HDMI",
      "Fonte 220V",
      "5 jogos retrô à sua escolha",
    ],
  },
  {
    photo: RETRO_PHOTOS.psone,
    brand: "Sony",
    name: "PlayStation 1 Fat",
    price: "R$ 699,99",
    items: [
      "1 controle 1ª linha",
      "1 memory card",
      "Cabo RCA/AV",
      "Adaptador para TVs HDMI",
      "Fonte 220V",
      "5 jogos retrô à sua escolha",
    ],
  },
  {
    photo: RETRO_PHOTOS.superNintendo,
    brand: "Nintendo",
    name: "Super Nintendo Baby",
    price: "R$ 549,99",
    items: [
      "1 controle 1ª linha",
      "Cabo RCA/AV",
      "Adaptador para TVs HDMI",
      "Fonte 220V",
      "1 cartucho paralelo",
    ],
  },
  {
    photo: RETRO_PHOTOS.superNintendo,
    brand: "Nintendo",
    name: "Super Nintendo Fat",
    price: "R$ 699,99",
    items: [
      "1 controle 1ª linha",
      "Cabo RCA/AV",
      "Adaptador para TVs HDMI",
      "Fonte 220V",
      "1 cartucho paralelo",
    ],
  },
  {
    photo: RETRO_PHOTOS.megaDrive,
    brand: "Sega",
    name: "Mega Drive 3",
    price: "R$ 499,99",
    items: [
      "1 controle 1ª linha",
      "Cabo AV",
      "Fonte interna 220V",
      "1 cartucho paralelo",
    ],
  },
  {
    photo: RETRO_PHOTOS.nintendo64,
    brand: "Nintendo",
    name: "Nintendo 64",
    price: "R$ 699,99",
    items: [
      "1 controle original",
      "Fonte original",
      "Cabo AV",
      "1 cartucho original",
    ],
  },
];

function Price({ value }: { value?: string }) {
  if (!value) {
    return (
      <span className="placeholder-fill font-display text-sm font-semibold">
        R$ [PREENCHER]
      </span>
    );
  }
  return (
    <span className="font-display text-2xl font-bold text-white sm:text-3xl">
      {value}
    </span>
  );
}

export function Consoles() {
  return (
    <Section id="consoles">
      <SectionHeading
        eyebrow="Consoles"
        title="Escolha o seu clássico"
        subtitle="Cada console sai da loja limpo internamente e externamente, rigorosamente testado e com tudo que você precisa pra jogar no mesmo dia."
      />

      <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {consoles.map(({ photo, brand, name, items, price }) => (
          <RevealItem key={name}>
            <TiltCard className="group card-surface flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-cyan/60 active:border-cyan/60">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.w}
                  height={photo.h}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                  {brand}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold text-white sm:text-xl">
                  {name}
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-cyan"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">
                      Por apenas
                    </p>
                    <Price value={price} />
                  </div>
                  <WhatsappButton
                    source="consoles"
                    variant="ghost"
                    icon={false}
                    className="!min-h-[44px] !px-4 !py-2 text-sm"
                  >
                    Quero esse
                  </WhatsappButton>
                </div>
              </div>
            </TiltCard>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-10 text-center" delay={0.1}>
        <p className="text-sm text-muted">
          Estoque limitado: cada console é único. Chame no WhatsApp pra
          confirmar disponibilidade.
        </p>
      </Reveal>
    </Section>
  );
}
