/**
 * 路由组管理器
 * 用于管理客户端在不同路由和组上的注册情况，提供负载均衡和状态查询功能
 */
class RouteGroupManager {
  constructor() {
    // 存储客户端ID到路由和组的映射
    this.clientRoutes = new Map();

    // 存储组到客户端ID列表的映射
    this.groupClients = new Map();

    // 存储客户端最后活动时间
    this.clientActivity = new Map();

    // 存储组的请求计数
    this.groupRequestCount = new Map();

    // 存储路由到组的映射
    this.routeGroups = new Map();

    // 客户端不活跃超时时间（毫秒）
    this.INACTIVE_TIMEOUT = 30 * 60 * 1000; // 30分钟
  }

  /**
   * 注册客户端到特定路由和组
   * @param {string} clientId - 客户端ID
   * @param {string} route - 路由路径
   * @param {string} group - 组名称
   * @returns {boolean} - 注册是否成功
   */
  registerClient(clientId, route, group) {
    if (!clientId || !route || !group) {
      return false;
    }

    // 记录客户端路由和组
    this.clientRoutes.set(clientId, { route, group });

    // 添加客户端到组
    if (!this.groupClients.has(group)) {
      this.groupClients.set(group, new Set());
    }
    this.groupClients.get(group).add(clientId);

    // 记录路由到组的映射
    if (!this.routeGroups.has(route)) {
      this.routeGroups.set(route, new Set());
    }
    this.routeGroups.get(route).add(group);

    // 更新客户端活动时间
    this.updateClientActivity(clientId);

    return true;
  }

  /**
   * 更新客户端最后活动时间
   * @param {string} clientId - 客户端ID
   */
  updateClientActivity(clientId) {
    if (clientId) {
      this.clientActivity.set(clientId, Date.now());
    }
  }

  /**
   * 获取特定组内的所有客户端
   * @param {string} group - 组名称
   * @returns {string[]} - 客户端ID数组
   */
  getGroupClients(group) {
    if (!group || !this.groupClients.has(group)) {
      return [];
    }

    return Array.from(this.groupClients.get(group));
  }

  /**
   * 获取所有组及其客户端统计信息
   * @returns {Object} - 包含组统计信息的对象
   */
  getGroupsStats() {
    const stats = {};

    for (const [group, clients] of this.groupClients.entries()) {
      stats[group] = {
        clientCount: clients.size,
        requestCount: this.groupRequestCount.get(group) || 0,
        clients: Array.from(clients),
      };
    }

    return stats;
  }

  /**
   * 根据负载均衡策略从组中选择一个客户端
   * @param {string} group - 组名称
   * @param {string} strategy - 负载均衡策略（random, round-robin, least-connections）
   * @returns {string|null} - 选中的客户端ID或null
   */
  selectClientFromGroup(group, strategy = "random") {
    if (!group || !this.groupClients.has(group)) {
      return null;
    }

    const clients = Array.from(this.groupClients.get(group));

    if (clients.length === 0) {
      return null;
    }

    // 只有一个客户端时直接返回
    if (clients.length === 1) {
      return clients[0];
    }

    switch (strategy) {
      case "random":
        // 随机选择
        return clients[Math.floor(Math.random() * clients.length)];

      case "round-robin":
        // 轮询选择
        const count = this.groupRequestCount.get(group) || 0;
        return clients[count % clients.length];

      case "least-active":
        // 选择最近最不活跃的客户端
        return clients.sort(
          (a, b) =>
            (this.clientActivity.get(a) || 0) -
            (this.clientActivity.get(b) || 0)
        )[0];

      default:
        // 默认随机选择
        return clients[Math.floor(Math.random() * clients.length)];
    }
  }

  /**
   * 记录组请求次数（用于轮询负载均衡）
   * @param {string} group - 组名称
   */
  recordGroupRequest(group) {
    if (!group) return;

    const currentCount = this.groupRequestCount.get(group) || 0;
    this.groupRequestCount.set(group, currentCount + 1);
  }

  /**
   * 根据路由获取所有可用组
   * @param {string} route - 路由路径
   * @returns {string[]} - 组名称数组
   */
  getRouteGroups(route) {
    if (!route || !this.routeGroups.has(route)) {
      return [];
    }

    return Array.from(this.routeGroups.get(route));
  }

  /**
   * 客户端断开连接处理
   * @param {string} clientId - 客户端ID
   * @returns {boolean} - 是否成功处理
   */
  disconnectClient(clientId) {
    if (!clientId || !this.clientRoutes.has(clientId)) {
      return false;
    }

    // 获取客户端路由和组信息
    const { route, group } = this.clientRoutes.get(clientId);

    // 从组中移除客户端
    if (this.groupClients.has(group)) {
      this.groupClients.get(group).delete(clientId);

      // 如果组为空，清理组
      if (this.groupClients.get(group).size === 0) {
        this.groupClients.delete(group);

        // 更新路由到组的映射
        if (this.routeGroups.has(route)) {
          this.routeGroups.get(route).delete(group);

          if (this.routeGroups.get(route).size === 0) {
            this.routeGroups.delete(route);
          }
        }
      }
    }

    // 清除客户端记录
    this.clientRoutes.delete(clientId);
    this.clientActivity.delete(clientId);

    return true;
  }

  /**
   * 清理不活跃的客户端
   * @returns {number} - 清理的客户端数量
   */
  cleanInactiveClients() {
    const now = Date.now();
    let cleanedCount = 0;

    for (const [clientId, lastActivity] of this.clientActivity.entries()) {
      if (now - lastActivity > this.INACTIVE_TIMEOUT) {
        this.disconnectClient(clientId);
        cleanedCount++;
      }
    }

    console.log(`已清理 ${cleanedCount} 个不活跃客户端`);
    return cleanedCount;
  }

  /**
   * 根据路由获取一个客户端（自动选择组和负载均衡策略）
   * @param {string} route - 路由路径
   * @param {string} strategy - 负载均衡策略
   * @returns {string|null} - 客户端ID或null
   */
  getClientForRoute(route, strategy = "random") {
    if (!route) return null;

    // 获取路由相关的所有组
    const groups = this.getRouteGroups(route);

    if (groups.length === 0) {
      return null;
    }

    // 如果有多个组，随机选择一个组
    const selectedGroup = groups[Math.floor(Math.random() * groups.length)];

    // 从选中的组中选择一个客户端
    return this.selectClientFromGroup(selectedGroup, strategy);
  }
}

module.exports = RouteGroupManager;
