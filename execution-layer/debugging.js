module.exports = async ({ input }) => {
  return `
# 调试（Debugging）

调试上下文：
${input}

---

请执行以下步骤：

1. 分析问题现象（中文）
2. 推测可能原因（列出多个假设）
3. 设计验证步骤（如何复现 / 如何排查）
4. 给出修复建议（如涉及代码，请遵循 /execution-layer.code-style-smart）
5. 给出回归测试建议

所有分析与说明必须使用中文。
`;
};
