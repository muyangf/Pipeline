# Pipeline OS 3.0 目录结构与层级职责

## Spec Layer
- specify.js：从自然语言需求生成结构化需求说明
- plan.js：从需求生成实现方案
- tasks.js：从方案拆分任务
- change-spec.js：对现有系统的变更说明
- constitution.js：项目“宪法级”约束

## Execution Layer
- tdd.js：测试驱动开发入口
- implement.js：直接实现入口
- subagent.js：子代理 / 子任务执行
- debugging.js：调试与问题定位
- execute-plan.js：按 plan 执行任务
- code-style-smart.js：智能代码风格适配

## Quality Layer
- code-review.js：代码审查
- refactor.js：重构引导
- finish-branch.js：完成分支报告

## Archive Layer
- archive.js：归档记录
- changelog.js：变更日志条目

## Pipeline Layer
- new-project.js：新项目初始化流程
- update-feature.js：功能迭代流程
- next-step.js：全局智能下一步引擎
- classify-task.js：任务分类与路由