import { useI18n } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

export function Intro() {
  const { tour } = useI18n();
  const { intro } = tour;

  return (
    <section id="experience" className="bg-saline py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="text-xs font-bold tracking-[0.35em] text-terracotta">{intro.label}</p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-volcanic">
              {intro.title}
            </h2>
          </Reveal>
          <div className="mt-6 space-y-4">
            {intro.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-base leading-relaxed text-stone">{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {intro.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl text-volcanic sm:text-3xl">{s.value}</dd>
                  <dd className="mt-1 text-[11px] font-semibold tracking-wide text-stone uppercase">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Reveal className="lg:pl-8">
          <figure className="overflow-hidden rounded-3xl">
            <img
              src={intro.image}
              alt={intro.imageCaption}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <figcaption className="sr-only">{intro.imageCaption}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
