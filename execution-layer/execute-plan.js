module.exports = async ({ input }) => {
  return `
# 执行任务计划（Execute Plan）

以下是任务计划（中文）：

${input}

---

请根据任务计划，依次选择合适的执行方式：

- /execution-layer.tdd
- /execution-layer.implement
- /execution-layer.subagent

对于每个任务，请输出：
1. 选用的执行方式
2. 简要理由（中文）
3. 需要生成的代码 / 测试的概要

所有代码生成必须遵循 /execution-layer.code-style-smart 的智能代码规范。
`;
};
