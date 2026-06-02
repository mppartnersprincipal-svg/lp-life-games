import { useEffect, useState } from "react";

export type TypewriterSegment = {
  text: string;
  /** classes aplicadas a esse trecho (ex.: cor/itálico) */
  className?: string;
};

interface TypewriterProps {
  segments: TypewriterSegment[];
  /** ms por caractere (menor = mais rápido) */
  speed?: number;
  /** atraso antes de começar a digitar, em ms */
  startDelay?: number;
  className?: string;
}

/**
 * Efeito "máquina de escrever" leve, sem dependências externas.
 *
 * - Revela um caractere por vez com um único `setTimeout` encadeado
 *   (nada de loop de `requestAnimationFrame` rodando à toa).
 * - O texto completo permanece no DOM, apenas transparente, para
 *   reservar o espaço final desde o primeiro frame — zero layout
 *   shift (CLS) e nenhum reflow a cada letra.
 * - Acessível: o título completo é lido via `aria-label` e as partes
 *   animadas ficam `aria-hidden`.
 */
export function Typewriter({
  segments,
  speed = 42,
  startDelay = 250,
  className,
}: TypewriterProps) {
  const fullText = segments.map((s) => s.text).join("");
  const total = fullText.length;

  const [count, setCount] = useState(0);
  const done = count >= total;

  useEffect(() => {
    let i = 0;
    let timer = window.setTimeout(function tick() {
      i += 1;
      setCount(i);
      if (i < total) timer = window.setTimeout(tick, speed);
    }, startDelay);

    return () => window.clearTimeout(timer);
  }, [total, speed, startDelay]);

  // Offset acumulado por segmento para saber quanto já foi digitado
  let consumed = 0;

  return (
    <span className={className} aria-label={fullText}>
      {segments.map((seg, idx) => {
        const shown = Math.max(0, Math.min(seg.text.length, count - consumed));
        consumed += seg.text.length;
        const visible = seg.text.slice(0, shown);
        const hidden = seg.text.slice(shown);

        return (
          <span key={idx} className={seg.className} aria-hidden="true">
            {visible}
            {/* trecho ainda não digitado: ocupa espaço mas é invisível */}
            {hidden && <span className="opacity-0">{hidden}</span>}
          </span>
        );
      })}

      {!done && <span className="typewriter-caret" aria-hidden="true" />}
    </span>
  );
}
