import { useI18n } from "@/i18n/LanguageProvider";
import logoAsset from "@/assets/lonko-hostel-logo.png.asset.json";

const NAV = [
  { href: "#experience", key: "journey" },
  { href: "#landscape", key: "landscape" },
  { href: "#price", key: "price" },
  { href: "#faq", key: "faq" },
  { href: "#booking", key: "book" },
] as const;

export function Footer() {
  const { tour } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-volcanic pt-16 pb-10 text-saline">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex shrink-0 rounded-full bg-saline p-0.5">
                <img
                  src={logoAsset.url}
                  alt={tour.brand.logoAlt}
                  width={44}
                  height={44}
                  loading="lazy"
                  className="h-10 w-10 rounded-full"
                />
              </span>
              <div>
                <p className="text-sm font-extrabold tracking-[0.18em]">{tour.brand.name}</p>
                <p className="text-xs text-saline/60">{tour.brand.by}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-saline/70">
              {tour.footer.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-xs font-bold tracking-[0.25em] text-saline/50 uppercase">
              {tour.footer.navTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="text-sm text-saline/80 transition-colors hover:text-terracotta"
                  >
                    {tour.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold tracking-[0.25em] text-saline/50 uppercase">
              {tour.footer.contactTitle}
            </h3>
            <p className="mt-4 text-sm text-saline/70">{tour.footer.contactPending}</p>
            <h3 className="mt-8 text-xs font-bold tracking-[0.25em] text-saline/50 uppercase">
              {tour.footer.legalTitle}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-saline/70">{tour.footer.legal}</p>
          </div>
        </div>

        <div className="mt-14 border-t border-saline/10 pt-6">
          <p className="text-xs text-saline/50">
            © {year} {tour.brand.name} {tour.brand.by}. {tour.footer.rights}
          </p>
          <p className="mt-2 text-xs text-saline/40">{tour.footer.creditLine}</p>
        </div>
      </div>
    </footer>
  );
}
