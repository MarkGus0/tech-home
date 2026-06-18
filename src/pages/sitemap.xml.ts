import { pages, site } from "@data/site";

const sitemapMeta = {
  home: { changefreq: "weekly", priority: "1.0" },
  events: { changefreq: "weekly", priority: "0.9" },
  projects: { changefreq: "weekly", priority: "0.8" },
  partners: { changefreq: "monthly", priority: "0.7" },
  join: { changefreq: "monthly", priority: "0.7" }
} as const;

function escapeXml(value: string) {
  return value.replace(/[<>&"']/g, (char) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "\"": "&quot;",
    "'": "&apos;"
  })[char] ?? char);
}

function absolute(path: string) {
  return new URL(path, site.url).toString();
}

export function GET() {
  const urls = Object.values(pages)
    .flatMap((page) => [
      { loc: page.paths.zh, page },
      { loc: page.paths.en, page }
    ])
    .map(({ loc, page }) => {
      const zh = absolute(page.paths.zh);
      const en = absolute(page.paths.en);
      const meta = sitemapMeta[page.id];
      return [
        "  <url>",
        `    <loc>${escapeXml(absolute(loc))}</loc>`,
        `    <lastmod>${site.lastUpdated}</lastmod>`,
        `    <changefreq>${meta.changefreq}</changefreq>`,
        `    <priority>${meta.priority}</priority>`,
        `    <xhtml:link rel="alternate" hreflang="zh" href="${escapeXml(zh)}" />`,
        `    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(en)}" />`,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(zh)}" />`,
        "  </url>"
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls,
    "</urlset>"
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
