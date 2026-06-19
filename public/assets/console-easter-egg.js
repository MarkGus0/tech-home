(function () {
  "use strict";

  var root = window;
  var consoleApi = root.console;

  if (!consoleApi || !consoleApi.log || root.__TECHFLOWS_CONSOLE_EGG__) return;

  root.__TECHFLOWS_CONSOLE_EGG__ = true;

  var lang = (document.documentElement.lang || navigator.language || "en").toLowerCase();
  var isZh = lang.indexOf("zh") === 0;
  var origin = root.location.origin;
  var subtle = "color:#697586;font-weight:500";
  var brand = "color:#0f172a;font-size:18px;font-weight:800;letter-spacing:0";
  var accent = "color:#0f766e;font-weight:800";
  var command = "color:#2563eb;font-weight:800";

  var copy = {
    badge: isZh ? "\u5f00\u53d1\u8005\u5165\u53e3\u5df2\u5c31\u7eea" : "developer console is ready",
    welcome: isZh
      ? "\u6b22\u8fce\u6253\u5f00 F12\u3002\u8fd9\u91cc\u6ca1\u6709\u8ddf\u8e2a\u5668\uff0c\u53ea\u6709\u4e00\u4e2a\u7ed9\u597d\u5947\u5fc3\u7684\u5c0f\u63d0\u793a\u3002"
      : "Welcome to F12. No trackers here, just a small note for curious builders.",
    help: isZh
      ? "\u8bd5\u8bd5 tf.help()\u3001tf.links()\u3001tf.menus()\u3001tf.about()\u3002"
      : "Try tf.help(), tf.links(), tf.menus(), and tf.about().",
    about: isZh
      ? "TechFlows \u662f\u4e00\u4e2a\u9762\u5411\u9752\u5e74\u79d1\u6280\u521b\u9020\u8005\u4e0e\u65e9\u671f\u9879\u76ee\u7684\u5f00\u653e\u793e\u533a\u3002"
      : "TechFlows is an open community for young tech creators and early-stage projects.",
    note: isZh
      ? "\u5c0f\u5f69\u86cb\uff1a\u7528 DevTools \u770b\u7f51\u7ad9\uff0c\u6700\u5e38\u7528\u7684\u83dc\u5355\u662f Elements\u3001Console\u3001Sources\u3001Network\u3001Application\u3001Security\u3001Lighthouse\u3002"
      : "Easter egg: the most common DevTools panels are Elements, Console, Sources, Network, Application, Security, and Lighthouse."
  };

  var mark = [
    " _____         _     _____ _",
    "|_   _|__  ___| |__ |  ___| | _____      _____",
    "  | |/ _ \\/ __| '_ \\| |_  | |/ _ \\ \\ /\\ / / __|",
    "  | |  __/ (__| | | |  _| | | (_) \\ V  V /\\__ \\",
    "  |_|\\___|\\___|_| |_|_|   |_|\\___/ \\_/\\_/ |___/"
  ].join("\n");

  var links = [
    { name: "Home", url: origin + (isZh ? "/" : "/en/") },
    { name: "Events", url: origin + (isZh ? "/events/" : "/en/events/") },
    { name: "Projects", url: origin + (isZh ? "/projects/" : "/en/projects/") },
    { name: "Partners", url: origin + (isZh ? "/partners/" : "/en/partners/") },
    { name: "Join", url: origin + (isZh ? "/join/" : "/en/join/") }
  ];

  var menus = [
    {
      panel: "Elements",
      usage: isZh ? "\u67e5\u770b\u548c\u8c03\u8bd5 HTML / CSS / \u5e03\u5c40" : "Inspect and debug HTML, CSS, and layout"
    },
    {
      panel: "Console",
      usage: isZh ? "\u67e5\u770b\u65e5\u5fd7\u3001\u8fd0\u884c JavaScript\u3001\u68c0\u67e5\u62a5\u9519" : "Read logs, run JavaScript, and inspect errors"
    },
    {
      panel: "Sources",
      usage: isZh ? "\u67e5\u770b\u6e90\u7801\u3001\u65ad\u70b9\u8c03\u8bd5\u3001\u8ffd\u8e2a\u811a\u672c" : "View source, set breakpoints, and trace scripts"
    },
    {
      panel: "Network",
      usage: isZh ? "\u5206\u6790\u8d44\u6e90\u8bf7\u6c42\u3001\u7f13\u5b58\u3001\u534f\u8bae\u548c\u901f\u5ea6" : "Analyze requests, caching, protocols, and speed"
    },
    {
      panel: "Performance",
      usage: isZh ? "\u5f55\u5236\u9996\u5c4f\u3001\u4ea4\u4e92\u548c\u6e32\u67d3\u6027\u80fd" : "Profile load, interaction, and rendering performance"
    },
    {
      panel: "Application",
      usage: isZh ? "\u68c0\u67e5 Cookie\u3001Storage\u3001Service Worker \u548c Manifest" : "Inspect cookies, storage, service workers, and manifests"
    },
    {
      panel: "Security",
      usage: isZh ? "\u68c0\u67e5 HTTPS\u3001\u8bc1\u4e66\u548c\u5b89\u5168\u4e0a\u4e0b\u6587" : "Check HTTPS, certificates, and secure contexts"
    },
    {
      panel: "Lighthouse",
      usage: isZh ? "\u8dd1\u6027\u80fd\u3001SEO\u3001\u53ef\u8bbf\u95ee\u6027\u548c\u6700\u4f73\u5b9e\u8df5\u62a5\u544a" : "Run performance, SEO, accessibility, and best-practice audits"
    }
  ];

  function table(rows) {
    if (consoleApi.table) {
      consoleApi.table(rows);
      return;
    }

    rows.forEach(function (row) {
      consoleApi.log(row);
    });
  }

  function help() {
    var commands = [
      { command: "tf.help()", action: isZh ? "\u663e\u793a\u5e2e\u52a9" : "Show help" },
      { command: "tf.links()", action: isZh ? "\u663e\u793a\u7ad9\u70b9\u5165\u53e3" : "Show site links" },
      { command: "tf.menus()", action: isZh ? "\u663e\u793a\u5e38\u89c1 DevTools \u83dc\u5355" : "Show common DevTools panels" },
      { command: "tf.about()", action: isZh ? "\u67e5\u770b TechFlows \u4ecb\u7ecd" : "Show the TechFlows intro" },
      { command: "tf.ping()", action: isZh ? "\u68c0\u67e5\u5f69\u86cb\u72b6\u6001" : "Check the easter egg status" }
    ];

    if (consoleApi.groupCollapsed) consoleApi.groupCollapsed("TechFlows console commands");
    table(commands);
    if (consoleApi.groupEnd) consoleApi.groupEnd();
    return commands;
  }

  var api = Object.freeze({
    help: help,
    links: function () {
      table(links);
      return links;
    },
    menus: function () {
      table(menus);
      return menus;
    },
    about: function () {
      consoleApi.log("%c" + copy.about, subtle);
      return copy.about;
    },
    ping: function () {
      var message = "pong " + new Date().toISOString();
      consoleApi.log("%c" + message, accent);
      return message;
    }
  });

  if (!root.tf) {
    Object.defineProperty(root, "tf", {
      value: api,
      configurable: true
    });
  }

  if (!root.techflows) {
    Object.defineProperty(root, "techflows", {
      value: api,
      configurable: true
    });
  }

  consoleApi.log("%cTechFlows%c " + copy.badge, brand, subtle);
  consoleApi.log("%c" + mark, "color:#0f766e;font-weight:700");
  consoleApi.log(copy.welcome);
  consoleApi.log(copy.note);
  consoleApi.log("%c" + copy.help, command);

  if (consoleApi.groupCollapsed) {
    consoleApi.groupCollapsed(isZh ? "TechFlows \u5e38\u7528\u5165\u53e3" : "TechFlows quick links");
    table(links);
    consoleApi.groupEnd();
  }
})();
