# 📘 Pipeline OS 3.0 架构说明（增强旗舰版）

本文件用于说明 Pipeline OS 的整体架构、设计哲学、层级关系、运行方式。

## 1. 设计哲学（Design Philosophy）

Pipeline OS 的核心理念：

- 中文优先（Chinese First）
- 半自动，不越权（Semi‑Auto）
- 结构稳定（Stable Output）
- 离线友好（Offline Friendly）
- 可审计、可复现（Auditable & Reproducible）
- 分层架构（Layered Architecture）
- 智能调度（Next-Step Engine）

## 2. 五层架构（Five-Layer Architecture）

### 2.1 Spec Layer（规范层）

负责“定义做什么”：

- 需求澄清
- 技术方案
- 任务拆分
- 变更说明
- 项目宪法

输出：结构化需求与方案。

### 2.2 Execution Layer（执行层）

负责“怎么做”：

- TDD
- 实现
- 调试
- 子任务执行
- 按方案执行
- 智能代码风格适配

输出：代码、测试、调试分析。

### 2.3 Quality Layer（质量层）

负责“做得好不好”：

- 代码审查
- 重构
- 完成分支

输出：审查意见、重构代码、分支完成报告。

### 2.4 Archive Layer（归档层）

负责“记录发生了什么”：

- 归档记录
- 变更日志

输出：可审计、可复现的变更记录。

### 2.5 Pipeline Layer（调度层）

负责“下一步做什么”：

- 新项目路线图
- 功能迭代路线图
- 任务分类
- 智能下一步引擎

输出：下一步命令、备选命令、缺失环节。

## 3. 数据流（Data Flow）

代码

```
输入 → Spec → Execution → Quality → Archive → Pipeline → 下一步
```

Pipeline Layer 会根据当前阶段自动判断下一步。

## 4. 运行方式（Runtime Behavior）

Pipeline OS 是：

- 无状态（stateless）
- 纯文本（text-based）
- 可复现（reproducible）
- 可审计（auditable）

每个 handler.js 都是一个“纯函数”：

输入 → 输出 无副作用。

## 5. 关键组件（Key Components）

### 5.1 Preset 系统

用于：

- 统一语言规范
- 统一结构规范
- 统一代码风格
- 统一离线模型行为

### 5.2 Skill 系统

每层一个 skill.json：

- 声明 handler
- 声明 preset
- 声明类型

### 5.3 Handler 系统

每个 handler.js：

- 固定结构
- 中文优先
- 信息不足先提问
- 不越权
- 输出稳定

## 6. 调度系统（Next-Step Engine）

next-step.js 会：

- 自动判断当前阶段
- 自动识别缺失环节
- 自动推荐最优下一步
- 自动给出备选命令
- 自动说明为什么不是其他步骤

这是 Pipeline OS 的“内核”。