import { Section, SectionHeading } from "../ui/Section";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { PHOTOS, type Photo } from "../../lib/photos3d";

/** Galeria em mosaico (masonry via CSS columns) com fotos reais das peças. */
const tiles: { photo: Photo; caption: string }[] = [
  { photo: PHOTOS.subZeroBusto, caption: "Busto Sub-Zero" },
  { photo: PHOTOS.bowser, caption: "Bowser" },
  { photo: PHOTOS.suportesGodOfWar, caption: "Suportes God of War" },
  { photo: PHOTOS.harleyQuinn, caption: "Arlequina" },
  { photo: PHOTOS.nemesis, caption: "Nemesis" },
  { photo: PHOTOS.round6, caption: "Round 6" },
  { photo: PHOTOS.joelEllie, caption: "Joel & Ellie" },
  { photo: PHOTOS.suportesConsoles, caption: "Suportes de controle" },
  { photo: PHOTOS.wolverine, caption: "Wolverine" },
  { photo: PHOTOS.laraCroft, caption: "Lara Croft" },
];

export function Gallery3d() {
  return (
    <Section id="galeria" className="bg-bg-2/40">
      <SectionHeading
        eyebrow="Galeria"
        title="Feito de verdade"
        subtitle="Peças que saíram das nossas impressoras e já estão na estante de alguém."
      />

      <RevealGroup className="mt-10 columns-2 gap-3 sm:columns-3 sm:gap-4" stagger={0.06}>
        {tiles.map(({ photo, caption }) => (
          <RevealItem
            key={photo.src}
            className="group relative mb-3 break-inside-avoid overflow-hidden rounded-2xl border border-cyan/15 bg-bg-2 sm:mb-4"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
            />
            {/* legenda sutil no rodapé do tile */}
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg-2/90 to-transparent px-3 pb-2.5 pt-8 font-display text-xs font-semibold uppercase tracking-wider text-white/90">
              {caption}
            </span>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
