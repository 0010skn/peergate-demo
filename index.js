const peergate = require("peergate-server");

// Create PeerGate server
const app = peergate({
  debug: true,
  peerId: "my-server-R7999999", // Optional: fixed server ID for testing
});

// Register route handler for /hello
app.seek("/hello", (seek, pom) => {
  console.log("Hello request received:", seek.body);

  // Send response
  pom.send({
    message: "Hello from PeerGate server!",
    timestamp: Date.now(),
    receivedData: seek.body,
  });
});

app.seek("/add", (seek, pom) => {
  const c = seek.body.a + seek.body.b;
  pom.send({
    result: c,
  });
});

// 文档数据
const docs = {
  introduction: {
    title: "Nexa框架介绍",
    content:
      "Nexa是一个基于PeerGate的现代Web框架，支持P2P通信，无需传统服务器即可构建强大的网络应用。本文档将帮助您快速上手Nexa框架，了解其核心概念和基本用法。",
    updated: "2023-03-21",
  },
  quickstart: {
    title: "快速开始",
    content:
      "要开始使用Nexa框架，首先需要安装相关依赖并初始化项目。您可以通过NPM或CDN方式引入Nexa客户端库。",
    steps: [
      "安装依赖: npm install peergate-server",
      "初始化服务器: 创建index.js并配置PeerGate服务",
      "启动服务: npm run dev",
      "创建客户端: 在HTML中引入Nexa客户端",
    ],
    updated: "2023-03-21",
  },
  features: [
    {
      title: "P2P通信",
      description: "基于WebRTC技术的点对点通信，无需中心服务器",
      icon: "network-wired",
    },
    {
      title: "简洁API",
      description: "直观易用的API设计，快速构建应用",
      icon: "code",
    },
    {
      title: "跨平台兼容",
      description: "支持各种现代浏览器和Node.js环境",
      icon: "laptop-code",
    },
  ],
};

// 文档API
app.seek("/docs/sections", (seek, pom) => {
  pom.send({
    sections: Object.keys(docs),
  });
});

app.seek("/docs/content", (seek, pom) => {
  const { section } = seek.body;

  if (!section || !docs[section]) {
    pom.send({
      error: "部分未找到",
      status: 404,
    });
    return;
  }

  pom.send({
    content: docs[section],
  });
});

// 特性API
app.seek("/features", (seek, pom) => {
  pom.send({
    features: docs.features,
  });
});

// 计算器API示例
app.seek("/calculator/add", (seek, pom) => {
  const { a, b } = seek.body;
  const result = Number(a) + Number(b);

  pom.send({
    operation: "加法",
    a,
    b,
    result,
    timestamp: Date.now(),
  });
});

app.seek("/calculator/subtract", (seek, pom) => {
  const { a, b } = seek.body;
  const result = Number(a) - Number(b);

  pom.send({
    operation: "减法",
    a,
    b,
    result,
    timestamp: Date.now(),
  });
});

app.seek("/calculator/multiply", (seek, pom) => {
  const { a, b } = seek.body;
  const result = Number(a) * Number(b);

  pom.send({
    operation: "乘法",
    a,
    b,
    result,
    timestamp: Date.now(),
  });
});

app.seek("/calculator/divide", (seek, pom) => {
  const { a, b } = seek.body;

  if (Number(b) === 0) {
    pom.send({
      error: "除数不能为零",
      status: 400,
    });
    return;
  }

  const result = Number(a) / Number(b);

  pom.send({
    operation: "除法",
    a,
    b,
    result,
    timestamp: Date.now(),
  });
});

// 用户API示例
const users = [
  { id: 1, name: "张三", email: "zhangsan@example.com", role: "admin" },
  { id: 2, name: "李四", email: "lisi@example.com", role: "user" },
  { id: 3, name: "王五", email: "wangwu@example.com", role: "user" },
];

app.seek("/users/list", (seek, pom) => {
  pom.send({
    users: users.map(({ id, name, role }) => ({ id, name, role })),
  });
});

app.seek("/users/detail", (seek, pom) => {
  const { id } = seek.body;
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    pom.send({
      error: "用户未找到",
      status: 404,
    });
    return;
  }

  pom.send({
    user,
  });
});

// 聊天演示API
const chatMessages = [];
const chatUsers = [];

app.seek("/chat/join", (seek, pom) => {
  const { name } = seek.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    pom.send({
      error: "昵称不能为空",
      status: 400,
    });
    return;
  }

  const user = {
    id: Date.now().toString(),
    name: name.trim(),
    joinTime: Date.now(),
  };

  chatUsers.push(user);

  // 添加系统消息
  chatMessages.push({
    id: Date.now().toString(),
    type: "system",
    content: `${user.name} 加入了聊天室`,
    timestamp: Date.now(),
  });

  pom.send({
    success: true,
    user,
    messages: chatMessages.slice(-50), // 只返回最近50条消息
  });
});

app.seek("/chat/messages", (seek, pom) => {
  const { since } = seek.body;
  let messages;

  if (since) {
    messages = chatMessages.filter((msg) => msg.timestamp > since);
  } else {
    messages = chatMessages.slice(-50); // 只返回最近50条消息
  }

  pom.send({
    messages,
  });
});

app.seek("/chat/send", (seek, pom) => {
  const { userId, content } = seek.body;

  if (!content || typeof content !== "string" || content.trim() === "") {
    pom.send({
      error: "消息内容不能为空",
      status: 400,
    });
    return;
  }

  const user = chatUsers.find((u) => u.id === userId);

  if (!user) {
    pom.send({
      error: "用户未找到，请先加入聊天室",
      status: 404,
    });
    return;
  }

  const message = {
    id: Date.now().toString(),
    userId,
    userName: user.name,
    type: "message",
    content: content.trim(),
    timestamp: Date.now(),
  };

  chatMessages.push(message);

  // 如果消息太多，删除旧消息
  if (chatMessages.length > 1000) {
    chatMessages.splice(0, chatMessages.length - 1000);
  }

  pom.send({
    success: true,
    message,
  });
});

// 文件传输演示API
const files = [];

app.seek("/files/list", (seek, pom) => {
  pom.send({
    files,
  });
});

app.seek("/files/upload", (seek, pom) => {
  const { name, type, size, content } = seek.body;

  if (!name || !type || !size || !content) {
    pom.send({
      error: "文件信息不完整",
      status: 400,
    });
    return;
  }

  // 在实际应用中，content应该是文件的二进制数据
  // 这里为了演示，我们简化处理
  const file = {
    id: Date.now().toString(),
    name,
    type,
    size,
    uploadTime: Date.now(),
    // 在实际应用中，这里会存储文件或文件引用
    // 这里我们只存储一个标识符
    contentId: `file-${Date.now()}`,
  };

  files.push(file);

  pom.send({
    success: true,
    file,
  });
});

app.seek("/files/download", (seek, pom) => {
  const { id } = seek.body;

  const file = files.find((f) => f.id === id);

  if (!file) {
    pom.send({
      error: "文件未找到",
      status: 404,
    });
    return;
  }

  // 在实际应用中，这里会返回文件的二进制数据
  // 这里为了演示，我们返回一个模拟数据
  pom.send({
    success: true,
    file,
    content: `This is the content of file ${file.name}`,
  });
});

// 数据可视化演示API
app.seek("/data/chart", (seek, pom) => {
  const { type, range, points } = seek.body;

  // 默认值
  const chartType = type || "line";
  const timeRange = range || 30; // 天数
  const dataPoints = points || 50;

  // 生成模拟数据
  const data = generateChartData(chartType, timeRange, dataPoints);

  pom.send({
    success: true,
    chartType,
    data,
  });
});

// 生成模拟图表数据
function generateChartData(type, range, points) {
  const now = Date.now();
  const data = [];

  // 每个数据点之间的时间间隔
  const interval = (range * 24 * 60 * 60 * 1000) / points;

  for (let i = 0; i < points; i++) {
    const timestamp = now - (points - i - 1) * interval;

    if (type === "line") {
      // 线性图表数据
      data.push({
        timestamp,
        value: Math.sin(i / 5) * 50 + 50 + Math.random() * 10,
      });
    } else if (type === "bar") {
      // 柱状图数据
      data.push({
        timestamp,
        value: Math.floor(Math.random() * 100),
      });
    } else if (type === "pie") {
      // 饼图数据 - 这里我们只生成一组数据
      if (i === 0) {
        data.push([
          { label: "类别A", value: Math.floor(Math.random() * 30 + 10) },
          { label: "类别B", value: Math.floor(Math.random() * 30 + 10) },
          { label: "类别C", value: Math.floor(Math.random() * 30 + 10) },
          { label: "类别D", value: Math.floor(Math.random() * 30 + 10) },
          { label: "类别E", value: Math.floor(Math.random() * 30 + 10) },
        ]);
      }
      break;
    }
  }

  return data;
}

// Initialize server
app
  .init()
  .then((peerId) => {
    console.log(`Server started with PeerID: ${peerId}`);
  })
  .catch((err) => {
    console.error("Server startup failed:", err);
  });
