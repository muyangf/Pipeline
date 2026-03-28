# 📘 offline-default.md（离线默认预设 · 增强版）

## 1. 适用范围（Scope）

适用于所有离线模型：

- Qwen（本地）
- DeepSeek（本地）
- Llama / Llama3
- Mistral
- ChatGLM
- 各类 GGUF 模型

环境特征：

- 无网络
- 无外部 API
- 本地推理
- 上下文窗口有限
- 输出稳定性要求高

## 2. 中文优先（Chinese First）

离线模型在中文环境下表现更稳定，因此：

- 所有提示词必须中文
- 所有注释必须中文
- 所有文档必须中文
- 所有测试描述必须中文
- 所有审查意见必须中文

## 3. 输出稳定性规范（Stability Standard）

为避免结构漂移，必须：

- 所有输出包含：标题、分节、列表、代码块（如需要）
- 不使用复杂 Markdown（嵌套表格、HTML）
- 每个代码块不超过 200 行
- 每次整体输出不超过约 3000 字

## 4. 提示词规范（Prompt Standard）

- 必须明确任务（如“生成需求文档”、“生成实现方案”）
- 必须明确格式（列出标题和字段）
- 不得使用“随便写点”“自由发挥”等模糊指令

## 5. 代码生成规范（Code Generation Standard）

离线模型在代码生成时必须：

- 所有代码包含中文注释（文件头、函数、关键逻辑）
- 所有代码遵循智能 code-style（自动识别业务 / AI 编排）
- 所有代码尽量附带测试（测试描述中文）

## 6. 上下文管理（Context Management）

- 必须分步骤执行（先需求 → 再方案 → 再任务 → 再代码）
- 必须减少重复上下文（避免重复贴大量代码）
- 尽量使用“摘要”代替全文粘贴

## 7. 错误处理（Error Handling）

- 如果无法理解任务，必须明确说明需要哪些补充信息
- 不得编造 API、数据库结构、文件路径等关键信息

## 8. 审查与变更规范

- 代码审查：使用 `/quality-layer.code-review`
- 变更说明：使用 `/spec-layer.change-spec`
- 归档记录：使用 `/archive-layer.archive`

## 9. 推荐配置（Recommended Settings）

- temperature：0.2–0.5
- top_p：0.8–0.95
- max_tokens：2048–4096

## 10. 与智能 code-style-smart.js 的集成

本 preset 与智能 code-style 完全兼容，用于：

- 自动识别业务代码 / AI 编排代码
- 自动切换架构规范
- 自动生成中文注释
- 自动生成测试
- 自动生成架构说明