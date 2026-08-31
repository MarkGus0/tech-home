import type { GoSlug } from "./forms";
import type { Localized } from "./translations";

export type EventEntry = {
  title: Localized<string>;
  summary: Localized<string>;
  label: Localized<string>;
  status: "past" | "preparing";
  cta?: GoSlug;
};

export const upcomingEvent = {
  title: {
    zh: "下一次见面，从一个真实问题开始",
    en: "The next gathering begins with a real question"
  },
  summary: {
    zh: "下场见面，有人领走才发布。加入 TechFlows，等下一次真实的见面发生。",
    en: "The next gathering is published when someone claims it. Join TechFlows and wait until the next real gathering happens."
  },
  status: { zh: "待发布", en: "Not published" },
  cta: "activity-notice" as const
};

export const pastEvents: EventEntry[] = [
  {
    title: { zh: "驾驭 AI 重构生产力｜合肥首场", en: "Harnessing AI to Rebuild Productivity | Hefei" },
    summary: {
      zh: "诞生地第一场线下见面，在合肥蜀山经开区党群服务中心举行。主题是驾驭 AI 重构生产力。",
      en: "The first in-person gathering where TechFlows began, held at the Shushan Economic Development Zone Party-Mass Service Center in Hefei. The theme was harnessing AI to rebuild productivity."
    },
    label: { zh: "诞生地首场｜合肥", en: "First gathering | Hefei" },
    status: "past"
  },
  {
    title: { zh: "AI+X 创造节｜苏州站", en: "AI+X Creation Festival | Suzhou" },
    summary: {
      zh: "一次围绕 AI 实践、线下共创和青年科技创造者的活动回顾。",
      en: "A recap of an in-person gathering around AI practice, co-creation, and young tech creators."
    },
    label: { zh: "AI 实践｜线下共创｜苏州", en: "AI practice | In-person co-creation | Suzhou" },
    status: "past",
    cta: "event-review"
  }
];
