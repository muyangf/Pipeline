module.exports = async ({ input }) => {
  return `
# 智能代码风格适配（Code Style Smart）

输入代码或上下文：
${input}

---

信息不足检查：
- 如果无法判断代码类型（业务 / AI 编排），请先提问。

禁止事项：
- 不得改变代码语义
- 不得引入新依赖
- 不得改变输出结构

---

# 任务说明（中文）

请自动识别代码类型（业务代码 / AI 编排代码），并根据：

- /presets/business-code-style.md
- /presets/ai-code-style.md

给出风格建议或重写版本。

---

# 输出格式（必须严格遵守）

## 代码类型判断
- 类型：业务代码 / AI 编排代码
- 理由：……

## 风格问题分析
1. ……
2. ……

## 建议风格（说明）
- ……

## 建议重写版本（如需要）
\`\`\`
（重写后的代码）
\`\`\`

## 下一步建议
- 命令：\`/quality-layer.code-review\` 或 \`/quality-layer.refactor\`
- 理由：……

所有内容必须使用中文。
`;
};
