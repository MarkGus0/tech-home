import type { Localized } from "./translations";

export const projectEmptyState = {
  title: {
    zh: "项目记录正在征集中",
    en: "Project stories are now being collected"
  },
  body: {
    zh: "这里不会先放虚构案例。我们正在寻找来自黑客松、校园项目、开源工具、AI 应用和创业尝试的真实早期项目。",
    en: "We will not fill this space with fictional examples. We are looking for real early-stage projects from hackathons, campus teams, open-source tools, AI applications, and startup experiments."
  },
  details: [
    { zh: "它为什么开始", en: "Why it began" },
    { zh: "已经做到了哪一步", en: "How far it has gone" },
    { zh: "遇到了什么问题", en: "What problems it is facing" },
    { zh: "还需要什么样的人", en: "What kind of people it still needs" }
  ] satisfies Localized<string>[]
};
