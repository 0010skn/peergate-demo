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

# PeerGate 路由组管理器

这是一个基于 PeerGate 的服务端实现，提供了路由组管理功能，可用于客户端的负载均衡和路由分配。

## 核心功能

1. 客户端可以注册到特定路由和组
2. 支持按组查询连接的客户端
3. 提供多种负载均衡策略选择客户端
4. 自动清理不活跃的客户端
5. 记录客户端活动状态和请求统计

## 路由组管理器 API

通过 `/oo` 路由可以访问路由组管理器的所有功能。所有请求都需要通过 `action` 参数指定操作类型。

### 1. 注册客户端到路由组

```javascript
// 请求示例
{
  "action": "register",
  "clientId": "client-123",
  "route": "/api/users",
  "group": "user-service"
}

// 响应示例
{
  "success": true,
  "action": "register",
  "clientId": "client-123",
  "route": "/api/users",
  "group": "user-service",
  "timestamp": 1629123456789
}
```

### 2. 获取组内所有客户端

```javascript
// 请求示例
{
  "action": "get-clients",
  "group": "user-service"
}

// 响应示例
{
  "success": true,
  "action": "get-clients",
  "group": "user-service",
  "clients": ["client-123", "client-456"],
  "count": 2,
  "timestamp": 1629123456789
}
```

### 3. 从组中选择一个客户端

```javascript
// 请求示例
{
  "action": "select-client",
  "group": "user-service",
  "strategy": "random" // 可选值: random, round-robin, least-active
}

// 响应示例
{
  "success": true,
  "action": "select-client",
  "group": "user-service",
  "clientId": "client-123",
  "strategy": "random",
  "timestamp": 1629123456789
}
```

### 4. 根据路由选择客户端

```javascript
// 请求示例
{
  "action": "get-route-client",
  "route": "/api/users",
  "strategy": "round-robin" // 可选
}

// 响应示例
{
  "success": true,
  "action": "get-route-client",
  "route": "/api/users",
  "clientId": "client-123",
  "strategy": "round-robin",
  "timestamp": 1629123456789
}
```

### 5. 客户端心跳更新

```javascript
// 请求示例
{
  "action": "heartbeat",
  "clientId": "client-123"
}

// 响应示例
{
  "success": true,
  "action": "heartbeat",
  "clientId": "client-123",
  "timestamp": 1629123456789
}
```

### 6. 客户端断开连接

```javascript
// 请求示例
{
  "action": "disconnect",
  "clientId": "client-123"
}

// 响应示例
{
  "success": true,
  "action": "disconnect",
  "clientId": "client-123",
  "timestamp": 1629123456789
}
```

### 7. 获取所有组的统计信息

```javascript
// 请求示例
{
  "action": "stats"
}

// 响应示例
{
  "success": true,
  "action": "stats",
  "stats": {
    "user-service": {
      "clientCount": 2,
      "requestCount": 10,
      "clients": ["client-123", "client-456"]
    },
    "auth-service": {
      "clientCount": 1,
      "requestCount": 5,
      "clients": ["client-789"]
    }
  },
  "timestamp": 1629123456789
}
```

## 负载均衡策略

系统支持以下几种负载均衡策略：

1. `random` - 随机选择组内的一个客户端（默认）
2. `round-robin` - 轮询方式选择客户端
3. `least-active` - 选择最近最不活跃的客户端

## 自动清理机制

系统会自动清理长时间（默认 30 分钟）不活跃的客户端，以保持系统资源的有效利用。客户端可以通过定期发送心跳请求来保持活跃状态。

## 使用示例

1. 客户端注册到路由组
2. 客户端定期发送心跳保持活跃
3. 其他客户端可以通过组或路由查询可用的服务客户端
4. 系统自动进行负载均衡，分配合适的客户端处理请求

# Nexa 框架

[Nexa website](https://0010skn.github.io/peergate-demo/view/)

[Server npm](https://www.npmjs.com/package/peergate-server)

[Nexa npm](https://www.npmjs.com/package/peergate-nexa)

```bash
Server startup failed: Error: Failed to launch the browser process!
/root/.cache/puppeteer/chrome/linux-1108766/chrome-linux/chrome: error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory
TROUBLESHOOTING: https://pptr.dev/troubleshooting
```

Linux 解决办法：

```bash
apt-get update
apt-get install -y \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libxkbcommon0 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libgbm1 \
    libgtk-3-0 \
    libpango-1.0-0 \
    libasound2
```

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

# PeerGate 路由组管理器

这是一个基于 PeerGate 的服务端实现，提供了路由组管理功能，可用于客户端的负载均衡和路由分配。

## 核心功能

1. 客户端可以注册到特定路由和组
2. 支持按组查询连接的客户端
3. 提供多种负载均衡策略选择客户端
4. 自动清理不活跃的客户端
5. 记录客户端活动状态和请求统计

## 路由组管理器 API

通过 `/oo` 路由可以访问路由组管理器的所有功能。所有请求都需要通过 `action` 参数指定操作类型。

### 1. 注册客户端到路由组

```javascript
// 请求示例
{
  "action": "register",
  "clientId": "client-123",
  "route": "/api/users",
  "group": "user-service"
}

// 响应示例
{
  "success": true,
  "action": "register",
  "clientId": "client-123",
  "route": "/api/users",
  "group": "user-service",
  "timestamp": 1629123456789
}
```

### 2. 获取组内所有客户端

```javascript
// 请求示例
{
  "action": "get-clients",
  "group": "user-service"
}

// 响应示例
{
  "success": true,
  "action": "get-clients",
  "group": "user-service",
  "clients": ["client-123", "client-456"],
  "count": 2,
  "timestamp": 1629123456789
}
```

### 3. 从组中选择一个客户端

```javascript
// 请求示例
{
  "action": "select-client",
  "group": "user-service",
  "strategy": "random" // 可选值: random, round-robin, least-active
}

// 响应示例
{
  "success": true,
  "action": "select-client",
  "group": "user-service",
  "clientId": "client-123",
  "strategy": "random",
  "timestamp": 1629123456789
}
```

### 4. 根据路由选择客户端

```javascript
// 请求示例
{
  "action": "get-route-client",
  "route": "/api/users",
  "strategy": "round-robin" // 可选
}

// 响应示例
{
  "success": true,
  "action": "get-route-client",
  "route": "/api/users",
  "clientId": "client-123",
  "strategy": "round-robin",
  "timestamp": 1629123456789
}
```

### 5. 客户端心跳更新

```javascript
// 请求示例
{
  "action": "heartbeat",
  "clientId": "client-123"
}

// 响应示例
{
  "success": true,
  "action": "heartbeat",
  "clientId": "client-123",
  "timestamp": 1629123456789
}
```

### 6. 客户端断开连接

```javascript
// 请求示例
{
  "action": "disconnect",
  "clientId": "client-123"
}

// 响应示例
{
  "success": true,
  "action": "disconnect",
  "clientId": "client-123",
  "timestamp": 1629123456789
}
```

### 7. 获取所有组的统计信息

```javascript
// 请求示例
{
  "action": "stats"
}

// 响应示例
{
  "success": true,
  "action": "stats",
  "stats": {
    "user-service": {
      "clientCount": 2,
      "requestCount": 10,
      "clients": ["client-123", "client-456"]
    },
    "auth-service": {
      "clientCount": 1,
      "requestCount": 5,
      "clients": ["client-789"]
    }
  },
  "timestamp": 1629123456789
}
```

## 负载均衡策略

系统支持以下几种负载均衡策略：

1. `random` - 随机选择组内的一个客户端（默认）
2. `round-robin` - 轮询方式选择客户端
3. `least-active` - 选择最近最不活跃的客户端

## 自动清理机制

系统会自动清理长时间（默认 30 分钟）不活跃的客户端，以保持系统资源的有效利用。客户端可以通过定期发送心跳请求来保持活跃状态。

## 使用示例

1. 客户端注册到路由组
2. 客户端定期发送心跳保持活跃
3. 其他客户端可以通过组或路由查询可用的服务客户端
4. 系统自动进行负载均衡，分配合适的客户端处理请求

# Nexa 框架

[Nexa website](https://0010skn.github.io/peergate-demo/view/)

[Server npm](https://www.npmjs.com/package/peergate-server)

[Nexa npm](https://www.npmjs.com/package/peergate-nexa)

```bash
Server startup failed: Error: Failed to launch the browser process!
/root/.cache/puppeteer/chrome/linux-1108766/chrome-linux/chrome: error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory
TROUBLESHOOTING: https://pptr.dev/troubleshooting
```

Linux 解决办法：

```bash
apt-get update
apt-get install -y \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libxkbcommon0 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libgbm1 \
    libgtk-3-0 \
    libpango-1.0-0 \
    libasound2
```

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
