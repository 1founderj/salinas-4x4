import { useI18n } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

// Aspect ratios matched to the photo orientations: vertical (3/4) photos
// first, horizontal (4/3) photos second, so originals render without cropping.
const ASPECTS = ["aspect-[3/4]", "aspect-[3/4]", "aspect-[4/3]", "aspect-[4/3]"];

export function Highlights() {
  const { tour } = useI18n();
  const { highlights } = tour;

  return (
    <section id="highlights" className="bg-mineral/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.35em] text-terracotta">
            {highlights.label}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-volcanic">
            {highlights.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2">
          {highlights.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 100} className={cn(i % 2 === 1 && "sm:mt-16")}>
              <figure>
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className={cn("w-full object-cover transition-transform duration-700 hover:scale-[1.03]", ASPECTS[i % ASPECTS.length])}
                  />
                </div>
                <figcaption className="mt-5">
                  <span className="font-display text-sm text-terracotta">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-volcanic">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{item.text}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
