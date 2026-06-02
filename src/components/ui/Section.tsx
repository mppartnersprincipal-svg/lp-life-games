import type { ReactNode } from "react";

/** Seção semântica com padding e largura máxima consistentes (mobile-first). */
export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={`relative z-[2] scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:py-28 ${className}`}
    >
      <div className={`mx-auto w-full max-w-6xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

/** Cabeçalho de seção: eyebrow opcional + título + subtítulo. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      {eyebrow && (
        <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
