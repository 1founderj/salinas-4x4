import { Check, X } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

export function Pricing() {
  const { tour } = useI18n();
  const { pricing } = tour;

  return (
    <section id="price" className="bg-saline py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.35em] text-terracotta">{pricing.label}</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-volcanic">
            {pricing.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Price block */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-altiplano p-8 text-saline sm:p-10">
              <div>
                <p className="font-display text-6xl sm:text-7xl">{pricing.price}</p>
                <p className="mt-2 text-sm font-semibold tracking-wide text-saline/80 uppercase">
                  {pricing.priceUnit}
                </p>
              </div>
              <div className="mt-10 space-y-6">
                <p className="text-sm leading-relaxed text-saline/75">{pricing.usdNote}</p>
                <a
                  href="#booking"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-terracotta text-sm font-bold text-saline transition-colors hover:bg-terracotta/90"
                >
                  {pricing.cta}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Includes / excludes */}
          <Reveal delay={120}>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-3xl border border-border p-8">
                <h3 className="text-sm font-bold tracking-[0.2em] text-altiplano uppercase">
                  {pricing.includedTitle}
                </h3>
                <ul className="mt-5 space-y-4">
                  {pricing.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-volcanic">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-altiplano" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-border p-8">
                <h3 className="text-sm font-bold tracking-[0.2em] text-terracotta uppercase">
                  {pricing.notIncludedTitle}
                </h3>
                <ul className="mt-5 space-y-4">
                  {pricing.notIncluded.map((item) => (
                    <li key={item.text} className="flex items-start gap-3 text-sm text-volcanic">
                      <X aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                      <span>
                        {item.text}
                        <span className="block text-xs text-stone">{item.note}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-mineral/50 p-8 sm:col-span-2">
                <h3 className="text-sm font-bold tracking-[0.2em] text-volcanic uppercase">
                  {pricing.paymentsTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{pricing.payments}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
