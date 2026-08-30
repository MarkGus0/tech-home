# TechFlows site

This is a bilingual Astro site. Chinese lives at `/`, English at `/en/`. Canonical host is `https://www.techflows.app`.

Read `README.md` before changing layout or copy.

## Conventions

- Put copy in `src/data/translations.ts` or page data files. Components should call `t()`, not hardcode strings.
- Outbound Feishu/WeChat links go through `/go/` via `goPath()`. Do not put raw form URLs on buttons.
- Keep the `index-list` layout. Do not wrap body copy in glass cards.
- Do not invent events, partners, metrics, or a second past event.
- Do not subset the Smiley Sans font without a subsetting pipeline. Preload is allowed.
- Chinese routes stay Chinese. English lives under `/en/`. Only `?lang=` persists a preference (`techflows_locale`). There is no geographic 302 from `/` to `/en/`.
- `pnpm check` runs `scripts/check-i18n.mjs` before `astro check`.

## Checks

```bash
pnpm check
pnpm build
```
