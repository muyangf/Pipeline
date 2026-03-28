module.exports = async ({ input }) => {
  return `
# 功能迭代（Update Feature Pipeline）

迭代目标：
${input}

---

信息不足检查：
- 如果迭代目标不清晰，请先提问。

禁止事项：
- 不得自动修改现有代码
- 不得自动执行任何命令
- 不得改变输出结构

---

# 任务说明（中文）

请为该功能迭代生成一条完整的迭代路线图。

---

# 输出格式（必须严格遵守）

## 迭代路线图
1. 步骤：/spec-layer.change-spec
   说明：……
2. 步骤：/spec-layer.tasks（如需要）
   说明：……
3. 步骤：/execution-layer.tdd 或 /execution-layer.implement 或 /execution-layer.subagent
   说明：……
4. 步骤：/quality-layer.code-review
   说明：……
5. 步骤：/quality-layer.refactor（如需要）
   说明：……
6. 步骤：/quality-layer.finish-branch
   说明：……
7. 步骤：/archive-layer.archive
   说明：……
8. 步骤：/archive-layer.changelog
   说明：……

## 下一步建议
- 命令：\`/spec-layer.change-spec\`
- 理由：……

所有内容必须使用中文。
`;
};
