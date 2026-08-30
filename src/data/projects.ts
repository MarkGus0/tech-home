import type { Localized } from "./translations";

export const projectEmptyState = {
  title: {
    zh: "项目记录尚未上线",
    en: "Project records are not live yet"
  },
  body: {
    zh: "这里不会先放虚构案例。已经做出一点东西，就按四个问题把它写清楚。",
    en: "We will not fill this space with fictional examples. If you have already built a little, write it down with four questions."
  },
  details: [
    { zh: "它为什么开始", en: "Why it began" },
    { zh: "已经做到了哪一步", en: "How far it has gone" },
    { zh: "遇到了什么问题", en: "What problems it is facing" },
    { zh: "还需要什么样的人", en: "What kind of people it still needs" }
  ] satisfies Localized<string>[]
};
