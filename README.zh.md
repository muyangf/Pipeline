# Pipeline OS 3.0（OpenCode 专用流水线操作系统）

Pipeline OS 是一套为本地 / 离线大模型设计的“开发流水线操作系统”，包含：

- Spec Layer：需求与变更规范
- Execution Layer：实现与调试
- Quality Layer：审查与重构
- Archive Layer：归档与变更日志
- Pipeline Layer：全局调度与下一步引擎

## 特点

- 中文优先
- 离线友好
- 结构稳定
- 可审计、可复现
- 与 OpenCode / Superpowers / OpenSpec 思想兼容

## 使用方式（示例）

1. 新项目：
   - 运行：`/pipeline.new-project`
   - 按路线图依次执行：specify → plan → tasks → tdd/implement → code-review → finish-branch → archive → changelog

2. 功能迭代：
   - 运行：`/pipeline.update-feature`
   - 按路线图依次执行：change-spec → tasks → execution → quality → archive

3. 任意时刻不知道下一步：
   - 运行：`/pipeline.next-step`

## Preset 组合

推荐默认使用：`presets/pipeline-os-default.md`。

---