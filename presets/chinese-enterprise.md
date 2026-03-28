# 📘 chinese-enterprise.md（中文企业级规范 · 增强版）

## 1. 中文优先（Chinese First）

所有输出必须使用中文，包括：

- 注释
- 文档
- 测试描述
- 审查意见
- 调试分析
- 架构说明
- 变更记录

技术术语（API、Class、Module、Service 等）可保留英文。

## 2. 代码类型自动识别

系统必须自动识别：

- 业务代码（Business Code）
- AI 编排代码（AI Orchestration Code）

并自动切换：

- `/presets/business-code-style.md`
- `/presets/ai-code-style.md`

## 3. 业务代码架构规范（增强版）

适用于：

- Web 服务
- 后端逻辑
- 数据处理
- 模块化业务逻辑

必须遵循：

- 分层架构（Controller / Service / Repository / Model）
- Clean Architecture
- SOLID 原则
- 模块化设计

推荐模块结构：

/module-name

- controller/
- service/
- repository/
- model/
- test/

## 4. AI 编排代码架构规范（增强版）

适用于：

- LangGraph / LangChain
- Agent / Tool
- Node / State / Workflow

必须遵循：

- Node-first（节点单一职责）
- State-first（所有数据进入 State）
- Tool-isolated（工具无副作用、可替换）
- Graph-clarity（图结构清晰、无隐式跳转）
- Observability（可观察性）
- Testability（可测试性）

## 5. 命名规范

- 变量：camelCase
- 函数：动词开头（如 getUser、buildIndex）
- 类名：PascalCase
- 常量：CONSTANT_CASE

## 6. 注释规范（增强版）

- 文件头必须有中文功能说明
- 函数必须有中文 JSDoc
- 复杂逻辑必须有中文行内注释

## 7. 测试规范

- 测试描述必须使用中文
- 覆盖正常、边界、异常情况
- Repository 必须可 mock

## 8. 文档规范

所有文档必须中文，包含：

- 背景
- 架构说明
- 模块说明
- 输入输出
- 测试说明
- 使用说明

## 9. 质量规范

适用于 `/quality-layer.code-review`：

- 是否遵循架构规范
- 是否遵循命名规范
- 是否遵循注释规范
- 是否遵循测试规范
- 是否存在重复代码
- 是否存在潜在 bug
- 是否存在边界遗漏

## 10. 变更与归档规范

- 变更说明：使用 `/spec-layer.change-spec`
- 归档记录：使用 `/archive-layer.archive`

## 11. 与智能 code-style-smart.js 的集成

本 preset 与智能 code-style 完全兼容，用于：

- 自动识别代码类型
- 自动切换架构规范
- 自动生成中文注释
- 自动生成测试
- 自动生成架构说明