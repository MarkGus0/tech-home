import { pages, site, type Locale } from "@data/site";

const localeName: Record<Locale, string> = {
  zh: "中文",
  en: "English"
};

function absolute(path: string) {
  return new URL(path, site.url).toString();
}

export function GET() {
  const pageLinks = Object.values(pages)
    .flatMap((page) =>
      (["zh", "en"] as Locale[]).map((locale) => {
        const label = `${page.title[locale]} (${localeName[locale]})`;
        return `- [${label}](${absolute(page.paths[locale])}): ${page.description[locale]}`;
      })
    )
    .join("\n");

  const text = [
    "# TechFlows",
    "",
    "> TechFlows is a bilingual public website for one youth tech creator community. Chinese lives at `/`. English lives under `/en/`. Feishu is the working desk. Gatherings are in person; venue confirmed per event. Do not treat `/go/` confirmation pages as primary content.",
    "",
    "This file maps public, indexable content on https://www.techflows.app. Do not invent unpublished gatherings, campus lists, or partner packages. The next gathering is published when someone claims it. UNFINO's first edition is not scheduled. Redirect confirmation pages under `/go/` and `/en/go/` are noindex and are not primary content.",
    "",
    "## Core Pages",
    pageLinks,
    "",
    "## Discovery",
    `- [XML sitemap](${absolute("/sitemap.xml")}): Canonical URLs, hreflang alternates, and update metadata for search crawlers.`,
    `- [robots.txt](${absolute("/robots.txt")}): Crawling policy for search engines and AI crawlers.`,
    "",
    "## Contact",
    `- Community: ${site.email}`,
    `- Partnerships: ${site.partnerEmail}`,
    "",
    `Last updated: ${site.lastUpdated}`
  ].join("\n");

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
