import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";
import { bookingLink } from "@/content/site";
import logoAsset from "@/assets/lonko-hostel-logo.png.asset.json";
import { LanguageSwitch } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#journey", key: "journey" },
  { href: "#landscape", key: "landscape" },
  { href: "#price", key: "price" },
  { href: "#faq", key: "faq" },
] as const;

export function Header() {
  const { tour } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const booking = bookingLink();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-saline/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto grid h-16 w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:flex sm:justify-between sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logoAsset.url}
            alt={tour.brand.logoAlt}
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-full ring-1 ring-volcanic/15"
          />
          <span className="min-w-0">
            <span className="block truncate text-[11px] font-extrabold tracking-[0.14em] text-volcanic sm:text-[13px] sm:tracking-[0.18em]">
              {tour.brand.name}
            </span>
            <span className="block text-[10px] font-medium tracking-wide text-stone sm:text-[11px]">
              {tour.brand.by}
            </span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-1 sm:gap-4">
          <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-semibold text-volcanic/80 transition-colors hover:text-terracotta"
              >
                {tour.nav[item.key]}
              </a>
            ))}
          </nav>
          <LanguageSwitch className="hidden md:flex" />
          {booking.enabled ? (
            <a
              href={booking.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-terracotta px-5 text-sm font-bold text-saline transition-colors hover:bg-terracotta/90"
            >
              {tour.nav.book}
            </a>
          ) : (
            <a
              href="#booking"
              className="inline-flex h-11 items-center rounded-full bg-terracotta px-5 text-sm font-bold text-saline transition-colors hover:bg-terracotta/90"
            >
              {tour.nav.book}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
