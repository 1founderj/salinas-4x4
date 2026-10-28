import { MessageCircle } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";
import { bookingLink } from "@/content/site";
import { Reveal } from "./Reveal";

export function Booking() {
  const { tour } = useI18n();
  const { booking } = tour;
  const link = bookingLink();

  return (
    <section id="booking" className="bg-altiplano py-20 text-saline sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.35em] text-terracotta">{booking.label}</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-saline">
            {booking.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {booking.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <div className="h-full rounded-3xl border border-saline/15 p-7">
                <h3 className="text-base font-bold text-saline">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-saline/75">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border-2 border-terracotta/60 bg-terracotta/10 p-8">
              <h3 className="text-sm font-bold tracking-[0.2em] text-terracotta uppercase">
                {booking.policyTitle}
              </h3>
              <p className="mt-3 text-base font-semibold text-saline">{booking.policy}</p>
              <p className="mt-2 text-sm text-saline/70">{booking.policyNote}</p>
            </div>
            <div className="rounded-3xl border border-saline/15 p-8">
              <h3 className="text-sm font-bold tracking-[0.2em] text-saline/90 uppercase">
                {booking.infoTitle}
              </h3>
              <ul className="mt-4 space-y-3">
                {booking.info.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-saline/80">
                    <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-terracotta" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            {link.enabled ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-3 rounded-full bg-terracotta px-9 text-base font-bold text-saline transition-all hover:-translate-y-0.5 hover:bg-terracotta/90"
              >
                <MessageCircle aria-hidden="true" className="h-5 w-5" />
                {booking.cta}
              </a>
            ) : (
              <>
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="inline-flex h-14 cursor-not-allowed items-center gap-3 rounded-full bg-terracotta/50 px-9 text-base font-bold text-saline"
                >
                  <MessageCircle aria-hidden="true" className="h-5 w-5" />
                  {booking.ctaPending}
                </button>
                <p className="text-sm text-saline/70">{booking.pendingNote}</p>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
