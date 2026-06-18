import type { GoSlug } from "./forms";
import type { Localized } from "./translations";

export type EventEntry = {
  title: Localized<string>;
  summary: Localized<string>;
  label: Localized<string>;
  status: "past" | "preparing";
  cta: GoSlug;
};

export const upcomingEvent = {
  title: {
    zh: "下一次见面，从一个真实问题开始",
    en: "The next gathering begins with a real question"
  },
  summary: {
    zh: "新的活动正在筹备中。加入 TechFlows，第一时间收到活动通知。",
    en: "New gatherings are being prepared. Join TechFlows to receive updates first."
  },
  status: { zh: "筹备中", en: "In preparation" },
  cta: "activity-notice" as const
};

export const pastEvents: EventEntry[] = [
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
