<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="20" fill="#007BFF"/>
  <path d="M30 70L50 30L70 70" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="50" cy="50" r="30" stroke="white" stroke-width="4" stroke-dasharray="4 4"/>
  <circle cx="50" cy="50" r="40" stroke="white" stroke-width="2" stroke-dasharray="2 2"/>
</svg>

<img src="https://visitor-badge.laobi.icu/badge?page_id=0010skn.peergate-demo" alt="访问量统计">
<img src="https://img.shields.io/badge/Nexa-2.0.14-blue" alt="Nexa 版本">
<img src="https://img.shields.io/badge/PeerGate-2.0.13-green" alt="PeerGate 版本">

<img src="https://img.shields.io/github/stars/0010skn/peergate-demo?style=social" alt="Star 统计">
<img src="https://img.shields.io/github/forks/0010skn/peergate-demo?style=social" alt="Fork 统计">
<img src="https://img.shields.io/github/issues/0010skn/peergate-demo?style=social" alt="Issues 统计">

# Nexa 框架

[Nexa 网站](https://0010skn.github.io/peergate-demo/view/)

[Nexa website](https://0010skn.github.io/peergate-demo/view/)

[Nexa github](https://github.com/0010skn/peergate-demo)

[Server npm](https://www.npmjs.com/package/peergate-server)

[Nexa npm](https://www.npmjs.com/package/peergate-nexa)

Nexa 是一个基于 PeerGate 的 P2P 通信框架，使您能够构建无需传统服务器的 Web 应用程序。

## 快速开始

按照以下步骤运行这个项目：

1. **克隆仓库**

```bash
git clone
```

2. **安装依赖**

```bash
pnpm install
```

3. **启动服务器**

```bash
pnpm run dev
```

4. **打开文档网站**
   在浏览器中打开 `view/index.html` 文件，体验 Nexa 框架的强大功能。

## 项目结构

```
.
├── index.js          # Nexa服务器入口文件
├── package.json      # 项目配置文件
├── view/             # 前端文件目录
│   ├── index.html    # 主页HTML
│   ├── assets/       # 图像和静态资源
│   ├── css/          # 样式文件
│   └── js/           # JavaScript文件
└── README.md         # 项目说明文件
```

## API 演示

文档网站提供以下 API 演示：

- **计算器 API**：演示基本的数学运算功能
- **用户 API**：展示用户数据查询功能
- **文档 API**：从服务器获取文档内容

## 技术栈

- **后端**：基于 PeerGate 的 P2P 服务器
- **前端**：HTML5 + CSS3 + JavaScript
- **样式**：自定义 CSS，现代 iOS 风格 UI
- **代码高亮**：PrismJS
- **图标**：Font Awesome

## 贡献指南

欢迎为这个项目做出贡献！请遵循以下步骤：

1. Fork 这个仓库
2. 创建您的功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件。
