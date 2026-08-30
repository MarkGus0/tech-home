import type { Localized } from "./translations";

export const partnerTypes: Array<{ title: Localized<string>; description: Localized<string> }> = [
  {
    title: { zh: "高校与学生组织", en: "Universities and student organizations" },
    description: {
      zh: "从一所具体的学校开始。本校场使用学校空间。不从已覆盖多少所高校讲起，也不保证学分或官方立项。",
      en: "Start with one specific school. Campus gatherings use campus space. We do not begin with how many schools we cover, and we do not guarantee credits or official programs."
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
      zh: "对方提供当期线下场地，是最受欢迎的合作之一。必须有产物，必须有会后下一步。没有书面约定前，双方都不说已入驻。",
      en: "Providing the in-person venue for a gathering is one of the collaborations we welcome most. There must be an artifact, and a next step after the gathering. Until there is a written agreement, neither side says we have moved in."
    }
  }
];
