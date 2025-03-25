/**
 * i18n.js - 国际化支持模块
 * 为PeerGate路由客户端演示提供多语言支持
 */

// 语言资源
const resources = {
  "zh-CN": {
    translation: {
      // 页面标题和导航
      title: "PeerGate 路由客户端演示",
      "header.title": "PeerGate 路由客户端演示",
      "nav.home": "返回首页",

      // 语言选择
      language: "语言",
      "language.zh": "中文",
      "language.en": "English",
      "language.ja": "日本語",

      // 注册部分
      "register.title": "注册客户端",
      "register.route": "路由路径",
      "register.route_placeholder": "/api/users",
      "register.group": "组名称",
      "register.group_placeholder": "user-service",
      "register.submit": "注册",
      "register.disconnect": "断开连接",

      // 客户端状态
      "client.status_title": "客户端状态",
      "client.id": "客户端ID",
      "client.not_initialized": "未初始化",
      "client.route": "当前路由",
      "client.not_registered": "未注册",
      "client.group": "当前组",
      "client.refresh_status": "刷新状态",

      // 日志部分
      "log.title": "操作日志",
      "log.clear": "清除日志",
      "log.cleared": "日志已清除",
      "log.init_success": "客户端初始化成功",
      "log.init_error": "初始化失败",
      "log.register_attempt": "尝试注册到路由 {{route}} 和组 {{group}}...",
      "log.register_success": "成功注册到路由 {{route}} 和组 {{group}}",
      "log.register_failed": "注册失败",
      "log.register_error": "注册出错",
      "log.disconnect_attempt": "尝试断开连接...",
      "log.disconnect_success": "成功断开连接",
      "log.disconnect_failed": "断开连接失败",
      "log.disconnect_error": "断开连接出错",
      "log.status_refreshed": "客户端状态已刷新",
      "log.members_loading": "获取组 {{group}} 的成员...",
      "log.members_success": "成功获取组成员，共 {{count}} 个客户端",
      "log.members_failed": "获取组成员失败",
      "log.members_error": "获取组成员出错",
      "log.stats_loading": "获取所有组的统计信息...",
      "log.stats_success": "成功获取组统计信息",
      "log.stats_failed": "获取组统计信息失败",
      "log.stats_error": "获取组统计信息出错",
      "log.select_client_attempt":
        "从{{group}}中选择客户端，策略: {{strategy}}...",
      "log.select_client_success":
        "成功选择客户端: {{clientId}}，组: {{group}}，策略: {{strategy}}",
      "log.select_client_failed": "选择客户端失败",
      "log.select_client_error": "选择客户端出错",
      "log.route_client_attempt":
        "根据路由 {{route}} 获取客户端，策略: {{strategy}}...",
      "log.route_client_success":
        "成功获取客户端: {{clientId}}，路由: {{route}}，策略: {{strategy}}",
      "log.route_client_failed": "获取客户端失败",
      "log.route_client_error": "获取客户端出错",

      // 组成员
      "members.title": "组成员",
      "members.refresh": "刷新",
      "members.register_first": "请先注册到一个组",
      "members.list": "组 {{group}} 的成员 ({{count}})",
      "members.current_client": "当前客户端",
      "members.empty": "组 {{group}} 中没有客户端",
      "members.load_failed": "获取组成员失败",
      "members.load_error": "获取组成员出错",

      // 统计信息
      "stats.title": "组统计信息",
      "stats.refresh": "刷新统计",
      "stats.not_available": "未获取统计信息",
      "stats.group_name": "组名称",
      "stats.client_count": "客户端数量",
      "stats.request_count": "请求数量",
      "stats.no_active_groups": "当前没有活跃的组",
      "stats.load_failed": "获取组统计信息失败",
      "stats.load_error": "获取组统计信息出错",

      // 从组中选择客户端
      "select_client.title": "从组中选择客户端",
      "select_client.group": "组名称",
      "select_client.group_placeholder": "留空使用当前组",
      "select_client.current_group": "当前组",
      "select_client.strategy": "负载均衡策略",
      "select_client.strategy_random": "随机 (random)",
      "select_client.strategy_roundrobin": "轮询 (round-robin)",
      "select_client.strategy_leastactive": "最不活跃 (least-active)",
      "select_client.submit": "选择客户端",
      "select_client.success": "选择成功",
      "select_client.client_id": "客户端ID",
      "select_client.group": "组",
      "select_client.strategy": "策略",

      // 根据路由获取客户端
      "route_client.title": "根据路由获取客户端",
      "route_client.route": "路由路径",
      "route_client.route_placeholder": "/api/users",
      "route_client.strategy": "负载均衡策略",
      "route_client.strategy_random": "随机 (random)",
      "route_client.strategy_roundrobin": "轮询 (round-robin)",
      "route_client.strategy_leastactive": "最不活跃 (least-active)",
      "route_client.submit": "获取客户端",
      "route_client.success": "获取成功",
      "route_client.client_id": "客户端ID",
      "route_client.route": "路由",
      "route_client.strategy": "策略",

      // 页脚
      "footer.copyright": "© 2025 PeerGate. 保留所有权利.",
      "footer.github": "GitHub",
      "footer.docs": "文档",
    },
  },
  en: {
    translation: {
      // Page title and navigation
      title: "PeerGate Route Client Demo",
      "header.title": "PeerGate Route Client Demo",
      "nav.home": "Back to Home",

      // Language selection
      language: "Language",
      "language.zh": "中文",
      "language.en": "English",
      "language.ja": "日本語",

      // Registration section
      "register.title": "Register Client",
      "register.route": "Route Path",
      "register.route_placeholder": "/api/users",
      "register.group": "Group Name",
      "register.group_placeholder": "user-service",
      "register.submit": "Register",
      "register.disconnect": "Disconnect",

      // Client status
      "client.status_title": "Client Status",
      "client.id": "Client ID",
      "client.not_initialized": "Not initialized",
      "client.route": "Current Route",
      "client.not_registered": "Not registered",
      "client.group": "Current Group",
      "client.refresh_status": "Refresh Status",

      // Log section
      "log.title": "Operation Log",
      "log.clear": "Clear Log",
      "log.cleared": "Log cleared",
      "log.init_success": "Client initialized successfully",
      "log.init_error": "Initialization failed",
      "log.register_attempt":
        "Attempting to register to route {{route}} and group {{group}}...",
      "log.register_success":
        "Successfully registered to route {{route}} and group {{group}}",
      "log.register_failed": "Registration failed",
      "log.register_error": "Registration error",
      "log.disconnect_attempt": "Attempting to disconnect...",
      "log.disconnect_success": "Successfully disconnected",
      "log.disconnect_failed": "Disconnection failed",
      "log.disconnect_error": "Disconnection error",
      "log.status_refreshed": "Client status refreshed",
      "log.members_loading": "Getting members of group {{group}}...",
      "log.members_success":
        "Successfully got group members, total {{count}} clients",
      "log.members_failed": "Failed to get group members",
      "log.members_error": "Error getting group members",
      "log.stats_loading": "Getting statistics for all groups...",
      "log.stats_success": "Successfully got group statistics",
      "log.stats_failed": "Failed to get group statistics",
      "log.stats_error": "Error getting group statistics",
      "log.select_client_attempt":
        "Selecting client from {{group}}, strategy: {{strategy}}...",
      "log.select_client_success":
        "Successfully selected client: {{clientId}}, group: {{group}}, strategy: {{strategy}}",
      "log.select_client_failed": "Failed to select client",
      "log.select_client_error": "Error selecting client",
      "log.route_client_attempt":
        "Getting client for route {{route}}, strategy: {{strategy}}...",
      "log.route_client_success":
        "Successfully got client: {{clientId}}, route: {{route}}, strategy: {{strategy}}",
      "log.route_client_failed": "Failed to get client",
      "log.route_client_error": "Error getting client",

      // Group members
      "members.title": "Group Members",
      "members.refresh": "Refresh",
      "members.register_first": "Please register to a group first",
      "members.list": "Members of group {{group}} ({{count}})",
      "members.current_client": "Current client",
      "members.empty": "No clients in group {{group}}",
      "members.load_failed": "Failed to load group members",
      "members.load_error": "Error loading group members",

      // Statistics
      "stats.title": "Group Statistics",
      "stats.refresh": "Refresh Stats",
      "stats.not_available": "Statistics not available",
      "stats.group_name": "Group Name",
      "stats.client_count": "Client Count",
      "stats.request_count": "Request Count",
      "stats.no_active_groups": "No active groups currently",
      "stats.load_failed": "Failed to load group statistics",
      "stats.load_error": "Error loading group statistics",

      // Select client from group
      "select_client.title": "Select Client from Group",
      "select_client.group": "Group Name",
      "select_client.group_placeholder": "Leave empty to use current group",
      "select_client.current_group": "Current group",
      "select_client.strategy": "Load Balancing Strategy",
      "select_client.strategy_random": "Random (random)",
      "select_client.strategy_roundrobin": "Round-robin (round-robin)",
      "select_client.strategy_leastactive": "Least active (least-active)",
      "select_client.submit": "Select Client",
      "select_client.success": "Selection Successful",
      "select_client.client_id": "Client ID",
      "select_client.group": "Group",
      "select_client.strategy": "Strategy",

      // Get client by route
      "route_client.title": "Get Client by Route",
      "route_client.route": "Route Path",
      "route_client.route_placeholder": "/api/users",
      "route_client.strategy": "Load Balancing Strategy",
      "route_client.strategy_random": "Random (random)",
      "route_client.strategy_roundrobin": "Round-robin (round-robin)",
      "route_client.strategy_leastactive": "Least active (least-active)",
      "route_client.submit": "Get Client",
      "route_client.success": "Successfully Retrieved",
      "route_client.client_id": "Client ID",
      "route_client.route": "Route",
      "route_client.strategy": "Strategy",

      // Footer
      "footer.copyright": "© 2025 PeerGate. All rights reserved.",
      "footer.github": "GitHub",
      "footer.docs": "Documentation",
    },
  },
  ja: {
    translation: {
      // ページタイトルとナビゲーション
      title: "PeerGate ルートクライアントデモ",
      "header.title": "PeerGate ルートクライアントデモ",
      "nav.home": "ホームに戻る",

      // 言語選択
      language: "言語",
      "language.zh": "中文",
      "language.en": "English",
      "language.ja": "日本語",

      // 登録セクション
      "register.title": "クライアント登録",
      "register.route": "ルートパス",
      "register.route_placeholder": "/api/users",
      "register.group": "グループ名",
      "register.group_placeholder": "user-service",
      "register.submit": "登録",
      "register.disconnect": "切断",

      // クライアントステータス
      "client.status_title": "クライアントステータス",
      "client.id": "クライアントID",
      "client.not_initialized": "初期化されていません",
      "client.route": "現在のルート",
      "client.not_registered": "登録されていません",
      "client.group": "現在のグループ",
      "client.refresh_status": "ステータス更新",

      // ログセクション
      "log.title": "操作ログ",
      "log.clear": "ログをクリア",
      "log.cleared": "ログがクリアされました",
      "log.init_success": "クライアントが正常に初期化されました",
      "log.init_error": "初期化に失敗しました",
      "log.register_attempt":
        "ルート {{route}} とグループ {{group}} に登録を試みています...",
      "log.register_success":
        "ルート {{route}} とグループ {{group}} に正常に登録されました",
      "log.register_failed": "登録に失敗しました",
      "log.register_error": "登録エラー",
      "log.disconnect_attempt": "切断を試みています...",
      "log.disconnect_success": "正常に切断されました",
      "log.disconnect_failed": "切断に失敗しました",
      "log.disconnect_error": "切断エラー",
      "log.status_refreshed": "クライアントステータスが更新されました",
      "log.members_loading": "グループ {{group}} のメンバーを取得しています...",
      "log.members_success":
        "グループメンバーを正常に取得しました。合計 {{count}} クライアント",
      "log.members_failed": "グループメンバーの取得に失敗しました",
      "log.members_error": "グループメンバーの取得中にエラーが発生しました",
      "log.stats_loading": "すべてのグループの統計情報を取得しています...",
      "log.stats_success": "グループ統計情報を正常に取得しました",
      "log.stats_failed": "グループ統計情報の取得に失敗しました",
      "log.stats_error": "グループ統計情報の取得中にエラーが発生しました",
      "log.select_client_attempt":
        "{{group}} からクライアントを選択しています。戦略: {{strategy}}...",
      "log.select_client_success":
        "クライアントを正常に選択しました: {{clientId}}, group: {{group}}, strategy: {{strategy}}",
      "log.select_client_failed": "クライアントの選択に失敗しました",
      "log.select_client_error": "クライアントの選択中にエラーが発生しました",
      "log.route_client_attempt":
        "ルート {{route}} のクライアントを取得しています。戦略: {{strategy}}...",
      "log.route_client_success":
        "クライアントを正常に取得しました: {{clientId}}, route: {{route}}, strategy: {{strategy}}",
      "log.route_client_failed": "クライアントの取得に失敗しました",
      "log.route_client_error": "クライアントの取得中にエラーが発生しました",

      // グループメンバー
      "members.title": "グループメンバー",
      "members.refresh": "更新",
      "members.register_first": "最初にグループに登録してください",
      "members.list": "グループ {{group}} のメンバー ({{count}})",
      "members.current_client": "現在のクライアント",
      "members.empty": "グループ {{group}} にクライアントはありません",
      "members.load_failed": "グループメンバーの読み込みに失敗しました",
      "members.load_error":
        "グループメンバーの読み込み中にエラーが発生しました",

      // 統計情報
      "stats.title": "グループ統計情報",
      "stats.refresh": "統計更新",
      "stats.not_available": "統計情報は利用できません",
      "stats.group_name": "グループ名",
      "stats.client_count": "クライアント数",
      "stats.request_count": "リクエスト数",
      "stats.no_active_groups": "現在アクティブなグループはありません",
      "stats.load_failed": "グループ統計情報の読み込みに失敗しました",
      "stats.load_error": "グループ統計情報の読み込み中にエラーが発生しました",

      // グループからクライアントを選択
      "select_client.title": "グループからクライアントを選択",
      "select_client.group": "グループ名",
      "select_client.group_placeholder":
        "現在のグループを使用する場合は空のままにします",
      "select_client.current_group": "現在のグループ",
      "select_client.strategy": "負荷分散戦略",
      "select_client.strategy_random": "ランダム (random)",
      "select_client.strategy_roundrobin": "ラウンドロビン (round-robin)",
      "select_client.strategy_leastactive": "最小アクティブ (least-active)",
      "select_client.submit": "クライアントを選択",
      "select_client.success": "選択成功",
      "select_client.client_id": "クライアントID",
      "select_client.group": "グループ",
      "select_client.strategy": "戦略",

      // ルートでクライアントを取得
      "route_client.title": "ルートでクライアントを取得",
      "route_client.route": "ルートパス",
      "route_client.route_placeholder": "/api/users",
      "route_client.strategy": "負荷分散戦略",
      "route_client.strategy_random": "ランダム (random)",
      "route_client.strategy_roundrobin": "ラウンドロビン (round-robin)",
      "route_client.strategy_leastactive": "最小アクティブ (least-active)",
      "route_client.submit": "クライアントを取得",
      "route_client.success": "取得成功",
      "route_client.client_id": "クライアントID",
      "route_client.route": "ルート",
      "route_client.strategy": "戦略",

      // フッター
      "footer.copyright": "© 2025 PeerGate. すべての権利を保持します。",
      "footer.github": "GitHub",
      "footer.docs": "ドキュメント",
    },
  },
};

// i18next 模拟实现
const i18next = {
  language: "zh-CN",
  resources: resources,

  t(key, options = {}) {
    // 获取当前语言的翻译
    const translations = this.resources[this.language]?.translation || {};
    let text = translations[key] || key;

    // 替换变量
    if (options && typeof options === "object") {
      Object.keys(options).forEach((optionKey) => {
        text = text.replace(
          new RegExp(`{{${optionKey}}}`, "g"),
          options[optionKey]
        );
      });
    }

    return text;
  },

  changeLanguage(lang) {
    if (this.resources[lang]) {
      this.language = lang;
      return true;
    }
    return false;
  },
};

// 初始化i18n
async function initI18n() {
  // 从localStorage读取上次使用的语言
  const savedLang = localStorage.getItem("preferred_language");
  if (savedLang && i18next.resources[savedLang]) {
    i18next.language = savedLang;
  } else {
    // 默认使用浏览器语言，如果支持的话
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && i18next.resources[browserLang]) {
      i18next.language = browserLang;
    }
  }

  // 应用翻译到所有需要翻译的元素
  applyTranslations();

  return i18next;
}

// 应用翻译到界面
function applyTranslations() {
  // 处理data-i18n属性的元素
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = i18next.t(key);
  });

  // 处理占位符翻译
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    element.placeholder = i18next.t(key);
  });

  // 更新页面标题
  const titleElement = document.querySelector("title");
  if (titleElement && titleElement.hasAttribute("data-i18n")) {
    const key = titleElement.getAttribute("data-i18n");
    document.title = i18next.t(key);
  }

  // 更新语言选择器中的激活状态
  document.querySelectorAll(".language-option").forEach((option) => {
    if (option.getAttribute("data-lang") === i18next.language) {
      option.classList.add("active");
    } else {
      option.classList.remove("active");
    }
  });
}

// 切换语言
function changeLanguage(lang) {
  if (i18next.changeLanguage(lang)) {
    // 保存语言偏好到localStorage
    localStorage.setItem("preferred_language", lang);
    // 应用新的翻译
    applyTranslations();
  }
}

// 导出全局对象
window.i18next = i18next;
window.initI18n = initI18n;
window.changeLanguage = changeLanguage;
