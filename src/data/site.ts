import type { Localized } from "./translations";

export type Locale = "zh" | "en";
export type PageId = "home" | "events" | "join" | "partners" | "projects";

export const locales: Locale[] = ["zh", "en"];

export const site = {
  name: "TechFlows",
  url: "https://www.techflows.app",
  logo: "/assets/techflows-logo.png",
  email: "join@techflows.app",
  partnerEmail: "partner@techflows.app",
  lastUpdated: "2026-06-18"
} as const;

export type PageMeta = {
  id: PageId;
  title: Localized<string>;
  description: Localized<string>;
  paths: Record<Locale, string>;
  image: string;
};

export const pages: Record<PageId, PageMeta> = {
  home: {
    id: "home",
    title: {
      zh: "TechFlows | 让想做点什么的人，先找到彼此",
      en: "TechFlows — For Those Who Want to Build Something"
    },
    description: {
      zh: "TechFlows 是一个关注青年科技创造者与早期项目的开放社区。通过活动、项目记录、机会分享和社区连接，让正在行动的人被看见。",
      en: "TechFlows is an open community for young tech creators and early-stage projects, helping people in motion find one another through events, stories, opportunities, and community connection."
    },
    paths: { zh: "/", en: "/en/" },
    image: "/assets/og-home.png"
  },
  events: {
    id: "events",
    title: { zh: "活动 — TechFlows", en: "Events — TechFlows" },
    description: {
      zh: "TechFlows 发起并联合举办 AI、开源、黑客松与科技创业交流活动，让正在行动的人找到彼此。",
      en: "TechFlows initiates and co-hosts AI, open-source, hackathon, and tech entrepreneurship gatherings where people in motion find one another."
    },
    paths: { zh: "/events/", en: "/en/events/" },
    image: "/assets/og-events.png"
  },
  join: {
    id: "join",
    title: { zh: "申请加入 — TechFlows", en: "Join — TechFlows" },
    description: {
      zh: "加入 TechFlows 开放社区，无论你是学生、开发者、产品人还是创业者，都可以从这里开始。",
      en: "Join the TechFlows open community. Students, developers, product builders, founders, and volunteers can all start here."
    },
    paths: { zh: "/join/", en: "/en/join/" },
    image: "/assets/og-join.png"
  },
  partners: {
    id: "partners",
    title: { zh: "合作伙伴 — TechFlows", en: "Partners — TechFlows" },
    description: {
      zh: "TechFlows 与高校、企业、技术社区和开源组织合作，共同推动青年科技创造者生态。",
      en: "TechFlows works with universities, companies, tech communities, and open-source organizations to support young tech creators."
    },
    paths: { zh: "/partners/", en: "/en/partners/" },
    image: "/assets/og-partners.png"
  },
  projects: {
    id: "projects",
    title: { zh: "项目记录 — TechFlows", en: "Projects — TechFlows" },
    description: {
      zh: "TechFlows 正在征集和记录来自黑客松、校园项目、开源工具、AI 应用和创业尝试的早期项目。",
      en: "TechFlows is collecting and documenting early projects from hackathons, campus teams, open-source tools, AI applications, and startup experiments."
    },
    paths: { zh: "/projects/", en: "/en/projects/" },
    image: "/assets/og-projects.png"
  }
};

export const navItems: Array<{ page: PageId; label: Localized<string> }> = [
  { page: "home", label: { zh: "首页", en: "Home" } },
  { page: "events", label: { zh: "活动", en: "Events" } },
  { page: "projects", label: { zh: "项目记录", en: "Projects" } },
  { page: "partners", label: { zh: "合作伙伴", en: "Partners" } },
  { page: "join", label: { zh: "申请加入", en: "Join" } }
];

export const footerLinks: Array<{ page: PageId; label: Localized<string> }> = [
  { page: "events", label: { zh: "活动", en: "Events" } },
  { page: "projects", label: { zh: "项目", en: "Projects" } },
  { page: "join", label: { zh: "社区共建", en: "Co-build" } },
  { page: "partners", label: { zh: "合作伙伴", en: "Partners" } }
];
