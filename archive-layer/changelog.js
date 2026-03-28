module.exports = async ({ input }) => {
  return `
# 变更日志（Changelog Entry）

归档记录：
${input}

---

信息不足检查：
- 如果归档记录缺少变更类型、风险等级或摘要，请先提问。

禁止事项：
- 不得自动写入 CHANGELOG.md
- 不得自动执行任何命令
- 不得改变输出结构

---

# 任务说明（中文）

请基于归档记录生成一条可直接写入 CHANGELOG.md 的变更日志条目。

---

# 输出格式（必须严格遵守）

## Changelog Entry
- 日期：YYYY-MM-DD
- 类型：……
- 内容：……
- 影响范围：……
- 风险等级：……

所有内容必须使用中文。
`;
};
