module.exports = async ({ input }) => {
  return `
# 任务拆解（Task Breakdown）

以下是已经确认的技术方案（中文）：

${input}

---

请将上述方案拆解为【可执行的开发任务】，输出内容包括：
1. 任务列表（每个任务一行）
2. 每个任务的简要说明（中文）
3. 每个任务的类型：
   - 业务代码
   - AI 编排代码（LangGraph / Agent / Tool）
   - 测试
   - 文档
4. 推荐使用的执行方式：
   - /execution-layer.tdd
   - /execution-layer.implement
   - /execution-layer.subagent

要求：
- 全部使用中文
- 任务粒度适中，适合单次开发迭代。
`;
};
