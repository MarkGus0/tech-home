# TechFlows Website

TechFlows is a bilingual public website for a youth tech creator community. The brand line is “让想做点什么的人，先找到彼此” / “For those who want to build something.” The site is an Astro 5 static project. Chinese pages live at the root. English pages live under `/en/`. Production canonical host is `https://www.techflows.app`. Deploy target is Vercel.

The site is not a product landing page and not a manifesto. It is an entry surface: explain who TechFlows is, show what is happening now, and send people to one concrete next step (an event, a project form, co-building, or a partnership). UNFINO is the unfinished-field challenge brand inside TechFlows. It is a sibling of Events, not a replacement for the community site.

This README is the working document for the repo. Use it when you change copy, layout, routes, or outbound links.

## What the site is for

TechFlows focuses on young tech creators and early-stage work: AI practice, open source, hackathons, campus projects, and first startup attempts. The public pages should stay honest about early status. Do not invent metrics, dates, case studies, or partner logos to fill empty space. The Projects page is a collection call, not a fake portfolio.

Typical visitor jobs:

- Understand what TechFlows is in under a minute.
- Find the next gathering or leave contact details for notices.
- Submit an unfinished project or idea.
- Join as a participant, creator, recorder, connector, or builder.
- Start a partnership from a university, company, community, or venue.

## Repository map

```text
src/
  pages/                 Route files. Most of them only pick a locale and render a page component.
  pages/en/              English routes. Same components, locale="en".
  pages/go/[slug].astro  Outbound confirmation page (Chinese).
  pages/en/go/           Outbound confirmation page (English).
  components/            Page bodies, header, footer, buttons, lists.
  layouts/BaseLayout.astro
  styles/global.css      Tokens, atmosphere, chrome, and the shared list system.
  data/                  Copy, events, projects, partners, outbound targets.
  utils/i18n.ts          t(), pagePath(), locale helpers.
public/assets/           Logo, OG images, atom-field.svg, fonts.
middleware.ts            Region language preference on Vercel.
vercel.json              Security headers, cache, HTML redirects.
```

Page components, not `src/pages/*`, own the real layout. A typical route file is:

```astro
---
import HomePage from "@components/HomePage.astro";
---
<HomePage locale="zh" />
```

## Stack

- Astro 5, TypeScript, static output
- pnpm, Node.js 20+
- Geist Mono via the `geist` package
- Smiley Sans / 得意黑, self-hosted at `public/assets/fonts/SmileySans-Oblique.ttf.woff2`
- Vercel Routing Middleware (`@vercel/functions`)
- Vercel Analytics and Speed Insights, both off unless `PUBLIC_ENABLE_VERCEL_INSIGHTS=true`

Path aliases live in `tsconfig.json`: `@components/*`, `@layouts/*`, `@data/*`, `@utils/*`, `@styles/*`.

## Local development

```bash
pnpm install
pnpm dev
```

Dev server: `http://127.0.0.1:3456/`

```bash
pnpm check              # astro check
pnpm build              # check, then write dist/
pnpm preview            # serve the production build on 127.0.0.1:3456
pnpm generate:assets    # regenerate OG images and Apple Touch Icon
```

Local requests usually have no Vercel geo header, so the homepage stays Chinese. Open `/en/` or use the header language control to see English. The language control writes `?lang=en` or `?lang=zh`, and middleware stores `techflows_locale` for a year.

## Interface and layout

The visual system is two materials on a quiet page. Do not turn it into a card dashboard, and do not turn it into a 1990s terminal.

### Substrate

- Page background is `#f4f7fb`.
- `BaseLayout` paints a fixed atmosphere layer: a soft cyan/blue light field, a very faint pixel grid, and `public/assets/atom-field.svg`.
- The atom field is atmosphere. Keep it low-contrast. Do not add scanlines, ASCII HUD labels, side rails, or denser tiles.

### Glass chrome

Glass (`backdrop-filter`, translucent fill, hairline highlight) is only for interactive chrome:

- floating header capsule
- mobile nav sheet
- secondary buttons
- footer

Do not glass body copy, principles, role essays, partner lists, or UNFINO format/builder rows. Do not nest glass inside glass. If a block feels weak, drop the frame and use type, spacing, and a hairline. Do not wrap it in another rounded panel.

### Reading column

- Measure is about 720px (`--container` / `--subpage-max`).
- One type scale: large page title, section title around 26–34px, list titles around 18–21px, muted body.
- Kickers are small Geist Mono, blue, uppercase.

Structured content uses one list language:

```html
<div class="index-list">
  <article class="index-row">
    <p class="index-row__index">01</p>
    <div class="index-row__main">
      <p class="index-row__meta">Optional status</p>
      <h3>Title</h3>
      <p>One or two sentences.</p>
      <a class="text-link" href="...">Continue</a>
    </div>
  </article>
</div>
```

Variants:

- `index-row--lead`: a featured story, allowed to hold one primary button
- `index-row--essay`: several paragraphs (Join roles)
- `index-row--status`: label / state / action, used on the homepage status block
- `index-list--plain`: numbered `<ul>` (Projects collection prompts)

Pill buttons belong in the closing action block of a page, or in one lead story. Mid-page paths use `.text-link`. Peer groups must share one button variant. Do not mix black primary and white secondary in the same three-up or four-up set.

### What not to rebuild

These already failed in review and should not come back:

- Glass list panels around rows, then glass tiles inside those panels
- 3-column and 4-column mini-cards competing with hairline lists
- Atom-circle bullets plus a second `01` index on the same row
- Pixel-tick ornaments on every card
- Full-viewport ASCII decoration

Shared CSS lives in `src/styles/global.css`. Page-specific exceptions should stay small. If a new block looks like a list, use `.index-list`.

## Pages

### Home `/` and `/en/`

Component: `src/components/HomePage.astro`

Desktop has a left reading map and an optional line-by-line mode. Line-by-line is opt-in. It does not auto-enable.

| Section | Anchor | Job |
| --- | --- | --- |
| Hero | `#home` | Title, three summary lines, one stronger functional line, then three entry rows |
| Now | `#now` | Three current workstreams: events, project records, connections |
| Start | `#start` | Four paths: no project yet, already making something, willing to help, has resources |
| Principles | `#principles` | Maturity, honesty, continuity |
| Status | `#status` | Four live states as compact rows |
| Join | `#join` | Closing copy and the only homepage pill-button cluster |

Hero entries, now, start, and principles are all `.index-list` rows. Status rows are clickable `index-row--status` links. The closing cluster is Join (primary), submit a project (secondary), co-build (secondary).

Copy keys live under `hero.*` and `home.*` in `src/data/translations.ts`.

### Events `/events/`

Component: `src/components/EventsPage.astro`  
Data: `src/data/events.ts`

Flow: opening → upcoming lead row with one primary button → what we hope happens on site (3 rows) → past records (EventCard list plus the WeChat album row) → how to take part (project / co-build / partner) → closing actions.

Upcoming content comes from `upcomingEvent`. Past items come from `pastEvents`. Do not invent a second past event to fill the grid.

### UNFINO `/unfino/`

Component: `src/components/UnfinoPage.astro`  
Copy keys: `unfinoBrand.*`

UNFINO is a long-running challenge brand under TechFlows. A hackathon is one format, not the whole brand.

Flow: wordmark and lead → formats (hackathon, challenge, sprint, showcase) → Builder community signals → closing actions back to Events or the project form.

Keep the hero visible on first paint. Reveal animation is for list rows, not the whole page.

### Projects `/projects/`

Component: `src/components/ProjectsPage.astro`  
Data: `src/data/projects.ts`

This page is an empty-state collection call: why we will not fake case studies, four numbered prompts (why it began, how far it has gone, what is stuck, who is still needed), then submit / join actions.

When real projects exist, add them in `src/data/projects.ts` and extend the page. Do not paste placeholder companies.

### Partners `/partners/`

Component: `src/components/PartnersPage.astro`  
Data: `src/data/partners.ts`  
List UI: `src/components/RoleList.astro`

Flow: opening → collaboration essay → four partner types as an index list → partner form and `partner@techflows.app`.

### Join `/join/`

Component: `src/components/JoinPage.astro`

Flow: opening → how to apply (one primary form button) → where people fit → six role essays in one numbered column (participant, creator, sharer, recorder, connector, builder) → six one-line recap rows → closing actions.

Do not split the six roles into six full-width chapters again. The recap list is the short version; the essays are the long version.

### Outbound confirmation `/go/[slug]/`

Component: `src/components/RedirectPage.astro`  
Registry: `src/data/forms.ts`

Every external Feishu form or WeChat article goes through this page. The page is `noindex, nofollow`. Slugs:

| Slug | Kind | Use |
| --- | --- | --- |
| `join` | form | Membership / contact |
| `project` | form | Submit a project or idea |
| `cobuild` | form | Help build the community |
| `partner` | form | Start a partnership |
| `activity-notice` | form | Event notices |
| `event-review` | article | A specific recap |
| `wechat-album` | album | All recaps |

Build links with `goPath(locale, slug, source)`. The optional `source` query is a tracing tag such as `home_entry_project` or `events_upcoming_notice`. Add a slug in `forms.ts` before you link it. Do not point page buttons straight at Feishu.

## Content maintenance

Almost all visitor-facing sentences live in data files, not in layout CSS.

| File | What to edit |
| --- | --- |
| `src/data/site.ts` | Site name, emails, canonical URL, `lastUpdated`, page titles, descriptions, paths, OG images, nav, footer |
| `src/data/translations.ts` | Shared UI and long-form copy. Keys are dotted, values are `{ zh, en }` |
| `src/data/events.ts` | Upcoming event and past event records |
| `src/data/projects.ts` | Empty-state copy and, later, project entries |
| `src/data/partners.ts` | Partner type titles and descriptions |
| `src/data/forms.ts` | External URLs, labels, `goPath()` |

`t(key, locale)` returns the key itself if a translation is missing. If you see a raw key on the page, the dictionary entry is absent.

When you add a public page:

1. Add it to `pages` and `navItems` in `src/data/site.ts`.
2. Add `src/pages/.../index.astro` and `src/pages/en/.../index.astro`.
3. Add the Chinese path to `englishPagePaths` in `middleware.ts`, or region rewrite will skip it.
4. Add sitemap metadata in `src/pages/sitemap.xml.ts`.
5. Add an OG image if the page should not reuse another page’s image.
6. Use `.index-list` for structured blocks.

`lastUpdated` in `src/data/site.ts` feeds JSON-LD `dateModified` and `llms.txt`. Change it when public content changes.

## Language

`src/utils/i18n.ts` is the only place page code should ask for a path or a string.

Middleware (`middleware.ts`) runs on Vercel:

- Cookie `techflows_locale` wins after an explicit `?lang=` switch.
- `CN` with no English preference stays on Chinese.
- Other countries rewrite unprefixed page paths to `/en/...`.
- `/en/...` is never rewritten away.
- Static files, fonts, `robots.txt`, `sitemap.xml`, and `llms.txt` skip rewrite.

`englishPagePaths` must list every Chinese page that has an English twin, including `/unfino/`. `/go/` is handled separately and prefixes `/en` automatically.

HTML `lang` is `zh-CN` or `en`. Chinese pages put Smiley Sans first; English pages put Geist Mono first. Both stacks are always available.

## Header, footer, and buttons

`Header.astro` is a floating glass capsule. Desktop shows full nav. Below about 960px it becomes a hamburger and a sheet. The language control points at the same page in the other locale with `?lang=`.

`Footer.astro` repeats a short nav, contact email, and the brand line.

`Button.astro` has `primary` (black pill) and `secondary` (glass pill). Set `external` only for mailto or true new-tab links. Form and article jumps still go through `/go/`.

## Fonts

English UI uses Geist Mono (`--font-geist-mono`). Chinese uses the full Smiley Sans file (about 943 KB) at:

```text
public/assets/fonts/SmileySans-Oblique.ttf.woff2
```

CSS uses `font-display: swap` and `unicode-range`. Vercel caches `/assets/fonts/*` for one year as immutable. Keep the full font so new Chinese characters on subpages do not go missing. Do not regenerate a site-character subset unless you have a new subsetting pipeline.

## Static assets

- `public/assets/techflows-logo.png` — header and redirect page
- `public/assets/atom-field.svg` — repeating atmosphere tile
- `public/assets/og-home.png`, `og-events.png`, `og-projects.png`, `og-partners.png`, `og-join.png`
- `public/assets/apple-touch-icon.png`
- `public/favicon.png`, `public/favicon.ico`
- `assets/techflows-logo.png` — source logo backup, not served

`pnpm generate:assets` rebuilds OG images and the touch icon from `scripts/generate-assets.mjs`. After changing the logo, run that command and commit the outputs.

Cache policy in `vercel.json`:

- `/_astro/*` and fonts: long immutable cache
- `/assets/*`: one week, stale-while-revalidate
- HTML, OG, favicon, robots, sitemap, llms: shorter caches

## SEO and AI crawlers

- `src/pages/sitemap.xml.ts` emits Chinese and English URLs with `lastmod`, `changefreq`, `priority`, and hreflang.
- `public/robots.txt` allows search and AI crawlers on public pages and points at the sitemap.
- `src/pages/llms.txt.ts` is a short map for assistants. It is generated from `pages` in `site.ts`, so new pages appear automatically.
- `BaseLayout.astro` emits canonical, alternate, Open Graph, Twitter Card, and JSON-LD (`Organization`, `WebSite`, `WebPage`).

`/go/` and `/en/go/` are `noindex, nofollow` via meta and `X-Robots-Tag`.

Keep `astro.config.mjs`, `site.url`, robots, sitemap, and llms on `https://www.techflows.app`. Do not mix the apex host and `www`.

## Security

Headers are in `vercel.json`:

- CSP: `default-src 'self'`; scripts from `'self'`, `'unsafe-inline'`, and `https://va.vercel-scripts.com`; images from self, data, and https; fonts from self; `form-action` allows `https://techflow.feishu.cn`; frames denied
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` disables unused device APIs
- `Cross-Origin-Opener-Policy: same-origin`
- `X-Permitted-Cross-Domain-Policies: none`

`'unsafe-inline'` exists because a few pages use inline scripts (header, homepage reading mode, UNFINO reveal, console easter egg). Do not add third-party scripts without updating CSP. Outbound `<a>` tags that leave the site should keep `rel="noopener noreferrer"`.

Non-GET/HEAD requests to HTML routes receive 405 from middleware.

## Performance and observability

The production path prefers a static HTML page with almost no client JS. Analytics stay off unless:

```text
PUBLIC_ENABLE_VERCEL_INSIGHTS=true
```

Turning that on injects Vercel Analytics and Speed Insights, extra script work, and a looser CSP. Leave it off unless you are measuring a real incident.

Limit simultaneous `backdrop-filter` surfaces. The current set (header, mobile sheet, secondary buttons, footer) is already near the budget. Do not glass long lists.

## Vercel Firewall / WAF

DDoS protection and HTTP/3 are edge-network features. The static site cannot implement them.

- Enable Managed Rules / WAF.
- Rate-limit public HTML by IP. Prefer Challenge over Deny so crawlers are not blocked by mistake.
- Exclude `/_astro/*`, `/assets/*`, `/robots.txt`, `/sitemap.xml`, and `/llms.txt`.
- `/go/*` and `/en/go/*` can use a tighter limit.
- Do not blanket-block normal search or AI crawlers in WAF if `robots.txt` allows them.

HTTP/3 availability depends on Vercel and the domain. This repo does not fake protocol headers. After deploy, check the Network Protocol column in DevTools.

## Deploy

Vercel project settings:

- Build command: `pnpm build`
- Output directory: `dist`

Before a production deploy:

```bash
pnpm check
pnpm build
```

Then confirm `/`, `/en/`, `/unfino/`, `/en/unfino/`, and one `/go/join/` page.

## Pre-commit checklist

- Run `pnpm check` and `pnpm build`.
- New public page: `site.ts`, both locale routes, `middleware.ts` `englishPagePaths`, sitemap.
- New outbound target: slug in `forms.ts`, then `goPath()`, never a raw Feishu URL in a page button.
- Copy changes need both `zh` and `en`.
- Layout changes stay on `.index-list`. Do not wrap body copy in glass cards.
- Update `site.lastUpdated` when public content changes.
- Do not commit `node_modules/`, `dist/`, `.astro/`, `.claude/`, `scripts/__pycache__/`, or QA screenshots and planning drafts under `docs/`.
