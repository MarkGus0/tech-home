import { geolocation, next, rewrite } from "@vercel/functions";

const MAINLAND_CHINA_COUNTRY = "CN";

const englishPagePaths = new Set([
  "/",
  "/events/",
  "/join/",
  "/partners/",
  "/projects/"
]);

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

function countryCodeFromRequest(request: Request) {
  const country = geolocation(request).country ?? request.headers.get("x-vercel-ip-country");
  return country?.trim().toUpperCase() ?? "";
}

function englishPathFor(pathname: string) {
  const normalizedPath = withTrailingSlash(pathname);

  if (englishPagePaths.has(normalizedPath)) {
    return normalizedPath === "/" ? "/en/" : `/en${normalizedPath}`;
  }

  if (normalizedPath.startsWith("/go/")) {
    return `/en${normalizedPath}`;
  }

  return null;
}

export default function middleware(request: Request) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return next();
  }

  const url = new URL(request.url);
  const { pathname } = url;

  if (isStaticOrSystemPath(pathname) || pathname === "/en" || pathname.startsWith("/en/")) {
    return next();
  }

  const country = countryCodeFromRequest(request);
  if (!country || country === MAINLAND_CHINA_COUNTRY) {
    return next();
  }

  const englishPath = englishPathFor(pathname);
  if (!englishPath) {
    return next();
  }

  url.pathname = englishPath;
  return rewrite(url);
}
