- # 📘 **ai-code-style.md（AI 编排代码专用规范 · 最终版）**

  **—— LangGraph / Agent / Tool / Node / State / Workflow 架构规范**

  # # 1. 适用范围（Scope）

  本规范适用于所有 **AI 编排代码（AI Orchestration Code）**：

  - LangGraph
  - LangChain
  - Agent
  - Tool
  - Node
  - State
  - Workflow
  - Router / Planner
  - Memory / Retriever

  不适用于业务代码（Controller / Service / Repository）。

  # # 2. 架构核心原则（Architecture Principles）

  AI 编排代码必须遵循：

  - **Node-first（节点优先）**
  - **State-first（状态驱动）**
  - **Tool-isolated（工具隔离）**
  - **Graph-clarity（图结构清晰）**
  - **Observability（可观察性）**
  - **Replaceability（可替换性）**
  - **Testability（可测试性）**

  这些原则是 LangGraph / Agent 系统的主流最佳实践。

  # # 3. Node 架构规范（Node Architecture）

  ## 3.1 单一职责（SRP）

  每个 Node 必须只做一件事：

  - 解析输入
  - 调用模型
  - 调用工具
  - 更新状态
  - 决策下一步

  不得混合业务逻辑。

  ## 3.2 Node 输入输出

  Node 必须显式声明：

  - 输入字段
  - 输出字段
  - 状态依赖

  ## 3.3 Node 不得：

  - 不得访问全局变量
  - 不得修改外部状态
  - 不得包含业务逻辑
  - 不得直接操作文件系统（必须通过 Tool）

  # # 4. State-first Architecture（状态驱动架构）

  ## 4.1 所有数据必须放入 State

  包括：

  - 用户输入
  - 中间结果
  - 工具返回值
  - 模型输出
  - 决策信息

  ## 4.2 Node 之间通过 State 传递数据

  不得使用：

  - 全局变量
  - 隐式上下文
  - 隐式依赖

  ## 4.3 State 必须可序列化

  用于：

  - 快照测试
  - 回放
  - 调试

  # # 5. Tool 规范（Tool Standard）

  ## 5.1 工具必须独立

  Tool 必须：

  - 无副作用
  - 可测试
  - 可 mock
  - 可替换

  ## 5.2 工具职责

  Tool 只负责：

  - 调用 API
  - 访问数据库
  - 访问文件系统
  - 执行外部命令

  不得包含业务逻辑或模型逻辑。

  ## 5.3 工具必须有中文注释

  包括：

  - 功能说明
  - 输入说明
  - 输出说明

  # # 6. Graph 规范（Graph Standard）

  ## 6.1 Graph 必须结构清晰

  Graph 必须包含：

  - 节点列表
  - 边（Edge）定义
  - 状态定义
  - 初始节点
  - 结束节点

  ## 6.2 Graph 不得出现：

  - 循环依赖
  - 隐式跳转
  - 隐式状态修改

  ## 6.3 Graph 必须有中文架构说明

  包括：

  - 节点职责
  - 状态流向
  - 工具调用点
  - 模型调用点

  # # 7. 可观察性（Observability）

  AI 编排代码必须记录：

  - 每个 Node 的输入
  - 每个 Node 的输出
  - 每次模型调用
  - 每次工具调用
  - 状态变化

  用于：

  - 调试
  - 回放
  - 质量分析

  # # 8. 可测试性（Testability）

  ## 8.1 Node 测试

  Node 必须可单测：

  - 输入 → 输出
  - 状态变化
  - 工具调用 mock

  ## 8.2 Tool 测试

  Tool 必须可单测：

  - 输入 → 输出
  - 错误处理
  - 边界情况

  ## 8.3 Graph 测试

  Graph 必须支持：

  - 模拟执行
  - 状态快照
  - 路径覆盖

  # # 9. 命名规范（Naming Convention）

  ## 9.1 Node 文件名

  Code

  ```
  xxx.node.js
  ```

  ## 9.2 Tool 文件名

  Code

  ```
  xxx.tool.js
  ```

  ## 9.3 Graph 文件名

  Code

  ```
  graph.js
  workflow.js
  ```

  ## 9.4 状态字段命名

  Code

  ```
  camelCase
  ```

  ## 9.5 Node 类名

  Code

  ```
  PascalCase
  ```

  # # 10. 注释规范（Comment Standard）

  ## 10.1 Node 注释

  必须包含：

  Code

  ```
  /*
   * 节点职责（中文）
   * 输入字段（中文）
   * 输出字段（中文）
   * 状态依赖（中文）
   */
  ```

  ## 10.2 Tool 注释

  必须包含：

  Code

  ```
  /*
   * 工具功能（中文）
   * 输入说明（中文）
   * 输出说明（中文）
   */
  ```

  ## 10.3 Graph 注释

  必须包含：

  - 节点列表
  - 状态流向
  - 执行流程

  全部中文。

  # # 11. 错误处理规范（Error Handling）

  AI 编排代码必须：

  - 使用 try/catch
  - 错误信息必须中文
  - 必须记录错误日志
  - 必须更新 State 中的错误字段

  # # 12. 输出格式规范（Output Format）

  AI 编排代码生成时必须包含：

  - 背景
  - 架构说明
  - Node / State / Tool 结构
  - 代码实现
  - 测试代码
  - 下一步建议

  全部中文。

  # # 13. 与智能 code-style-smart.js 的集成

  本 preset 与智能 code-style 完全兼容：

  - 自动识别 AI 编排代码
  - 自动切换到 AI 架构规范
  - 自动生成 Node / State / Tool / Graph
  - 自动生成中文注释
  - 自动生成测试
  - 自动生成架构说明

  # # 14. 离线模型适配规范

  适用于：

  - Qwen
  - DeepSeek
  - Llama
  - 本地 GGUF 模型

  要求：

  - 所有提示词必须中文
  - 所有结构化输出必须稳定
  - 所有代码生成必须遵循本规范

  # 🎉 完成！

  你现在拥有：

  > **AI 编排代码（LangGraph / Agent / Tool）专用的企业级规范**   与你的三层流水线和智能 code-style 完全兼容。