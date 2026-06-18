import type { Localized } from "./translations";

export const partnerTypes: Array<{ title: Localized<string>; description: Localized<string> }> = [
  {
    title: { zh: "高校与学生组织", en: "Universities and student organizations" },
    description: {
      zh: "让技术交流、黑客松和项目展示进入校园，为学生创造接触新技术、认识同行者和展示真实项目的机会。",
      en: "Bring technical exchange, hackathons, and project showcases onto campus, creating chances for students to meet new technologies, peers, and real project feedback."
    }
  },
  {
    title: { zh: "企业与创新团队", en: "Companies and innovation teams" },
    description: {
      zh: "将真实的技术、产品和产业问题带到青年创造者面前，也帮助企业发现正在成长的人与项目。",
      en: "Bring real technical, product, and industry problems to young creators while helping companies discover emerging people and projects."
    }
  },
  {
    title: { zh: "技术社区与开源组织", en: "Tech communities and open-source organizations" },
    description: {
      zh: "共同策划活动、介绍开源项目、寻找贡献者，让优秀内容和真实实践被更多人看见。",
      en: "Co-create events, introduce open-source projects, find contributors, and help strong content and real practice reach more people."
    }
  },
  {
    title: { zh: "园区与创新空间", en: "Innovation spaces and local hubs" },
    description: {
      zh: "通过活动场地、项目展示、创业交流与本地资源连接，让一次短暂的见面有机会形成更长期的关系。",
      en: "Use venues, showcases, founder conversations, and local resources to turn a brief meeting into a longer-term relationship."
    }
  }
];
