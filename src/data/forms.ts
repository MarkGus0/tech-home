import type { Locale } from "./site";
import type { Localized } from "./translations";

export type GoSlug =
  | "join"
  | "project"
  | "cobuild"
  | "partner"
  | "activity-notice"
  | "event-review"
  | "wechat-album";

export type GoLink = {
  slug: GoSlug;
  target: string;
  label: Localized<string>;
  kind: "form" | "article" | "album";
};

export const goLinks: Record<GoSlug, GoLink> = {
  join: {
    slug: "join",
    target: "https://techflow.feishu.cn/share/base/form/shrcnGk0Lgb9bhwDssiIxqnmTJc",
    label: { zh: "加入 TechFlows", en: "Join TechFlows" },
    kind: "form"
  },
  project: {
    slug: "project",
    target: "https://techflow.feishu.cn/share/base/form/shrcnm3n8qv0pmDbpjCGTspFLmF",
    label: { zh: "提交项目或想法", en: "Submit a project or idea" },
    kind: "form"
  },
  cobuild: {
    slug: "cobuild",
    target: "https://techflow.feishu.cn/share/base/form/shrcn9EVyKXkC7Zpe38YMVtnGhf",
    label: { zh: "参与社区共建", en: "Help build the community" },
    kind: "form"
  },
  partner: {
    slug: "partner",
    target: "https://techflow.feishu.cn/share/base/form/shrcnYqR2vGg05CCdRr4S4t9lgg",
    label: { zh: "发起合作", en: "Start a partnership" },
    kind: "form"
  },
  "activity-notice": {
    slug: "activity-notice",
    target: "https://techflow.feishu.cn/share/base/form/shrcnGk0Lgb9bhwDssiIxqnmTJc",
    label: { zh: "获取活动通知", en: "Get event updates" },
    kind: "form"
  },
  "event-review": {
    slug: "event-review",
    target: "https://mp.weixin.qq.com/s/Xd6AtWla_79RNiVMIC3OuA",
    label: { zh: "查看活动回顾", en: "Read the event recap" },
    kind: "article"
  },
  "wechat-album": {
    slug: "wechat-album",
    target: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzYzMTY1MDM3MQ==&action=getalbum&album_id=4565047015637794816#wechat_redirect",
    label: { zh: "查看全部回顾", en: "View all recaps" },
    kind: "album"
  }
};

export function goPath(locale: Locale, slug: GoSlug, source?: string) {
  const prefix = locale === "en" ? "/en" : "";
  const query = source ? `?source=${encodeURIComponent(source)}` : "";
  return `${prefix}/go/${slug}/${query}`;
}
