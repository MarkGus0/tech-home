export type Locale = "zh" | "en";
export type Localized<T> = Record<Locale, T>;

export const translations = {
  "skipLink": {
    "zh": "跳到正文",
    "en": "Skip to content"
  },
  "nav.partners": {
    "zh": "合作伙伴",
    "en": "Partners"
  },
  "nav.events": {
    "zh": "活动",
    "en": "Events"
  },
  "nav.join": {
    "zh": "申请加入",
    "en": "Join"
  },
  "nav.primaryLabel": {
    "zh": "主导航",
    "en": "Main navigation"
  },
  "nav.menuOpen": {
    "zh": "打开导航",
    "en": "Open navigation"
  },
  "nav.menuClose": {
    "zh": "关闭导航",
    "en": "Close navigation"
  },
  "lang.switchTo.aria.en": {
    "zh": "Switch to English",
    "en": "切换到中文"
  },
  "readingMap.ariaLabel": {
    "zh": "阅读章节",
    "en": "Reading chapters"
  },
  "readingMap.label": {
    "zh": "显示全部",
    "en": "Show All"
  },
  "readingMap.label.alt": {
    "zh": "逐行阅读",
    "en": "Line-by-Line"
  },
  "hero.title": {
    "zh": "让想做点什么的人，<br />先找到彼此",
    "en": "For those who want to build something,<br />find each other first"
  },
  "hero.summary.1": {
    "zh": "在技术变化越来越快的今天，很多年轻人并不是没有兴趣，也不是没有想法。",
    "en": "In an era of accelerating technological change, many young people are neither uninterested nor lacking in ideas."
  },
  "hero.summary.2": {
    "zh": "他们只是还不知道从哪里开始、应该去找谁，或者在做出第一个项目以后，下一步还能走向哪里。",
    "en": "They just don't know where to start, who to reach out to, or — after finishing their first project — where to go next."
  },
  "hero.summary.3": {
    "zh": "TechFlows 是一个关注青年科技创造者与早期项目的开放社区。诞生于安徽合肥，日常见面在浙江。",
    "en": "TechFlows is an open community for young tech creators and early-stage projects. Born in Hefei, Anhui. Regular gatherings are in Zhejiang."
  },
  "hero.summary.4": {
    "zh": "我们通过见面、项目记录、UNFINO 和社区连接，让正在行动的人被看见，让还在生长的想法遇见可能的同行者。",
    "en": "Through gatherings, project records, UNFINO, and community connections, we help those in motion be seen."
  },
  "hero.entry.kicker": {
    "zh": "现在可以从这里开始",
    "en": "Start here"
  },
  "hero.entry.title": {
    "zh": "带着你现在拥有的东西来",
    "en": "Bring what you have right now"
  },
  "hero.entry.listAria": {
    "zh": "现在可以从这里开始",
    "en": "Start here"
  },
  "hero.entry.events.status": {
    "zh": "近期活动｜筹备中",
    "en": "Upcoming｜In preparation"
  },
  "hero.entry.events.title": {
    "zh": "先来一次见面",
    "en": "Start with a gathering"
  },
  "hero.entry.events.description": {
    "zh": "参加活动，或先留下联系方式，等下一次真实的见面发生。",
    "en": "Join an event, or leave your contact so you can hear when the next real gathering takes shape."
  },
  "hero.entry.events.cta": {
    "zh": "看看近期活动",
    "en": "See upcoming events"
  },
  "hero.entry.project.status": {
    "zh": "项目记录｜正在征集",
    "en": "Project stories｜Now collecting"
  },
  "hero.entry.project.title": {
    "zh": "让想法先被听见",
    "en": "Let an idea be heard first"
  },
  "hero.entry.project.description": {
    "zh": "提交正在做的项目、原型，或者还没有完全想清楚的方向。",
    "en": "Submit a project, a prototype, or a direction you are still figuring out."
  },
  "hero.entry.project.cta": {
    "zh": "提交项目或想法",
    "en": "Submit a project or idea"
  },
  "hero.entry.cobuild.status": {
    "zh": "想负责｜三条入口",
    "en": "Take responsibility｜Three doors"
  },
  "hero.entry.cobuild.title": {
    "zh": "想负责再选入口",
    "en": "Pick a door if you want to take responsibility"
  },
  "hero.entry.cobuild.description": {
    "zh": "社区一件功能活、一所学校、或一座城。不是选头衔。普通成员不必先选。",
    "en": "One functional job, one school, or one city. This is not a title. Ordinary members do not have to pick first."
  },
  "hero.entry.cobuild.cta": {
    "zh": "看看三条入口",
    "en": "See the three doors"
  },
  "home.nav.now": {
    "zh": "正在做什么",
    "en": "What we do"
  },
  "home.nav.tracks": {
    "zh": "想负责再选",
    "en": "Take responsibility"
  },
  "home.nav.principles": {
    "zh": "我们守住什么",
    "en": "What we protect"
  },
  "home.nav.status": {
    "zh": "当前状态",
    "en": "Current status"
  },
  "home.nav.join": {
    "zh": "加入",
    "en": "Join"
  },
  "home.now.kicker": {
    "zh": "TechFlows 的工作",
    "en": "The work of TechFlows"
  },
  "home.now.title": {
    "zh": "我们现在做三件事",
    "en": "We are doing three things right now"
  },
  "home.now.intro": {
    "zh": "把人带到同一张桌子上，把未完成的项目写清楚，让一次见面有下一站。",
    "en": "Bring people to the same table, write unfinished projects clearly, and give a gathering a next stop."
  },
  "home.now.events.title": {
    "zh": "把人带到同一张桌子上",
    "en": "Bring people to the same table"
  },
  "home.now.events.description": {
    "zh": "组织线下见面，让想做点什么的人坐到一起。场地当期确认。目前没有入住任何园区。",
    "en": "We organize offline gatherings so people who want to build something can sit together. The venue is confirmed for each gathering. We have not moved into any park."
  },
  "home.now.events.link": {
    "zh": "查看活动",
    "en": "See events"
  },
  "home.now.projects.title": {
    "zh": "把未完成的项目写清楚",
    "en": "Write unfinished projects clearly"
  },
  "home.now.projects.description": {
    "zh": "用四个问题把未完成写清楚。未完成也可以被看见。",
    "en": "Write unfinished work clearly with four questions. Unfinished work can still be seen."
  },
  "home.now.projects.link": {
    "zh": "查看项目记录",
    "en": "See project stories"
  },
  "home.now.connections.title": {
    "zh": "让一次见面有下一站",
    "en": "Give a gathering a next stop"
  },
  "home.now.connections.description": {
    "zh": "会后每人带走一小步。UNFINO 接颁奖之后还想做下去的人。",
    "en": "Everyone leaves with one small next step. UNFINO catches the people who still want to keep going after the awards."
  },
  "home.now.connections.link": {
    "zh": "了解 UNFINO",
    "en": "See UNFINO"
  },
  "home.tracks.kicker": {
    "zh": "想负责再选入口",
    "en": "Pick a door if you want to take responsibility"
  },
  "home.tracks.title": {
    "zh": "功能活、一所学校、一座城",
    "en": "One job, one school, one city"
  },
  "home.tracks.intro": {
    "zh": "三条入口，不要并成一张菜单。普通成员不必先选。先加入，做一件小事，再转正。",
    "en": "These are three doors, not one menu. Ordinary members do not have to pick first. Join, do one small thing, then become official."
  },
  "home.tracks.job.title": {
    "zh": "社区一件功能活",
    "en": "One functional job"
  },
  "home.tracks.job.description": {
    "zh": "先选一个活，不是选头衔。不把设计、摄影、外联写成默认活。",
    "en": "Pick one job, not a title. Do not list design, photography, or outreach as the default work."
  },
  "home.tracks.job.cta": {
    "zh": "阅读选活说明",
    "en": "Read the job brief"
  },
  "home.tracks.school.title": {
    "zh": "一所学校",
    "en": "One school"
  },
  "home.tracks.school.description": {
    "zh": "高校共创发起人负责一所具体的学校。现在优先浙江高校。合肥是出身地，同样欢迎。",
    "en": "A campus initiator is responsible for one specific school. Zhejiang campuses come first right now. Hefei is where we began, and is equally welcome."
  },
  "home.tracks.school.cta": {
    "zh": "阅读高校招募令",
    "en": "Read the campus brief"
  },
  "home.tracks.city.title": {
    "zh": "一座城",
    "en": "One city"
  },
  "home.tracks.city.description": {
    "zh": "城市共创者订当期场地、收住一件真事、让散场的人下场还来。",
    "en": "A city co-creator books the venue for this gathering, turns one outside relationship into a real thing, and helps people come back next time."
  },
  "home.tracks.city.cta": {
    "zh": "阅读城市共创说明",
    "en": "Read the city brief"
  },
  "home.principles.kicker": {
    "zh": "我们希望守住的事",
    "en": "What we want to protect"
  },
  "home.principles.title": {
    "zh": "社区可以很开放，但行动需要具体",
    "en": "A community can be open, but action should stay concrete"
  },
  "home.principles.maturity.title": {
    "zh": "未完成也可以被看见",
    "en": "Unfinished work can still be seen"
  },
  "home.principles.maturity.description": {
    "zh": "带着你现在拥有的东西来。不必先证明自己专业，也不必先交完整方案。",
    "en": "Bring what you have right now. You do not have to prove you are professional, or submit a complete plan first."
  },
  "home.principles.honesty.title": {
    "zh": "不把做不到的事包装成服务",
    "en": "Do not package what we cannot do as a service"
  },
  "home.principles.honesty.description": {
    "zh": "无法保证的事情，不提前写成承诺。",
    "en": "If we cannot guarantee it, we do not write it as a promise."
  },
  "home.principles.continuity.title": {
    "zh": "活动不是关系的终点",
    "en": "An event is not the end of a relationship"
  },
  "home.principles.continuity.description": {
    "zh": "一次见面只是开始。散场时带走一小步，下场只看这一步做了没有。",
    "en": "A gathering is only the beginning. Leave with one small next step, and the next gathering only asks whether that step was done."
  },
  "home.principles.note": {
    "zh": "不是课程，不是 offer，不是固定工位。目前没有入住任何园区。",
    "en": "This is not a course, not an offer, and not a fixed desk. We have not moved into any park."
  },
  "home.status.kicker": {
    "zh": "不把未完成写成已完成",
    "en": "Do not call unfinished work finished"
  },
  "home.status.title": {
    "zh": "现在的 TechFlows",
    "en": "TechFlows right now"
  },
  "home.status.intro": {
    "zh": "我们还在早期。下面这些事情正在发生，也欢迎你从其中一个入口加入。",
    "en": "We are still early. These are the things currently taking shape, and you are welcome to enter through any one of them."
  },
  "home.status.events.label": {
    "zh": "下一场活动",
    "en": "Next gathering"
  },
  "home.status.events.value": {
    "zh": "正在筹备",
    "en": "In preparation"
  },
  "home.status.events.cta": {
    "zh": "获取通知",
    "en": "Get updates"
  },
  "home.status.projects.label": {
    "zh": "项目记录",
    "en": "Project stories"
  },
  "home.status.projects.value": {
    "zh": "正在征集",
    "en": "Now collecting"
  },
  "home.status.projects.cta": {
    "zh": "提交项目",
    "en": "Submit a project"
  },
  "home.status.cobuild.label": {
    "zh": "想负责",
    "en": "Take responsibility"
  },
  "home.status.cobuild.value": {
    "zh": "三条入口开放",
    "en": "Three doors open"
  },
  "home.status.cobuild.cta": {
    "zh": "看看入口",
    "en": "See the doors"
  },
  "home.status.partners.label": {
    "zh": "合作申请",
    "en": "Partnerships"
  },
  "home.status.partners.value": {
    "zh": "欢迎联系",
    "en": "Open to conversations"
  },
  "home.status.partners.cta": {
    "zh": "了解合作",
    "en": "Explore partnership"
  },
  "home.join.kicker": {
    "zh": "从你现在拥有的东西开始",
    "en": "Start with what you have"
  },
  "home.join.title": {
    "zh": "也许你还没有一个完整的项目",
    "en": "Maybe you do not have a complete project yet"
  },
  "home.join.p1": {
    "zh": "也许它只是在备忘录里写了几行，也许你已经做出了一些东西，却不知道该给谁看。都没有关系。",
    "en": "Maybe it is only a few lines in your notes, or maybe you have built something but do not know who to show it to. That is okay."
  },
  "home.join.p2": {
    "zh": "带着你现在拥有的东西来。",
    "en": "Bring what you have right now."
  },
  "home.join.closing": {
    "zh": "很多事情开始之前，只差遇见一个人。",
    "en": "Before many things begin, it is just one person you have not met yet."
  },
  "home.join.actionsAria": {
    "zh": "加入 TechFlows 的方式",
    "en": "Ways to join TechFlows"
  },
  "join.action.join": {
    "zh": "加入 TechFlows",
    "en": "Join TechFlows"
  },
  "join.action.submit": {
    "zh": "提交项目或想法",
    "en": "Submit a project or idea"
  },
  "join.action.coBuild": {
    "zh": "参与社区共建",
    "en": "Help build the community"
  },
  "footer.tagline": {
    "zh": "让想做点什么的人，先找到彼此。",
    "en": "Let people who want to build something find each other first."
  },
  "partners.hero.p1": {
    "zh": "真正有价值的合作，不只是把名字放在同一张海报上",
    "en": "Truly valuable collaboration isn't just putting names on the same poster"
  },
  "partners.hero.p2": {
    "zh": "TechFlows 诞生于安徽合肥，常驻据点在浙江，目前没有入住任何园区或 OPC。与高校、企业、技术社区和空间合作，都从一件具体的事开始。",
    "en": "TechFlows was born in Hefei, Anhui, and is based in Zhejiang. We have not moved into any park or OPC. Partnerships with universities, companies, tech communities, and spaces all start from one concrete thing."
  },
  "partners.collab.title": {
    "zh": "合作共建",
    "en": "Collaboration"
  },
  "partners.collab.p1": {
    "zh": "我们希望每一次合作，都从一件具体的事情开始。",
    "en": "We hope every collaboration begins with one concrete thing."
  },
  "partners.collab.p2": {
    "zh": "可能是让一场值得参与的活动发生，让一个真实项目被更多人看见，也可能是让一群正在寻找方向的年轻人，遇见新的技术、伙伴和机会。",
    "en": "It might be making a worthwhile event happen, helping a real project be seen by more people, or helping young people finding their direction meet new technologies, partners, and opportunities."
  },
  "partners.collab.p3": {
    "zh": "合作可以是一场联合活动、一次项目征集、一项技术或场地支持，也可以是对方开放的赛事或实习线索、共创与展示机会。",
    "en": "Collaboration can be a joint event, a project call, technical or venue support, or competition and internship leads the other side opens, plus co-creation and showcase opportunities."
  },
  "partners.collab.p4": {
    "zh": "我们不追求只停留在品牌露出上的合作。比起出现在同一张海报上，我们更关心这次合作能否真正为参与者带来一些改变。",
    "en": "We don't pursue collaborations that stop at brand visibility. More than appearing on the same poster, we care about whether this collaboration can truly bring change to participants."
  },
  "partners.collab.p5": {
    "zh": "对方在浙江提供场地，是最受欢迎的合作之一。必须有产物，必须有会后下一步。没有书面入住前，双方都不说已入驻。",
    "en": "A venue in Zhejiang is one of the collaborations we welcome most. There must be an artifact, and a next step after the gathering. Until there is a written agreement, neither side says we have moved in."
  },
  "partners.who.title": {
    "zh": "我们希望与谁同行",
    "en": "Who we want to walk with"
  },
  "partners.cta.title": {
    "zh": "一起做一件具体的事",
    "en": "Let's do one concrete thing together"
  },
  "partners.cta.p1": {
    "zh": "一场活动、一个项目、一份开放的机会，都可能成为某个人继续向前的起点。",
    "en": "One event, one project, one open opportunity — any of these could be the starting point for someone to keep moving forward."
  },
  "partners.cta.p2": {
    "zh": "来信只写五段：你是谁；想做成的一件具体的事；你能提供什么；希望 TechFlows 提供什么；期望的时间窗口。",
    "en": "Write five short parts: who you are; the one concrete thing you want to finish; what you can offer; what you want from TechFlows; and the time window."
  },
  "partners.cta.p3": {
    "zh": "我们会从这一件具体的事开始，而不是先谈品牌露出。",
    "en": "We will start from that one concrete thing, not from brand visibility."
  },
  "partners.cta.button": {
    "zh": "发起合作",
    "en": "Start a collaboration"
  },
  "events.hero.p1": {
    "zh": "让原本不会相遇的人，来到同一个现场",
    "en": "Bringing together people who otherwise would never meet"
  },
  "events.intro.p1": {
    "zh": "有人带着一个还没想清楚的问题来。有人已经做出一点东西，正在找项目搭子。也有人什么都不带，只是想先坐到同一张桌子上。",
    "en": "Some come with a question they have not figured out. Some have already built a little and are looking for a project partner. Some bring nothing, and just want to sit at the same table first."
  },
  "events.intro.p2": {
    "zh": "TechFlows 组织线下见面。现场互问四个问题，散场带走一小步。这不是上课，也不是系列赛。",
    "en": "TechFlows organizes offline gatherings. People ask each other four questions on site, and leave with one small next step. This is not a class, and not a series of contests."
  },
  "events.upcoming.title": {
    "zh": "近期活动",
    "en": "Upcoming Events"
  },
  "events.upcoming.p1": {
    "zh": "下场见面的时间和场地当期确认。没有锁定日期和场地，就不写成已经在办。",
    "en": "The time and venue of the next gathering are confirmed for that gathering. If the date and venue are not locked, we do not write as if it is already happening."
  },
  "events.hope.title": {
    "zh": "我们希望现场发生什么",
    "en": "What we hope happens in person"
  },
  "events.hope.h1.title": {
    "zh": "互问四个问题",
    "en": "Ask four questions"
  },
  "events.hope.h1.desc": {
    "zh": "为何开始、做到哪、卡在哪、还缺谁。这不是路演评分。",
    "en": "Why it began, how far it has gone, where it is stuck, and who is still needed. This is not a pitch score."
  },
  "events.hope.h2.title": {
    "zh": "找到一个项目搭子",
    "en": "Find a project partner"
  },
  "events.hope.h2.desc": {
    "zh": "两个人坐下来把想法讲清楚。项目搭子是同行者，不是免费老师或免费劳动力。",
    "en": "Two people sit down and make an idea clear. A project partner is a fellow traveler, not a free teacher or free labor."
  },
  "events.hope.h3.title": {
    "zh": "散场带走一小步",
    "en": "Leave with one small next step"
  },
  "events.hope.h3.desc": {
    "zh": "每人只定一个下一步。下场见面只问这一步做了没有。",
    "en": "Each person names only one next step. The next gathering only asks whether that step was done."
  },
  "events.past.title": {
    "zh": "往期回顾",
    "en": "Past Events"
  },
  "events.past.intro": {
    "zh": "那些已经发生的相遇",
    "en": "Encounters that have already happened"
  },
  "events.past.event2.title": {
    "zh": "更多活动，正在被记录",
    "en": "More events are being documented"
  },
  "events.past.event2.desc": {
    "zh": "我们会持续记录每一次活动中真正发生的事情：谁来到了现场，大家讨论了什么，出现了哪些项目，以及活动结束后，还有什么在继续发生。",
    "en": "We continuously document what actually happens at each event: who showed up, what was discussed, which projects emerged, and what continues to happen after the event ends."
  },
  "events.past.event2.button": {
    "zh": "查看全部回顾",
    "en": "View all recaps"
  },
  "events.part.title": {
    "zh": "你也可以成为活动的一部分",
    "en": "You can also be part of the event"
  },
  "events.part.intro": {
    "zh": "一场活动，不只是由嘉宾和主办方完成。它也需要愿意分享项目的人、记录现场的人、参与组织的人，以及共同提供场地、技术和资源的合作伙伴。",
    "en": "An event isn't just made by speakers and organizers. It also needs people willing to share projects, document what happens, help organize, and partners who provide venues, technology, and resources."
  },
  "events.part.h1.title": {
    "zh": "带着项目来",
    "en": "Bring your project"
  },
  "events.part.h1.desc": {
    "zh": "介绍你正在做的项目、作品或想法，参与现场分享与交流。",
    "en": "Introduce the project, work, or idea you're building. Join the live sharing and discussion."
  },
  "events.part.h1.button": {
    "zh": "提交项目",
    "en": "Submit your project"
  },
  "events.part.h2.title": {
    "zh": "参与活动共建",
    "en": "Help build the event"
  },
  "events.part.h2.desc": {
    "zh": "参与现场组织、记录与收尾。",
    "en": "Join on-site organization, documentation, and wrap-up."
  },
  "events.part.h2.button": {
    "zh": "加入共建",
    "en": "Join the build"
  },
  "events.part.h3.title": {
    "zh": "与我们联合举办",
    "en": "Co-host with us"
  },
  "events.part.h3.desc": {
    "zh": "高校、企业、园区、技术社区与开源组织，可以与 TechFlows 共同发起一场活动。",
    "en": "Universities, companies, innovation parks, tech communities, and open-source organizations can co-launch an event with TechFlows."
  },
  "events.cta.title": {
    "zh": "下一场活动，等你来",
    "en": "The next event is waiting for you"
  },
  "events.cta.p1": {
    "zh": "你不需要已经拥有成熟的项目，也不必先证明自己足够专业。可以带着一个问题来，一段经历来，或者只是先坐下来，听听其他人正在做什么。",
    "en": "You don't need to have a mature project already, or prove you're professional enough. You can come with a question, a story, or just sit down and listen to what others are building."
  },
  "events.cta.p2": {
    "zh": "很多事情不会在一场活动里立刻得到答案。但它可能从这里，第一次有了下一步。",
    "en": "Many things won't get answered in a single event. But it might be here that it first gets a next step."
  },
  "events.cta.button3": {
    "zh": "了解 UNFINO",
    "en": "Explore UNFINO"
  },
  "joinPage.hero.p1": {
    "zh": "带着你现在拥有的东西来。不必先选身份。",
    "en": "Bring what you have right now. You do not need to pick an identity first."
  },
  "joinPage.hero.p2": {
    "zh": "官网入口说的是怎么加入，不是军衔。",
    "en": "This page is about how to join, not a rank."
  },
  "joinPage.method.title": {
    "zh": "加入方式",
    "en": "How to join"
  },
  "joinPage.method.p1": {
    "zh": "填写表单告诉我们你是谁、你在做什么、你希望在这里遇见什么样的人。我们会通过邮件或社区渠道与你取得联系。",
    "en": "Fill out the form to tell us who you are, what you are working on, and whom you hope to meet. We will reach you by email or community channels."
  },
  "joinPage.method.p2": {
    "zh": "先加入，再行动。普通成员不必先选三条负责入口。",
    "en": "Join first, then act. Ordinary members do not need to pick one of the three responsibility doors first."
  },
  "joinPage.who.title": {
    "zh": "谁可以来",
    "en": "Who can come"
  },
  "joinPage.who.intro": {
    "zh": "你不必先证明自己专业，也不必先交完整方案。学生、开发者、产品人、设计师，都可以先以成员身份进来。",
    "en": "You do not need to prove expertise or submit a complete plan first. Students, developers, product people, and designers can all come in as members."
  },
  "joinPage.who.curious.title": {
    "zh": "还没有项目",
    "en": "No project yet"
  },
  "joinPage.who.curious.description": {
    "zh": "来见面，找一个项目搭子，会后只做一小步。",
    "en": "Come to a gathering, find a project buddy, and take only one small step afterward."
  },
  "joinPage.who.curious.cta": {
    "zh": "看活动",
    "en": "See events"
  },
  "joinPage.who.project.title": {
    "zh": "已经做出一点东西",
    "en": "Already built something"
  },
  "joinPage.who.project.description": {
    "zh": "提交项目或想法，让它先被写清楚。",
    "en": "Submit a project or idea and get it written down first."
  },
  "joinPage.who.project.cta": {
    "zh": "提交项目",
    "en": "Submit a project"
  },
  "joinPage.who.builder.title": {
    "zh": "愿意负责",
    "en": "Ready to take responsibility"
  },
  "joinPage.who.builder.description": {
    "zh": "一件功能活走选活；一所学校走高校；一座城走城市。",
    "en": "One functional job, one school, or one city — three separate doors."
  },
  "joinPage.who.builder.cta": {
    "zh": "看三条入口",
    "en": "See the three doors"
  },
  "joinPage.who.partner.title": {
    "zh": "手上有资源",
    "en": "You have resources"
  },
  "joinPage.who.partner.description": {
    "zh": "从一件具体合作开始。",
    "en": "Start with one concrete collaboration."
  },
  "joinPage.who.partner.cta": {
    "zh": "谈合作",
    "en": "Talk partnership"
  },
  "joinPage.offer.title": {
    "zh": "进来立刻有什么",
    "en": "What you get right away"
  },
  "joinPage.offer.intro": {
    "zh": "我们能稳定给到的。",
    "en": "What we can reliably give."
  },
  "joinPage.offer.meet.title": {
    "zh": "能来见面",
    "en": "You can come meet people"
  },
  "joinPage.offer.meet.description": {
    "zh": "日常在浙江，具体场地当期确认。",
    "en": "Day-to-day gatherings are in Zhejiang; the venue is confirmed for each one."
  },
  "joinPage.offer.meet.cta": {
    "zh": "看活动",
    "en": "See events"
  },
  "joinPage.offer.write.title": {
    "zh": "能把想法讲清楚",
    "en": "You can get an idea written down"
  },
  "joinPage.offer.write.description": {
    "zh": "按四个问题写项目或想法。四问全文在项目页。",
    "en": "Write a project or idea with four questions. The full prompts are on the projects page."
  },
  "joinPage.offer.write.cta": {
    "zh": "看项目页",
    "en": "See the projects page"
  },
  "joinPage.offer.step.title": {
    "zh": "能找项目搭子，会后一小步",
    "en": "Find a project buddy, then one small step"
  },
  "joinPage.offer.step.description": {
    "zh": "见面后两个人互问四问，散场前只定一个下一步。",
    "en": "After you meet, two people ask each other the four questions and leave with one next step."
  },
  "joinPage.offer.limit": {
    "zh": "不提供系统课程、保送、融资承诺、固定园区工位。",
    "en": "We do not offer a curriculum, guaranteed placement, fundraising promises, or a fixed campus desk."
  },
  "joinPage.tracks.title": {
    "zh": "想负责再看三份说明",
    "en": "Read the three briefs if you want to take responsibility"
  },
  "joinPage.tracks.intro": {
    "zh": "想负责一件事，再走候选 → 做一件小事 → 正式。功能活、一所学校、一座城是三条入口，不要并成一张菜单。普通成员不必走这条。详情在飞书。",
    "en": "If you want to own one thing, go candidate → one small task → formal. One job, one school, and one city are three doors, not one menu. Ordinary members do not need this path. Details live on Feishu."
  },
  "joinPage.cta.title": {
    "zh": "从填写申请开始",
    "en": "Start with the form"
  },
  "joinPage.cta.button1": {
    "zh": "填写申请",
    "en": "Fill out the form"
  },
  "joinPage.cta.button2": {
    "zh": "邮件联系",
    "en": "Contact us via email"
  },
  "joinPage.cta.closing": {
    "zh": "很多事情开始之前，只差遇见一个人。",
    "en": "Before many things begin, it's just one person you haven't met yet."
  },
  "unfinoBrand.hero.title": {
    "zh": "属于 TechFlows 的项目续航场。形式会变，给项目一个下一步。",
    "en": "TechFlows' project-continuation space. The format can change; it gives a project a next step."
  },
  "unfinoBrand.hero.lead": {
    "zh": "UNFINO 接颁奖之后还想做下去的人。它属于 TechFlows，不是融资路演，也不是报名即会员。形式可以是展示、冲刺、主题挑战或短黑客松。",
    "en": "UNFINO catches people who still want to keep going after the awards. It belongs to TechFlows. It is not a fundraising pitch, and not a club you join by signing up. The format can be a showcase, a sprint, a themed challenge, or a short hackathon."
  },
  "unfinoBrand.hero.button1": {
    "zh": "查看活动形式",
    "en": "Explore the formats"
  },
  "unfinoBrand.hero.button2": {
    "zh": "查看近期活动",
    "en": "See upcoming events"
  },
  "unfinoBrand.formats.kicker": {
    "zh": "形式可以变化，目标不变",
    "en": "Different formats, one direction"
  },
  "unfinoBrand.formats.title": {
    "zh": "黑客松只是一个例子",
    "en": "A hackathon is only one format"
  },
  "unfinoBrand.formats.intro": {
    "zh": "UNFINO 是 TechFlows 的项目续航场，形式会变。我们根据问题、参与者和现场条件，选择最适合让项目发生的活动形式。",
    "en": "UNFINO is TechFlows' project-continuation space, and the format can change. We choose the format that best helps a project happen, based on the problem, the people, and the setting."
  },
  "unfinoBrand.formats.example": {
    "zh": "示例形式",
    "en": "Example format"
  },
  "unfinoBrand.formats.hackathon.title": {
    "zh": "短时黑客松",
    "en": "Short hackathon"
  },
  "unfinoBrand.formats.hackathon.description": {
    "zh": "在有限时间内组队、制作和展示一个可以继续验证的原型。",
    "en": "Team up, build, and show a prototype that can be tested beyond the event."
  },
  "unfinoBrand.formats.challenge.title": {
    "zh": "主题挑战赛",
    "en": "Themed challenge"
  },
  "unfinoBrand.formats.challenge.description": {
    "zh": "围绕一个真实问题展开挑战，让不同背景的人带着方案来到同一个现场。",
    "en": "Bring different perspectives together around one real problem and a focused challenge."
  },
  "unfinoBrand.formats.sprint.title": {
    "zh": "共创冲刺",
    "en": "Build sprint"
  },
  "unfinoBrand.formats.sprint.description": {
    "zh": "用半天、一天或几天完成一次集中共创，把一个方向推到更清楚的下一步。",
    "en": "Use a half-day, a day, or several days of focused collaboration to clarify the next step."
  },
  "unfinoBrand.formats.showcase.title": {
    "zh": "项目展示场",
    "en": "Project showcase"
  },
  "unfinoBrand.formats.showcase.description": {
    "zh": "让早期项目被看见、被反馈，并找到愿意一起继续的人。",
    "en": "Help early projects be seen, receive feedback, and find people willing to continue with them."
  },
  "unfinoBrand.builder.kicker": {
    "zh": "现场宣布，不提前内定",
    "en": "Announced on site, not reserved in advance"
  },
  "unfinoBrand.builder.title": {
    "zh": "资格在现场宣布，不售卖、不提前内定。",
    "en": "Qualification is announced on site. It is not sold, and not reserved in advance."
  },
  "unfinoBrand.builder.lead": {
    "zh": "Builder 看重的是愿意把项目推下一步，不是到场本身。它不是报名即会员的俱乐部。",
    "en": "Builder looks at whether someone will push a project one step further, not at attendance itself. It is not a club you join by signing up."
  },
  "unfinoBrand.builder.onsite.title": {
    "zh": "资格在现场宣布",
    "en": "Qualification is announced on site"
  },
  "unfinoBrand.builder.onsite.description": {
    "zh": "不售卖，不提前内定。本场规则就是当场留下名单，并在下一次见面出现。",
    "en": "It is not sold, and not reserved in advance. The rule for this gathering is to leave a name, and to show up at the next one."
  },
  "unfinoBrand.builder.commitment.title": {
    "zh": "看重下一步，不是到场本身",
    "en": "The next step matters more than attendance"
  },
  "unfinoBrand.builder.commitment.description": {
    "zh": "愿意把项目推下一步的人，才是 Builder 想留下的人。",
    "en": "Builder is for people willing to push a project one step further."
  },
  "unfinoBrand.builder.together.title": {
    "zh": "规则当场公布",
    "en": "The rules are announced on site"
  },
  "unfinoBrand.builder.together.description": {
    "zh": "具体规则每场公布。本场规则就是：留下名单，并在下一次见面出现。",
    "en": "The exact rules are announced at each gathering. The rule for this one is: leave a name, and show up next time."
  },
  "unfinoBrand.builder.note": {
    "zh": "具体资格规则以每场活动现场公布为准。不要写成会员等级或保证导师。",
    "en": "The exact qualification rules are announced at each gathering. Do not write this as membership tiers or guaranteed mentors."
  },
  "unfinoBrand.next.kicker": {
    "zh": "下一场，现场见",
    "en": "See you at the next one"
  },
  "unfinoBrand.next.title": {
    "zh": "先进入一场活动，再决定要走多远。",
    "en": "Enter one event first. Decide how far to go next."
  },
  "unfinoBrand.next.copy": {
    "zh": "你可以带着一个问题、一个项目，或一项愿意贡献的能力来到 UNFINO。",
    "en": "Come to UNFINO with a question, a project, or a skill you are willing to contribute."
  },
  "unfinoBrand.next.button1": {
    "zh": "查看活动",
    "en": "See events"
  },
  "unfinoBrand.next.button2": {
    "zh": "提交项目",
    "en": "Submit a project"
  },
  "header.brandAria": {
    "zh": "TechFlows 首页",
    "en": "TechFlows home"
  },
  "header.navIntro": {
    "zh": "选择一个入口，继续探索",
    "en": "Choose a path and keep exploring"
  },
  "header.menu": {
    "zh": "菜单",
    "en": "Menu"
  },
  "header.close": {
    "zh": "关闭",
    "en": "Close"
  },
  "footer.blurb": {
    "zh": "关注青年科技创造者与早期项目的开放社区。",
    "en": "An open community for young tech creators and early-stage projects."
  },
  "footer.navLabel": {
    "zh": "页脚导航",
    "en": "Footer navigation"
  },
  "redirect.title": {
    "zh": "即将前往外部链接",
    "en": "Leaving TechFlows"
  },
  "redirect.heading": {
    "zh": "你将前往以下地址",
    "en": "You are about to visit"
  },
  "redirect.confirm": {
    "zh": "确认并前往",
    "en": "Confirm & continue"
  },
  "redirect.back": {
    "zh": "返回 TechFlows",
    "en": "Back to TechFlows"
  },
  "events.past.ongoing": {
    "zh": "持续记录",
    "en": "Ongoing records"
  },
  "events.cta.projects": {
    "zh": "查看项目记录",
    "en": "View projects"
  },
  "projects.hero.title": {
    "zh": "项目记录",
    "en": "Projects"
  },
  "projects.hero.lead": {
    "zh": "把未完成的项目写清楚。不收虚构案例。",
    "en": "Write unfinished projects clearly. We do not collect fictional cases."
  },
  "projects.empty.submit": {
    "zh": "提交你的项目",
    "en": "Submit your project"
  },
  "projects.final.title": {
    "zh": "一个项目被介绍清楚，有时就是它继续向前的第一步。",
    "en": "Sometimes, explaining a project clearly is the first step toward moving it forward."
  },
  "projects.final.submit": {
    "zh": "提交项目或想法",
    "en": "Submit a project or idea"
  },
  "projects.final.join": {
    "zh": "加入 TechFlows",
    "en": "Join TechFlows"
  },
  "partners.contact.label": {
    "zh": "联系我们：",
    "en": "Contact us: "
  },
  "partners.cta.email": {
    "zh": "邮件联系",
    "en": "Email us"
  },
  "notFound.title": {
    "zh": "页面不存在 — TechFlows",
    "en": "Page not found — TechFlows"
  },
  "notFound.heading": {
    "zh": "没有找到这个页面",
    "en": "This page does not exist"
  },
  "notFound.body": {
    "zh": "它可能被移动了，或地址写错了。可以从这里继续。",
    "en": "It may have moved, or the address may be wrong. You can continue from here."
  },
  "notFound.home": {
    "zh": "回到首页",
    "en": "Back to home"
  },
  "notFound.events": {
    "zh": "查看活动",
    "en": "See events"
  },
  "notFound.join": {
    "zh": "申请加入",
    "en": "Join"
  },
  "meta.imageAlt": {
    "zh": "TechFlows 页面预览图",
    "en": "TechFlows page preview"
  }

} as const satisfies Record<string, Localized<string>>;
