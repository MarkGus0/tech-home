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
    "> TechFlows is a bilingual public website for a young tech creator community, early-stage projects, events, partnerships, and participation opportunities.",
    "",
    "This file gives AI search agents and assistants a concise map of the public, indexable content on https://www.techflows.app. Redirect confirmation pages under `/go/` and `/en/go/` are intentionally marked noindex and should not be treated as primary content.",
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
