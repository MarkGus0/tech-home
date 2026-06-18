import { pages, site, type Locale, type PageId } from "@data/site";
import { translations } from "@data/translations";

export function t(key: string, locale: Locale) {
  const dictionary = translations as Record<string, Record<Locale, string>>;
  return dictionary[key]?.[locale] ?? key;
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
