import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { WhatsappButton } from "../ui/Button";
import { EcgHeroPulse } from "../ui/EcgLine";

export function FinalCtaRetro() {
  return (
    <Section id="contato">
      <Reveal>
        <div className="bg-depth relative overflow-hidden rounded-3xl border border-cyan/20 px-6 py-14 text-center shadow-[0_20px_80px_-30px_rgba(108,199,212,0.5)] sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-40">
            <EcgHeroPulse className="h-28 w-full sm:h-40" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-glow-cyan text-2xl font-bold text-white sm:text-4xl">
              Qual console marcou a sua infância?
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Chama no WhatsApp, confirma a disponibilidade e escolhe os jogos.
              Resposta rápida, sem compromisso.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsappButton source="final_cta" className="w-full sm:w-auto">
                Garantir o meu pelo WhatsApp
              </WhatsappButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
