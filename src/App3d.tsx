import { Header, type NavLink } from "./components/Header";
import { Hero3d } from "./components/impressao3d/Hero3d";
import { Pillars } from "./components/impressao3d/Pillars";
import { HowItWorks3d } from "./components/impressao3d/HowItWorks3d";
import { Gallery3d } from "./components/impressao3d/Gallery3d";
import { Why3d } from "./components/impressao3d/Why3d";
import { Faq3d } from "./components/impressao3d/Faq3d";
import { FinalCta3d } from "./components/impressao3d/FinalCta3d";
import { Footer } from "./components/Footer";
import { WhatsappFab } from "./components/WhatsappFab";
import { EcgScrollDivider } from "./components/ui/EcgLine";
import { WhatsappLinkProvider } from "./lib/whatsapp";
import { WHATSAPP_URL_3D } from "./lib/site";
import { useHashScroll } from "./hooks/useHashScroll";

// Navegação da página de Impressão 3D (âncoras locais + volta pra assistência).
const navLinks: NavLink[] = [
  { href: "#criacoes", label: "Criações" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#galeria", label: "Galeria" },
  { href: "#por-que", label: "Por que a Life Games" },
  { href: "#faq", label: "Perguntas frequentes" },
  { href: "#contato", label: "Contato" },
  { href: "/", label: "Assistência técnica", accent: true },
];

/** Página irmã da assistência técnica: /impressao-3d */
export default function App3d() {
  useHashScroll();

  return (
    <WhatsappLinkProvider url={WHATSAPP_URL_3D}>
      <div className="grain-overlay" aria-hidden="true" />
      <Header links={navLinks} />

      <main>
        <Hero3d />
        <Pillars />
        <EcgScrollDivider />
        <HowItWorks3d />
        <Gallery3d />
        <Why3d />
        <EcgScrollDivider />
        <Faq3d />
        <FinalCta3d />
      </main>

      <Footer />
      <WhatsappFab label="Encomendar pelo WhatsApp" />
    </WhatsappLinkProvider>
  );
}
