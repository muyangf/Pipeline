# 📘 business-code-style.md（业务代码规范 · 增强版）

本规范适用于所有 **业务代码（Business Code）**：

- Web 服务
- 后端逻辑
- 数据处理
- 模块化业务逻辑
- API 层 / Service 层 / Repository 层
- 任何非 AI 编排代码

不适用于：

- LangGraph
- Agent
- Tool
- Node / State / Workflow

这些属于 `ai-code-style.md`。

## 1. 架构核心原则（Architecture Principles）

业务代码必须遵循：

- 分层架构（Layered Architecture）
- Clean Architecture
- SOLID 原则
- 模块化设计（Modular Design）
- 可测试性优先（Testability First）
- 中文优先（Chinese First）

## 2. 分层架构规范（Layered Architecture）

业务代码必须按以下结构组织：

### 2.1 Controller 层

职责：

- 接收请求
- 参数校验
- 调用 Service
- 返回响应

不得包含：

- 业务逻辑
- 数据访问逻辑

### 2.2 Service 层

职责：

- 业务逻辑核心
- 单一职责
- 调用 Repository
- 组合多个模块

不得包含：

- 数据访问逻辑
- 框架相关逻辑

### 2.3 Repository 层

职责：

- 数据访问（DB / API / 文件）
- 数据持久化
- 数据查询

必须：

- 通过接口注入到 Service
- 可 mock（用于测试）

### 2.4 Model 层

职责：

- 数据结构定义
- DTO / Entity / VO

## 3. Clean Architecture 原则（Clean Architecture）

### 3.1 依赖方向

依赖方向必须从外向内：

Controller → Service → Repository → Model

不得反向依赖。

### 3.2 业务逻辑不依赖框架

Service 层不得依赖：

- Express / Koa / NestJS
- ORM 实现
- HTTP 客户端实现

### 3.3 Repository 必须通过接口注入

示例：

ts

```
interface UserRepository {
  findById(id: string): Promise<User>;
}
```

## 4. SOLID 原则（SOLID Principles）

### 4.1 单一职责（SRP）

每个类 / 函数只做一件事。

### 4.2 开闭原则（OCP）

新增功能通过扩展实现，而不是修改已有代码。

### 4.3 里氏替换（LSP）

Repository 必须可替换（mock / fake / real）。

### 4.4 接口隔离（ISP）

接口必须小而精。

### 4.5 依赖倒置（DIP）

Service 依赖接口，而不是实现。

## 5. 模块化设计（Modular Design）

每个模块必须包含：

代码

```
/module-name
  controller/
  service/
  repository/
  model/
  test/
```

模块之间必须低耦合。

## 6. 命名规范（Naming Convention）

### 6.1 变量

camelCase

### 6.2 函数

动词开头：

- getUser
- updateProfile
- createOrder

### 6.3 类名

PascalCase

### 6.4 常量

CONSTANT_CASE

### 6.5 文件名

代码

```
user.controller.js
user.service.js
user.repository.js
user.model.js
```

## 7. 注释规范（Comment Standard）

### 7.1 文件头注释（必须）

代码

```
/*
 * 功能说明（中文）
 * 输入说明（中文）
 * 输出说明（中文）
 */
```

### 7.2 函数注释（必须）

代码

```
/**
 * 功能说明（中文）
 * @param xxx 输入说明（中文）
 * @returns 输出说明（中文）
 */
```

### 7.3 行内注释

复杂逻辑必须有中文注释。

## 8. 错误处理规范（Error Handling）

必须：

- 使用 try/catch
- 错误信息必须中文
- 必须记录日志
- 不得吞掉异常

## 9. 日志规范（Logging Standard）

日志必须包含：

- 操作说明（中文）
- 输入参数
- 输出结果
- 错误信息

## 10. 测试规范（Testing Standard）

### 10.1 测试描述必须中文

代码

```
describe("用户服务", () => {
  it("应当支持创建用户", () => {});
});
```

### 10.2 覆盖范围

- 正常情况
- 边界情况
- 异常情况

### 10.3 Repository 必须可 mock

Service 测试不得访问真实数据库。

## 11. 文档规范（Documentation Standard）

必须包含：

- 模块说明
- 输入输出
- 依赖关系
- 使用说明
- 测试说明

全部中文。

## 12. 质量规范（Quality Standard）

适用于 `/quality-layer.code-review`：

- 是否遵循分层架构
- 是否遵循 Clean Architecture
- 是否遵循 SOLID
- 是否遵循命名规范
- 是否遵循注释规范
- 是否遵循测试规范
- 是否存在重复代码
- 是否存在潜在 bug
- 是否存在边界遗漏

## 13. 与智能 code-style-smart.js 的集成

本 preset 与智能 code-style 完全兼容：

- 自动识别业务代码
- 自动切换到业务架构规范
- 自动生成中文注释
- 自动生成测试
- 自动生成架构说明