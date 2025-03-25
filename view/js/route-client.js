// 导入Nexa客户端
import Nexa from "https://unpkg.com/peergate-nexa/index.js";

/**
 * 路由组客户端管理器
 * 用于客户端注册到路由组、心跳管理和路由组状态查询
 */
class RouteClient {
  constructor() {
    this.clientId = null;
    this.currentRoute = null;
    this.currentGroup = null;
    this.initialized = false;
    this.heartbeatInterval = null;
    this.serverPeerId = "my-server-R7999999"; // 服务器固定ID
    this.heartbeatInterval = 30000; // 心跳间隔，30秒
  }

  /**
   * 初始化Nexa客户端并连接到服务器
   */
  async init() {
    if (this.initialized) return;

    try {
      await Nexa.init(this.serverPeerId);
      this.initialized = true;

      // 生成唯一的客户端ID
      this.clientId = `client-${Date.now()}-${Math.floor(
        Math.random() * 1000
      )}`;

      console.log(`路由客户端初始化成功，客户端ID: ${this.clientId}`);
      return true;
    } catch (error) {
      console.error("路由客户端初始化失败:", error);
      throw error;
    }
  }

  /**
   * 注册到特定路由和组
   * @param {string} route - 路由路径
   * @param {string} group - 组名称
   * @returns {Promise<Object>} - 注册结果
   */
  async register(route, group) {
    if (!this.initialized) {
      await this.init();
    }

    try {
      const response = await Nexa.seek("/oo", {
        action: "register",
        clientId: this.clientId,
        route,
        group,
      });

      if (response.success) {
        this.currentRoute = route;
        this.currentGroup = group;

        // 开始发送心跳
        this.startHeartbeat();

        console.log(`成功注册到路由 ${route} 和组 ${group}`);
      }

      return response;
    } catch (error) {
      console.error("注册失败:", error);
      throw error;
    }
  }

  /**
   * 开始发送心跳
   */
  startHeartbeat() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
    }

    this.heartbeatInterval = setInterval(async () => {
      try {
        await Nexa.seek("/oo", {
          action: "heartbeat",
          clientId: this.clientId,
        });
        console.log("心跳发送成功");
      } catch (error) {
        console.error("心跳发送失败:", error);
      }
    }, this.heartbeatInterval);
  }

  /**
   * 停止发送心跳
   */
  stopHeartbeat() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  }

  /**
   * 断开连接
   * @returns {Promise<Object>} - 断开结果
   */
  async disconnect() {
    if (!this.initialized || !this.clientId) {
      return { success: false, error: "客户端未初始化或未注册" };
    }

    try {
      // 停止心跳
      this.stopHeartbeat();

      // 通知服务器断开连接
      const response = await Nexa.seek("/oo", {
        action: "disconnect",
        clientId: this.clientId,
      });

      if (response.success) {
        this.currentRoute = null;
        this.currentGroup = null;
        console.log("成功断开连接");
      }

      return response;
    } catch (error) {
      console.error("断开连接失败:", error);
      throw error;
    }
  }

  /**
   * 获取当前组内的所有客户端
   * @returns {Promise<Object>} - 组内客户端列表
   */
  async getGroupClients() {
    if (!this.initialized || !this.currentGroup) {
      return { success: false, error: "客户端未初始化或未注册到组" };
    }

    try {
      const response = await Nexa.seek("/oo", {
        action: "get-clients",
        group: this.currentGroup,
      });

      return response;
    } catch (error) {
      console.error("获取组内客户端失败:", error);
      throw error;
    }
  }

  /**
   * 获取所有组的统计信息
   * @returns {Promise<Object>} - 所有组的统计信息
   */
  async getGroupsStats() {
    if (!this.initialized) {
      return { success: false, error: "客户端未初始化" };
    }

    try {
      const response = await Nexa.seek("/oo", {
        action: "stats",
      });

      return response;
    } catch (error) {
      console.error("获取组统计信息失败:", error);
      throw error;
    }
  }

  /**
   * 从组中选择一个客户端
   * @param {string} group - 组名称，如果为空则使用当前组
   * @param {string} strategy - 负载均衡策略
   * @returns {Promise<Object>} - 选中的客户端信息
   */
  async selectClientFromGroup(group = null, strategy = "random") {
    if (!this.initialized) {
      return { success: false, error: "客户端未初始化" };
    }

    const targetGroup = group || this.currentGroup;
    if (!targetGroup) {
      return { success: false, error: "未指定组名称" };
    }

    try {
      const response = await Nexa.seek("/oo", {
        action: "select-client",
        group: targetGroup,
        strategy,
      });

      return response;
    } catch (error) {
      console.error("选择客户端失败:", error);
      throw error;
    }
  }

  /**
   * 根据路由获取一个客户端
   * @param {string} route - 路由路径
   * @param {string} strategy - 负载均衡策略
   * @returns {Promise<Object>} - 选中的客户端信息
   */
  async getClientForRoute(route, strategy = "random") {
    if (!this.initialized) {
      return { success: false, error: "客户端未初始化" };
    }

    try {
      const response = await Nexa.seek("/oo", {
        action: "get-route-client",
        route,
        strategy,
      });

      return response;
    } catch (error) {
      console.error("获取路由客户端失败:", error);
      throw error;
    }
  }

  /**
   * 获取当前客户端状态
   * @returns {Object} - 客户端状态信息
   */
  getStatus() {
    return {
      clientId: this.clientId,
      route: this.currentRoute,
      group: this.currentGroup,
      initialized: this.initialized,
      connected: this.initialized && this.heartbeatInterval !== null,
    };
  }
}

// 创建全局单例
const routeClient = new RouteClient();

export default routeClient;
