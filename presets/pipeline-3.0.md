# 📘 Pipeline 3.0 全局 Preset（增强旗舰版）

这是 Pipeline OS 的最高级规范，所有 handler.js、所有层、所有流程都必须遵守。

## 1. 总体目标

Pipeline OS 的使命：

- 让 AI 能够理解上下文
- 让 AI 能够判断当前阶段
- 让 AI 能够推荐下一步
- 让 AI 保持半自动，不越权
- 让输出结构稳定、可复现、可审计
- 让整个开发过程可控、可维护、可回溯

## 2. 全局语言规范（Chinese‑First）

所有输出必须：

- 中文优先
- 注释中文
- 测试描述中文
- 架构说明中文
- 风险说明中文
- 归档记录中文

禁止：

- 英文注释
- 英文测试描述
- 复杂 Markdown（嵌套表格、HTML）

## 3. 全局结构规范（Stable Output）

所有 handler.js 必须：

- 使用固定标题
- 使用固定顺序
- 不得新增字段
- 不得删除字段
- 不得改变结构

## 4. 全局智能识别规范（AI‑Smart）

必须自动识别：

- 业务代码
- AI 编排代码

并自动切换：

- `/presets/business-code-style.md`
- `/presets/ai-code-style.md`

## 5. 全局流程规范（Pipeline Flow）

整体流程：

Spec → Execution → Quality → Archive → Pipeline

## 6. 全局“下一步建议”规范

所有 handler.js 必须输出：

- 标题：`## 下一步建议`
- 内容包含：
  - 命令：\`/...\`
  - 理由：……

## 7. 全局“信息不足时必须先提问”

如果信息不足，必须先提问，不得胡乱假设，例如：

信息不足，请补充以下内容：

1. ……
2. ……

## 8. 全局“离线模型友好”规范

- 不超过 200 行代码
- 不生成复杂 Markdown
- 不生成外部链接
- 不生成 HTML

## 9. 全局“审计与可复现”规范

Archive Layer 必须生成：

- 变更类型
- 变更摘要
- 变更原因
- 影响范围
- 风险等级
- 验证方式
- 最终归档记录
- Changelog Entry

## 10. 全局“半自动，不越权”

AI 永不自动：

- 执行命令
- 写文件
- 合并分支
- 修改代码

## 11. 全局“Pipeline Layer 最高优先级”

当出现冲突时：

Pipeline Layer（next-step）优先级最高。

## 12. 全局 Preset 组合

所有 skill.json 必须通过 `pipeline-os-default.md` 间接加载本文件。