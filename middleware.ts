import { next } from "@vercel/functions";
import { pages } from "./src/data/site";

const LANGUAGE_COOKIE = "techflows_locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const SUPPORTED_LOCALES = new Set(["zh", "en"]);
const VARY_VALUE = "Cookie";

const englishPagePaths = new Set(Object.values(pages).map((page) => page.paths.zh));

function withTrailingSlash(pathname: string) {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function isStaticOrSystemPath(pathname: string) {
  return (
    pathname.startsWith("/_astro/") ||
    pathname.startsWith("/_vercel/") ||
    pathname.startsWith("/assets/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/.well-known/") ||
    pathname === "/favicon.svg" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/llms.txt" ||
    /\.[a-z0-9]+$/i.test(pathname)
  );
}

function localeFromValue(value: string | null) {
  const locale = value?.trim().toLowerCase();
  return locale && SUPPORTED_LOCALES.has(locale) ? locale : null;
}

function preferredLocaleFromCookie(request: Request) {
  const cookie = request.headers.get("cookie") ?? "";
  const match = cookie.match(new RegExp(`(?:^|;\\s*)${LANGUAGE_COOKIE}=([^;]+)`));

  try {
    return localeFromValue(match ? decodeURIComponent(match[1]) : null);
  } catch {
    return null;
  }
}

function preferenceHeaders(locale: string, url: URL) {
  const headers = new Headers();
  const cookie = [
    `${LANGUAGE_COOKIE}=${encodeURIComponent(locale)}`,
    "Path=/",
    `Max-Age=${COOKIE_MAX_AGE}`,
    "SameSite=Lax",
    "HttpOnly"
  ];

  if (url.protocol === "https:") {
    cookie.push("Secure");
  }

  headers.set("Set-Cookie", cookie.join("; "));
  headers.set("Vary", VARY_VALUE);
  return headers;
}

function englishPathFor(pathname: string) {
  const normalizedPath = withTrailingSlash(pathname);

  if (normalizedPath === "/en/" || normalizedPath.startsWith("/en/")) {
    return normalizedPath;
  }

  if (englishPagePaths.has(normalizedPath)) {
    return normalizedPath === "/" ? "/en/" : `/en${normalizedPath}`;
  }

  if (normalizedPath.startsWith("/go/")) {
    return `/en${normalizedPath}`;
  }

  return null;
}

function chinesePathFor(pathname: string) {
  const normalizedPath = withTrailingSlash(pathname);

  if (normalizedPath === "/en/") {
    return "/";
  }

  if (normalizedPath.startsWith("/en/go/")) {
    return normalizedPath.slice(3);
  }

  if (normalizedPath.startsWith("/en/")) {
    const chinesePath = normalizedPath.slice(3);
    return englishPagePaths.has(chinesePath) ? chinesePath : null;
  }

  return normalizedPath;
}

function localizedPathFor(pathname: string, locale: string) {
  return locale === "en" ? englishPathFor(pathname) : chinesePathFor(pathname);
}

function redirectWithPreference(url: URL, locale: string) {
  const destination = new URL(url);
  const localizedPath = localizedPathFor(destination.pathname, locale);

  if (localizedPath) {
    destination.pathname = localizedPath;
  }

  destination.searchParams.delete("lang");

  const headers = preferenceHeaders(locale, destination);
  headers.set("Location", destination.toString());

  return new Response(null, { status: 302, headers });
}

function redirectToEnglish(url: URL) {
  const englishPath = englishPathFor(url.pathname);
  if (!englishPath) {
    return next();
  }

  const destination = new URL(url);
  destination.pathname = englishPath;
  const headers = new Headers();
  headers.set("Location", destination.toString());
  headers.set("Vary", VARY_VALUE);
  headers.set("Cache-Control", "private, no-store");

  return new Response(null, { status: 302, headers });
}

function methodNotAllowed() {
  return new Response("Method Not Allowed", {
    status: 405,
    headers: {
      "Allow": "GET, HEAD",
      "Cache-Control": "no-store",
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const { pathname } = url;

  if (request.method !== "GET" && request.method !== "HEAD") {
    return isStaticOrSystemPath(pathname) ? next() : methodNotAllowed();
  }

  if (isStaticOrSystemPath(pathname)) {
    return next();
  }

  const selectedLocale = localeFromValue(url.searchParams.get("lang"));
  if (selectedLocale) {
    return redirectWithPreference(url, selectedLocale);
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return next();
  }

  const preferredLocale = preferredLocaleFromCookie(request);
  if (preferredLocale === "en") {
    return redirectToEnglish(url);
  }

  return next({ headers: { Vary: VARY_VALUE } });
}
