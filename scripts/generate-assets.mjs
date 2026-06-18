import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import sharp from "sharp";

const out = (name) => resolve("public/assets", name);
const logoData = readFileSync("public/assets/techflows-logo.png").toString("base64");

const cards = [
  {
    file: "og-home.png",
    title: "让想做点什么的人，先找到彼此",
    subtitle: "TechFlows 是关注青年科技创造者与早期项目的开放社区。",
    label: "TechFlows"
  },
  {
    file: "og-events.png",
    title: "活动",
    subtitle: "让原本不会相遇的人，来到同一个现场。",
    label: "Events"
  },
  {
    file: "og-join.png",
    title: "申请加入",
    subtitle: "带着你现在拥有的东西来。",
    label: "Join"
  },
  {
    file: "og-partners.png",
    title: "合作伙伴",
    subtitle: "从一件具体的事情开始，共同创造活动、项目展示与青年创新机会。",
    label: "Partners"
  },
  {
    file: "og-projects.png",
    title: "项目记录",
    subtitle: "认真记录那些还没有成熟、但已经开始发生的项目。",
    label: "Projects"
  }
];

function escapeText(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;"
  })[char]);
}

function ogSvg({ title, subtitle, label }) {
  const safeTitle = escapeText(title);
  const safeSubtitle = escapeText(subtitle);
  const safeLabel = escapeText(label);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#0288f0"/>
        <stop offset="1" stop-color="#4ad4df"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="#f8fafb"/>
    <rect x="70" y="66" width="1060" height="498" rx="18" fill="#ffffff" stroke="#e4ebf2"/>
    <image href="data:image/png;base64,${logoData}" x="94" y="92" width="190" height="50" preserveAspectRatio="xMinYMid meet"/>
    <text x="96" y="232" fill="#0a0d14" font-family="Inter, Arial, sans-serif" font-size="72" font-weight="760" letter-spacing="0">${safeTitle}</text>
    <text x="100" y="312" fill="#5c6a7d" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="420">${safeSubtitle}</text>
    <rect x="100" y="410" width="330" height="6" rx="3" fill="url(#line)"/>
    <text x="100" y="476" fill="#016fc4" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="700">${safeLabel}</text>
    <text x="100" y="520" fill="#5c6a7d" font-family="Inter, Arial, sans-serif" font-size="22">techflows.app</text>
    <circle cx="1026" cy="458" r="76" fill="#f2f5f8" stroke="#cbd6e3"/>
    <path d="M976 456h102M1000 424l-30 32 30 32M1054 424l30 32-30 32" fill="none" stroke="#0288f0" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="38" fill="#0a0d14"/>
  <path d="M42 64h96M42 90h70M42 116h96" fill="none" stroke="#4ad4df" stroke-width="14" stroke-linecap="round"/>
  <path d="M42 64h56M42 116h56" fill="none" stroke="#0288f0" stroke-width="14" stroke-linecap="round"/>
</svg>`)).png().toFile(out("apple-touch-icon.png"));

for (const card of cards) {
  await sharp(Buffer.from(ogSvg(card))).png().toFile(out(card.file));
}
