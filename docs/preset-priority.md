# 📘 Preset 优先级说明（增强旗舰版）

本文件用于说明 Pipeline OS 中 preset 的加载顺序与优先级。

## 1. 为什么需要 preset 优先级？

因为不同 preset 的职责不同：

- pipeline-3.0.md：全局规范
- chinese-enterprise.md：中文企业级规范
- offline-default.md：离线模型规范
- business-code-style.md：业务代码规范
- ai-code-style.md：AI 编排代码规范

必须保证：

- 全局规范优先
- 语言规范优先
- 离线规范优先
- 代码风格规范最后覆盖

## 2. 正确的 preset 加载顺序（从高到低）

1. **pipeline-3.0.md**
2. **chinese-enterprise.md**
3. **offline-default.md**
4. **business-code-style.md**
5. **ai-code-style.md**

## 3. 为什么是这个顺序？

### 3.1 pipeline-3.0.md（最高优先级）

定义：

- 全局结构
- 全局流程
- 全局语言
- 全局行为
- 全局禁止事项

必须最先加载。

### 3.2 chinese-enterprise.md

定义：

- 中文优先
- 企业级规范
- 注释规范
- 测试规范

必须覆盖所有层。

### 3.3 offline-default.md

定义：

- 离线模型行为
- 输出稳定性
- 上下文管理
- 错误处理

必须在语言规范之后加载。

### 3.4 business-code-style.md / ai-code-style.md

定义：

- 代码风格
- 架构规范
- 注释规范
- 测试规范

必须最后加载，以便覆盖前面的通用规范。

## 4. skill.json 必须统一加载 pipeline-os-default.md

所有 skill.json 必须包含：

代码

```
"presets": ["pipeline-os-default"]
```

pipeline-os-default.md 会自动加载所有 preset。

## 5. 错误示例（禁止）

以下写法会导致行为不一致：

代码

```
"presets": ["pipeline-3.0"]
```

或：

代码

```
"presets": ["business-code-style"]
```

或：

代码

```
"presets": []
```

全部禁止。