// 语言包定义
const translations = {
  // 中文语言包
  "zh-CN": {
    // 导航
    "nav.home": "首页",
    "nav.docs": "文档",
    "nav.api": "API",
    "nav.demo": "演示",

    // 首页
    "hero.title": "Nexa框架",
    "hero.subtitle": "下一代P2P通信框架，让开发Web应用更简单、更高效",
    "hero.start": "开始使用",
    "hero.demo": "查看演示",
    "features.title": "核心特性",
    "feature.p2p.title": "P2P通信",
    "feature.p2p.desc":
      "基于WebRTC技术的点对点通信，无需中心服务器，降低延迟和成本。",
    "feature.api.title": "简洁API",
    "feature.api.desc": "直观易用的API设计，最小化学习成本，快速构建应用。",
    "feature.cross.title": "跨平台兼容",
    "feature.cross.desc":
      "支持各种现代浏览器和Node.js环境，一次编写，处处运行。",
    "quickstart.title": "快速上手",
    "server.side": "服务器端",
    "client.side": "客户端",
    copy: "复制",
    "why.title": "为什么选择Nexa?",
    "feature.performance.title": "高性能",
    "feature.performance.p1": "直接P2P通信，减少网络跳转，大幅降低延迟。",
    "feature.performance.p2":
      "支持多服务端+微服务集群并发，轻松应对高并发场景。",
    "feature.performance.p3":
      "无需购买云服务器，无需备案，无需SSL证书,无需域名,无需任何服务器和云服务,即开即用。",
    "feature.performance.p4":
      "Node.js框架 上手简单 学习成本极低 开发效率极高 开发体验极佳 无需任何服务器运维经验",
    "feature.performance.p5":
      "不需要任何不可知成本 你能看到这个网页 就代表你已经拥有一个服务器",
    "feature.performance.p6":
      "依赖于P2P节点 前后端分离 前后端可以独立开发 互不干扰 互不影响",
    "feature.performance.p7":
      "摆脱传统服务器运维 告别服务器被攻击 告别服务器被DDOS 告别服务器被CC 告别服务器被墙 告别服务器被封锁",
    "feature.performance.p8":
      "多节点集群 多节点负载均衡 多节点高可用 多节点高并发 多节点高稳定 多节点高安全",
    "feature.performance.p9":
      "一切皆服务 一切皆节点 一切皆集群 一切皆负载均衡 一切皆高可用 一切皆高并发 一切皆高稳定 一切皆高安全",
    "feature.security.title": "安全可靠",
    "feature.security.p1": "内置加密和认证机制，保障通信安全。",
    "feature.security.p2":
      "非对称加密 对称加密 国密加密 多种加密方式 多种加密算法 多种加密库 多种加密库版本 多种加密库版本选择",
    "feature.security.p3":
      "完全安全 完全可靠 完全可信 完全可控 完全可管理 完全可监控 完全可审计 完全可追溯",
    "feature.security.p4":
      "无追踪 无监控 无审计 无管理 严格认证 超越HTTPS/TLS/SSL 最强的安全保障",
    "feature.security.p5":
      "无后门 无漏洞 无风险 无威胁 无风险 无威胁 无风险 无威胁",
    "feature.extensible.title": "易于扩展",
    "feature.extensible.p1": "模块化设计，便于扩展和定制，满足各种应用场景。",
    "feature.extensible.p2":
      "下一代Web框架 下一代Web标准 下一代Web协议 下一代Web技术 下一代Web架构 下一代Web开发 下一代Web运维",
    "feature.extensible.p3":
      "高兼容性 高稳定性 高可靠性 高安全性 高可用性 高并发性 高稳定性 高可靠性 高安全性 高可用性 高并发性",
    "feature.extensible.p4":
      "高扩展性 高定制性 高灵活性 高可维护性 高可测试性 高可读性 高可复用性 高可重用性 高可移植性 高可升级性",
    "feature.extensible.p5":
      "维护简单 部署简单 安装简单 使用简单 学习简单 开发简单 运维简单 管理简单 监控简单 审计简单 追溯简单",
    "feature.extensible.p6":
      "由Nexa框架+PeerGate构建的P2P应用 可以轻松迁移到其他框架 如Express 如Koa 如Nest 如SpringBoot 如Django 如Flask 如Laravel 如Ruby on Rails 如ASP.NET 如PHP 如Node.js 如Python 如Java 如C# 如C++ 如C 如Golang 如Rust 如Swift 如Kotlin 如Spring",

    // 文档
    "docs.title": "文档中心",
    "docs.menu.intro": "框架介绍",
    "docs.menu.quickstart": "快速开始",
    "docs.menu.concepts": "核心概念",
    "docs.menu.examples": "示例项目",
    "docs.menu.advanced": "高级使用",

    // API
    "api.title": "API参考",
    "api.menu.client": "客户端API",
    "api.menu.server": "服务器API",
    "api.menu.examples": "使用示例",

    // 演示
    "demo.title": "功能演示",
    "demo.subtitle": "尝试与Nexa服务器进行实时交互，体验P2P通信的便捷和高效。",
    "demo.calculator.title": "计算器演示",
    "demo.calculator.desc":
      "通过Nexa框架实现的简单计算器功能，测试服务器通信。",
    "demo.calculator.num_a": "数字A",
    "demo.calculator.num_b": "数字B",
    "demo.calculator.operation": "操作",
    "demo.calculator.op.add": "加法",
    "demo.calculator.op.subtract": "减法",
    "demo.calculator.op.multiply": "乘法",
    "demo.calculator.op.divide": "除法",
    "demo.calculator.calculate": "计算",
    "demo.calculator.result_tip": '点击"计算"按钮查看结果',

    "demo.user.title": "用户API演示",
    "demo.user.desc": "测试用户信息查询API，展示Nexa框架的数据处理能力。",
    "demo.user.id": "用户ID",
    "demo.user.query": "查询",
    "demo.user.result_tip": '点击"查询"按钮获取用户信息',

    "demo.docs.title": "文档API演示",
    "demo.docs.desc": "从服务器获取文档内容，展示Nexa框架的内容管理能力。",
    "demo.docs.section": "文档部分",
    "demo.docs.get": "获取内容",
    "demo.docs.result_tip": '点击"获取内容"按钮查看文档信息',

    "demo.chat.title": "实时聊天演示",
    "demo.chat.desc": "体验Nexa框架的实时通信能力，无需传统服务器。",
    "demo.chat.name": "您的昵称",
    "demo.chat.message": "消息内容",
    "demo.chat.send": "发送",
    "demo.chat.join": "加入聊天",
    "demo.chat.room": "聊天室",

    "demo.file.title": "文件传输演示",
    "demo.file.desc": "通过Nexa框架传输文件，展示P2P大数据传输能力。",
    "demo.file.select": "选择文件",
    "demo.file.upload": "上传",
    "demo.file.download": "下载",
    "demo.file.list": "文件列表",
    "demo.file.name": "文件名",
    "demo.file.size": "大小",
    "demo.file.type": "类型",
    "demo.file.action": "操作",

    "demo.data.title": "数据可视化演示",
    "demo.data.desc": "展示Nexa框架处理和可视化复杂数据的能力。",
    "demo.data.generate": "生成数据",
    "demo.data.timerange": "时间范围",
    "demo.data.datapoints": "数据点数",
    "demo.data.refresh": "刷新",

    // 页脚
    "footer.desc": "下一代P2P通信框架，让Web应用开发更简单、更高效。",
    "footer.nav": "导航",
    "footer.resources": "资源",
    "footer.community": "社区",
    "footer.guide": "入门指南",
    "footer.reference": "API参考",
    "footer.examples": "示例项目",
    "footer.faq": "常见问题",
    "footer.github": "GitHub",
    "footer.discuss": "讨论区",
    "footer.feedback": "问题反馈",
    "footer.contribute": "贡献指南",
    "footer.copyright": "© 2025 Nexa框架. 保留所有权利。",

    // 语言选择
    language: "语言",
    "language.zh": "中文",
    "language.en": "英文",
    "language.ja": "日文",
  },

  // 英文语言包
  en: {
    // 导航
    "nav.home": "Home",
    "nav.docs": "Docs",
    "nav.api": "API",
    "nav.demo": "Demo",

    // 首页
    "hero.title": "Nexa Framework",
    "hero.subtitle":
      "Next-gen P2P communication framework for simpler, more efficient web app development",
    "hero.start": "Get Started",
    "hero.demo": "View Demos",
    "features.title": "Core Features",
    "feature.p2p.title": "P2P Communication",
    "feature.p2p.desc":
      "Point-to-point communication based on WebRTC technology, no central server needed, lower latency and cost.",
    "feature.api.title": "Simple API",
    "feature.api.desc":
      "Intuitive API design, minimizes learning curve and speeds up application development.",
    "feature.cross.title": "Cross-Platform",
    "feature.cross.desc":
      "Supports various modern browsers and Node.js environments, write once, run everywhere.",
    "quickstart.title": "Quick Start",
    "server.side": "Server Side",
    "client.side": "Client Side",
    copy: "Copy",
    "why.title": "Why Choose Nexa?",
    "feature.performance.title": "High Performance",
    "feature.performance.p1":
      "Direct P2P communication reduces network hops and significantly lowers latency.",
    "feature.performance.p2":
      "Supports multiple servers and microservice clusters, easily handling high concurrency scenarios.",
    "feature.performance.p3":
      "No need to purchase cloud servers, no registration required, no SSL certificate needed, no domain name, no server or cloud service required, ready to use immediately.",
    "feature.performance.p4":
      "Node.js framework with simple learning curve, high development efficiency, and excellent development experience without any server maintenance experience required.",
    "feature.performance.p5":
      "No unpredictable costs - if you can see this webpage, you already have a server.",
    "feature.performance.p6":
      "Based on P2P nodes with front-end and back-end separation, allowing independent development without interference.",
    "feature.performance.p7":
      "Free from traditional server maintenance, say goodbye to server attacks, DDOS, CC attacks, blockages, and restrictions.",
    "feature.performance.p8":
      "Multi-node cluster, multi-node load balancing, high availability, high concurrency, high stability, and high security.",
    "feature.performance.p9":
      "Everything as a service, everything as a node, everything as a cluster, everything with load balancing, high availability, concurrency, stability, and security.",
    "feature.security.title": "Secure & Reliable",
    "feature.security.p1":
      "Built-in encryption and authentication mechanisms to ensure communication security.",
    "feature.security.p2":
      "Asymmetric encryption, symmetric encryption, national cryptographic standards, multiple encryption methods, algorithms, libraries, and versions to choose from.",
    "feature.security.p3":
      "Completely secure, reliable, trustworthy, controllable, manageable, monitorable, auditable, and traceable.",
    "feature.security.p4":
      "No tracking, no monitoring, no auditing, no management, strict authentication, beyond HTTPS/TLS/SSL, the strongest security guarantee.",
    "feature.security.p5":
      "No backdoors, no vulnerabilities, no risks, no threats - completely secure.",
    "feature.extensible.title": "Easy to Extend",
    "feature.extensible.p1":
      "Modular design, easy to extend and customize to meet various application scenarios.",
    "feature.extensible.p2":
      "Next-generation web framework, standards, protocols, technologies, architecture, development, and operations.",
    "feature.extensible.p3":
      "High compatibility, stability, reliability, security, availability, concurrency, and stability.",
    "feature.extensible.p4":
      "High extensibility, customizability, flexibility, maintainability, testability, readability, reusability, portability, and upgradability.",
    "feature.extensible.p5":
      "Simple maintenance, deployment, installation, usage, learning, development, operations, management, monitoring, auditing, and tracing.",
    "feature.extensible.p6":
      "P2P applications built with Nexa Framework + PeerGate can be easily migrated to other frameworks such as Express, Koa, Nest, SpringBoot, Django, Flask, Laravel, Ruby on Rails, ASP.NET, PHP, Node.js, Python, Java, C#, C++, C, Golang, Rust, Swift, Kotlin, and Spring.",

    // 文档
    "docs.title": "Documentation",
    "docs.menu.intro": "Introduction",
    "docs.menu.quickstart": "Quick Start",
    "docs.menu.concepts": "Core Concepts",
    "docs.menu.examples": "Example Projects",
    "docs.menu.advanced": "Advanced Usage",

    // API
    "api.title": "API Reference",
    "api.menu.client": "Client API",
    "api.menu.server": "Server API",
    "api.menu.examples": "Examples",

    // 演示
    "demo.title": "Feature Demos",
    "demo.subtitle":
      "Interact with the Nexa server in real-time and experience the convenience and efficiency of P2P communication.",
    "demo.calculator.title": "Calculator Demo",
    "demo.calculator.desc":
      "A simple calculator function implemented through the Nexa framework to test server communication.",
    "demo.calculator.num_a": "Number A",
    "demo.calculator.num_b": "Number B",
    "demo.calculator.operation": "Operation",
    "demo.calculator.op.add": "Addition",
    "demo.calculator.op.subtract": "Subtraction",
    "demo.calculator.op.multiply": "Multiplication",
    "demo.calculator.op.divide": "Division",
    "demo.calculator.calculate": "Calculate",
    "demo.calculator.result_tip": 'Click "Calculate" to see the result',

    "demo.user.title": "User API Demo",
    "demo.user.desc":
      "Test the user information query API to showcase the data processing capabilities of the Nexa framework.",
    "demo.user.id": "User ID",
    "demo.user.query": "Query",
    "demo.user.result_tip": 'Click "Query" to get user information',

    "demo.docs.title": "Documentation API Demo",
    "demo.docs.desc":
      "Get document content from the server to showcase the content management capabilities of the Nexa framework.",
    "demo.docs.section": "Document Section",
    "demo.docs.get": "Get Content",
    "demo.docs.result_tip": 'Click "Get Content" to view document information',

    "demo.chat.title": "Real-time Chat Demo",
    "demo.chat.desc":
      "Experience the real-time communication capabilities of the Nexa framework without traditional servers.",
    "demo.chat.name": "Your Nickname",
    "demo.chat.message": "Message",
    "demo.chat.send": "Send",
    "demo.chat.join": "Join Chat",
    "demo.chat.room": "Chat Room",

    "demo.file.title": "File Transfer Demo",
    "demo.file.desc":
      "Transfer files through the Nexa framework, showcasing P2P large data transfer capabilities.",
    "demo.file.select": "Select File",
    "demo.file.upload": "Upload",
    "demo.file.download": "Download",
    "demo.file.list": "File List",
    "demo.file.name": "Filename",
    "demo.file.size": "Size",
    "demo.file.type": "Type",
    "demo.file.action": "Action",

    "demo.data.title": "Data Visualization Demo",
    "demo.data.desc":
      "Showcase the ability of the Nexa framework to process and visualize complex data.",
    "demo.data.generate": "Generate Data",
    "demo.data.timerange": "Time Range",
    "demo.data.datapoints": "Data Points",
    "demo.data.refresh": "Refresh",

    // 页脚
    "footer.desc":
      "Next-generation P2P communication framework for simpler, more efficient web application development.",
    "footer.nav": "Navigation",
    "footer.resources": "Resources",
    "footer.community": "Community",
    "footer.guide": "Getting Started",
    "footer.reference": "API Reference",
    "footer.examples": "Example Projects",
    "footer.faq": "FAQ",
    "footer.github": "GitHub",
    "footer.discuss": "Discussion",
    "footer.feedback": "Feedback",
    "footer.contribute": "Contribution Guide",
    "footer.copyright": "© 2025 Nexa Framework. All rights reserved.",

    // 语言选择
    language: "Language",
    "language.zh": "Chinese",
    "language.en": "English",
    "language.ja": "Japanese",
  },

  // 日文语言包
  ja: {
    // 导航
    "nav.home": "ホーム",
    "nav.docs": "ドキュメント",
    "nav.api": "API",
    "nav.demo": "デモ",

    // 首页
    "hero.title": "Nexaフレームワーク",
    "hero.subtitle":
      "次世代P2P通信フレームワーク、Webアプリ開発をより簡単で効率的に",
    "hero.start": "使い始める",
    "hero.demo": "デモを見る",
    "features.title": "主な特徴",
    "feature.p2p.title": "P2P通信",
    "feature.p2p.desc":
      "WebRTC技術に基づくポイントツーポイント通信、中央サーバー不要、低レイテンシと低コスト。",
    "feature.api.title": "シンプルなAPI",
    "feature.api.desc":
      "直感的なAPI設計、学習コストを最小限に抑え、アプリケーション開発を迅速化。",
    "feature.cross.title": "クロスプラットフォーム",
    "feature.cross.desc":
      "様々な最新ブラウザとNode.js環境をサポート、一度書けばどこでも実行可能。",
    "quickstart.title": "クイックスタート",
    "server.side": "サーバーサイド",
    "client.side": "クライアントサイド",
    copy: "コピー",
    "why.title": "なぜNexaを選ぶのか？",
    "feature.performance.title": "高性能",
    "feature.performance.p1":
      "直接P2P通信でネットワークホップを減らし、遅延を大幅に低減します。",
    "feature.performance.p2":
      "複数のサーバーとマイクロサービスクラスターをサポートし、高同時実行シナリオを簡単に処理します。",
    "feature.performance.p3":
      "クラウドサーバー、登録、SSL証明書、ドメイン名は不要で、すぐに使用できます。",
    "feature.performance.p4":
      "Node.jsフレームワークで学習コストが低く、開発効率が高く、サーバーメンテナンス経験なしでも優れた開発体験を提供します。",
    "feature.performance.p5":
      "予測不可能なコストはありません - このWebページを見ることができれば、すでにサーバーを持っています。",
    "feature.performance.p6":
      "P2Pノードに基づき、フロントエンドとバックエンドの分離により干渉なしに独立した開発が可能です。",
    "feature.performance.p7":
      "従来のサーバーメンテナンスから解放され、攻撃、DDoS、CC攻撃、ブロックなどのリスクがありません。",
    "feature.performance.p8":
      "マルチノードクラスター、負荷分散、高可用性、高同時実行性、高安定性、高セキュリティを実現します。",
    "feature.performance.p9":
      "すべてをサービスとして、ノードとして、クラスターとして提供し、負荷分散、可用性、同時実行性、安定性、セキュリティを確保します。",
    "feature.security.title": "安全で信頼性が高い",
    "feature.security.p1":
      "通信セキュリティを確保するための組み込み暗号化と認証メカニズムを提供します。",
    "feature.security.p2":
      "非対称暗号化、対称暗号化、国家暗号標準など、複数の暗号化方法、アルゴリズム、ライブラリ、バージョンを選択可能です。",
    "feature.security.p3":
      "完全に安全で、信頼性があり、管理可能、監視可能、監査可能、追跡可能なシステムです。",
    "feature.security.p4":
      "追跡なし、監視なし、監査なし、厳格な認証を提供し、HTTPS/TLS/SSLを超える最強のセキュリティ保証を実現します。",
    "feature.security.p5":
      "バックドア、脆弱性、リスク、脅威がない完全に安全なシステムです。",
    "feature.extensible.title": "拡張が容易",
    "feature.extensible.p1":
      "モジュール設計により、様々なアプリケーションシナリオに対応するための拡張とカスタマイズが容易です。",
    "feature.extensible.p2":
      "次世代Webフレームワーク、標準、プロトコル、技術、アーキテクチャ、開発、運用を提供します。",
    "feature.extensible.p3":
      "高い互換性、安定性、信頼性、セキュリティ、可用性、同時実行性を実現します。",
    "feature.extensible.p4":
      "高い拡張性、カスタマイズ性、柔軟性、保守性、テスト性、可読性、再利用性、移植性、アップグレード性を提供します。",
    "feature.extensible.p5":
      "メンテナンス、デプロイメント、インストール、使用、学習、開発、運用、管理、監視、監査、追跡が簡単です。",
    "feature.extensible.p6":
      "Nexaフレームワーク+PeerGateで構築されたP2Pアプリケーションは、Express、Koa、Nest、SpringBoot、Django、Flask、Laravel、Ruby on Rails、ASP.NET、PHP、Node.js、Python、Java、C#、C++、C、Golang、Rust、Swift、Kotlin、Springなどの他のフレームワークに簡単に移行できます。",

    // 文档
    "docs.title": "ドキュメントセンター",
    "docs.menu.intro": "フレームワークの紹介",
    "docs.menu.quickstart": "クイックスタート",
    "docs.menu.concepts": "核心概念",
    "docs.menu.examples": "サンプルプロジェクト",
    "docs.menu.advanced": "高度な使用法",

    // API
    "api.title": "APIリファレンス",
    "api.menu.client": "クライアントAPI",
    "api.menu.server": "サーバーAPI",
    "api.menu.examples": "使用例",

    // 演示
    "demo.title": "機能デモ",
    "demo.subtitle":
      "Nexaサーバーとリアルタイムに対話し、P2P通信の利便性と効率性を体験してください。",
    "demo.calculator.title": "計算機デモ",
    "demo.calculator.desc":
      "Nexaフレームワークを通じて実装されたシンプルな計算機能、サーバー通信をテスト。",
    "demo.calculator.num_a": "数値A",
    "demo.calculator.num_b": "数値B",
    "demo.calculator.operation": "操作",
    "demo.calculator.op.add": "足し算",
    "demo.calculator.op.subtract": "引き算",
    "demo.calculator.op.multiply": "掛け算",
    "demo.calculator.op.divide": "割り算",
    "demo.calculator.calculate": "計算する",
    "demo.calculator.result_tip": "「計算する」ボタンをクリックして結果を確認",

    "demo.user.title": "ユーザーAPIデモ",
    "demo.user.desc":
      "ユーザー情報クエリAPIをテストし、Nexaフレームワークのデータ処理能力を紹介。",
    "demo.user.id": "ユーザーID",
    "demo.user.query": "検索",
    "demo.user.result_tip": "「検索」ボタンをクリックしてユーザー情報を取得",

    "demo.docs.title": "ドキュメントAPIデモ",
    "demo.docs.desc":
      "サーバーからドキュメントコンテンツを取得し、Nexaフレームワークのコンテンツ管理能力を紹介。",
    "demo.docs.section": "ドキュメントセクション",
    "demo.docs.get": "コンテンツを取得",
    "demo.docs.result_tip":
      "「コンテンツを取得」ボタンをクリックしてドキュメント情報を表示",

    "demo.chat.title": "リアルタイムチャットデモ",
    "demo.chat.desc":
      "従来のサーバーなしで、Nexaフレームワークのリアルタイム通信機能を体験。",
    "demo.chat.name": "ニックネーム",
    "demo.chat.message": "メッセージ",
    "demo.chat.send": "送信",
    "demo.chat.join": "チャットに参加",
    "demo.chat.room": "チャットルーム",

    "demo.file.title": "ファイル転送デモ",
    "demo.file.desc":
      "Nexaフレームワークを通じてファイルを転送し、P2P大容量データ転送機能を紹介。",
    "demo.file.select": "ファイルを選択",
    "demo.file.upload": "アップロード",
    "demo.file.download": "ダウンロード",
    "demo.file.list": "ファイルリスト",
    "demo.file.name": "ファイル名",
    "demo.file.size": "サイズ",
    "demo.file.type": "タイプ",
    "demo.file.action": "操作",

    "demo.data.title": "データ可視化デモ",
    "demo.data.desc":
      "Nexaフレームワークの複雑なデータ処理と可視化能力を紹介。",
    "demo.data.generate": "データ生成",
    "demo.data.timerange": "時間範囲",
    "demo.data.datapoints": "データポイント",
    "demo.data.refresh": "更新",

    // 页脚
    "footer.desc":
      "次世代P2P通信フレームワーク、Webアプリケーション開発をより簡単で効率的に。",
    "footer.nav": "ナビゲーション",
    "footer.resources": "リソース",
    "footer.community": "コミュニティ",
    "footer.guide": "入門ガイド",
    "footer.reference": "APIリファレンス",
    "footer.examples": "サンプルプロジェクト",
    "footer.faq": "よくある質問",
    "footer.github": "GitHub",
    "footer.discuss": "ディスカッション",
    "footer.feedback": "フィードバック",
    "footer.contribute": "貢献ガイド",
    "footer.copyright": "© 2025 Nexaフレームワーク. 全著作権所有。",

    // 语言选择
    language: "言語",
    "language.zh": "中国語",
    "language.en": "英語",
    "language.ja": "日本語",
  },
};

// 当前语言
let currentLang = "zh-CN";

// 初始化语言
function initLanguage() {
  // 尝试从localStorage获取语言偏好
  const savedLang = localStorage.getItem("nexa-language");

  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  } else {
    // 获取浏览器语言
    const browserLang = navigator.language || navigator.userLanguage;

    // 简化语言匹配逻辑
    if (browserLang.startsWith("zh")) {
      currentLang = "zh-CN";
    } else if (browserLang.startsWith("ja")) {
      currentLang = "ja";
    } else {
      currentLang = "en"; // 默认英文
    }

    // 保存到localStorage
    localStorage.setItem("nexa-language", currentLang);
  }

  // 应用语言
  applyLanguage();
}

// 应用语言
function applyLanguage() {
  // 更新语言选择器状态
  document.querySelectorAll(".language-option").forEach((option) => {
    if (option.getAttribute("data-lang") === currentLang) {
      option.classList.add("active");
    } else {
      option.classList.remove("active");
    }
  });

  // 翻译所有带有data-i18n属性的元素
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      // 检查是否有HTML内容
      if (element.innerHTML.includes("<")) {
        // 保留HTML标签
        const placeholder = "{{content}}";
        const template = translations[currentLang][key];

        if (template.includes(placeholder)) {
          element.innerHTML = template.replace(placeholder, element.innerHTML);
        } else {
          element.innerHTML = template;
        }
      } else {
        // 纯文本直接替换
        element.textContent = translations[currentLang][key];
      }
    }
  });

  // 翻译表单元素的placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[currentLang][key]) {
      element.placeholder = translations[currentLang][key];
    }
  });

  // 翻译表单元素的value
  document.querySelectorAll("[data-i18n-value]").forEach((element) => {
    const key = element.getAttribute("data-i18n-value");
    if (translations[currentLang][key]) {
      element.value = translations[currentLang][key];
    }
  });
}

// 切换语言
function changeLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    localStorage.setItem("nexa-language", lang);
    applyLanguage();
  }
}

// 导出函数
export { initLanguage, changeLanguage, currentLang };
