# 🚀 Pipeline OS 3.0（增强旗舰版）

一个为 **AI 驱动的软件开发流程** 设计的、可复现、可审计、可扩展的 **多层 Pipeline 操作系统**。

Pipeline OS 通过五层架构，将整个开发过程拆分为：

1. **Spec Layer**：定义做什么
2. **Execution Layer**：怎么做
3. **Quality Layer**：做得好不好
4. **Archive Layer**：记录发生了什么
5. **Pipeline Layer**：下一步做什么

所有层都遵循：

- 中文优先
- 结构稳定
- 信息不足先提问
- 半自动，不越权
- 离线友好（Qwen / DeepSeek / Llama / GGUF）
- 可审计、可复现

## 📦 目录结构

代码

```
Pipeline/
  presets/
  templates/
  docs/
  spec-layer/
  execution-layer/
  quality-layer/
  archive-layer/
  pipeline/
  README.md
  README.zh.md
```

## 🧠 五层架构简介

### 1. Spec Layer（规范层）

负责“定义做什么”：

- specify：需求澄清
- plan：技术方案
- tasks：任务拆分
- change-spec：变更说明
- constitution：项目宪法

输出：结构化需求与方案。

### 2. Execution Layer（执行层）

负责“怎么做”：

- tdd：测试驱动开发
- implement：功能实现
- debugging：调试分析
- subagent：子任务执行
- execute-plan：按方案执行
- code-style-smart：智能代码风格适配

输出：代码、测试、调试分析。

### 3. Quality Layer（质量层）

负责“做得好不好”：

- code-review：代码审查
- refactor：代码重构
- finish-branch：分支完成报告

输出：审查意见、重构代码。

### 4. Archive Layer（归档层）

负责“记录发生了什么”：

- archive：归档记录
- changelog：变更日志

输出：可审计、可复现的记录。

### 5. Pipeline Layer（调度层）

负责“下一步做什么”：

- new-project：新项目路线图
- update-feature：功能迭代路线图
- classify-task：任务分类
- next-step：智能下一步调度（核心）

输出：下一步命令、备选命令、缺失环节。

## 🧩 Preset 系统（核心）

所有 skill.json 必须加载：

代码

```
"presets": ["pipeline-os-default"]
```

pipeline-os-default 会自动加载：

- pipeline-3.0
- chinese-enterprise
- offline-default
- business-code-style
- ai-code-style

确保所有层行为一致。

## 🧱 Handler 模板

所有 handler.js 都遵循统一模板：

代码

```
module.exports = async ({ input }) => {
  return `
# 标题

输入内容：
${input}

...
`;
};
```

## 🔍 信息不足必须先提问

Pipeline OS 的核心原则：

> **如果信息不足，必须先提问，而不是自行补全。**

## 🔒 半自动，不越权

AI 永不自动：

- 执行命令
- 写文件
- 修改代码
- 合并分支

所有操作必须由用户明确触发。

## 🧭 Pipeline OS 架构图（Mermaid）

代码

```
graph TD
  A[Spec Layer<br>需求/方案/任务] --> B[Execution Layer<br>实现/调试]
  B --> C[Quality Layer<br>审查/重构]
  C --> D[Archive Layer<br>归档/日志]
  D --> E[Pipeline Layer<br>下一步调度]
  E --> A
```

## 🎯 适用场景

- AI 辅助开发
- 离线模型开发（Qwen / DeepSeek / Llama / GGUF）
- 企业级流程规范
- 可审计、可复现的开发体系
- 多人协作的结构化开发流程

## ❤️ 作者的话

Pipeline OS 3.0 是一个 **真正可运行、可扩展、可维护** 的 AI 开发操作系统。 它不是一个提示词，而是一套完整的工程体系。

欢迎你在此基础上继续扩展、增强、创造属于你的开发方式。