# 📘 Pipeline OS 3.0 架构图（Mermaid 独立版）

本文件提供 Pipeline OS 3.0 的完整架构图，适用于：

- README 引用
- 文档展示
- 架构说明
- 演示材料
- 设计讨论

## 🧭 Pipeline OS 3.0 总体架构图

代码

```
graph TD
  A[Spec Layer<br>需求 / 方案 / 任务 / 变更 / 宪法] --> B[Execution Layer<br>TDD / 实现 / 调试 / 子任务 / 按方案执行 / 智能代码风格]
  B --> C[Quality Layer<br>代码审查 / 重构 / 分支完成]
  C --> D[Archive Layer<br>归档记录 / 变更日志]
  D --> E[Pipeline Layer<br>新项目路线图 / 功能迭代路线图 / 任务分类 / 下一步调度]
  E --> A
```

## 🧱 五层职责概览

### 1. Spec Layer（规范层）

负责“定义做什么”：

- specify：需求澄清
- plan：技术方案
- tasks：任务拆分
- change-spec：变更说明
- constitution：项目宪法

### 2. Execution Layer（执行层）

负责“怎么做”：

- tdd：测试驱动开发
- implement：功能实现
- debugging：调试分析
- subagent：子任务执行
- execute-plan：按方案执行
- code-style-smart：智能代码风格适配

### 3. Quality Layer（质量层）

负责“做得好不好”：

- code-review：代码审查
- refactor：代码重构
- finish-branch：分支完成报告

### 4. Archive Layer（归档层）

负责“记录发生了什么”：

- archive：归档记录
- changelog：变更日志

### 5. Pipeline Layer（调度层）

负责“下一步做什么”：

- new-project：新项目路线图
- update-feature：功能迭代路线图
- classify-task：任务分类
- next-step：智能下一步调度（核心）

## 🎯 使用方式

你可以在：

- README
- 文档系统
- 架构讨论
- 技术分享
- 项目 Wiki

中直接引用此文件。