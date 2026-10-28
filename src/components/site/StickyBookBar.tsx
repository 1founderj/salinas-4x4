import { useI18n } from "@/i18n/LanguageProvider";

/** Persistent booking bar on mobile — never covers the page content (safe-area aware). */
export function StickyBookBar() {
  const { tour } = useI18n();
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-saline/10 bg-volcanic md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex h-16 items-center justify-between gap-3 px-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-saline">{tour.pricing.price}</p>
          <p className="truncate text-[11px] text-saline/70">{tour.pricing.priceUnit}</p>
        </div>
        <a
          href="#booking"
          className="inline-flex h-11 shrink-0 items-center rounded-full bg-terracotta px-6 text-sm font-bold text-saline"
        >
          {tour.nav.book}
        </a>
      </div>
    </div>
  );
}
