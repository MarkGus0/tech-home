# TechFlows 官网

TechFlows 官网是一个基于 Astro 的双语静态站点，中文页面位于根路径，英文页面位于 `/en/`。项目面向 Vercel 部署，已经包含安全响应头、静态资源缓存、SEO、AI 爬虫入口、地区语言偏好和字体加载优化。

## 核心能力

- 双语内容：中文为主站路径，英文为 `/en/` 路径。
- 地区语言偏好：Vercel Routing Middleware 根据访问国家判断默认语言，中国大陆显示中文，其他地区显示英文。
- SEO 与 AI 友好：包含 `sitemap.xml`、`robots.txt`、`llms.txt`、canonical、hreflang、Open Graph、Twitter Card 和结构化数据。
- 安全响应头：包含 CSP、`X-Content-Type-Options`、`X-Frame-Options`、`Referrer-Policy`、`Permissions-Policy`、`Cross-Origin-Opener-Policy`。
- 性能优化：Astro 静态输出、长缓存静态资源、字体自托管、中文字体子集化。
- 外链安全：外部跳转统一走 `/go/...` 与 `/en/go/...` 确认页，并设置 `noindex`。

## 技术栈

- Astro 5
- TypeScript
- Vercel Analytics
- Vercel Speed Insights
- Vercel Routing Middleware
- Geist Mono
- Smiley Sans / 得意黑子集字体

## 本地开发

建议使用 Node.js 20+ 和 pnpm。

```bash
pnpm install
pnpm dev
```

默认本地地址：

```text
http://127.0.0.1:3456/
```

## 常用命令

```bash
pnpm check
pnpm build
pnpm preview
pnpm generate:assets
```

命令说明：

- `pnpm dev`：启动本地开发服务器。
- `pnpm check`：运行 Astro 类型与模板检查。
- `pnpm build`：先检查，再生成静态站点到 `dist/`。
- `pnpm preview`：本地预览构建结果。
- `pnpm generate:assets`：重新生成 OG 图和 Apple Touch Icon。

## 路由结构

中文页面：

- `/`
- `/events/`
- `/projects/`
- `/partners/`
- `/join/`
- `/go/[slug]/`

英文页面：

- `/en/`
- `/en/events/`
- `/en/projects/`
- `/en/partners/`
- `/en/join/`
- `/en/go/[slug]/`

机器可读入口：

- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`

## 地区语言策略

项目根目录的 `middleware.ts` 使用 Vercel 提供的地理位置能力读取访问国家。

当前规则：

- `CN`：访问无 `/en` 前缀页面时保持中文。
- 非 `CN`：访问无 `/en` 前缀页面时内部重写到对应英文页面。
- 显式 `/en/...` 路径始终保留为英文入口。
- 静态资源、字体、图片、`robots.txt`、`sitemap.xml`、`llms.txt` 不参与语言重写。

本地开发环境默认没有真实 Vercel 地理位置头，因此本地访问通常保持中文；部署到 Vercel 后按真实访问地区生效。

## 内容维护

主要内容数据位于：

- `src/data/site.ts`：站点信息、页面 meta、导航路径。
- `src/data/translations.ts`：中英文文案字典。
- `src/data/events.ts`：活动数据。
- `src/data/projects.ts`：项目记录数据。
- `src/data/partners.ts`：合作对象数据。
- `src/data/forms.ts`：外部表单与跳转链接。

页面组件位于：

- `src/components/HomePage.astro`
- `src/components/EventsPage.astro`
- `src/components/ProjectsPage.astro`
- `src/components/PartnersPage.astro`
- `src/components/JoinPage.astro`
- `src/components/RedirectPage.astro`

页面入口位于：

- `src/pages/**`

## 字体策略

英文使用 `geist` 包中的 Geist Mono，并通过 CSS 变量 `--font-geist-mono` 管理。

中文使用自托管的 Smiley Sans / 得意黑子集字体：

```text
public/assets/fonts/smiley-sans-techflows-393af2df.woff2
```

该字体已经按当前站点中文字符子集化，大小约 77 KB。CSS 使用 `font-display: swap` 和 `unicode-range`，减少字体对首屏速度的影响。

如果未来新增大量中文内容，需要用原始完整版得意黑字体重新生成子集，否则新增字符会回退到系统字体。

## 静态资源

主要静态资源位于：

- `public/assets/techflows-logo.png`
- `public/assets/og-home.png`
- `public/assets/og-events.png`
- `public/assets/og-projects.png`
- `public/assets/og-partners.png`
- `public/assets/og-join.png`
- `public/assets/apple-touch-icon.png`
- `public/favicon.svg`

源 Logo 备份位于：

- `assets/techflows-logo.png`

Vercel 配置中对 `_astro` 和字体资源设置了长期缓存，对 OG 图片、favicon、robots、sitemap、llms 设置了适合更新频率的缓存策略。

## SEO 与 AI 爬虫

项目包含：

- `src/pages/sitemap.xml.ts`：生成 sitemap，包含中英文 URL、`lastmod`、`changefreq`、`priority` 和 hreflang。
- `public/robots.txt`：允许搜索引擎和 AI 爬虫访问公开页面，并声明 sitemap。
- `src/pages/llms.txt.ts`：生成 AI 助手可读的网站内容索引。
- `src/layouts/BaseLayout.astro`：输出 canonical、alternate、Open Graph、Twitter Card 和 JSON-LD 结构化数据。

外链确认页 `/go/...` 与 `/en/go/...` 通过 `X-Robots-Tag` 和页面 meta 设置为 `noindex, nofollow`。

## 安全配置

安全响应头集中在 `vercel.json`：

- Content Security Policy
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`
- `Cross-Origin-Opener-Policy`
- `X-Permitted-Cross-Domain-Policies`

外部链接使用 `rel="noopener noreferrer"`，避免 opener 风险。

## 部署

推荐部署到 Vercel。

构建命令：

```bash
pnpm build
```

输出目录：

```text
dist
```

部署前建议执行：

```bash
pnpm check
pnpm build
```

## 提交前检查清单

- 运行 `pnpm check`。
- 运行 `pnpm build`。
- 确认新增页面已更新 `src/data/site.ts`。
- 确认 sitemap、llms、robots 仍符合当前公开页面结构。
- 如果新增中文字符较多，重新生成得意黑字体子集。
- 不提交 `node_modules/`、`dist/`、`.astro/`、`.claude/`。
