// 导入Nexa客户端
import Nexa from "https://unpkg.com/peergate-nexa/index.js";

// 导入多语言模块
import { initLanguage, changeLanguage } from "./i18n.js";
// 初始化Nexa客户端
let nexaInitialized = false;
let currentDemoResult = null;

// DOM元素引用
document.addEventListener("DOMContentLoaded", () => {
  // 初始化动画
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });

  // 代码高亮
  if (typeof Prism !== "undefined") {
    Prism.highlightAll();
  }

  // 复制代码按钮
  const copyButtons = document.querySelectorAll(".copy-btn");
  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const codeBlock = btn.parentElement.nextElementSibling;
      const code = codeBlock.textContent;

      navigator.clipboard
        .writeText(code)
        .then(() => {
          const originalText = btn.textContent;
          btn.textContent = "已复制!";
          setTimeout(() => {
            btn.textContent = originalText;
          }, 2000);
        })
        .catch((err) => {
          console.error("复制失败:", err);
        });
    });
  });

  // API演示
  setupDemoForms();

  // 初始化语言
  initLanguage();

  // 初始化演示功能
  initDemos();

  // 注册语言切换事件
  initLanguageSelector();

  // 初始化复制按钮功能
  initCopyButtons();
});

// 设置API演示表单
async function setupDemoForms() {
  const demoForms = document.querySelectorAll(".demo-form");
  if (!nexaInitialized) {
    try {
      await Nexa.init("my-server-R7999999");
      nexaInitialized = true;
    } catch (error) {
      console.error("连接错误:", error);
    }
  }
  demoForms.forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const endpoint = form.getAttribute("data-endpoint");
      const resultContainer = document.querySelector(
        form.getAttribute("data-result")
      );

      if (!nexaInitialized) {
        try {
          await Nexa.init("my-server-R7999999");
          nexaInitialized = true;
        } catch (error) {
          resultContainer.textContent = `连接错误: ${error.message}`;
          return;
        }
      }

      // 构建请求数据
      const formData = new FormData(form);
      const data = {};
      for (const [key, value] of formData.entries()) {
        data[key] = isNaN(value) ? value : Number(value);
      }

      // 显示加载状态
      resultContainer.innerHTML = '<div class="loading">请求中...</div>';

      try {
        // 发送请求
        const response = await Nexa.seek(endpoint, data);

        // 显示响应
        resultContainer.innerHTML = `<pre><code class="language-json">${JSON.stringify(
          response,
          null,
          2
        )}</code></pre>`;

        // 高亮代码
        if (typeof Prism !== "undefined") {
          Prism.highlightElement(resultContainer.querySelector("code"));
        }

        // 存储结果以便可能的后续使用
        currentDemoResult = response;
      } catch (error) {
        resultContainer.innerHTML = `<div class="error">错误: ${error.message}</div>`;
      }
    });
  });
}

// 导航切换逻辑
function switchTab(tabId) {
  // 隐藏所有内容
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => {
    content.style.display = "none";
  });

  // 移除所有激活状态
  const tabs = document.querySelectorAll(".nav-link");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // 显示选中的内容并激活对应选项卡
  document.getElementById(tabId).style.display = "block";
  document.querySelector(`[data-tab="${tabId}"]`).classList.add("active");
}

// 初始化语言选择器
function initLanguageSelector() {
  document.querySelectorAll(".language-option").forEach((option) => {
    option.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = option.getAttribute("data-lang");
      changeLanguage(lang);
    });
  });
}

// 初始化演示功能
function initDemos() {
  // 初始化服务器连接
  initServerConnection()
    .then(() => {
      console.log("服务器连接成功");

      // 初始化计算器演示
      initCalculatorDemo();

      // 初始化用户API演示
      initUserApiDemo();

      // 初始化文档API演示
      initDocsApiDemo();

      // 初始化聊天演示
      initChatDemo();

      // 初始化文件传输演示
      initFileTransferDemo();

      // 初始化数据可视化演示
      initDataVisualizationDemo();
    })
    .catch((err) => {
      console.error("服务器连接失败:", err);
      showConnectionError();
    });
}

// 初始化服务器连接
async function initServerConnection() {
  // 在实际应用中，这里会通过PeerJS连接到服务器
  // 为简化示例，我们使用模拟的连接

  // 模拟1秒的连接时间
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // 将连接对象存储在全局变量中
  window.serverConnection = {
    connected: true,

    // 发送请求到服务器
    async send(endpoint, data = {}) {
      console.log(`send request to ${endpoint}`, data);

      // 模拟网络延迟
      await new Promise((resolve) => setTimeout(resolve, 500));

      // 根据端点返回模拟数据
      return mockApiResponse(endpoint, data);
    },
  };

  return window.serverConnection;
}

// 显示连接错误
function showConnectionError() {
  const errorDiv = document.createElement("div");
  errorDiv.className = "connection-error";
  errorDiv.innerHTML = `
    <div class="error-content">
      <i class="fas fa-exclamation-triangle"></i>
      <h3>连接错误</h3>
      <p>无法连接到Nexa服务器，请检查网络连接并刷新页面重试。</p>
    </div>
  `;
  document.body.appendChild(errorDiv);
}

// 初始化计算器演示
function initCalculatorDemo() {
  const calculatorForm = document.querySelector(
    '[data-endpoint="/calculator/add"]'
  );
  const resultContainer = document.querySelector("#calculator-result code");
  const operationSelect = document.getElementById("calculator-operation");

  if (!calculatorForm) return;

  calculatorForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const a = this.querySelector('[name="a"]').value;
    const b = this.querySelector('[name="b"]').value;
    const endpoint = operationSelect.value;

    try {
      const result = await window.serverConnection.send(endpoint, { a, b });
      resultContainer.textContent = JSON.stringify(result, null, 2);
      Prism.highlightElement(resultContainer);
    } catch (err) {
      resultContainer.textContent = JSON.stringify(
        { error: err.message },
        null,
        2
      );
      Prism.highlightElement(resultContainer);
    }
  });
}

// 初始化用户API演示
function initUserApiDemo() {
  const userForm = document.querySelector('[data-endpoint="/users/detail"]');
  const resultContainer = document.querySelector("#user-result code");

  if (!userForm) return;

  userForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const id = this.querySelector('[name="id"]').value;

    try {
      const result = await window.serverConnection.send("/users/detail", {
        id,
      });
      resultContainer.textContent = JSON.stringify(result, null, 2);
      Prism.highlightElement(resultContainer);
    } catch (err) {
      resultContainer.textContent = JSON.stringify(
        { error: err.message },
        null,
        2
      );
      Prism.highlightElement(resultContainer);
    }
  });
}

// 初始化文档API演示
function initDocsApiDemo() {
  const docsForm = document.querySelector('[data-endpoint="/docs/content"]');
  const resultContainer = document.querySelector("#docs-result code");

  if (!docsForm) return;

  docsForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const section = this.querySelector('[name="section"]').value;

    try {
      const result = await window.serverConnection.send("/docs/content", {
        section,
      });
      resultContainer.textContent = JSON.stringify(result, null, 2);
      Prism.highlightElement(resultContainer);
    } catch (err) {
      resultContainer.textContent = JSON.stringify(
        { error: err.message },
        null,
        2
      );
      Prism.highlightElement(resultContainer);
    }
  });
}

// 初始化聊天演示
function initChatDemo() {
  const chatNameInput = document.getElementById("chat-name");
  const chatJoinBtn = document.getElementById("chat-join-btn");
  const chatJoinDiv = document.querySelector(".chat-join");
  const chatRoomDiv = document.querySelector(".chat-room");
  const chatMessagesDiv = document.getElementById("chat-messages");
  const chatMessageInput = document.getElementById("chat-message");
  const chatSendBtn = document.getElementById("chat-send-btn");

  if (!chatJoinBtn) return;

  let userId = null;
  let lastMessageTime = 0;
  let messagePollingInterval;

  // 加入聊天
  chatJoinBtn.addEventListener("click", async () => {
    const name = chatNameInput.value.trim();
    if (!name) {
      alert("请输入昵称");
      return;
    }

    try {
      const result = await window.serverConnection.send("/chat/join", { name });
      userId = result.user.id;

      // 显示聊天室
      chatJoinDiv.style.display = "none";
      chatRoomDiv.style.display = "block";

      // 渲染历史消息
      renderChatMessages(result.messages);

      // 开始轮询新消息
      lastMessageTime = Date.now();
      messagePollingInterval = setInterval(pollNewMessages, 2000);
    } catch (err) {
      alert("加入聊天失败: " + err.message);
    }
  });

  // 发送消息
  chatSendBtn.addEventListener("click", sendMessage);
  chatMessageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  async function sendMessage() {
    const content = chatMessageInput.value.trim();
    if (!content || !userId) return;

    try {
      await window.serverConnection.send("/chat/send", { userId, content });
      chatMessageInput.value = "";
      await pollNewMessages(); // 立即获取新消息
    } catch (err) {
      console.error("发送消息失败:", err);
    }
  }

  // 轮询新消息
  async function pollNewMessages() {
    try {
      const result = await window.serverConnection.send("/chat/messages", {
        since: lastMessageTime,
      });
      if (result.messages && result.messages.length > 0) {
        renderChatMessages(result.messages, true);
        lastMessageTime = result.messages[result.messages.length - 1].timestamp;
      }
    } catch (err) {
      console.error("获取新消息失败:", err);
    }
  }

  // 渲染聊天消息
  function renderChatMessages(messages, append = false) {
    if (!messages || messages.length === 0) return;

    if (!append) {
      chatMessagesDiv.innerHTML = "";
    }

    messages.forEach((msg) => {
      const messageDiv = document.createElement("div");
      messageDiv.className = `chat-message ${msg.type}`;

      const time = new Date(msg.timestamp).toLocaleTimeString();

      if (msg.type === "system") {
        messageDiv.innerHTML = `<div class="message-content system">${msg.content}</div>
                               <div class="message-time">${time}</div>`;
      } else {
        messageDiv.innerHTML = `<div class="message-header">
                                 <span class="message-sender">${msg.userName}</span>
                                 <span class="message-time">${time}</span>
                               </div>
                               <div class="message-content">${msg.content}</div>`;
      }

      chatMessagesDiv.appendChild(messageDiv);
    });

    // 滚动到底部
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
  }
}

// 初始化文件传输演示
function initFileTransferDemo() {
  const fileInput = document.getElementById("file-input");
  const fileNameSpan = document.getElementById("file-name");
  const fileUploadBtn = document.getElementById("file-upload-btn");
  const fileListBody = document.getElementById("file-list-body");

  if (!fileInput) return;

  // 选择文件时更新文件名
  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      fileNameSpan.textContent = file.name;
    } else {
      fileNameSpan.textContent = "未选择文件";
    }
  });

  // 上传文件
  fileUploadBtn.addEventListener("click", async () => {
    if (fileInput.files.length === 0) {
      alert("请选择要上传的文件");
      return;
    }

    const file = fileInput.files[0];

    try {
      // 在实际应用中，这里会读取文件并发送数据
      // 这里我们只发送文件信息
      const result = await window.serverConnection.send("/files/upload", {
        name: file.name,
        type: file.type,
        size: file.size,
        content: "simulated-file-content", // 实际应用中这里是文件内容
      });

      alert("文件上传成功");
      fileInput.value = "";
      fileNameSpan.textContent = "未选择文件";

      // 刷新文件列表
      loadFileList();
    } catch (err) {
      alert("文件上传失败: " + err.message);
    }
  });

  // 加载文件列表
  async function loadFileList() {
    try {
      const result = await window.serverConnection.send("/files/list");

      fileListBody.innerHTML = "";

      if (result.files && result.files.length > 0) {
        result.files.forEach((file) => {
          const tr = document.createElement("tr");

          const uploadTime = new Date(file.uploadTime).toLocaleString();
          const size = formatFileSize(file.size);

          tr.innerHTML = `
            <td>${file.name}</td>
            <td>${size}</td>
            <td>${file.type || "未知"}</td>
            <td>
              <button class="btn btn-small download-btn" data-file-id="${
                file.id
              }">
                <i class="fas fa-download"></i> 下载
              </button>
            </td>
          `;

          fileListBody.appendChild(tr);
        });

        // 绑定下载按钮事件
        document.querySelectorAll(".download-btn").forEach((btn) => {
          btn.addEventListener("click", async () => {
            const fileId = btn.getAttribute("data-file-id");
            try {
              const result = await window.serverConnection.send(
                "/files/download",
                { id: fileId }
              );
              alert(`文件下载成功: ${result.file.name}`);
            } catch (err) {
              alert("文件下载失败: " + err.message);
            }
          });
        });
      } else {
        fileListBody.innerHTML = '<tr><td colspan="4">暂无文件</td></tr>';
      }
    } catch (err) {
      console.error("加载文件列表失败:", err);
      fileListBody.innerHTML = '<tr><td colspan="4">加载文件列表失败</td></tr>';
    }
  }

  // 格式化文件大小
  function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
    if (bytes < 1024 * 1024 * 1024)
      return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
  }

  // 加载初始文件列表
  loadFileList();
}

// 初始化数据可视化演示
function initDataVisualizationDemo() {
  const timerangeSelect = document.getElementById("data-timerange");
  const pointsSelect = document.getElementById("data-points");
  const refreshBtn = document.getElementById("data-refresh-btn");
  const chartCanvas = document.getElementById("data-chart");

  if (!refreshBtn) return;

  // 检查是否有Chart.js库
  if (typeof Chart === "undefined") {
    // 如果没有，动态加载Chart.js
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.onload = () => initChart();
    document.head.appendChild(script);
  } else {
    initChart();
  }

  // 初始化图表
  let chart; // 全局变量，存储图表实例

  function initChart() {
    loadChartData();

    refreshBtn.addEventListener("click", loadChartData);
  }

  // 加载图表数据
  async function loadChartData() {
    try {
      const range = timerangeSelect.value;
      const points = pointsSelect.value;

      const result = await window.serverConnection.send("/data/chart", {
        type: "line",
        range,
        points,
      });

      if (result.data) {
        renderChart(result.data);
      }
    } catch (err) {
      console.error("加载图表数据失败:", err);
    }
  }

  // 渲染图表
  function renderChart(data) {
    if (!chartCanvas) return;

    const ctx = chartCanvas.getContext("2d");

    // 如果图表已存在，销毁它
    if (chart) {
      chart.destroy();
    }

    // 格式化数据
    const labels = data.map((item) => {
      const date = new Date(item.timestamp);
      return date.toLocaleDateString();
    });

    const values = data.map((item) => item.value);

    // 创建新图表
    chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "数据值",
            data: values,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }
}

// 初始化复制按钮功能
function initCopyButtons() {
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const codeBlock = btn
        .closest(".api-title")
        .nextElementSibling.querySelector("code");

      if (codeBlock) {
        const textToCopy = codeBlock.textContent;
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            const originalText = btn.textContent;
            btn.textContent = "已复制!";
            setTimeout(() => {
              btn.textContent = originalText;
            }, 2000);
          })
          .catch((err) => {
            console.error("复制失败:", err);
          });
      }
    });
  });
}

// 模拟API响应
function mockApiResponse(endpoint, data) {
  switch (endpoint) {
    case "/calculator/add":
      return {
        operation: "加法",
        a: data.a,
        b: data.b,
        result: Number(data.a) + Number(data.b),
        timestamp: Date.now(),
      };

    case "/calculator/subtract":
      return {
        operation: "减法",
        a: data.a,
        b: data.b,
        result: Number(data.a) - Number(data.b),
        timestamp: Date.now(),
      };

    case "/calculator/multiply":
      return {
        operation: "乘法",
        a: data.a,
        b: data.b,
        result: Number(data.a) * Number(data.b),
        timestamp: Date.now(),
      };

    case "/calculator/divide":
      if (Number(data.b) === 0) {
        throw new Error("除数不能为零");
      }
      return {
        operation: "除法",
        a: data.a,
        b: data.b,
        result: Number(data.a) / Number(data.b),
        timestamp: Date.now(),
      };

    case "/users/detail":
      const users = [
        { id: 1, name: "张三", email: "zhangsan@example.com", role: "admin" },
        { id: 2, name: "李四", email: "lisi@example.com", role: "user" },
        { id: 3, name: "王五", email: "wangwu@example.com", role: "user" },
      ];

      const user = users.find((u) => u.id === Number(data.id));

      if (!user) {
        return { error: "用户未找到", status: 404 };
      }

      return { user };

    case "/docs/content":
      const docs = {
        introduction: {
          title: "Nexa框架介绍",
          content:
            "Nexa是一个基于PeerGate的现代Web框架，支持P2P通信，无需传统服务器即可构建强大的网络应用。",
          updated: "2023-03-21",
        },
        quickstart: {
          title: "快速开始",
          content: "要开始使用Nexa框架，首先需要安装相关依赖并初始化项目。",
          steps: [
            "安装依赖: npm install peergate-server",
            "初始化服务器: 创建index.js并配置PeerGate服务",
            "启动服务: npm run dev",
            "创建客户端: 在HTML中引入Nexa客户端",
          ],
          updated: "2023-03-21",
        },
        features: {
          title: "核心特性",
          items: [
            {
              title: "P2P通信",
              description: "基于WebRTC技术的点对点通信，无需中心服务器",
            },
            {
              title: "简洁API",
              description: "直观易用的API设计，快速构建应用",
            },
            {
              title: "跨平台兼容",
              description: "支持各种现代浏览器和Node.js环境",
            },
          ],
          updated: "2023-03-21",
        },
      };

      if (!docs[data.section]) {
        return { error: "部分未找到", status: 404 };
      }

      return { content: docs[data.section] };

    case "/chat/join":
      return {
        success: true,
        user: {
          id: Date.now().toString(),
          name: data.name,
          joinTime: Date.now(),
        },
        messages: [
          {
            id: "1",
            type: "system",
            content: "欢迎来到聊天室",
            timestamp: Date.now() - 5000,
          },
          {
            id: "2",
            userId: "system",
            userName: "系统",
            type: "system",
            content: `${data.name} 加入了聊天室`,
            timestamp: Date.now(),
          },
        ],
      };

    case "/chat/messages":
      return {
        messages: [],
      };

    case "/chat/send":
      return {
        success: true,
        message: {
          id: Date.now().toString(),
          userId: data.userId,
          userName: "当前用户",
          type: "message",
          content: data.content,
          timestamp: Date.now(),
        },
      };

    case "/files/list":
      return {
        files: [
          {
            id: "1",
            name: "示例文档.pdf",
            type: "application/pdf",
            size: 1024 * 1024 * 2.5, // 2.5MB
            uploadTime: Date.now() - 24 * 60 * 60 * 1000, // 1天前
          },
          {
            id: "2",
            name: "项目演示.pptx",
            type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            size: 1024 * 1024 * 5.8, // 5.8MB
            uploadTime: Date.now() - 2 * 60 * 60 * 1000, // 2小时前
          },
          {
            id: "3",
            name: "测试数据.xlsx",
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            size: 1024 * 512, // 512KB
            uploadTime: Date.now() - 30 * 60 * 1000, // 30分钟前
          },
        ],
      };

    case "/files/upload":
      return {
        success: true,
        file: {
          id: Date.now().toString(),
          name: data.name,
          type: data.type,
          size: data.size,
          uploadTime: Date.now(),
          contentId: `file-${Date.now()}`,
        },
      };

    case "/files/download":
      return {
        success: true,
        file: {
          id: data.id,
          name: "下载的文件.pdf",
          type: "application/pdf",
          size: 1024 * 1024 * 2.5,
        },
        content: "模拟文件内容",
      };

    case "/data/chart":
      // 生成模拟图表数据
      const chartData = [];
      const now = Date.now();
      const range = data.range || 30;
      const points = data.points || 50;
      const interval = (range * 24 * 60 * 60 * 1000) / points;

      for (let i = 0; i < points; i++) {
        const timestamp = now - (points - i - 1) * interval;
        chartData.push({
          timestamp,
          value: Math.sin(i / 5) * 50 + 50 + Math.random() * 10,
        });
      }

      return {
        success: true,
        chartType: "line",
        data: chartData,
      };

    default:
      throw new Error(`未找到API端点: ${endpoint}`);
  }
}
