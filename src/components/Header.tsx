import { WhatsappButton } from "./ui/Button";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center" aria-label="Life Games — início">
          <img
            src="/logo.jpeg"
            alt="Life Games"
            width={132}
            height={60}
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-muted md:inline">
            Orçamento sem compromisso
          </span>
          <WhatsappButton source="header" className="!min-h-[44px] !px-4 !py-2 text-sm">
            Chamar no WhatsApp
          </WhatsappButton>
        </div>
      </div>
    </header>
  );
}
