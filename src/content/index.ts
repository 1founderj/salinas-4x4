import { en, type TourContent } from "./en";

export type { TourContent } from "./en";

export type TourLanguage = {
  /** ISO language code, also used as the switcher value. */
  code: string;
  /** Label shown in the language switcher. */
  label: string;
  tour: TourContent;
};

/**
 * REGISTER LANGUAGES HERE.
 *
 * The site renders the first language by default. To add Spanish:
 *   1. Duplicate `src/content/en.ts` as `es.ts` and translate the strings.
 *   2. Import it here and push `{ code: "es", label: "Español", tour: es }`.
 * A language switcher appears automatically once 2+ languages are registered.
 */
export const languages: TourLanguage[] = [{ code: "en", label: "English", tour: en }];
