import { createContext, useContext, useState, type ReactNode } from "react";
import { languages, type TourContent, type TourLanguage } from "@/content";

type I18nValue = {
  /** Copy of the active language. */
  tour: TourContent;
  code: string;
  setCode: (code: string) => void;
  languages: TourLanguage[];
};

const I18nContext = createContext<I18nValue | null>(null);

/**
 * Minimal i18n provider. The whole copy lives in `src/content/<lang>.ts`,
 * so translating the site means adding one file and registering it in
 * `src/content/index.ts` — no component changes needed.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [code, setCode] = useState(languages[0]?.code ?? "en");
  const current = languages.find((l) => l.code === code) ?? languages[0];
  if (!current) throw new Error("No language registered in src/content/index.ts");
  return (
    <I18nContext.Provider
      value={{ tour: current.tour, code: current.code, setCode, languages }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <LanguageProvider>");
  return ctx;
}

/** Renders a language switcher; hidden until 2+ languages are registered. */
export function LanguageSwitch({ className }: { className?: string }) {
  const { code, setCode, languages: langs } = useI18n();
  if (langs.length < 2) return null;
  return (
    <div className={className} role="group" aria-label="Language">
      {langs.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setCode(l.code)}
          aria-pressed={l.code === code}
          className={`px-2 py-1 text-xs font-semibold tracking-widest uppercase transition-colors ${
            l.code === code ? "opacity-100" : "opacity-50 hover:opacity-80"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
