import { Phone, Instagram, Facebook, MapPin, Clock, ExternalLink } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, SOCIAL, STORE } from "../lib/site";
import { useWhatsappUrl } from "../lib/whatsapp";
import { trackWhatsappClick } from "../lib/analytics";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

// Páginas do site — linkadas no rodapé de todas as landings.
const pages = [
  { href: "/", label: "Assistência técnica de videogames" },
  { href: "/impressao-3d", label: "Impressão 3D gamer e geek" },
  { href: "/videogame-retro", label: "Videogames retrô" },
];

export function Footer() {
  const whatsappUrl = useWhatsappUrl();

  return (
    <footer className="relative z-[2] border-t border-white/10 bg-bg-2 px-4 pb-28 pt-12 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <img
            src="/logo.jpeg"
            alt="Life Games"
            width={160}
            height={73}
            className="h-12 w-auto"
            loading="lazy"
          />
          <p className="mt-4 max-w-xs text-sm text-muted">
            Conserto e reparo de hardware de videogames, impressão 3D gamer e
            geek e consoles retrô. Loja física em Goiânia.
          </p>
          <nav aria-label="Páginas do site" className="mt-5">
            <ul className="space-y-2 text-sm">
              {pages.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-white/90 hover:text-cyan">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="text-sm">
          <h3 className="font-display font-semibold uppercase tracking-wider text-cyan">
            Contato
          </h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsappClick("footer")}
                className="inline-flex items-center gap-2 text-white/90 hover:text-cyan"
              >
                <WhatsAppIcon size={18} />
                WhatsApp: {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 text-white/90 hover:text-cyan"
              >
                <Phone size={18} aria-hidden="true" />
                Ligar: {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={STORE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 text-white/90 hover:text-cyan"
              >
                <MapPin size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{STORE.address}</span>
              </a>
            </li>
            <li className="flex items-start gap-2 text-muted">
              <Clock size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>
                {STORE.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <h3 className="font-display font-semibold uppercase tracking-wider text-cyan">
            Redes & loja
          </h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={SOCIAL.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 hover:text-cyan"
              >
                <Instagram size={18} aria-hidden="true" />
                {SOCIAL.instagram.handle}
              </a>
            </li>
            <li>
              <a
                href={SOCIAL.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 hover:text-cyan"
              >
                <Facebook size={18} aria-hidden="true" />
                {SOCIAL.facebook.handle}
              </a>
            </li>
            <li>
              <a
                href={SOCIAL.store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 hover:text-cyan"
              >
                <ExternalLink size={18} aria-hidden="true" />
                {SOCIAL.store.label}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Life Games. Todos os direitos reservados.
      </div>
    </footer>
  );
}
