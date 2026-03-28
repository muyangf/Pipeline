# 📘 **Pipeline 3.0 全局 Preset（全局规范 · 最终版）**

> 这是你整个 AI 开发操作系统（Pipeline OS）的最高级规范。 所有 handler.js、所有层、所有流程都必须遵守。

# #️⃣ 1. 总体目标（Pipeline OS 的使命）

Pipeline 3.0 的目标是：

- 让 AI 能够 **理解上下文**
- 让 AI 能够 **判断当前阶段**
- 让 AI 能够 **推荐下一步**
- 让 AI 能够 **保持半自动，不越权**
- 让 AI 能够 **生成结构化、可复现、可审计的输出**
- 让整个开发过程 **可控、可维护、可回溯**

Pipeline 3.0 是：

> **Spec → Execution → Quality → Archive → Pipeline（调度）**   的统一操作系统。

# #️⃣ 2. 全局语言规范（Chinese‑First）

所有输出必须：

- **中文优先**
- 注释中文
- 测试描述中文
- 结构说明中文
- 风险说明中文
- 归档记录中文
- Changelog 中文

禁止：

- 英文注释
- 英文测试描述
- 英文结构说明
- 复杂 Markdown（嵌套表格、复杂 HTML）

# #️⃣ 3. 全局结构规范（Stable Output Structure）

所有 handler.js 必须：

- 输出固定结构
- 使用固定标题
- 使用固定顺序
- 不得随意改变格式
- 不得省略任何必填字段

例如：

- 测试代码必须在 `## 测试代码` 下
- 实现代码必须在 `## 实现代码` 下
- 重构建议必须在 `## 重构建议` 下
- 下一步建议必须在 `## 下一步建议` 下

# #️⃣ 4. 全局智能识别规范（AI‑Smart）

所有 Execution / Quality 层必须自动识别：

### ✔ 业务代码

- Controller
- Service
- Repository
- DTO / VO
- API 层

### ✔ AI 编排代码

- LangGraph
- Node
- Tool
- Agent
- State
- Workflow

并自动切换：

- `/presets/business-code-style.md`
- `/presets/ai-code-style.md`

# #️⃣ 5. 全局流程规范（Pipeline Flow）

Pipeline 3.0 的完整流程：

Code

```
Spec Layer
  ├─ specify
  ├─ plan
  ├─ tasks
  └─ change-spec

Execution Layer
  ├─ tdd
  ├─ implement
  └─ subagent

Quality Layer
  ├─ code-review
  ├─ refactor
  └─ finish-branch

Archive Layer
  ├─ archive
  └─ changelog

Pipeline Layer
  ├─ new-project
  ├─ update-feature
  └─ next-step 3.0
```

# #️⃣ 6. 全局“下一步建议”规范（Next‑Step Standard）

所有 handler.js 必须在末尾输出：

Code

```
## 下一步建议
- 命令：`/...`
- 理由：……
```

并且：

- 必须中文
- 必须合理
- 必须基于当前阶段
- 必须与 next-step 3.0 兼容

# #️⃣ 7. 全局“信息不足时必须先提问”规范

所有 handler.js 必须遵守：

> **如果信息不足，不得胡乱假设，必须先提问。**

格式：

Code

```
信息不足，请补充以下内容：
1. …
2. …
```

# #️⃣ 8. 全局“离线模型友好”规范

所有输出必须：

- 不超过 200 行代码
- 不生成复杂 Markdown
- 不生成复杂表格
- 不生成外部链接
- 不生成图片
- 不生成 HTML

# #️⃣ 9. 全局“审计与可复现”规范

所有层必须输出：

- 清晰结构
- 明确理由
- 可复现步骤
- 可审计记录

Archive Layer 必须生成：

- 变更摘要
- 变更原因
- 影响范围
- 风险说明
- 验证方式
- 最终归档记录
- Changelog Entry

# #️⃣ 10. 全局“半自动，不越权”规范

Pipeline 3.0 必须：

- **永不自动执行命令**
- **永不自动写文件**
- **永不自动合并分支**
- **永不自动修改代码**

AI 的职责是：

> **判断 → 分析 → 推荐 → 生成结构化输出**   最终执行永远由你决定。

# #️⃣ 11. 全局“Pipeline Layer 最高优先级”规范

当出现冲突时：

> **Pipeline Layer（next-step 3.0）拥有最高优先级。**

它负责：

- 全局调度
- 阶段判断
- 缺失环节识别
- 下一步推荐
- 备选方案
- 决策理由

# #️⃣ 12. 全局“Preset 组合”规范

Pipeline 3.0 必须自动加载：

- `presets/chinese-enterprise.md`
- `presets/ai-code-style.md`
- `presets/business-code-style.md`
- `presets/offline-default.md`
- `presets/pipeline-3.0.md`（本文件）

# 🎉 **Pipeline 3.0 全局 Preset 已完成（可直接落盘）**

你现在拥有一个：

- 企业级
- 中文优先
- 离线友好
- 结构稳定
- 可复现
- 可审计
- 可维护
- 完整的 AI 开发操作系统（Pipeline OS）