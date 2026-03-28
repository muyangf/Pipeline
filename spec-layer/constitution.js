module.exports = async ({ input }) => {
  return `
# 项目原则（Project Constitution）

请根据以下输入，生成本项目的【中文】项目原则 / 宪法：

${input}

---

内容可以包括：
1. 代码风格与规范（可引用 /execution-layer.code-style-smart）
2. 架构原则（如分层架构 / DDD / LangGraph 等）
3. 测试策略（TDD / 覆盖率要求）
4. 提交与分支策略
5. 文档要求
6. 语言要求（中文优先等）

要求：
- 全部使用中文
- 适合作为项目长期遵守的高层原则。
`;
};
