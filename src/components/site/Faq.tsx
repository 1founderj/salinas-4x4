import { useI18n } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Faq() {
  const { tour } = useI18n();
  const { faq } = tour;

  return (
    <section id="faq" className="bg-saline py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.35em] text-terracotta">{faq.label}</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-volcanic">
            {faq.title}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faq.items.map((item, i) => (
              <details key={i} className="group">
                <summary
                  className={cn(
                    "flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-5",
                    "text-left font-semibold text-volcanic transition-colors hover:text-terracotta",
                  )}
                >
                  <span className="text-base">{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-terracotta transition-transform duration-300 group-open:rotate-45"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-stone">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
