/*
 * 新项目初始化（New Project Pipeline 2.0）
 *
 * 目标：
 * - 引导用户从零开始创建一个新项目
 * - 自动串联：specify → plan → tasks → tdd/implement → code-review → finish-branch → archive
 * - 保持半自动：只给出“下一步建议”，不自动执行
 */

module.exports = async ({ input }) => {
  return `
# 新项目初始化（New Project Pipeline）

项目目标：
${input}

---

你是一个“新项目初始化调度器”，请根据项目目标生成一个完整的初始化流程建议。

# 你的任务

1. **生成项目初始化路线图（中文）**
   - 必须包含以下步骤：
     1. /spec-layer.specify
     2. /spec-layer.plan
     3. /spec-layer.tasks
     4. /execution-layer.tdd 或 /execution-layer.implement（根据任务类型自动判断）
     5. /quality-layer.code-review
     6. /quality-layer.finish-branch
     7. /archive-layer.archive
     8. /archive-layer.changelog

2. **为每一步生成中文说明**
   - 为什么要执行？
   - 预期产出是什么？

3. **生成“下一步建议”**
   - 通常是：\`/spec-layer.specify\`

---

# 输出格式（必须严格遵守）

## 项目初始化路线图
1. 步骤：……
   说明：……
2. 步骤：……
   说明：……
（依次列出）

## 下一步建议
- 命令：\`/spec-layer.specify\`
- 理由：……

所有内容必须使用中文。
`;
};
