import { Swords, Wand2, Gamepad2, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { TiltCard } from "../ui/TiltCard";
import { Chips } from "../ui/Chips";
import { WhatsappButton } from "../ui/Button";
import { PHOTOS, type Photo } from "../../lib/photos3d";

type Pillar = {
  icon: LucideIcon;
  photo: Photo;
  category: string;
  title: string;
  text: string;
  chips?: string[];
  chipsLabel?: string;
  /** Card em destaque (Action Figure Personalizada). */
  featured?: boolean;
  /** Largura do card no grid assimétrico (lg: 5 colunas). */
  span: string;
};

const pillars: Pillar[] = [
  {
    icon: Swords,
    photo: PHOTOS.darthVader,
    category: "Action figures",
    title: "Sua coleção, do game à estante",
    text: "Grande variedade de action figures nos temas que você ama: games, filmes e animes. Do herói ao vilão favorito, a peça certa pra sua coleção.",
    span: "lg:col-span-2",
  },
  {
    icon: Wand2,
    photo: PHOTOS.marioCustom,
    category: "Action figure personalizada",
    title: "Sua action figure, sob medida",
    text: "A peça exclusiva que não existe em loja nenhuma. Você escolhe o personagem, o modelo e o tamanho, e a gente cria do zero.",
    chips: ["Personagem", "Modelo", "Tamanho"],
    chipsLabel: "Você escolhe: personagem, modelo e tamanho",
    featured: true,
    span: "lg:col-span-3",
  },
  {
    icon: Gamepad2,
    photo: PHOTOS.suporteHeadset,
    category: "Suportes e organizadores",
    title: "Organize e exiba seu setup",
    text: "Suportes para controles, consoles, jogos, headset e acessórios. Você escolhe o tema, o formato e a cor.",
    chips: ["Tema", "Formato", "Cor"],
    chipsLabel: "Você escolhe: tema, formato e cor",
    span: "lg:col-span-3",
  },
  {
    icon: Lightbulb,
    photo: PHOTOS.pecasCaveira,
    category: "Soluções 3D gamer & geek",
    title: "Ideias que só o 3D resolve",
    text: "Porta-chaves, porta-canetas, suporte para placa de vídeo, grade de fans e muito mais. Se dá pra imprimir, a gente faz.",
    span: "lg:col-span-2",
  },
];

export function Pillars() {
  return (
    <Section id="criacoes">
      <SectionHeading
        eyebrow="Criações"
        title="O que a Life Games imprime pra você"
      />

      {/* Grid assimétrico (bento): o card personalizado ocupa mais espaço */}
      <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {pillars.map(({ icon: Icon, photo, category, title, text, chips, chipsLabel, featured, span }) => (
          <RevealItem key={title} className={span}>
            <TiltCard
              maxTilt={featured ? 4 : 6}
              className={`group flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300 ${
                featured
                  ? "border border-cyan/40 bg-gradient-to-b from-cyan/[0.09] to-white/[0.02] glow-cyan"
                  : "card-surface hover:border-cyan/60 active:border-cyan/60"
              }`}
            >
              {/* Foto da peça — traz a cor; o frame continua dark */}
              <div
                className={`relative overflow-hidden ${
                  featured ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[16/10]"
                }`}
              >
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

              <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    featured ? "bg-cyan/20 text-cyan-glow" : "bg-cyan/10 text-cyan"
                  }`}
                >
                  <Icon size={26} aria-hidden="true" />
                </span>
                {featured && (
                  <span className="rounded-full bg-red px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_14px_rgba(230,51,41,0.5)]">
                    Sob encomenda
                  </span>
                )}
              </div>

              <p className="mt-4 font-display text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                {category}
              </p>
              <h3
                className={`mt-1.5 font-display font-bold text-white ${
                  featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                }`}
              >
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>

              {chips && <Chips items={chips} label={chipsLabel} className="mt-5" />}
              </div>
            </TiltCard>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* CTA repetido logo após os pilares */}
      <Reveal className="mt-10 text-center" delay={0.1}>
        <WhatsappButton source="pillars" variant="ghost">
          Tem uma ideia diferente? Manda no WhatsApp →
        </WhatsappButton>
      </Reveal>
    </Section>
  );
}
