import { pages, site, type Locale, type PageId } from "@data/site";
import { translations } from "@data/translations";

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, locale: Locale) {
  return translations[key][locale];
}

export function pagePath(page: PageId, locale: Locale) {
  return pages[page].paths[locale];
}

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

export function oppositeLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
}

export function languageName(locale: Locale) {
  return locale === "zh" ? "EN" : "中文";
}
