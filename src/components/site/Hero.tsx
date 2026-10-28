import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const ROTATE_MS = 7000;

export function Hero() {
  const { tour } = useI18n();
  const slides = tour.hero.slides;
  const [active, setActive] = useState(0);
  const current = slides[active] ?? slides[0];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), ROTATE_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  if (!current) return null;

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-mineral">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.headline}
          aria-hidden={i !== active}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-out",
            i === active ? "opacity-100" : "opacity-0",
          )}
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
          />
        </div>
      ))}

      {/* Legibility overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-volcanic/90 via-volcanic/55 to-volcanic/25"
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-32 sm:px-6 md:pb-28">
        <p className="text-xs font-bold tracking-[0.35em] text-saline/80">
          {current.label}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,7vw,4.75rem)] leading-[1.05] text-saline">
          {current.headline}
        </h1>
        <p className="mt-5 max-w-xl text-base text-saline/90 sm:text-lg">
          {current.subheadline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center rounded-full border border-saline/40 px-4 py-2 text-sm font-bold text-saline">
            {tour.hero.price}
          </span>
          <span className="text-xs font-medium text-saline/70">{tour.hero.priceNote}</span>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#booking"
            className="inline-flex h-12 items-center rounded-full bg-terracotta px-7 text-sm font-bold text-saline shadow-lg shadow-volcanic/30 transition-all hover:-translate-y-0.5 hover:bg-terracotta/90"
          >
            {tour.hero.ctaPrimary}
          </a>
          <a
            href="#journey"
            className="inline-flex h-12 items-center rounded-full border border-saline/50 px-7 text-sm font-bold text-saline transition-colors hover:border-saline hover:bg-saline/10"
          >
            {tour.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute right-4 bottom-6 z-10 flex gap-2 sm:right-6" role="tablist" aria-label="Hero slides">
        {slides.map((slide, i) => (
          <button
            key={slide.headline}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={slide.headline}
            onClick={() => setActive(i)}
            className={cn(
              "h-2.5 w-2.5 rounded-full border border-saline/70 transition-all",
              i === active ? "scale-110 bg-saline" : "bg-transparent hover:bg-saline/40",
            )}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-saline/80 md:flex">
        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase">
          {tour.hero.scrollHint}
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 animate-slow-bob"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
