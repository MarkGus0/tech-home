export type Locale = "zh" | "en";
export type Localized<T> = Record<Locale, T>;

export const translations = {
  "meta.title": {
    "zh": "TechFlows | 让想做点什么的人，先找到彼此",
    "en": "TechFlows — For Those Who Want to Build Something"
  },
  "meta.title.partners": {
    "zh": "合作伙伴 — TechFlows",
    "en": "Partners — TechFlows"
  },
  "meta.title.events": {
    "zh": "活动 — TechFlows",
    "en": "Events — TechFlows"
  },
  "meta.title.join": {
    "zh": "申请加入 — TechFlows",
    "en": "Join — TechFlows"
  },
  "meta.desc": {
    "zh": "TechFlows 是一个关注青年科技创造者与早期项目的开放社区。",
    "en": "TechFlows is an open community for young tech creators and early-stage projects."
  },
  "skipLink": {
    "zh": "跳到正文",
    "en": "Skip to content"
  },
  "nav.home": {
    "zh": "首页",
    "en": "Home"
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
  "lang.switchTo.en": {
    "zh": "EN",
    "en": "中文"
  },
  "lang.switchTo.aria.en": {
    "zh": "Switch to English",
    "en": "切换到中文"
  },
  "lang.switchTo.zh": {
    "zh": "中文",
    "en": "EN"
  },
  "lang.switchTo.aria.zh": {
    "zh": "切换到中文",
    "en": "Switch to English"
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
  "readingMap.ariaAlt": {
    "zh": "切换为逐行阅读模式",
    "en": "Switch to line-by-line mode"
  },
  "readingMap.ariaDefault": {
    "zh": "切换为显示全部模式",
    "en": "Switch to show-all mode"
  },
  "readingMap.happening": {
    "zh": "正在发生",
    "en": "Happening"
  },
  "readingMap.community": {
    "zh": "社区",
    "en": "Community"
  },
  "readingMap.work": {
    "zh": "正在做",
    "en": "What We Do"
  },
  "readingMap.stories": {
    "zh": "项目与故事",
    "en": "Projects & Stories"
  },
  "readingMap.opportunities": {
    "zh": "机会",
    "en": "Opportunities"
  },
  "readingMap.path": {
    "zh": "进入路径",
    "en": "Paths"
  },
  "readingMap.identity": {
    "zh": "身份",
    "en": "Identities"
  },
  "readingMap.coBuild": {
    "zh": "共建",
    "en": "Co-build"
  },
  "readingMap.principles": {
    "zh": "原则",
    "en": "Principles"
  },
  "readingMap.future": {
    "zh": "尝试",
    "en": "Exploring"
  },
  "readingMap.about": {
    "zh": "关于我们",
    "en": "About"
  },
  "readingMap.join": {
    "zh": "加入",
    "en": "Join"
  },
  "sectionNav.label": {
    "zh": "快速导航",
    "en": "Quick nav"
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
    "zh": "TechFlows 是一个关注青年科技创造者与早期项目的开放社区。",
    "en": "TechFlows is an open community for young tech creators and early-stage projects."
  },
  "hero.summary.4": {
    "zh": "我们通过活动、项目记录、机会分享和社区连接，让正在行动的人被看见，让还在生长的想法遇见可能的同行者。",
    "en": "Through events, project documentation, opportunity sharing, and community connections, we help those in motion be seen."
  },
  "hero.entry.kicker": {
    "zh": "现在可以从这里开始",
    "en": "Start here"
  },
  "hero.entry.title": {
    "zh": "带着你现在拥有的东西来",
    "en": "Bring what you have right now"
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
    "zh": "社区共建｜持续开放",
    "en": "Co-building｜Always open"
  },
  "hero.entry.cobuild.title": {
    "zh": "一起完成一件具体的事",
    "en": "Help make one concrete thing happen"
  },
  "hero.entry.cobuild.description": {
    "zh": "如果你愿意做活动、记录、设计、技术或联络，可以从这里开始。",
    "en": "If you want to help with events, documentation, design, technology, or outreach, start here."
  },
  "hero.entry.cobuild.cta": {
    "zh": "参与社区共建",
    "en": "Help build the community"
  },
  "home.nav.now": {
    "zh": "正在做什么",
    "en": "What we do"
  },
  "home.nav.start": {
    "zh": "从哪里开始",
    "en": "Start here"
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
    "zh": "有人还没有项目，有人已经做出了原型，也有人只是想找一个愿意认真聊聊的人。我们从这三种真实需要开始。",
    "en": "Some people do not have a project yet, some have already built a prototype, and some are simply looking for someone willing to have a serious conversation. We start with these real needs."
  },
  "home.now.events.title": {
    "zh": "把人带到同一个现场",
    "en": "Bring people into the same room"
  },
  "home.now.events.description": {
    "zh": "围绕 AI、开源、黑客松和科技创新发起交流活动，让原本不会相遇的人先见面。",
    "en": "We create gatherings around AI, open source, hackathons, and tech innovation so people who might not otherwise meet can start there."
  },
  "home.now.events.link": {
    "zh": "查看活动",
    "en": "See events"
  },
  "home.now.projects.title": {
    "zh": "让项目被认真介绍",
    "en": "Explain projects with care"
  },
  "home.now.projects.description": {
    "zh": "记录黑客松、校园项目、开源工具、AI 应用和创业尝试，让一个还不成熟的项目先被理解。",
    "en": "We document hackathon, campus, open-source, AI, and early startup projects so an unfinished project can first be understood."
  },
  "home.now.projects.link": {
    "zh": "查看项目记录",
    "en": "See project stories"
  },
  "home.now.connections.title": {
    "zh": "让连接继续发生",
    "en": "Keep the connection moving"
  },
  "home.now.connections.description": {
    "zh": "活动之后继续寻找反馈、队友、共建者和合作机会，让一次见面有机会继续向前。",
    "en": "After a gathering, we keep looking for feedback, teammates, co-builders, and partners so one meeting can move further."
  },
  "home.now.connections.link": {
    "zh": "参与社区共建",
    "en": "Help build the community"
  },
  "home.start.kicker": {
    "zh": "你的入口不止一个",
    "en": "There is more than one way in"
  },
  "home.start.title": {
    "zh": "你可以从哪一步开始",
    "en": "Where can you start?"
  },
  "home.start.intro": {
    "zh": "不需要先准备好，也不需要先给自己贴上一个身份。带着你现在拥有的东西，从最接近的一步开始。",
    "en": "You do not need to be ready or choose an identity first. Start with the step closest to what you have right now."
  },
  "home.start.curious.title": {
    "zh": "我还没有项目",
    "en": "I do not have a project yet"
  },
  "home.start.curious.description": {
    "zh": "先参加活动，认识正在做类似事情的人，或者留下联系方式等待下一次见面。",
    "en": "Join an event, meet people working on similar things, or leave your contact for the next gathering."
  },
  "home.start.curious.cta": {
    "zh": "从活动开始",
    "en": "Start with an event"
  },
  "home.start.project.title": {
    "zh": "我已经做了一些东西",
    "en": "I have already built something"
  },
  "home.start.project.description": {
    "zh": "提交项目、原型或还没有完全想清楚的方向，让它先被认真听见。",
    "en": "Submit a project, prototype, or direction you are still figuring out, and let it be heard with care."
  },
  "home.start.project.cta": {
    "zh": "提交项目",
    "en": "Submit a project"
  },
  "home.start.builder.title": {
    "zh": "我愿意帮忙做事",
    "en": "I want to help make things happen"
  },
  "home.start.builder.description": {
    "zh": "活动执行、记录、设计、摄影、技术和联络，都可以成为第一次参与。",
    "en": "Event operations, documentation, design, photography, technology, and outreach can all be a first contribution."
  },
  "home.start.builder.cta": {
    "zh": "参与共建",
    "en": "Help build"
  },
  "home.start.partner.title": {
    "zh": "我有资源可以连接",
    "en": "I have resources to connect"
  },
  "home.start.partner.description": {
    "zh": "如果你代表高校、企业、技术社区或创新空间，可以从一次具体合作开始。",
    "en": "If you represent a university, company, tech community, or innovation space, start with one concrete collaboration."
  },
  "home.start.partner.cta": {
    "zh": "了解合作",
    "en": "Explore partnership"
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
    "zh": "不要求成熟，才值得被看见",
    "en": "You do not have to be finished to be seen"
  },
  "home.principles.maturity.description": {
    "zh": "我们关注结果，也尊重一个人刚刚开始的阶段。",
    "en": "We care about outcomes while respecting the stage where someone is just beginning."
  },
  "home.principles.honesty.title": {
    "zh": "不用虚假的承诺换取加入",
    "en": "No joining through false promises"
  },
  "home.principles.honesty.description": {
    "zh": "无法保证的事情，不提前包装成服务。",
    "en": "We do not package what we cannot guarantee as a service."
  },
  "home.principles.continuity.title": {
    "zh": "不把一次活动当成关系的结束",
    "en": "An event is not the end of a relationship"
  },
  "home.principles.continuity.description": {
    "zh": "一次见面只是开始，后续的交流和行动更重要。",
    "en": "A gathering is only the beginning; what follows matters more."
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
    "zh": "社区共建",
    "en": "Community co-building"
  },
  "home.status.cobuild.value": {
    "zh": "持续开放",
    "en": "Always open"
  },
  "home.status.cobuild.cta": {
    "zh": "参与共建",
    "en": "Help build"
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
  "hero.action.events": {
    "zh": "看看最近发生了什么",
    "en": "See what's been happening"
  },
  "hero.action.join": {
    "zh": "带着你的想法来",
    "en": "Bring your idea"
  },
  "hero.actions.label": {
    "zh": "主要行动",
    "en": "Main actions"
  },
  "happening.title": {
    "zh": "活动结束以后，<br />总有人没有马上离开",
    "en": "After the event ends,<br />there are always those who don't leave right away"
  },
  "happening.p1": {
    "zh": "有人合上电脑，又重新打开。",
    "en": "Someone closes their laptop, then opens it again."
  },
  "happening.p2": {
    "zh": "有人站在门口等了一会儿，直到现场的人少下来，才试着问一句：",
    "en": "Someone waits by the door until the crowd thins, and only then asks:"
  },
  "happening.p3": {
    "zh": "“我有一个想法，但现在还什么都没有。这里有人愿意和我聊聊吗？”",
    "en": "\"I have an idea, but I have nothing to show yet. Is anyone here willing to talk about it?\""
  },
  "happening.p4": {
    "zh": "也有人已经做出了一个原型。",
    "en": "Someone has already built a prototype."
  },
  "happening.p5": {
    "zh": "它可能来自一次黑客松、一门课程、一个毕业设计，或者某个在宿舍里反复修改了很久的念头。",
    "en": "It might have come from a hackathon, a course, a graduation thesis, or an idea refined over countless nights in a dorm room."
  },
  "happening.p6": {
    "zh": "但比赛结束以后，群聊慢慢安静下来，队友开始忙自己的事情，那个项目也就停在了最后一次提交记录里。",
    "en": "But after the competition ended, the group chat went quiet, teammates got busy, and the project stopped at its last commit."
  },
  "happening.p7": {
    "zh": "这不是某一个人的故事。",
    "en": "This is not just one person's story."
  },
  "happening.p8": {
    "zh": "在一次次活动和交流中，我们不断遇见这样的年轻人。",
    "en": "Through event after event, we keep meeting young people like this."
  },
  "happening.p9": {
    "zh": "他们不一定已经准备好创业，也不一定敢称自己为开发者。",
    "en": "They may not be ready to start a company, and they might not dare call themselves developers."
  },
  "happening.p10": {
    "zh": "但他们已经开始尝试做一些事情。",
    "en": "But they have already started trying to build something."
  },
  "happening.p11": {
    "zh": "TechFlows 想关注的，就是这些还没有被太多人看见，却已经向前走出一步的人。",
    "en": "TechFlows wants to pay attention to those who haven't been seen yet, but have already taken a step forward."
  },
  "happening.sub.title": {
    "zh": "把人带到同一个现场",
    "en": "Bringing people to the same space"
  },
  "happening.sub.p1": {
    "zh": "有时候，一次新的开始，并不需要一套完整课程。",
    "en": "Sometimes, a new beginning doesn't require a full curriculum."
  },
  "happening.sub.p2": {
    "zh": "它可能只需要一场活动、一张桌子，以及几个愿意把自己的经历讲出来的人。",
    "en": "It might only need one event, one table, and a few people willing to share their experiences."
  },
  "happening.sub.p3": {
    "zh": "我们会围绕 AI、开源、开发工具、黑客松和科技创新，发起或联合举办不同形式的交流活动。",
    "en": "We initiate or co-host exchange events around AI, open source, developer tools, hackathons, and tech innovation."
  },
  "happening.sub.p4": {
    "zh": "不是每一场活动都需要产出一个完整项目。",
    "en": "Not every event needs to produce a complete project."
  },
  "happening.sub.p5": {
    "zh": "但我们希望每一次见面，都能让参与者多认识一个方向、多提出一个问题，或者多遇见一个愿意继续交流的人。",
    "en": "But we hope every gathering helps participants discover a new direction, raise a new question, or meet someone worth continuing the conversation with."
  },
  "happening.link": {
    "zh": "查看近期活动",
    "en": "See upcoming events"
  },
  "community.title": {
    "zh": "所以，我们想先做一个这样的社区",
    "en": "So we want to build a community like this"
  },
  "community.p1": {
    "zh": "它不要求你先成为专家，才有资格加入。",
    "en": "It doesn't require you to be an expert before you're welcome."
  },
  "community.p2": {
    "zh": "也不要求一个项目已经拥有完整团队、漂亮数据和成熟商业模式，才值得被认真了解。",
    "en": "Nor does it demand that a project already has a complete team and mature business model before it's worth understanding."
  },
  "community.p3": {
    "zh": "你可以只是刚开始接触 AI 的学生，可以是参加过几次黑客松的开发者，也可以是正在寻找技术伙伴的产品人，或者还在犹豫要不要开始创业的年轻人。",
    "en": "You might be a student just beginning to explore AI, a developer who has done a few hackathons, a product person looking for technical collaborators, or someone still unsure whether to take the leap."
  },
  "community.p4": {
    "zh": "在这里，大家不一定处在同一个阶段。",
    "en": "Here, not everyone is at the same stage."
  },
  "community.p5": {
    "zh": "但都对一件事情抱有兴趣：",
    "en": "But everyone shares one curiosity:"
  },
  "community.p6": {
    "zh": "能不能用技术，真正做点什么？",
    "en": "Can we use technology to actually build something?"
  },
  "community.p7": {
    "zh": "TechFlows 希望成为这样一个入口：",
    "en": "TechFlows hopes to be this kind of entry point:"
  },
  "community.p8": {
    "zh": "让你看到正在发生的事情，认识同样在行动的人，也让那些还没有成熟的想法，拥有一次被说出来的机会。",
    "en": "A place to see what's happening, meet others in motion, and give not-yet-mature ideas a chance to be spoken aloud."
  },
  "community.sub.title": {
    "zh": "我们不是从宏大的计划开始",
    "en": "We're not starting from a grand plan"
  },
  "community.sub.p1": {
    "zh": "我们没有足够多的讲师，暂时无法每周提供系统课程。",
    "en": "We don't have enough instructors to offer systematic courses every week — not yet."
  },
  "community.sub.p2": {
    "zh": "我们也还没有完整的孵化体系，不能承诺把每一个项目带到融资桌前。",
    "en": "We don't have a complete incubation system and can't promise to bring every project to the fundraising table."
  },
  "community.sub.p3": {
    "zh": "TechFlows 仍然是一个年轻的社区。",
    "en": "TechFlows is still a young community."
  },
  "community.sub.p4": {
    "zh": "人手有限，志愿者有限，能够调动的资源也有限。",
    "en": "Our team is small, our volunteers are few, and the resources we can mobilize are limited."
  },
  "community.sub.p5": {
    "zh": "所以我们不想把未来准备做的事情，包装成今天已经拥有的能力。",
    "en": "So we don't want to package what we plan to do in the future as what we're capable of today."
  },
  "community.sub.p6": {
    "zh": "我们更愿意先把一些看起来很小、但真正有价值的事情做好。",
    "en": "We'd rather focus on doing a few small but genuinely valuable things well, first."
  },
  "work.title": {
    "zh": "我们现在正在做的事",
    "en": "What we're working on now"
  },
  "work.intro": {
    "zh": "不复杂，也还不完整。但每一件都与具体的人有关。",
    "en": "Nothing complicated, and nothing complete. But every piece is tied to real people."
  },
  "work.item1.title": {
    "zh": "活动与交流",
    "en": "Events and exchanges"
  },
  "work.item1.desc": {
    "zh": "发起或联合举办技术分享、开发者交流、项目展示和青年创新活动。",
    "en": "Initiating or co-hosting tech talks, developer exchanges, project showcases, and youth innovation events."
  },
  "work.item2.title": {
    "zh": "项目与人物记录",
    "en": "Projects and people"
  },
  "work.item2.desc": {
    "zh": "发现黑客松作品、校园项目、开源工具、AI 应用和青年创业者，记录他们正在经历的过程。",
    "en": "Discovering hackathon projects, campus projects, open-source tools, AI applications, and young entrepreneurs — documenting their journeys."
  },
  "work.item3.title": {
    "zh": "机会分享",
    "en": "Opportunity sharing"
  },
  "work.item3.desc": {
    "zh": "整理值得参与的赛事、活动、项目招募、志愿者和合作机会。",
    "en": "Curating competitions, events, project recruitment, volunteer roles, and collaboration opportunities worth joining."
  },
  "work.item4.title": {
    "zh": "社区连接",
    "en": "Community connection"
  },
  "work.item4.desc": {
    "zh": "围绕真实的项目、能力和需求，帮助成员找到可能的同行者。",
    "en": "Helping members find potential collaborators around real projects, skills, and needs."
  },
  "work.end": {
    "zh": "这就是 TechFlows 现阶段正在做的事情。",
    "en": "This is what TechFlows is doing right now."
  },
  "stories.title": {
    "zh": "认真记录那些还没有成熟的项目",
    "en": "Documenting projects that haven't yet matured — with care"
  },
  "stories.p1": {
    "zh": "大部分早期项目，都不会出现在新闻报道里。",
    "en": "Most early-stage projects never appear in the news."
  },
  "stories.p2": {
    "zh": "它们可能只是一个并不完整的 Demo、一份放在 GitHub 里的代码、一台还不稳定的硬件原型，或者一个刚刚完成的黑客松作品。",
    "en": "They might be an incomplete demo, code on GitHub, an unstable hardware prototype, or a freshly finished hackathon project."
  },
  "stories.p3": {
    "zh": "但一个项目是否值得被看见，不应该只由它有没有获奖、有没有融资来决定。",
    "en": "But whether a project deserves to be seen shouldn't be determined solely by whether it won an award or raised funding."
  },
  "stories.p4": {
    "zh": "我们希望记录这些真实发生过的尝试：",
    "en": "We want to document these real attempts:"
  },
  "stories.list.1": {
    "zh": "它为什么开始",
    "en": "Why it started"
  },
  "stories.list.2": {
    "zh": "已经做到了哪一步",
    "en": "How far it has come"
  },
  "stories.list.3": {
    "zh": "遇到了什么问题",
    "en": "What problems it has encountered"
  },
  "stories.list.4": {
    "zh": "还需要什么样的人",
    "en": "What kind of people it still needs"
  },
  "stories.p5": {
    "zh": "让一个项目被介绍清楚，有时就是它继续向前的第一步。",
    "en": "Sometimes, simply having a project clearly introduced is the first step toward moving forward."
  },
  "stories.link": {
    "zh": "提交你的项目",
    "en": "Submit your project"
  },
  "opportunities.title": {
    "zh": "让“链接资源”变成一次具体的连接",
    "en": "Turning \"connecting resources\" into a concrete connection"
  },
  "opportunities.p1": {
    "zh": "我们不太喜欢把所有事情都概括成“链接资源”。",
    "en": "We're not fond of reducing everything to \"connecting resources.\""
  },
  "opportunities.p2": {
    "zh": "因为真正有价值的连接，应该是具体的。",
    "en": "Because truly valuable connections should be concrete."
  },
  "opportunities.p3": {
    "zh": "可能是一位硬件开发者，遇见了正在寻找技术伙伴的产品人。",
    "en": "It could be a hardware developer meeting a product person looking for a technical partner."
  },
  "opportunities.p4": {
    "zh": "可能是一个黑客松团队，找到了愿意继续维护项目的新成员。",
    "en": "It could be a hackathon team finding new members willing to keep the project alive."
  },
  "opportunities.p5": {
    "zh": "也可能是一个校园项目，第一次有机会向学校之外的人讲清楚自己正在做什么。",
    "en": "Or it could be a campus project getting its first chance to explain itself to someone outside the school."
  },
  "opportunities.p6": {
    "zh": "TechFlows 无法保证每一个需求都能得到解决。",
    "en": "TechFlows cannot guarantee that every need will be met."
  },
  "opportunities.p7": {
    "zh": "但我们希望先把问题说清楚，再尽可能让合适的人彼此看见。",
    "en": "But we hope to first make the problem clear, then do our best to help the right people see each other."
  },
  "opportunities.link": {
    "zh": "告诉我们你在找什么",
    "en": "Tell us what you're looking for"
  },
  "path.title": {
    "zh": "一个人，可能这样进入 TechFlows",
    "en": "One person's path into TechFlows might look like this"
  },
  "path.step1.title": {
    "zh": "他先看见了一场活动",
    "en": "First, they see an event"
  },
  "path.step1.desc": {
    "zh": "也许只是朋友转发的一张海报，或者群里的一条消息。他对主题有些兴趣，但并不确定自己是否适合参加。",
    "en": "Maybe just a poster forwarded by a friend, or a message in a group chat. They're interested but aren't sure if it's for them."
  },
  "path.step2.title": {
    "zh": "然后，他来到现场",
    "en": "Then, they show up"
  },
  "path.step2.desc": {
    "zh": "他坐在一群不认识的人中间，听别人讲项目、技术和踩过的坑。有些内容没有完全听懂，但他第一次发现，原来这里的人也不是从一开始就知道答案。",
    "en": "Sitting among strangers, listening to people talk about projects, technology, and lessons learned. They realize — the people here didn't know the answers from the beginning either."
  },
  "path.step3.title": {
    "zh": "他开始说出自己的想法",
    "en": "They start speaking their ideas"
  },
  "path.step3.desc": {
    "zh": "也许还不完整，也许只是几句话。但有人愿意听，也有人问了几个过去从未有人问过的问题。",
    "en": "Maybe incomplete, maybe just a few sentences. But someone is willing to listen, and someone asks questions no one has ever asked them before."
  },
  "path.step4.title": {
    "zh": "他遇见了一个可以继续交流的人",
    "en": "They meet someone worth continuing the conversation with"
  },
  "path.step4.desc": {
    "zh": "对方不一定马上成为队友或合伙人。可能只是分享了一个工具、一个活动，或者介绍了一位更合适的人。",
    "en": "It might not immediately become a teammate or co-founder. It might just be sharing a tool, an event, or introducing someone more suitable."
  },
  "path.step5.title": {
    "zh": "事情开始有了下一步",
    "en": "Things start to have a next step"
  },
  "path.step5.desc": {
    "zh": "它可能变成一次新的尝试、一个项目页面、一场黑客松，或者下一次见面。",
    "en": "It might become a new attempt, a project page, a hackathon, or the next meetup."
  },
  "path.close1": {
    "zh": "TechFlows 想做的，不是设计好每个人的成长路线。",
    "en": "TechFlows doesn't aim to design a growth path for everyone."
  },
  "path.close2": {
    "zh": "而是让这些原本不会发生的下一步，更有可能发生。",
    "en": "We want to make those next steps — the ones that wouldn't have happened otherwise — a little more possible."
  },
  "identity.title": {
    "zh": "这里没有统一的身份",
    "en": "There is no uniform identity here"
  },
  "identity.intro": {
    "zh": "你不需要先证明自己属于这里。只要你正在了解、尝试或创造，就可以从一个适合自己的位置开始。",
    "en": "You don't need to prove you belong. As long as you're learning, exploring, or creating, you can start from a position that fits you."
  },
  "identity.item1": {
    "zh": "刚开始接触 AI，还没有做过项目的大学生。",
    "en": "A college student just beginning to explore AI, without any projects yet."
  },
  "identity.item2": {
    "zh": "参加过很多比赛，却还没有找到长期方向的开发者。",
    "en": "A developer who has joined many competitions but hasn't yet found a long-term direction."
  },
  "identity.item3": {
    "zh": "希望把毕业设计继续做下去的团队成员。",
    "en": "A team member hoping to continue their graduation project."
  },
  "identity.item4": {
    "zh": "有产品想法，但正在寻找技术伙伴的人。",
    "en": "Someone with a product idea, searching for a technical partner."
  },
  "identity.item5": {
    "zh": "已经开始创业，却很少有机会和同阶段年轻人交流的创始人。",
    "en": "A founder who has already started a company but rarely gets to talk with peers at the same stage."
  },
  "identity.item6": {
    "zh": "愿意组织活动、记录故事、拍摄现场和帮助他人的志愿者。",
    "en": "A volunteer willing to organize events, document stories, take photos, and help others."
  },
  "coBuild.title": {
    "zh": "TechFlows 也在寻找自己的同行者",
    "en": "TechFlows is also looking for its own fellow travelers"
  },
  "coBuild.p1": {
    "zh": "一个社区不可能只靠少数人长期运转。",
    "en": "A community cannot run long-term on the shoulders of a few people."
  },
  "coBuild.p2": {
    "zh": "每一场活动背后，都需要有人联系场地、邀请嘉宾、设计海报、整理报名、接待参与者、拍摄照片、记录现场。",
    "en": "Behind every event, someone needs to contact venues, invite speakers, design posters, manage registration, welcome participants, take photos, and document what happened."
  },
  "coBuild.p3": {
    "zh": "每一个项目被看见之前，也需要有人认真听完它的故事，把那些混乱的表达整理清楚。",
    "en": "Before every project is seen, someone needs to listen carefully to its story and help organize those messy expressions into clarity."
  },
  "coBuild.p4": {
    "zh": "所以，我们不仅在寻找参与者，也在寻找愿意一起建设社区的人。",
    "en": "So we're not just looking for participants — we're also looking for people willing to build the community together."
  },
  "coBuild.p5": {
    "zh": "你可以参与：",
    "en": "You could help with:"
  },
  "coBuild.p6": {
    "zh": "活动执行｜内容记录｜视觉设计｜摄影摄像｜技术开发｜嘉宾与项目联络｜高校与城市共建",
    "en": "Event operations | Content documentation | Visual design | Photography | Technical development | Speaker and project outreach | University and city partnerships"
  },
  "coBuild.p7": {
    "zh": "不要求你已经很有经验。",
    "en": "No prior experience required."
  },
  "coBuild.p8": {
    "zh": "但希望你愿意认真完成一件具体的事情。",
    "en": "But we hope you're willing to take responsibility for one concrete thing and see it through."
  },
  "coBuild.link": {
    "zh": "一起建设 TechFlows",
    "en": "Help build TechFlows"
  },
  "principles.title": {
    "zh": "我们希望守住的几件事",
    "en": "A few things we want to hold onto"
  },
  "principles.item1.title": {
    "zh": "不用成熟，才值得被看见",
    "en": "Maturity is not a prerequisite for being seen"
  },
  "principles.item1.desc": {
    "zh": "我们关注结果，也尊重一个人刚刚开始的阶段。",
    "en": "We pay attention to outcomes, but we also respect the stage where someone is just beginning."
  },
  "principles.item2.title": {
    "zh": "不制造虚假的承诺",
    "en": "No false promises"
  },
  "principles.item2.desc": {
    "zh": "无法做到的事情，我们不会提前包装成服务。",
    "en": "We won't package things we cannot deliver as services."
  },
  "principles.item3.title": {
    "zh": "不把活动结束当成关系结束",
    "en": "An event's end is not the relationship's end"
  },
  "principles.item3.desc": {
    "zh": "一次见面只是开始，真正的社区发生在活动结束之后。",
    "en": "One meeting is only the beginning; the real community happens after the event ends."
  },
  "principles.item4.title": {
    "zh": "不用宏大的词，代替具体的行动",
    "en": "Grand words do not replace concrete action"
  },
  "principles.item4.desc": {
    "zh": "比起“赋能”“生态”和“链接一切”，我们更愿意把一个活动办好、把一个项目介绍清楚、把一个需求交到合适的人手中。",
    "en": "Rather than \"empowerment,\" \"ecosystem,\" and \"connecting everything,\" we'd rather run an event well, introduce a project clearly, and put a need into the right person's hands."
  },
  "future.title": {
    "zh": "还有一些事情，我们正在尝试",
    "en": "There are things we're still trying"
  },
  "future.p1": {
    "zh": "我们想举办真正围绕项目展开的黑客松。",
    "en": "We want to run hackathons that truly revolve around projects."
  },
  "future.p2": {
    "zh": "让那些停留在想法阶段的人，在有限时间里找到队友，完成一次真实尝试。",
    "en": "Letting those still at the idea stage find teammates under time pressure and complete a real attempt."
  },
  "future.p3": {
    "zh": "我们想关注大学生创业。",
    "en": "We want to pay attention to student entrepreneurship."
  },
  "future.p4": {
    "zh": "不是只讲成功案例，而是记录一群年轻人如何从一个不确定的想法开始，面对团队、产品、市场和现实问题。",
    "en": "Not just telling success stories, but documenting how young people start from an uncertain idea and face real questions of team, product, market, and life."
  },
  "future.p5": {
    "zh": "我们也想建立一个更长期的项目记录空间。",
    "en": "We also want to build a longer-term project documentation space."
  },
  "future.p6": {
    "zh": "让一个黑客松项目不会因为比赛结束而消失，让一个校园项目在成员毕业后仍然有机会继续生长。",
    "en": "So a hackathon project doesn't disappear when the competition ends, and a campus project still has a chance to grow after its members graduate."
  },
  "future.p7": {
    "zh": "未来，我们也希望逐渐连接更多导师、企业、园区、高校和投资观察者。",
    "en": "In the future, we also hope to gradually connect more mentors, companies, innovation parks, universities, and investment observers."
  },
  "future.p8": {
    "zh": "但这些都还在路上。",
    "en": "But all of this is still on the way."
  },
  "future.p9": {
    "zh": "我们不会把它们写成已经完成的成绩。",
    "en": "We won't write them up as accomplishments already achieved."
  },
  "future.p10": {
    "zh": "这个官网更像是一块路标：",
    "en": "This website is more like a signpost:"
  },
  "future.p11": {
    "zh": "告诉愿意同行的人，我们现在在哪里，也告诉大家，我们准备向哪里走。",
    "en": "Telling those who want to walk with us where we are now, and where we're preparing to go."
  },
  "about.title": {
    "zh": "关于 TechFlows",
    "en": "About TechFlows"
  },
  "about.p1": {
    "zh": "TechFlows 成立于 2026 年。",
    "en": "TechFlows was founded in 2026."
  },
  "about.p2": {
    "zh": "我们从线下活动和技术交流开始，也是在这些现场里，逐渐看见了社区真正应该关注的人。",
    "en": "We started from offline events and tech exchanges. It was in those gatherings that we gradually saw who the community should truly focus on."
  },
  "about.p3": {
    "zh": "不是那些已经站在聚光灯下的人。",
    "en": "Not those already in the spotlight."
  },
  "about.p4": {
    "zh": "而是刚刚开始学习、尝试、开发、组队和创业的年轻人。",
    "en": "But the young people who are just beginning to learn, experiment, develop, form teams, and start companies."
  },
  "about.p5": {
    "zh": "他们可能还没有成熟的项目，也没有完整的故事。",
    "en": "They may not have mature projects yet, and their stories may not be complete."
  },
  "about.p6": {
    "zh": "但很多新的东西，本来就是从这些不确定的时刻开始的。",
    "en": "But many new things begin precisely from these uncertain moments."
  },
  "about.p7": {
    "zh": "所以，我们想做一个长期关注青年科技创造者与早期项目的开放社区。",
    "en": "That's why we want to build an open community that focuses long-term on young tech creators and early-stage projects."
  },
  "about.p8": {
    "zh": "让人可以在这里认识新的技术、遇见同行者、展示自己的尝试，也让一个还没有答案的想法，有机会继续向前。",
    "en": "A place where people can encounter new technologies, meet fellow travelers, showcase their attempts, and give an idea without answers a chance to keep moving forward."
  },
  "join.title": {
    "zh": "也许你现在还没有一个完整的项目",
    "en": "Maybe you don't have a complete project yet"
  },
  "join.p1": {
    "zh": "也许它只是在手机备忘录里写了几行。",
    "en": "Maybe it's just a few lines in your phone's notes app."
  },
  "join.p2": {
    "zh": "也许你已经做出了一些东西，却不知道该给谁看。",
    "en": "Maybe you've already built something but don't know who to show it to."
  },
  "join.p3": {
    "zh": "也许你只是对技术和创业有些好奇，还没有想清楚自己能做什么。",
    "en": "Maybe you're just curious about tech and startups and haven't figured out what you can contribute."
  },
  "join.p4": {
    "zh": "都没有关系。",
    "en": "That's perfectly fine."
  },
  "join.p5": {
    "zh": "带着你现在拥有的东西来。",
    "en": "Bring what you have right now."
  },
  "join.p6": {
    "zh": "我们不能保证每一个想法都会成功，但希望它至少能先被认真听见。",
    "en": "We can't guarantee every idea will succeed, but we hope each one can at least be heard with care."
  },
  "join.action.label": {
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
  "join.closing": {
    "zh": "很多事情开始之前，只差遇见一个人。",
    "en": "Before many things begin, it's just one person you haven't met yet."
  },
  "footer.brandDesc": {
    "zh": "关注青年科技创造者与早期项目的开放社区。",
    "en": "An open community for young tech creators and early-stage projects."
  },
  "footer.events": {
    "zh": "活动",
    "en": "Events"
  },
  "footer.projects": {
    "zh": "项目",
    "en": "Projects"
  },
  "footer.opportunities": {
    "zh": "机会",
    "en": "Opportunities"
  },
  "footer.coBuild": {
    "zh": "社区共建",
    "en": "Co-building"
  },
  "footer.about": {
    "zh": "关于我们",
    "en": "About"
  },
  "footer.tagline": {
    "zh": "让想做点什么的人，先找到彼此。",
    "en": "For those who want to build something, find each other first."
  },
  "footer.nav.label": {
    "zh": "页脚导航",
    "en": "Footer navigation"
  },
  "partners.hero.p1": {
    "zh": "真正有价值的合作，不只是把名字放在同一张海报上",
    "en": "Truly valuable collaboration isn't just putting names on the same poster"
  },
  "partners.hero.p2": {
    "zh": "TechFlows 与高校、企业、技术社区和开源组织建立合作，共同创造活动、项目展示与青年创新机会。",
    "en": "TechFlows partners with universities, companies, tech communities, and open-source organizations to create events, project showcases, and youth innovation opportunities."
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
    "zh": "合作可以是一场联合活动、一次项目征集、一项技术或场地支持，也可以是向社区开放的赛事、实习、共创与展示机会。",
    "en": "Collaboration can be a joint event, a project call, technical or venue support, or competitions, internships, co-creation, and showcase opportunities open to the community."
  },
  "partners.collab.p4": {
    "zh": "我们不追求只停留在品牌露出上的合作。比起出现在同一张海报上，我们更关心这次合作能否真正为参与者带来一些改变。",
    "en": "We don't pursue collaborations that stop at brand visibility. More than appearing on the same poster, we care about whether this collaboration can truly bring change to participants."
  },
  "partners.collab.contact": {
    "zh": "<strong>联系我们：partner@techflows.app</strong>",
    "en": "<strong>Contact us: partner@techflows.app</strong>"
  },
  "partners.who.title": {
    "zh": "我们希望与谁同行",
    "en": "Who we want to walk with"
  },
  "partners.who.h1.title": {
    "zh": "高校与学生组织",
    "en": "Universities and student organizations"
  },
  "partners.who.h1.desc": {
    "zh": "让技术交流、黑客松和项目展示进入校园。共同为学生创造接触新技术、认识同行者和展示真实项目的机会，让更多年轻人从旁观者走向参与者。",
    "en": "Bringing tech exchanges, hackathons, and project showcases to campus. Together creating opportunities for students to encounter new technologies, meet fellow travelers, and showcase real projects."
  },
  "partners.who.h2.title": {
    "zh": "企业与创新团队",
    "en": "Companies and innovation teams"
  },
  "partners.who.h2.desc": {
    "zh": "将真实的技术、产品和产业问题带到青年创造者面前。通过联合活动、技术分享、项目命题和成长机会，让年轻人接触更具体的实践场景，也帮助企业发现正在成长的人与项目。",
    "en": "Bringing real technology, product, and industry challenges to young creators. Through joint events, tech sharing, project challenges, and growth opportunities."
  },
  "partners.who.h3.title": {
    "zh": "技术社区与开源组织",
    "en": "Tech communities and open-source organizations"
  },
  "partners.who.h3.desc": {
    "zh": "让不同社区中的经验、项目与参与机会持续流动。我们可以共同策划活动、介绍开源项目、寻找贡献者，也可以让优秀内容和真实实践被更多人看见。",
    "en": "Keeping experiences, projects, and participation opportunities flowing between communities. We can co-plan events, introduce open-source projects, find contributors, and help great content be seen."
  },
  "partners.who.h4.title": {
    "zh": "园区与创新空间",
    "en": "Innovation parks and spaces"
  },
  "partners.who.h4.desc": {
    "zh": "为青年科技交流提供一个真正可以相遇的现场。通过活动场地、项目展示、创业交流与本地资源连接，让一次短暂的见面有机会形成更长期的关系。",
    "en": "Providing a real place for youth tech exchange to happen. Through event venues, project showcases, startup networking, and local resource connections."
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
    "zh": "你可以告诉我们正在关注的问题、能够提供的支持，或者希望与 TechFlows 共同完成的事情。",
    "en": "Tell us what you're focused on, what support you can offer, or what you'd like to accomplish together with TechFlows."
  },
  "partners.cta.p3": {
    "zh": "我们会从一个明确的目标开始，寻找最适合双方的合作方式。",
    "en": "We'll start from a clear goal and find the collaboration approach that works best for both sides."
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
    "zh": "有人带着一个还没想清楚的问题来。有人已经做出项目，正在寻找反馈；也有人只是对 AI、开源、黑客松或科技创业感到好奇，想知道自己能不能参与其中。",
    "en": "Some come with an unresolved question. Others have already built a project and are looking for feedback. Some are simply curious about AI, open source, hackathons, or tech entrepreneurship, wondering if they can be part of it."
  },
  "events.intro.p2": {
    "zh": "TechFlows 发起并联合举办不同形式的科技交流活动。我们希望每一次见面，都不只是听完一场分享，而是让新的想法被听见，让正在行动的人找到彼此。",
    "en": "TechFlows initiates and co-hosts various forms of tech exchange events. We hope every gathering goes beyond listening to a talk — new ideas are heard, and people in motion find each other."
  },
  "events.upcoming.title": {
    "zh": "近期活动",
    "en": "Upcoming Events"
  },
  "events.upcoming.h3": {
    "zh": "下一次见面，从一个真实问题开始",
    "en": "The next meetup starts with a real question"
  },
  "events.upcoming.p1": {
    "zh": "我们围绕 AI、开源、开发者工具、黑客松与青年科技创新，持续发起主题分享、项目交流与社区活动。",
    "en": "We continuously initiate themed talks, project exchanges, and community events around AI, open source, developer tools, hackathons, and youth tech innovation."
  },
  "events.upcoming.highlights": {
    "zh": "<strong>活动主题｜时间地点｜适合人群｜现场内容｜报名方式</strong>",
    "en": "<strong>Theme | Time & Place | Who It's For | What Happens | How to Sign Up</strong>"
  },
  "events.upcoming.p3": {
    "zh": "新的活动正在筹备中。加入 TechFlows，第一时间收到活动通知。",
    "en": "New events are being planned. Join TechFlows to be the first to know."
  },
  "events.upcoming.button": {
    "zh": "获取活动通知",
    "en": "Get event notifications"
  },
  "events.hope.title": {
    "zh": "我们希望现场发生什么",
    "en": "What we hope happens in person"
  },
  "events.hope.h1.title": {
    "zh": "听见真实的经历",
    "en": "Hear real experiences"
  },
  "events.hope.h1.desc": {
    "zh": "不只分享成功结果，也分享一个项目如何开始、遇到了什么，以及哪些事情没有按照预期发生。",
    "en": "Not just sharing successful outcomes, but also how a project started, what it ran into, and what didn't go as expected."
  },
  "events.hope.h2.title": {
    "zh": "看见正在行动的人",
    "en": "See people in motion"
  },
  "events.hope.h2.desc": {
    "zh": "开发者、产品设计者、大学生、项目团队和青年创业者，都可以带着自己的经验与问题来到现场。",
    "en": "Developers, product designers, students, project teams, and young entrepreneurs can all bring their experiences and questions to the gathering."
  },
  "events.hope.h3.title": {
    "zh": "产生一次具体的连接",
    "en": "Create a concrete connection"
  },
  "events.hope.h3.desc": {
    "zh": "可能是认识一位同行者，发现一个值得加入的项目，或者找到让想法继续向前的下一步。",
    "en": "It might be meeting a fellow traveler, discovering a project worth joining, or finding the next step to move an idea forward."
  },
  "events.past.title": {
    "zh": "往期回顾",
    "en": "Past Events"
  },
  "events.past.intro": {
    "zh": "那些已经发生的相遇",
    "en": "Encounters that have already happened"
  },
  "events.past.event1.title": {
    "zh": "AI+X 创造节｜苏州站",
    "en": "AI+X Creation Festival | Suzhou"
  },
  "events.past.event1.desc": {
    "zh": "有人已经使用 AI 很久，也有人刚刚接触几天。大家从一个真实问题出发，尝试把 AI 放进自己的学习、工作与项目中。那天下午，没有人只停留在“听懂”，而是打开电脑，把一个想法真正向前推进了一步。",
    "en": "Some had been using AI for a long time; others had just started. Everyone began with a real problem and tried to integrate AI into their studies, work, or projects. That afternoon, no one stopped at just understanding — they opened their laptops and pushed an idea one real step forward."
  },
  "events.past.event1.label": {
    "zh": "AI 实践｜线下共创｜苏州",
    "en": "AI Practice | In-Person Co-Creation | Suzhou"
  },
  "events.past.event1.button": {
    "zh": "查看活动回顾",
    "en": "View event recap"
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
    "zh": "参与策划、执行、摄影、内容记录、视觉设计与现场支持。",
    "en": "Join in planning, execution, photography, content documentation, visual design, and on-site support."
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
  "events.part.h3.button": {
    "zh": "发起合作",
    "en": "Start a collaboration"
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
  "events.cta.button1": {
    "zh": "加入 TechFlows",
    "en": "Join TechFlows"
  },
  "events.cta.button2": {
    "zh": "获取活动通知",
    "en": "Get event notifications"
  },
  "joinPage.hero.p1": {
    "zh": "无论你是刚开始学习的学生，还是已经做出项目的开发者，或者想寻找技术伙伴的产品人——都可以从这里开始。",
    "en": "Whether you're a student just starting to learn, a developer who has already built something, or a product person looking for technical partners — you can start here."
  },
  "joinPage.method.title": {
    "zh": "加入方式",
    "en": "How to join"
  },
  "joinPage.method.p1": {
    "zh": "填写表单告诉我们你是谁、你在做什么、你希望在这里遇见什么样的人。",
    "en": "Fill out the form to tell us who you are, what you're working on, and what kind of people you hope to meet here."
  },
  "joinPage.method.p2": {
    "zh": "我们会通过邮件或社区渠道与你取得联系。",
    "en": "We'll get in touch with you via email or community channels."
  },
  "joinPage.place.title": {
    "zh": "每个人，都可以在这里找到自己的位置",
    "en": "Everyone can find their place here"
  },
  "joinPage.place.p1": {
    "zh": "一个社区，从来不只是由发起人或组织者构成。",
    "en": "A community is never made up of just its founders or organizers."
  },
  "joinPage.place.p2": {
    "zh": "有人因为一次活动来到这里，有人带着尚未完成的项目出现；有人愿意讲述自己的经历，也有人擅长把分散的人与机会连接起来。",
    "en": "Some come because of an event; others show up with an unfinished project. Some are willing to share their experiences; others are good at connecting scattered people and opportunities."
  },
  "joinPage.place.p3": {
    "zh": "在 TechFlows，我们不以头衔定义成员，也不设置固定的参与顺序。",
    "en": "At TechFlows, we don't define members by titles, and we don't set a fixed order of participation."
  },
  "joinPage.place.p4": {
    "zh": "你可以从任何一种角色开始，也可以随着一次次参与，逐渐成为社区的另一部分。",
    "en": "You can start from any role, and with each participation, gradually become another part of the community."
  },
  "joinPage.participant.title": {
    "zh": "参与者",
    "en": "Participant"
  },
  "joinPage.participant.p1": {
    "zh": "参与者是每一个第一次走进 TechFlows 的人。",
    "en": "Participants are everyone who walks into TechFlows for the first time."
  },
  "joinPage.participant.p2": {
    "zh": "你可能刚开始关注 AI、开源、黑客松或科技创业，也可能只是对某个话题感到好奇，还没有明确的项目和方向。",
    "en": "You might have just started paying attention to AI, open source, hackathons, or tech entrepreneurship — or you might just be curious about a topic without a clear project or direction yet."
  },
  "joinPage.participant.p3": {
    "zh": "你可以参加一场活动，认识一些正在行动的人，听见不同的经历，也提出那些还没有答案的问题。",
    "en": "You can attend an event, meet people in motion, hear different experiences, and ask questions that don't have answers yet."
  },
  "joinPage.participant.p4": {
    "zh": "在这里，参与并不是旁观。很多新的方向，正是从第一次来到现场开始的。",
    "en": "Here, participating is not just watching. Many new directions begin the first time you show up."
  },
  "joinPage.creator.title": {
    "zh": "创造者",
    "en": "Creator"
  },
  "joinPage.creator.p1": {
    "zh": "创造者是那些已经开始尝试的人。",
    "en": "Creators are those who have already started trying."
  },
  "joinPage.creator.p2": {
    "zh": "你可能正在开发一个工具，参加一场黑客松，推进一个校园项目，维护一项开源作品，或者刚刚开始自己的第一次创业尝试。",
    "en": "You might be developing a tool, joining a hackathon, pushing forward a campus project, maintaining an open-source work, or just starting your first entrepreneurial attempt."
  },
  "joinPage.creator.p3": {
    "zh": "项目不需要足够成熟，也不必已经拥有完整团队和漂亮的数据。",
    "en": "Projects don't need to be mature enough, or already have a complete team and impressive metrics."
  },
  "joinPage.creator.p4": {
    "zh": "我们更关注的是：你为什么开始，已经走到了哪里，正在解决什么问题，以及还需要怎样的同行者。",
    "en": "What we care more about: why you started, how far you've come, what problem you're solving, and what kind of fellow travelers you still need."
  },
  "joinPage.creator.p5": {
    "zh": "TechFlows 希望让这些真实的尝试被看见，也让它们拥有继续向前的可能。",
    "en": "TechFlows wants these real attempts to be seen, and to give them the possibility of moving forward."
  },
  "joinPage.sharer.title": {
    "zh": "分享者",
    "en": "Sharer"
  },
  "joinPage.sharer.p1": {
    "zh": "社区中的经验，不应该只属于少数专家。",
    "en": "Experience in the community shouldn't belong only to a few experts."
  },
  "joinPage.sharer.p2": {
    "zh": "一次失败的组队、一场没有获奖的比赛、一个反复推翻的产品方向，都可能成为另一个人重要的参考。",
    "en": "A failed team formation, a competition that didn't win, a product direction overturned again and again — any of these could be an important reference for someone else."
  },
  "joinPage.sharer.p3": {
    "zh": "分享者可以是技术从业者、项目发起人、黑客松参与者，也可以是刚刚完成第一次实践的普通成员。",
    "en": "Sharers can be tech practitioners, project initiators, hackathon participants, or ordinary members who have just completed their first practice."
  },
  "joinPage.sharer.p4": {
    "zh": "我们欢迎成熟的方法，也尊重仍在进行中的探索。",
    "en": "We welcome mature approaches and respect explorations still in progress."
  },
  "joinPage.sharer.p5": {
    "zh": "因为真正有价值的分享，往往不只是告诉别人“应该怎么做”，而是诚实地讲清楚：自己曾经如何开始，又经历了什么。",
    "en": "Because truly valuable sharing is often not just telling others \"what to do,\" but honestly explaining: how you started, and what you went through."
  },
  "joinPage.recorder.title": {
    "zh": "记录者",
    "en": "Recorder"
  },
  "joinPage.recorder.p1": {
    "zh": "很多项目在比赛结束后停止更新，很多有价值的交流也随着活动散场而消失。记录者关注的，是这些容易被忽略的过程。",
    "en": "Many projects stop updating after competitions end, and many valuable conversations disappear as events wrap up. Recorders pay attention to these easily overlooked processes."
  },
  "joinPage.recorder.p2": {
    "zh": "他们通过文字、影像、采访、设计和内容创作，记录一场活动中真正发生的事情，也记录一个人如何产生想法、组建团队、面对问题和继续前进。",
    "en": "Through writing, imagery, interviews, design, and content creation, they document what really happens at events, and how someone generates ideas, forms teams, faces problems, and keeps moving forward."
  },
  "joinPage.recorder.p3": {
    "zh": "记录不是简单的宣传。它是在为社区保存共同的经历，也是在让那些尚未被看见的人和项目，拥有被理解的机会。",
    "en": "Recording is not simply promotion. It's about preserving shared experiences for the community, and giving those not yet seen a chance to be understood."
  },
  "joinPage.connector.title": {
    "zh": "连接者",
    "en": "Connector"
  },
  "joinPage.connector.p1": {
    "zh": "有人有一个想法，却缺少技术伙伴。有人具备开发能力，却还没有找到愿意长期投入的项目。也有人掌握场地、赛事、导师或产业资源，正在寻找真正适合的团队。",
    "en": "Someone has an idea but lacks a technical partner. Someone has development skills but hasn't found a project worth committing to long-term. Someone else has venues, competitions, mentors, or industry resources, and is looking for the right team."
  },
  "joinPage.connector.p2": {
    "zh": "连接者所做的，不是简单交换联系方式，而是先理解一个人的能力、项目和真实需求，再帮助一次有意义的相遇发生。",
    "en": "What a connector does isn't simply exchanging contact info. It's first understanding a person's abilities, project, and real needs, then helping a meaningful encounter happen."
  },
  "joinPage.connector.p3": {
    "zh": "TechFlows 无法保证每一次连接都会产生结果。但我们相信，很多事情开始之前，只差遇见一个合适的人。",
    "en": "TechFlows can't guarantee every connection will produce results. But we believe that before many things begin, it's just one right person you haven't met yet."
  },
  "joinPage.builder.title": {
    "zh": "共建者",
    "en": "Co-builder"
  },
  "joinPage.builder.p1": {
    "zh": "共建者是那些愿意从参与者走向行动者的人。",
    "en": "Co-builders are those willing to move from participant to contributor."
  },
  "joinPage.builder.p2": {
    "zh": "他们可能参与一场活动的策划与执行，记录一个项目的故事，维护社区的技术产品，连接高校与合作伙伴，或者在自己的城市发起一次新的交流。",
    "en": "They might help plan and execute an event, document a project's story, maintain the community's technical products, connect universities and partners, or start a new exchange in their own city."
  },
  "joinPage.builder.p3": {
    "zh": "成为共建者，不意味着获得一个头衔。它意味着愿意对一件具体的事情负责，并和其他成员一起把它完成。",
    "en": "Becoming a co-builder doesn't mean getting a title. It means being willing to take responsibility for one concrete thing, and to complete it together with others."
  },
  "joinPage.builder.p4": {
    "zh": "TechFlows 仍然是一个年轻的社区。未来的活动、项目和城市网络，不会只由少数核心成员决定，而会由一位位愿意参与的人共同塑造。",
    "en": "TechFlows is still a young community. Future events, projects, and city networks won't be decided by just a few core members — they'll be shaped together by each person willing to participate."
  },
  "joinPage.roles.title": {
    "zh": "角色不是等级，而是一种参与方式",
    "en": "Roles are not ranks, but ways to participate"
  },
  "joinPage.roles.p1": {
    "zh": "在 TechFlows，没有从普通成员到核心成员的固定晋升路线。",
    "en": "At TechFlows, there is no fixed promotion path from ordinary member to core member."
  },
  "joinPage.roles.p2": {
    "zh": "一个人可以同时是创造者和分享者，也可以先作为参与者来到现场，再成为记录者、连接者或共建者。",
    "en": "One person can be both a creator and a sharer, or first come as a participant, then become a recorder, connector, or co-builder."
  },
  "joinPage.roles.p3": {
    "zh": "我们更在意的，不是你拥有什么身份，而是你愿意以怎样的方式参与其中。",
    "en": "What we care more about is not what identity you hold, but how you're willing to participate."
  },
  "joinPage.roles.p4": {
    "zh": "你可以带着好奇而来，带着项目而来，也可以带着自己的经验、能力和一件愿意共同完成的事情而来。",
    "en": "You can come with curiosity, with a project, or with your experience, abilities, and something you're willing to accomplish together."
  },
  "joinPage.principles.title": {
    "zh": "每个人的参与方式不同，但都在让新的事情发生",
    "en": "Everyone participates differently, but all are making new things happen"
  },
  "joinPage.principles.participant.title": {
    "zh": "参与者",
    "en": "Participants"
  },
  "joinPage.principles.participant.desc": {
    "zh": "让现场开始有了意义。",
    "en": "Give the gathering its meaning."
  },
  "joinPage.principles.creator.title": {
    "zh": "创造者",
    "en": "Creators"
  },
  "joinPage.principles.creator.desc": {
    "zh": "让想法逐渐成为现实。",
    "en": "Turn ideas into reality, step by step."
  },
  "joinPage.principles.sharer.title": {
    "zh": "分享者",
    "en": "Sharers"
  },
  "joinPage.principles.sharer.desc": {
    "zh": "让经验能够继续流动。",
    "en": "Keep experiences flowing."
  },
  "joinPage.principles.recorder.title": {
    "zh": "记录者",
    "en": "Recorders"
  },
  "joinPage.principles.recorder.desc": {
    "zh": "让真实发生过的过程不会消失。",
    "en": "Keep real processes from disappearing."
  },
  "joinPage.principles.connector.title": {
    "zh": "连接者",
    "en": "Connectors"
  },
  "joinPage.principles.connector.desc": {
    "zh": "让原本分散的人与机会开始相遇。",
    "en": "Let scattered people and opportunities begin to meet."
  },
  "joinPage.principles.builder.title": {
    "zh": "共建者",
    "en": "Co-builders"
  },
  "joinPage.principles.builder.desc": {
    "zh": "让社区拥有继续生长的力量。",
    "en": "Give the community the strength to keep growing."
  },
  "joinPage.principles.closing": {
    "zh": "在 TechFlows，每个人都不只是加入一个社区。也在参与它下一段故事的形成。",
    "en": "At TechFlows, everyone isn't just joining a community. They're also participating in shaping its next chapter."
  },
  "joinPage.cta.title": {
    "zh": "带着你现在拥有的东西来",
    "en": "Bring what you have right now"
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
  "unfino.hero.title": {
    "zh": "未完，不散场。",
    "en": "Unfinished. Still moving."
  },
  "unfino.hero.p1": {
    "zh": "UNFINO 是 TechFlows 旗下的项目续航型科技赛事。",
    "en": "UNFINO is TechFlows' project-continuation challenge."
  },
  "unfino.hero.p2": {
    "zh": "让人在线下相遇，让项目在现场成形，也让一次活动结束之后，仍然有下一步。",
    "en": "It brings people together, helps projects take shape, and keeps a next step alive after the event ends."
  },
  "unfino.hero.button1": {
    "zh": "看懂 UNFINO",
    "en": "How UNFINO works"
  },
  "unfino.hero.button2": {
    "zh": "查看近期活动",
    "en": "See upcoming events"
  },
  "unfino.journey.kicker": {
    "zh": "一场活动，三段旅程",
    "en": "One event, three movements"
  },
  "unfino.journey.title": {
    "zh": "从见面，到继续做下去",
    "en": "From meeting to keeping it moving"
  },
  "unfino.journey.intro": {
    "zh": "我们不把路演和颁奖当成终点，而把它们当成项目进入下一阶段的起点。",
    "en": "We do not treat the demo or the awards as the finish line. They are the start of the next stage."
  },
  "unfino.journey.meet.title": {
    "zh": "先见",
    "en": "Meet"
  },
  "unfino.journey.meet.description": {
    "zh": "围绕真实问题，让原本不会相遇的人来到同一个现场。",
    "en": "Bring people who would not otherwise meet around a real problem."
  },
  "unfino.journey.make.title": {
    "zh": "成形",
    "en": "Make"
  },
  "unfino.journey.make.description": {
    "zh": "组队、制作、验证，让一个模糊想法变成可以继续推进的项目。",
    "en": "Team up, build, and test until an idea becomes something that can move forward."
  },
  "unfino.journey.continue.title": {
    "zh": "续行",
    "en": "Continue"
  },
  "unfino.journey.continue.description": {
    "zh": "活动之后找到反馈、资源和下一个可验证的里程碑。",
    "en": "Find feedback, resources, and the next milestone after the event."
  },
  "unfino.difference.kicker": {
    "zh": "为什么不只是一次黑客松",
    "en": "More than a hackathon"
  },
  "unfino.difference.title": {
    "zh": "奖项在现场，项目在之后",
    "en": "The prize is on site. The project is after."
  },
  "unfino.difference.problem.title": {
    "zh": "从真实问题开始",
    "en": "Start with a real problem"
  },
  "unfino.difference.problem.description": {
    "zh": "不只围绕一个主题做 Demo，而是把真实的技术、产品或社会问题带到现场。",
    "en": "Do not build around an empty theme. Bring a real technical, product, or social problem into the room."
  },
  "unfino.difference.prize.title": {
    "zh": "奖金是继续行动的燃料",
    "en": "Prize money is fuel for the next step"
  },
  "unfino.difference.prize.description": {
    "zh": "奖金、资源和合作机会，帮助项目离开现场之后继续验证。",
    "en": "Prizes, resources, and partner connections help projects keep testing after they leave the room."
  },
  "unfino.difference.after.title": {
    "zh": "赛后仍然有下一步",
    "en": "There is a next step after the event"
  },
  "unfino.difference.after.description": {
    "zh": "我们关注的不是谁在当天讲得最好，而是哪一个项目愿意继续做下去。",
    "en": "We care less about who presents best that day and more about which project keeps going."
  },
  "unfino.entry.kicker": {
    "zh": "你可以从这里进入",
    "en": "Choose your way in"
  },
  "unfino.entry.title": {
    "zh": "不需要先准备好",
    "en": "You do not have to be ready first"
  },
  "unfino.entry.participant.title": {
    "zh": "我想来参加",
    "en": "I want to participate"
  },
  "unfino.entry.participant.description": {
    "zh": "带着问题、能力或好奇来到现场，先认识可能的同行者。",
    "en": "Bring a question, a skill, or curiosity and meet people you may build with."
  },
  "unfino.entry.participant.cta": {
    "zh": "查看活动",
    "en": "See events"
  },
  "unfino.entry.project.title": {
    "zh": "我有一个项目",
    "en": "I have a project"
  },
  "unfino.entry.project.description": {
    "zh": "项目可以还不成熟，但需要已经开始。提交它，让它先被认真理解。",
    "en": "Your project does not have to be finished, but it should have started. Submit it to be understood with care."
  },
  "unfino.entry.project.cta": {
    "zh": "提交项目",
    "en": "Submit a project"
  },
  "unfino.entry.partner.title": {
    "zh": "我想提供支持",
    "en": "I want to support"
  },
  "unfino.entry.partner.description": {
    "zh": "高校、企业、技术社区和创新空间，都可以从一次具体合作开始。",
    "en": "Universities, companies, tech communities, and innovation spaces can start with one concrete collaboration."
  },
  "unfino.entry.partner.cta": {
    "zh": "了解合作",
    "en": "Explore partnership"
  },
  "unfino.next.kicker": {
    "zh": "从下一步开始",
    "en": "Start with the next step"
  },
  "unfino.next.title": {
    "zh": "让项目继续发生",
    "en": "Keep the project moving"
  },
  "unfino.next.p1": {
    "zh": "UNFINO 不承诺每个项目都会成功，但希望每个认真开始的项目，都能找到一个值得验证的下一步。",
    "en": "UNFINO cannot promise that every project will succeed, but every serious beginning should find a next step worth testing."
  },
  "unfino.next.button1": {
    "zh": "提交项目或想法",
    "en": "Submit a project or idea"
  },
  "unfino.next.button2": {
    "zh": "参与社区共建",
    "en": "Help build the community"
  },
  "unfinoPage.hero.title": {
    "zh": "黑客松不是终点。",
    "en": "A hackathon is not the finish line."
  },
  "unfinoPage.hero.lead": {
    "zh": "UNFINO 把一次线下黑客松，连接到项目之后的长期 Builder 社区。",
    "en": "UNFINO connects an in-person hackathon to a long-term Builder community after the event."
  },
  "unfinoPage.hero.button1": {
    "zh": "看一次活动怎么走",
    "en": "See how it works"
  },
  "unfinoPage.hero.button2": {
    "zh": "查看近期活动",
    "en": "See upcoming events"
  },
  "unfinoPage.example.kicker": {
    "zh": "一个具体的例子",
    "en": "A concrete example"
  },
  "unfinoPage.example.title": {
    "zh": "以一场 AI 黑客松为例",
    "en": "Take an AI hackathon"
  },
  "unfinoPage.example.intro": {
    "zh": "你来到现场，不只是为了在截止时间前做出一个 Demo，而是为了找到一个愿意继续做下去的下一步。",
    "en": "You do not come only to ship a demo before the deadline. You come to find the next step worth continuing."
  },
  "unfinoPage.example.brief.title": {
    "zh": "真实问题进入现场",
    "en": "A real problem enters the room"
  },
  "unfinoPage.example.brief.description": {
    "zh": "高校、企业、技术社区或参与者带来一个真实问题，成为这次黑客松的起点。",
    "en": "A university, company, tech community, or participant brings a real problem as the starting point."
  },
  "unfinoPage.example.build.title": {
    "zh": "团队让想法成形",
    "en": "Teams make an idea tangible"
  },
  "unfinoPage.example.build.description": {
    "zh": "开发、产品、设计和领域经验在现场相遇，一起做出可以被验证的原型。",
    "en": "Engineering, product, design, and domain experience meet to build a prototype that can be tested."
  },
  "unfinoPage.example.prize.title": {
    "zh": "奖金给项目下一步燃料",
    "en": "The prize fuels the next step"
  },
  "unfinoPage.example.prize.description": {
    "zh": "奖金不只是对现场表现的奖励，也可以成为项目继续验证和迭代的第一笔资源。",
    "en": "The prize is not only recognition. It can become the first resource for testing and iteration."
  },
  "unfinoPage.example.builder.title": {
    "zh": "现场放出 Builder 资格",
    "en": "Builder access is announced on site"
  },
  "unfinoPage.example.builder.description": {
    "zh": "每次赛后，现场公布进入长期 Builder 社区的资格和参与方式。",
    "en": "After each event, the qualification and way to join the long-term Builder community are announced on site."
  },
  "unfinoPage.example.flow.one": {
    "zh": "现场相遇",
    "en": "Meet on site"
  },
  "unfinoPage.example.flow.two": {
    "zh": "项目成形",
    "en": "Make it real"
  },
  "unfinoPage.example.flow.three": {
    "zh": "赛后续行",
    "en": "Keep going"
  },
  "unfinoPage.builder.visual": {
    "zh": "长期同行",
    "en": "Keep building"
  },
  "unfinoPage.builder.kicker": {
    "zh": "UNFINO BUILDER",
    "en": "UNFINO BUILDER"
  },
  "unfinoPage.builder.title": {
    "zh": "赛后，愿意继续的人可以留下。",
    "en": "After the event, the people who want to continue can stay."
  },
  "unfinoPage.builder.lead": {
    "zh": "Builder 不是一个普通活动群，而是一群愿意在每次活动之后，继续与项目和彼此并肩同行的人。",
    "en": "Builder is not another event chat. It is a group of people willing to keep building alongside projects and one another after each event."
  },
  "unfinoPage.builder.onsite.title": {
    "zh": "资格在现场公布",
    "en": "Qualification is announced on site"
  },
  "unfinoPage.builder.onsite.description": {
    "zh": "每场活动结束前，现场公布本次 Builder 社区的资格与参与方式。",
    "en": "Before each event ends, the qualification and participation details for that Builder cohort are announced on site."
  },
  "unfinoPage.builder.commitment.title": {
    "zh": "继续做，比围观更重要",
    "en": "Commitment matters more than attendance"
  },
  "unfinoPage.builder.commitment.description": {
    "zh": "愿意继续推进项目、贡献能力或认真参与下一步的人，才是 Builder 想留下的人。",
    "en": "Builder is for people willing to move a project forward, contribute a skill, or take the next step seriously."
  },
  "unfinoPage.builder.together.title": {
    "zh": "下一次活动继续并肩",
    "en": "Build together again"
  },
  "unfinoPage.builder.together.description": {
    "zh": "你可以继续参与项目、下一场活动和新的真实问题，让一次相遇变成长期同行。",
    "en": "Keep contributing to projects, future events, and new real problems so one encounter can become a longer journey."
  },
  "unfinoPage.builder.note": {
    "zh": "具体资格规则以每场活动现场公布为准。",
    "en": "The exact qualification rules are announced at each event."
  },
  "unfinoPage.next.kicker": {
    "zh": "下一场，现场见",
    "en": "See you at the next one"
  },
  "unfinoPage.next.title": {
    "zh": "先来一次见面，再决定要走多远。",
    "en": "Start with one gathering. Decide how far to go next."
  },
  "unfinoPage.next.copy": {
    "zh": "你可以带着一个问题、一个项目，或者一项愿意贡献的能力来到 UNFINO。",
    "en": "Come to UNFINO with a question, a project, or a skill you are willing to contribute."
  },
  "unfinoPage.next.button1": {
    "zh": "查看活动",
    "en": "See events"
  },
  "unfinoPage.next.button2": {
    "zh": "提交项目",
    "en": "Submit a project"
  },
  "unfinoBrand.hero.title": {
    "zh": "一个独立的赛事品牌，给项目一个下一步。",
    "en": "An independent event brand for the next step of a project."
  },
  "unfinoBrand.hero.lead": {
    "zh": "UNFINO 属于 TechFlows，但不等同于一次活动。它可以是一场短时黑客松、主题挑战、共创冲刺或项目展示场；形式可以变化，目标始终是让项目在现场发生，并在赛后继续。",
    "en": "UNFINO belongs to TechFlows, but it is more than one event. It can be a short hackathon, a themed challenge, a build sprint, or a project showcase. The format changes; the goal stays the same: make something happen on site, then keep it moving."
  },
  "unfinoBrand.hero.button1": {
    "zh": "查看赛事形式",
    "en": "Explore the formats"
  },
  "unfinoBrand.hero.button2": {
    "zh": "查看近期活动",
    "en": "See upcoming events"
  },
  "unfinoBrand.hero.tile": {
    "zh": "未完，不散场",
    "en": "Unfinished, still moving"
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
    "zh": "UNFINO 是一套长期赛事品牌。我们根据问题、参与者和现场条件，选择最适合让项目发生的活动形式。",
    "en": "UNFINO is a long-term event brand. We choose the format that best helps a project happen, based on the problem, the people, and the setting."
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
    "zh": "赛后长期机制",
    "en": "The long-term layer"
  },
  "unfinoBrand.builder.title": {
    "zh": "每次活动之后，愿意继续的人可以进入 Builder 社区。",
    "en": "After each event, the people who want to continue can enter the Builder community."
  },
  "unfinoBrand.builder.lead": {
    "zh": "Builder 不是普通活动群，也不是一次性会员。它是 UNFINO 留给下一段同行关系的空间：继续做项目、继续贡献能力，也继续参加新的现场。",
    "en": "Builder is not another event chat or a one-time membership. It is UNFINO's space for the next part of the journey: keep building, keep contributing, and keep showing up."
  },
  "unfinoBrand.builder.onsite.title": {
    "zh": "资格在现场公布",
    "en": "Qualification is announced on site"
  },
  "unfinoBrand.builder.onsite.description": {
    "zh": "每次赛后，现场公布本次 Builder 社区的资格与参与方式。",
    "en": "After each event, the qualification and participation details are announced on site."
  },
  "unfinoBrand.builder.commitment.title": {
    "zh": "愿意继续，比参加过更重要",
    "en": "Willingness to continue matters more than attendance"
  },
  "unfinoBrand.builder.commitment.description": {
    "zh": "愿意推进项目、贡献能力，或认真参与下一步的人，才是 Builder 想留下的人。",
    "en": "Builder is for people willing to move a project forward, contribute a skill, or take the next step seriously."
  },
  "unfinoBrand.builder.together.title": {
    "zh": "下一次现场继续并肩",
    "en": "Keep building together"
  },
  "unfinoBrand.builder.together.description": {
    "zh": "从一个项目到下一场活动，Builder 让一次相遇有机会变成长期同行。",
    "en": "From one project to the next event, Builder gives one encounter a chance to become a longer journey."
  },
  "unfinoBrand.builder.note": {
    "zh": "具体资格规则以每场活动现场公布为准。",
    "en": "The exact qualification rules are announced at each event."
  },
  "unfinoBrand.builder.cardTitle": {
    "zh": "继续做的人",
    "en": "The people who keep building"
  },
  "unfinoBrand.builder.cardCaption": {
    "zh": "从一次现场，到长期同行",
    "en": "From one event to a longer journey"
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
} as const satisfies Record<string, Localized<string>>;
