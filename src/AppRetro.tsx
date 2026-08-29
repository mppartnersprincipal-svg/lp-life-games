import { Header, type NavLink } from "./components/Header";
import { HeroRetro } from "./components/retro/HeroRetro";
import { Consoles } from "./components/retro/Consoles";
import { Extras } from "./components/retro/Extras";
import { WhyRetro } from "./components/retro/WhyRetro";
import { FaqRetro } from "./components/retro/FaqRetro";
import { FinalCtaRetro } from "./components/retro/FinalCtaRetro";
import { Footer } from "./components/Footer";
import { WhatsappFab } from "./components/WhatsappFab";
import { EcgScrollDivider } from "./components/ui/EcgLine";
import { WhatsappLinkProvider } from "./lib/whatsapp";
import { WHATSAPP_URL_RETRO } from "./lib/site";
import { useHashScroll } from "./hooks/useHashScroll";

// Navegação da página de Videogames Retrô (âncoras locais + outras landings).
const navLinks: NavLink[] = [
  { href: "#consoles", label: "Consoles" },
  { href: "#jogos-e-acessorios", label: "Jogos e acessórios" },
  { href: "#por-que", label: "Por que a Life Games" },
  { href: "#faq", label: "Perguntas frequentes" },
  { href: "#contato", label: "Contato" },
  { href: "/", label: "Assistência técnica", accent: true },
  { href: "/impressao-3d", label: "Impressão 3D", accent: true },
];

/** Página irmã da assistência técnica: /videogame-retro */
export default function AppRetro() {
  useHashScroll();

  return (
    <WhatsappLinkProvider url={WHATSAPP_URL_RETRO}>
      <div className="grain-overlay" aria-hidden="true" />
      <Header links={navLinks} />

      <main>
        <HeroRetro />
        <Consoles />
        <EcgScrollDivider />
        <Extras />
        <WhyRetro />
        <EcgScrollDivider />
        <FaqRetro />
        <FinalCtaRetro />
      </main>

      <Footer />
      <WhatsappFab label="Falar no WhatsApp" />
    </WhatsappLinkProvider>
  );
}
