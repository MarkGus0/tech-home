import type { Localized } from "./translations";

export type Locale = "zh" | "en";
export type PageId = "home" | "events" | "unfino" | "join" | "partners" | "projects";

export const locales: Locale[] = ["zh", "en"];

export const site = {
  name: "TechFlows",
  url: "https://www.techflows.app",
  logo: "/assets/techflows-logo.png",
  logoHeader: "/assets/techflows-logo-header.png",
  email: "join@techflows.app",
  partnerEmail: "partner@techflows.app",
  lastUpdated: "2026-08-23"
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
      zh: "TechFlows 是一个关注青年科技创造者与早期项目的开放社区。诞生于安徽合肥，日常见面在浙江。通过见面、项目记录、UNFINO 和社区连接，让正在行动的人被看见。",
      en: "TechFlows is an open community for young tech creators and early-stage projects. Born in Hefei, Anhui. Regular gatherings are in Zhejiang. Through gatherings, project records, UNFINO, and community connections, we help people in motion be seen."
    },
    paths: { zh: "/", en: "/en/" },
    image: "/assets/og-home.png"
  },
  events: {
    id: "events",
    title: { zh: "活动 — TechFlows", en: "Events — TechFlows" },
    description: {
      zh: "TechFlows 组织线下见面，让想做点什么的人坐到同一张桌子上。现场互问四问，散场带走一小步。",
      en: "TechFlows organizes offline gatherings so people who want to build something can sit at the same table. Ask four questions on site, and leave with one small next step."
    },
    paths: { zh: "/events/", en: "/en/events/" },
    image: "/assets/og-events.png"
  },
  unfino: {
    id: "unfino",
    title: { zh: "未完场 UNFINO — TechFlows", en: "UNFINO — TechFlows" },
    description: {
      zh: "未完场 UNFINO 是 TechFlows 的项目续航场，接颁奖之后还想做下去的人。形式会变。",
      en: "UNFINO is TechFlows' project-continuation space. It catches people who still want to keep going after the awards. The format can change."
    },
    paths: { zh: "/unfino/", en: "/en/unfino/" },
    image: "/assets/og-unfino.png"
  },
  join: {
    id: "join",
    title: { zh: "申请加入 — TechFlows", en: "Join — TechFlows" },
    description: {
      zh: "加入 TechFlows。先以成员进来：见面、把想法讲清楚、找项目搭子、会后一小步。想负责再看功能活、一所学校、一座城。",
      en: "Join TechFlows as a member first: meet, write an idea down, find a project buddy, and take one small step. Read the three briefs only if you want to take responsibility."
    },
    paths: { zh: "/join/", en: "/en/join/" },
    image: "/assets/og-join.png"
  },
  partners: {
    id: "partners",
    title: { zh: "合作伙伴 — TechFlows", en: "Partners — TechFlows" },
    description: {
      zh: "TechFlows 诞生于安徽合肥，常驻据点在浙江。与高校、企业、技术社区和空间合作，从一件具体的事开始。",
      en: "TechFlows was born in Hefei, Anhui, and is based in Zhejiang. Partnerships with universities, companies, tech communities, and spaces start from one concrete thing."
    },
    paths: { zh: "/partners/", en: "/en/partners/" },
    image: "/assets/og-partners.png"
  },
  projects: {
    id: "projects",
    title: { zh: "项目记录 — TechFlows", en: "Projects — TechFlows" },
    description: {
      zh: "用四个问题把未完成的项目写清楚：为何开始、做到哪、卡在哪、还缺谁。不收虚构案例。",
      en: "Write unfinished projects clearly with four questions: why it began, how far it has gone, where it is stuck, and who is still needed. No fictional cases."
    },
    paths: { zh: "/projects/", en: "/en/projects/" },
    image: "/assets/og-projects.png"
  }
};

export const navItems: Array<{ page: PageId; label: Localized<string> }> = [
  { page: "home", label: { zh: "首页", en: "Home" } },
  { page: "events", label: { zh: "活动", en: "Events" } },
  { page: "unfino", label: { zh: "UNFINO", en: "UNFINO" } },
  { page: "projects", label: { zh: "项目记录", en: "Projects" } },
  { page: "partners", label: { zh: "合作伙伴", en: "Partners" } },
  { page: "join", label: { zh: "申请加入", en: "Join" } }
];

export type FooterLink =
  | { kind: "page"; page: PageId; label: Localized<string> }
  | { kind: "go"; slug: "cobuild"; source: string; label: Localized<string> };

export const footerLinks: FooterLink[] = [
  { kind: "page", page: "events", label: { zh: "活动", en: "Events" } },
  { kind: "page", page: "unfino", label: { zh: "UNFINO", en: "UNFINO" } },
  { kind: "page", page: "projects", label: { zh: "项目", en: "Projects" } },
  { kind: "go", slug: "cobuild", source: "footer_cobuild", label: { zh: "社区共建", en: "Co-build" } },
  { kind: "page", page: "partners", label: { zh: "合作伙伴", en: "Partners" } }
];
