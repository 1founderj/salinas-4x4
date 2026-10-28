import { useI18n } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Journey() {
  const { tour } = useI18n();
  const { journey } = tour;

  return (
    <section id="journey" className="bg-saline py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.35em] text-terracotta">{journey.label}</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-volcanic">
            {journey.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone">{journey.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <ol className="relative space-y-10 border-l-2 border-mineral pl-8 sm:pl-10">
          {journey.steps.map((step, i) => {
            const confirmed = !/to be confirmed/i.test(step.time);
            return (
              <Reveal key={step.title} delay={i * 60} className="relative">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-1.5 -left-[41px] h-4 w-4 rounded-full border-2 sm:-left-[49px]",
                    confirmed ? "border-terracotta bg-terracotta" : "border-stone/50 bg-saline",
                  )}
                />
                <span
                  className={cn(
                    "inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wide",
                    confirmed ? "bg-terracotta/10 text-terracotta" : "bg-mineral/60 text-stone",
                  )}
                >
                  {step.time}
                </span>
                <h3 className="mt-2 text-lg font-bold text-volcanic">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone">{step.text}</p>
              </Reveal>
            );
          })}
          </ol>
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <figure className="overflow-hidden rounded-3xl">
              <img
                src={journey.image}
                alt={journey.imageCaption}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <figcaption className="sr-only">{journey.imageCaption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
