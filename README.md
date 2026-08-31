# TechFlows Website

TechFlows is a bilingual public website for a youth tech creator community. The brand line is “让想做点什么的人，先找到彼此” / “For those who want to build something.” The site is an Astro 5 static project. Chinese pages live at the root. English pages live under `/en/`. Production canonical host is `https://www.techflows.app`. Deploy target is Vercel.

The site is not a product landing page and not a manifesto. It is an entry surface: explain who TechFlows is, show what is happening now, and send people to one concrete next step (an event, a project form, co-building, or a partnership). UNFINO is the continuation venue inside TechFlows. The first event is not yet set. It is a sibling of Events, not a product or a replacement for the community site.

This README is the working document for the repo. Use it when you change copy, layout, routes, or outbound links.

## What the site is for

TechFlows focuses on young tech creators and early-stage work: AI practice, open source, hackathons, campus projects, and first startup attempts. The public pages should stay honest about early status. Do not invent metrics, dates, case studies, or partner logos to fill empty space. The Projects page is a collection call, not a fake portfolio.

Typical visitor jobs:

- Understand what TechFlows is in under a minute.
- Join as a member first; take responsibility later if you want.
- Find the next gathering or leave contact details for notices. Unpublished stays 待发布.
- Submit an unfinished project or idea.
- Leave partnership intent. There is no package table.

## Repository map

```text
src/
  pages/                 Route files. Most of them only pick a locale and render a page component.
  pages/en/              English routes. Same components, locale="en".
  pages/404.astro        Locale from the URL prefix. noindex.
  pages/go/[slug].astro  Outbound confirmation page (Chinese).
  pages/en/go/           Outbound confirmation page (English).
  components/            Page bodies, header, footer, buttons, lists.
  layouts/BaseLayout.astro
  layouts/RedirectLayout.astro
  styles/global.css      Tokens, atmosphere, chrome, and the shared list system.
  data/                  Copy, events, projects, partners, outbound targets.
  utils/i18n.ts          t(), pagePath(), locale helpers.
scripts/check-i18n.mjs   Missing or unused translation keys fail the check.
public/assets/           Logo, header logo, OG images, atom-field.svg, fonts.
middleware.ts            Locale cookie from `?lang=`. Chinese routes stay Chinese.
vercel.json              Security headers, cache, HTML redirects.
.github/workflows/check.yml
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
pnpm check              # i18n key audit, then astro check
pnpm build              # astro check, then write dist/
pnpm preview            # serve the production build on 127.0.0.1:3456
pnpm generate:assets    # regenerate OG images, header logo, and Apple Touch Icon
```

`pnpm check` runs `scripts/check-i18n.mjs` first. A missing `t()` key or an unused dictionary entry fails the command.

Local requests keep Chinese at `/`. Open `/en/` or use the header language control to see English. The language control writes `?lang=en` or `?lang=zh`. Only that explicit switch sets `techflows_locale` (HttpOnly, one year). There is no geographic 302 from Chinese routes to `/en/`.

## Interface and layout

The visual system is two materials on a quiet page. Do not turn it into a card dashboard, and do not turn it into a 1990s terminal.

### Substrate

- Page background is `#f4f7fb`.
- `BaseLayout` paints a fixed atmosphere layer: a soft cyan/blue light field, a very faint pixel grid, and `public/assets/atom-field.svg`.
- The atom field is atmosphere. Keep it low-contrast. Do not add scanlines, ASCII HUD labels, side rails, or denser tiles.

### Glass chrome

Glass (`backdrop-filter`, translucent fill, hairline highlight) is only for interactive chrome:

- floating header capsule
- homepage reading map
- mobile nav sheet
- secondary buttons
- footer

Do not glass body copy, principles, role essays, partner lists, or UNFINO format/builder rows. Do not nest glass inside glass. If a block feels weak, drop the frame and use type, spacing, and a hairline. Do not wrap it in another rounded panel.

### Reading column

- Measure is about 720px (`--measure` / `--container`).
- Shared page frame: `.page`, `.page-hero`, `.page-section`, `.page-cta`, `.page-kicker`, `.page-actions`. Home and subpages use the same type scale and section whitespace.
- One type scale: large page title (`--type-display`), section title (`--type-section`), list titles (`--type-row`), muted body.
- Kickers are small Geist Mono, blue, uppercase (`.page-kicker`).

Structured content uses one list language:

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

Pill buttons belong in the closing `.page-cta` of a page, or in one lead story. Mid-page paths use `.text-link`. A `.page-actions` cluster has one black primary; extra actions are secondary glass pills. Do not mix two primaries in the same cluster.

### What not to rebuild

These already failed in review and should not come back:

- Glass list panels around rows, then glass tiles inside those panels
- 3-column and 4-column mini-cards competing with hairline lists
- Atom-circle bullets plus a second `01` index on the same row
- Pixel-tick ornaments on every card
- Full-viewport ASCII decoration

Shared CSS lives in `src/styles/global.css`. Page chrome for public routes is `PageMain`, `PageHero`, `PageSection`, and `PageCta` in `src/components/`. Page-specific exceptions should stay small. If a new block looks like a list, use `.index-list`.

## Pages

### Home `/` and `/en/`

Component: `src/components/HomePage.astro`

Desktop has a left reading map. Line-by-line reading is on by default on desktop (viewport above 1024px). It stays off on smaller screens and when `prefers-reduced-motion` is set. In this mode, wheel and arrow keys / `j` `k` step to the next line instead of scrolling the page. Map links jump to that section’s first line instead of a native hash scroll (which would land on hidden copy). The toggle still exits to show all; Escape does the same. A skip link to `#main` stays focusable on small screens.

| Section | Anchor | Job |
| --- | --- | --- |
| Hero | `#home` | Title, origin + work line, then one Join CTA. Doors are not on this path. |
| Now | `#now` | Same table / write it clearly / continuation venue. The third row goes to UNFINO |
| Principles | `#principles` | Unfinished can be seen; do not package what we cannot do; an event is not the end |
| Status | `#status` | Honest tags: upcoming 待发布, project records not live, member work 待发布. No campus/hub list. Do not add a fake university list or works wall. |
| Join | `#join` | Closing copy and the only homepage pill button: Join |

Now and principles are `.index-list` rows. Status rows are clickable `index-row--status` links. The three doors live on `/join/#tracks` as 「领走一件事」. Track row CTAs go through `/go/job|school|city/` to the Feishu briefs. Do not put raw Feishu URLs on homepage buttons. The four who-can-come rows live only on `/join/`.

Copy keys live under `hero.*` and `home.*` in `src/data/translations.ts`.

### Events `/events/`

Component: `src/components/EventsPage.astro`  
Data: `src/data/events.ts`

Flow: opening → upcoming lead row with one primary button → what we hope happens on site (3 rows) → past records (EventCard list plus the WeChat album row) → how to take part (project / co-build / partner) → closing actions.

Upcoming content comes from `upcomingEvent`. Past items come from `pastEvents`. Only list the two gatherings already public on Feishu: Hefei first gathering, then Suzhou. Do not invent a third. A past row may omit `cta` if there is no recap link.

### UNFINO `/unfino/`

Component: `src/components/UnfinoPage.astro`  
Copy keys: `unfinoBrand.*`

UNFINO is TechFlows' continuation venue. The first event is not yet set. Do not write a dated coming soon. A hackathon is not listed as a live event until a gathering is locked. Do not present UNFINO as a product or service.

Flow: wordmark and lead → two notes (format not set; rules announced on site) → closing actions to Join or the project form.

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

Flow: short intent-only placeholder → partner form and `partner@techflows.app`. No package/benefits table, no sponsor deck, no invented event dates. The four partner-type rows in `partners.ts` are not shown on this page.

### Join `/join/`

Component: `src/components/JoinPage.astro`

Flow: hero (come with what you have; this page is how to join, not a rank) → how to apply (one primary form button; members need not pick a responsibility door first) → four who-can-come rows (no project → `/events/`, already building → `/go/project/`, want to take responsibility → `#tracks`, have resources → `/partners/`) → what members get right away (meet, write it down on the projects page, find a buddy and take one small step, plus the red line) → 「领走一件事」 with the three Feishu briefs (`job` / `school` / `city`) → closing form + `join@techflows.app`.

Do not restore the six-role essays. Do not copy the four questions or the six functional jobs onto this page. Details for the three tracks live on Feishu.

### Outbound confirmation `/go/[slug]/`

Layout: `src/layouts/RedirectLayout.astro`  
Component: `src/components/RedirectPage.astro`  
Registry: `src/data/forms.ts`

Every external Feishu form, Feishu doc, or WeChat article goes through this page. The page is `noindex, nofollow`. Chinese and English route files only pass `locale`. Slugs:

| Slug | Kind | Use |
| --- | --- | --- |
| `join` | form | Membership / contact |
| `project` | form | Submit a project or idea |
| `cobuild` | form | Help build the community |
| `partner` | form | Start a partnership |
| `activity-notice` | form | Same join form; button copy is “Join TechFlows”, not a separate list |
| `event-review` | article | A specific recap |
| `wechat-album` | album | All recaps |
| `job` | doc | 进来先选一个活 |
| `school` | doc | 阅读「一所学校」 |
| `city` | doc | 阅读「一座城」 |

`activity-notice` and `join` share the same Feishu URL. Do not add a new form just to make the notice button look like a newsletter.

Build links with `goPath(locale, slug, source)`. The optional `source` query is a tracing tag such as `home_entry_project` or `footer_cobuild`. On confirm, the page copies it onto the outbound URL as `tf_source`. No `source` means the target URL is unchanged. Add a slug in `forms.ts` before you link it. Do not point page buttons straight at Feishu.

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

`t(key, locale)` is typed as `keyof typeof translations`. Dynamic keys (roles, formats, hope rows) use `as const` maps in the page component. Missing or unused keys fail `pnpm check`.

When you add a public page:

1. Add it to `pages` and `navItems` in `src/data/site.ts`.
2. Add `src/pages/.../index.astro` and `src/pages/en/.../index.astro`.
3. Middleware derives English twins from `pages` in `site.ts`. `/go/` still prefixes `/en` automatically.
4. Add sitemap metadata in `src/pages/sitemap.xml.ts`.
5. Add an OG image if the page should not reuse another page’s image.
6. Use `.index-list` for structured blocks.

`lastUpdated` in `src/data/site.ts` feeds JSON-LD `dateModified` and `llms.txt`. Change it when public content changes.

## Language

`src/utils/i18n.ts` is the only place page code should ask for a path or a string. `t()` is typed to dictionary keys.

Middleware (`middleware.ts`) runs on Vercel:

- Cookie `techflows_locale` wins after an explicit `?lang=` switch. That cookie is HttpOnly.
- `/` and other Chinese routes stay Chinese. There is no geographic 302 to `/en/`.
- If the cookie is `en`, Chinese page paths 302 to their `/en/...` twins so the address bar matches the language. That 302 does not rewrite the cookie.
- `/en/...` is never redirected away.
- Static files, fonts, `robots.txt`, `sitemap.xml`, and `llms.txt` skip locale routing.

Missing cookies (local preview and first visit) keep Chinese.

HTML `lang` is `zh-CN` or `en`. Chinese pages preload and put Smiley Sans first; English pages put Geist Mono first. Both stacks are always available.

## Header, footer, and buttons

`Header.astro` is a floating glass capsule. It uses `public/assets/techflows-logo-header.png` (about 132px wide), not the full-width source logo. Desktop shows full nav. Below about 960px it becomes a hamburger and a sheet: opening moves focus into the panel, Tab cycles inside it, Escape or a link close it and return focus to the button. The language control points at the same page in the other locale with `?lang=`.

`Footer.astro` repeats a short nav, contact email, and the brand line. “社区共建 / Co-build” is a `/go/cobuild/` link (`footer_cobuild`), not the Join page.

`Button.astro` has `primary` (black pill) and `secondary` (glass pill). Set `external` only for mailto or true new-tab links. Form and article jumps still go through `/go/`.

## Fonts

English UI uses Geist Mono (`--font-geist-mono`). Chinese uses the full Smiley Sans file (about 943 KB) at:

```text
public/assets/fonts/SmileySans-Oblique.ttf.woff2
```

CSS uses `font-display: swap` and `unicode-range`. Chinese pages preload the woff2 file. Vercel caches `/assets/fonts/*` for one year as immutable. Keep the full font so new Chinese characters on subpages do not go missing. Do not regenerate a site-character subset unless you have a new subsetting pipeline.

## Static assets

- `public/assets/techflows-logo.png` — redirect page and OG cards
- `public/assets/techflows-logo-header.png` — header mark at display width ~132px
- `public/assets/atom-field.svg` — repeating atmosphere tile
- `public/assets/og-home.png`, `og-events.png`, `og-projects.png`, `og-partners.png`, `og-join.png`, `og-unfino.png`
- `public/assets/apple-touch-icon.png`
- `public/favicon.png`, `public/favicon.ico`
- `assets/techflows-logo.png` — source logo backup, not served

`pnpm generate:assets` rebuilds OG images, the header logo, and the touch icon from `scripts/generate-assets.mjs`. After changing the logo, run that command and commit the outputs.

Cache policy in `vercel.json`:

- `/_astro/*` and fonts: long immutable cache
- `/assets/*`: one week, stale-while-revalidate
- HTML, OG, favicon, robots, sitemap, llms: shorter caches

## SEO and AI crawlers

- `src/pages/sitemap.xml.ts` emits Chinese and English URLs with `lastmod`, `changefreq`, `priority`, and hreflang. Chinese is `zh-CN`, matching `html lang`.
- `public/robots.txt` allows search and AI crawlers on public pages and points at the sitemap.
- `src/pages/llms.txt.ts` is a short map for assistants. It is generated from `pages` in `site.ts`, so new pages appear automatically.
- `BaseLayout.astro` emits canonical, alternate, Open Graph, Twitter Card, and JSON-LD (`Organization`, `WebSite`, `WebPage`). `Organization.description` uses the homepage sentence, not the current page meta.
- UNFINO uses `/assets/og-unfino.png`. Do not reuse the events OG image for that page.
- `src/pages/404.astro` is `noindex` and links home, events, and join. Locale follows `/en/` in the path.
- `vercel.json` permanently redirects `/projects.html` and `/unfino.html` (and the older `.html` aliases) to the trailing-slash routes.

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

`'unsafe-inline'` exists because a few pages use inline scripts (header, homepage reading mode, UNFINO reveal, `/go/` `tf_source` attach) and JSON-LD. Do not add third-party scripts without updating CSP. Outbound `<a>` tags that leave the site should keep `rel="noopener noreferrer"`.

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

Then confirm `/`, `/en/`, `/unfino/`, `/en/unfino/`, and one `/go/join/` page. After deploy from a non-CN network, confirm `/events/` stays Chinese and does not set the language cookie. English remains at `/en/events/`.

GitHub Actions (`.github/workflows/check.yml`) runs `pnpm install --frozen-lockfile`, `pnpm check`, and `pnpm build` on `main` and pull requests.

## Pre-commit checklist

- Run `pnpm check` and `pnpm build`.
- New public page: `site.ts`, both locale routes, sitemap. Middleware picks up Chinese paths from `pages`.
- New outbound target: slug in `forms.ts`, then `goPath()`, never a raw Feishu URL in a page button.
- Copy changes need both `zh` and `en`. Unused translation keys fail `pnpm check`.
- Layout changes stay on `.index-list`. Do not wrap body copy in glass cards.
- Update `site.lastUpdated` when public content changes.
- Do not commit `node_modules/`, `dist/`, `.astro/`, `.claude/`, `scripts/__pycache__/`, or QA screenshots and planning drafts under `docs/`.
