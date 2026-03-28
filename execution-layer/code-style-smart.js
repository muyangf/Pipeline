module.exports = async ({ input }) => {

  const text = (input || "").toLowerCase();

  const aiKeywords = [
    "graph", "node", "state", "tool", "agent", "workflow",
    "langgraph", "langchain", "chain", "llm", "model",
    "memory", "retriever", "router", "planner"
  ];

  const bizKeywords = [
    "controller", "service", "repository", "api", "dto",
    "entity", "module", "database", "cache", "http", "rest"
  ];

  const isAI = aiKeywords.some(k => text.includes(k));
  const isBiz = bizKeywords.some(k => text.includes(k));

  if (isAI && !isBiz) {
    return `
# 智能代码生成规范（AI 编排代码模式）

系统已自动识别：当前任务属于【AI 编排代码】（如 LangGraph / Agent / Tool / Node / State）。

请严格遵循以下架构与代码规范：

## 架构规范
- 使用 Node / State / Tool / Graph 的结构组织代码
- 每个 Node 必须单一职责
- 所有数据通过 State 传递，不使用隐式全局状态
- Tool 必须独立、可测试、无副作用
- Graph 结构必须清晰，可追踪执行路径

## 可观察性
- 记录每个 Node 的输入 / 输出
- 记录每次模型调用
- 记录每次工具调用

## 测试规范
- Node 可单测
- Tool 可单测
- Graph 可模拟执行
- State 可快照测试

## 代码风格
- 中文注释
- 清晰的模块划分
- 统一命名规范（camelCase / PascalCase / CONSTANT_CASE）
- 错误处理与日志必须使用中文信息

---

请在后续生成的所有代码中，严格遵守以上 AI 编排代码规范。
`;
  }

  return `
# 智能代码生成规范（业务代码模式）

系统已自动识别：当前任务属于【业务代码】。

请严格遵循以下架构与代码规范：

## 架构规范
- 分层架构：Controller / Service / Repository / Model
- Controller 只负责接收请求与参数校验
- Service 只负责业务逻辑（单一职责）
- Repository 只负责数据访问（DB / API / 文件）
- Model 只负责数据结构定义

## Clean Architecture / SOLID
- Service 不依赖具体实现（通过接口注入 Repository）
- 单一职责、开闭原则、依赖倒置等原则必须遵守

## 测试规范
- Service 可单测
- Repository 可 mock
- Controller 可独立测试
- 测试描述必须使用中文

## 代码风格
- 中文注释
- 统一命名规范（camelCase / PascalCase / CONSTANT_CASE）
- 错误处理与日志必须使用中文信息

---

请在后续生成的所有代码中，严格遵守以上业务代码规范。
`;
};
