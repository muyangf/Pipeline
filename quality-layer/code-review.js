module.exports = async ({ input }) => {
  return `
# 代码审查（Code Review）

待审查代码与上下文：
${input}

---

信息不足检查：
- 如果缺少需求、方案、任务或上下文，请先提问。

禁止事项：
- 不得直接重写全部代码（除非明确要求）
- 不得改变输出结构
- 不得跳过问题分析

---

# 任务说明（中文）

请根据以下规范进行结构化代码审查：

- /presets/business-code-style.md
- /presets/ai-code-style.md
- /presets/chinese-enterprise.md
- /presets/offline-default.md

---

# 输出格式（必须严格遵守）

## 总体评价
- ……

## 发现的问题
1. ……
2. ……

## 风险分析
- ……

## 改进建议
- ……

## 是否建议重构
- 是 / 否
- 理由：……

## 下一步建议
- 命令：\`/quality-layer.refactor\` 或 \`/quality-layer.finish-branch\`
- 理由：……

所有内容必须使用中文。
`;
};
