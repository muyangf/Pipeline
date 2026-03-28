# Pipeline OS 3.0（OpenCode 专用流水线操作系统）

Pipeline OS 是一套为 **本地 / 离线大模型** 设计的“开发流水线操作系统（Pipeline Operating System）”。  
它将软件开发过程拆分为五个可控、可审计、可复现的层：

- **Spec Layer**：需求澄清、方案设计、任务拆分、变更说明  
- **Execution Layer**：TDD、实现、调试、子任务执行  
- **Quality Layer**：代码审查、重构、完成分支  
- **Archive Layer**：归档记录、变更日志  
- **Pipeline Layer**：全局调度、下一步引擎、任务分类

---

# 🌟 核心价值

Pipeline OS 的目标是：

- 让大模型 **不再“自由发挥”**，而是严格遵守流程  
- 让开发过程 **可控、可复现、可审计**  
- 让每一步输出都 **结构稳定、中文优先、离线友好**  
- 让模型成为 **真正的开发助手，而不是代码生成器**  
- 让你一句话就能驱动整个工程（通过 next-step 引擎）

---

# 🧱 目录结构（简版）

```
Pipeline/
presets/              # 全局规范
templates/            # handler 模板
docs/                 # 文档与架构
spec-layer/           # 需求与变更
execution-layer/      # 实现与调试
quality-layer/        # 审查与重构
archive-layer/        # 归档与日志
pipeline/             # 全局调度
```

详细结构见：`docs/pipeline-structure.md`

---

# ⚙️ Preset 组合（默认）

推荐默认使用：

```
presets/pipeline-os-default.md
```

Preset 优先级（从高到低）：

1. pipeline-3.0.md  
2. chinese-enterprise.md  
3. offline-default.md  
4. ai-code-style.md / business-code-style.md（按需加载）

---

# 🚀 使用方式（示例）

## 1. 新项目

运行：

```
/pipeline.new-project
```

按路线图依次执行：

```
specify → plan → tasks → tdd/implement → code-review → finish-branch → archive → changelog
```

---

## 2. 功能迭代

运行：

```
/pipeline.update-feature
```

按路线图依次执行：

```
change-spec → tasks → execution → quality → archive
```

---

## 3. 任意时刻不知道下一步

运行：

```
/pipeline.next-step
```

它会自动判断当前阶段，并给出最优下一步命令。

---

# 📄 License

MIT

---

# 🤝 贡献

欢迎提交 PR 或 Issue，一起完善 Pipeline OS。