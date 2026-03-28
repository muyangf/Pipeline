# 📘 pipeline-os-default.md（Pipeline OS 默认预设 · 增强版）

本文件是 **所有 skill.json 的统一入口 preset**。 它的职责是：

- 自动加载 Pipeline OS 3.0 全局规范
- 自动加载中文企业级规范
- 自动加载离线模型规范
- 自动加载业务代码规范
- 自动加载 AI 编排代码规范
- 保证所有 handler.js 的行为一致
- 保证所有层的结构、语言、流程统一

## 1. Preset 加载顺序（从高到低）

Pipeline OS 的 preset 加载顺序必须如下：

1. **pipeline-3.0.md**（最高优先级，全局规范）
2. **chinese-enterprise.md**（中文企业级规范）
3. **offline-default.md**（离线模型规范）
4. **business-code-style.md**（业务代码规范）
5. **ai-code-style.md**（AI 编排代码规范）

加载顺序非常重要，因为：

- pipeline-3.0.md 定义全局结构与流程
- chinese-enterprise.md 定义语言与企业级规范
- offline-default.md 定义离线模型行为
- business-code-style / ai-code-style 负责代码风格与架构

## 2. 全局行为规范（Global Behavior Rules）

所有 handler.js 必须遵守：

### 2.1 中文优先（Chinese First）

- 所有输出必须中文
- 注释中文
- 测试描述中文
- 架构说明中文
- 风险说明中文
- 归档记录中文

### 2.2 半自动，不越权（Semi‑Auto）

AI 永不自动：

- 执行命令
- 写文件
- 修改代码
- 合并分支
- 创建真实项目结构

### 2.3 信息不足必须先提问

如果输入不完整：

必须先提问，而不是自行补全。

### 2.4 输出结构必须稳定

所有 handler.js 必须：

- 使用固定标题
- 使用固定字段
- 不得新增字段
- 不得删除字段
- 不得改变顺序

### 2.5 自动识别代码类型

必须自动识别：

- 业务代码
- AI 编排代码

并自动切换对应 preset。

## 3. 全局流程规范（Pipeline Flow）

Pipeline OS 的完整流程：

Spec → Execution → Quality → Archive → Pipeline

所有 handler.js 的“下一步建议”必须遵循此流程。

## 4. 全局错误处理规范（Error Handling）

如果无法判断任务或阶段：

- 必须明确说明
- 必须提出需要补充的信息
- 必须保持中文

不得：

- 编造上下文
- 编造需求
- 编造结构
- 编造代码

## 5. 全局测试规范（Testing Standard）

所有代码生成必须：

- 包含中文测试描述
- 覆盖正常、边界、异常情况
- Repository 必须可 mock
- AI 编排代码必须可快照测试

## 6. 全局文档规范（Documentation Standard）

所有文档必须中文，包括：

- 架构说明
- 模块说明
- 输入输出说明
- 测试说明
- 变更说明
- 归档记录

## 7. 全局审计规范（Audit Standard）

Archive Layer 必须生成：

- 变更类型
- 变更摘要
- 变更原因
- 影响范围
- 风险等级
- 验证方式
- 最终归档记录
- Changelog Entry

所有内容必须中文。

## 8. 全局集成规范（Integration Standard）

本 preset 必须被所有 skill.json 加载：

代码

```
"presets": ["pipeline-os-default"]
```

不得遗漏。

## 9. 适配离线模型（Offline Friendly）

适用于：

- Qwen
- DeepSeek
- Llama
- GGUF

要求：

- 输出稳定
- 结构固定
- 中文优先
- 不生成复杂 Markdown
- 不生成外部链接
- 不生成 HTML