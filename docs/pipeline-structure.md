# 📘 Pipeline OS 3.0 目录结构说明（增强旗舰版）

本文件用于说明 Pipeline OS 3.0 的整体目录结构、各层职责、文件组织方式。

## 1. 顶层结构（Top-Level Structure）

Pipeline OS 的顶层目录结构如下：

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

## 2. 各目录职责说明

### 2.1 presets/

存放所有全局预设（preset），用于：

- 统一语言规范
- 统一结构规范
- 统一代码风格规范
- 统一离线模型行为
- 统一业务 / AI 编排代码规范

所有 skill.json 必须加载：

代码

```
"presets": ["pipeline-os-default"]
```

### 2.2 templates/

存放 handler.js 的统一模板：

- handler.template.md
- 用于新增 handler 时保持结构一致

### 2.3 docs/

存放文档，包括：

- pipeline-structure.md（目录结构说明）
- architecture.md（架构说明）
- preset-priority.md（preset 优先级说明）

### 2.4 spec-layer/

负责“定义做什么”：

- specify.js
- plan.js
- tasks.js
- change-spec.js
- constitution.js
- skill.json

输出：需求、方案、任务、变更说明。

### 2.5 execution-layer/

负责“怎么做”：

- tdd.js
- implement.js
- subagent.js
- debugging.js
- execute-plan.js
- code-style-smart.js
- skill.json

输出：代码、测试、调试分析。

### 2.6 quality-layer/

负责“做得好不好”：

- code-review.js
- refactor.js
- finish-branch.js
- skill.json

输出：审查意见、重构代码、分支完成报告。

### 2.7 archive-layer/

负责“记录发生了什么”：

- archive.js
- changelog.js
- skill.json

输出：归档记录、变更日志。

### 2.8 pipeline/

负责“下一步做什么”：

- new-project.js
- update-feature.js
- classify-task.js
- next-step.js
- skill.json

输出：路线图、任务分类、下一步建议。

## 3. 层级关系（Layer Relationship）

代码

```
Spec Layer
  ↓
Execution Layer
  ↓
Quality Layer
  ↓
Archive Layer
  ↓
Pipeline Layer（调度）
```

Pipeline Layer 是整个系统的“操作系统内核”。

## 4. 文件命名规范

- handler 文件：`xxx.js`
- skill 文件：`skill.json`
- preset 文件：`xxx.md`
- 文档文件：`xxx.md`