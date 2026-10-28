import { useI18n } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

export function FinalCta() {
  const { tour } = useI18n();
  const { finalCta } = tour;

  return (
    <section className="relative flex items-center overflow-hidden bg-volcanic">
      <img
        src={finalCta.image}
        alt={finalCta.imageCaption}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-volcanic/80" />
      <div className="relative mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 sm:py-36">
        <Reveal>
          <h2 className="font-display text-[clamp(2.1rem,5vw,3.75rem)] leading-tight text-saline">
            {finalCta.title}
          </h2>
          <p className="mt-5 text-sm font-semibold tracking-wide text-saline/85 sm:text-base">
            {finalCta.text}
          </p>
          <a
            href="#booking"
            className="mt-9 inline-flex h-13 items-center rounded-full bg-terracotta px-9 py-4 text-base font-bold text-saline transition-all hover:-translate-y-0.5 hover:bg-terracotta/90"
          >
            {finalCta.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
