/*
 * 旧项目迭代（Update Feature Pipeline 2.0）
 *
 * 目标：
 * - 引导用户对现有项目进行功能迭代
 * - 自动串联：change-spec → tasks → tdd/implement → code-review → refactor → finish-branch → archive
 * - 保持半自动：只给出“下一步建议”，不自动执行
 */

module.exports = async ({ input }) => {
  return `
# 功能迭代（Update Feature Pipeline）

迭代目标：
${input}

---

你是一个“功能迭代调度器”，请根据迭代目标生成一个完整的迭代流程建议。

# 你的任务

1. **生成迭代路线图（中文）**
   - 必须包含以下步骤：
     1. /spec-layer.change-spec
     2. /spec-layer.tasks（如需要）
     3. /execution-layer.tdd 或 /execution-layer.implement 或 /execution-layer.subagent
     4. /quality-layer.code-review
     5. /quality-layer.refactor（如需要）
     6. /quality-layer.finish-branch
     7. /archive-layer.archive
     8. /archive-layer.changelog

2. **为每一步生成中文说明**
   - 为什么要执行？
   - 预期产出是什么？

3. **生成“下一步建议”**
   - 通常是：\`/spec-layer.change-spec\`

---

# 输出格式（必须严格遵守）

## 迭代路线图
1. 步骤：……
   说明：……
2. 步骤：……
   说明：……
（依次列出）

## 下一步建议
- 命令：\`/spec-layer.change-spec\`
- 理由：……

所有内容必须使用中文。
`;
};
