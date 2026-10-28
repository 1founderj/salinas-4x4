import { useI18n } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

export function Landscape() {
  const { tour } = useI18n();
  const { landscape } = tour;

  return (
    <section id="landscape" className="bg-volcanic py-20 text-saline sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.35em] text-terracotta">
            {landscape.label}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-tight text-saline">
            {landscape.title}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <figure className="mt-12 overflow-hidden rounded-3xl">
            <img
              src={landscape.image}
              alt={landscape.imageCaption}
              loading="lazy"
              className="aspect-[21/9] w-full object-cover"
            />
            <figcaption className="sr-only">{landscape.imageCaption}</figcaption>
          </figure>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            {landscape.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-base leading-relaxed text-saline/80">{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <ul className="space-y-4 border-t border-saline/15 pt-8 lg:border-t-0 lg:pt-0">
              {landscape.facts.map((fact) => (
                <li key={fact} className="flex items-start gap-3 text-sm font-medium text-saline/90">
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-terracotta" />
                  {fact}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
