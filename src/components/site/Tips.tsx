import { useI18n } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

export function Tips() {
  const { tour } = useI18n();
  const { tips } = tour;

  return (
    <section id="tips" className="bg-mineral/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.35em] text-terracotta">{tips.label}</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-volcanic">
            {tips.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tips.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="h-full rounded-3xl border border-border bg-saline p-8">
                <h3 className="text-lg font-bold text-volcanic">{item.title}</h3>
                <ul className="mt-4 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-stone">
                      <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-terracotta" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <p className="mt-8 text-xs text-stone">{tips.disclaimer}</p>
        </Reveal>
      </div>
    </section>
  );
}
