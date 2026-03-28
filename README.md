# 🚀 Pipeline OS 3.0 (Enhanced Edition)

A reproducible, auditable, and extensible **multi‑layer AI development operating system** designed for AI‑assisted software engineering.

Pipeline OS decomposes the entire development lifecycle into five layers:

1. **Spec Layer** – Define *what* to build
2. **Execution Layer** – Define *how* to build
3. **Quality Layer** – Ensure *how well* it is built
4. **Archive Layer** – Record *what happened*
5. **Pipeline Layer** – Decide *what to do next*

All layers follow:

- Chinese‑first output
- Stable and deterministic structure
- Ask‑before‑assume (no hallucinated details)
- Semi‑automatic (never oversteps user authority)
- Offline‑friendly (Qwen / DeepSeek / Llama / GGUF)
- Fully auditable and reproducible

## 📦 Directory Structure

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

## 🧠 Five‑Layer Architecture

### 1. Spec Layer

Responsible for defining *what* to build:

- specify – requirement clarification
- plan – technical design
- tasks – task breakdown
- change-spec – change specification
- constitution – project constitution

Output: structured requirements and plans.

### 2. Execution Layer

Responsible for *how* to build:

- tdd – test‑driven development
- implement – feature implementation
- debugging – debugging analysis
- subagent – sub‑task execution
- execute-plan – execute by plan
- code-style-smart – smart code‑style adaptation

Output: code, tests, debugging reports.

### 3. Quality Layer

Responsible for *how well* it is built:

- code-review – code review
- refactor – refactoring
- finish-branch – branch completion report

Output: review results and improved code.

### 4. Archive Layer

Responsible for recording *what happened*:

- archive – archive record
- changelog – changelog entry

Output: auditable and reproducible logs.

### 5. Pipeline Layer

Responsible for *what to do next*:

- new-project – new project roadmap
- update-feature – feature update roadmap
- classify-task – task classification
- next-step – intelligent next‑step engine

Output: next command, alternatives, missing steps.

## 🧩 Preset System (Core)

Every `skill.json` must load:

代码

```
"presets": ["pipeline-os-default"]
```

`pipeline-os-default` automatically loads:

- pipeline‑3.0
- chinese‑enterprise
- offline‑default
- business‑code‑style
- ai‑code‑style

Ensuring consistent behavior across all layers.

## 🧱 Handler Template

All handlers follow a unified structure:

代码

```
module.exports = async ({ input }) => {
  return `
# Title

Input:
${input}

...
`;
};
```

This ensures deterministic output for offline models.

## 🔍 Ask‑Before‑Assume

Pipeline OS enforces:

> **If information is missing, the system must ask questions instead of guessing.**

This eliminates hallucinated requirements or code.

## 🔒 Semi‑Automatic, Never Overstepping

The system will **never** automatically:

- execute commands
- write files
- modify code
- merge branches

All actions require explicit user confirmation.

## 🧭 Architecture Diagram (Mermaid)

代码

```
graph TD
  A[Spec Layer<br>Requirements / Plans] --> B[Execution Layer<br>Implementation / Debugging]
  B --> C[Quality Layer<br>Review / Refactor]
  C --> D[Archive Layer<br>Archive / Changelog]
  D --> E[Pipeline Layer<br>Next Step Engine]
  E --> A
```

## 🎯 Use Cases

- AI‑assisted development
- Offline model workflows (Qwen / DeepSeek / Llama / GGUF)
- Enterprise‑grade development processes
- Auditable and reproducible engineering
- Multi‑developer structured collaboration

## ❤️ Author’s Note

Pipeline OS 3.0 is not just a prompt — it is a **real, operational, extensible AI development operating system**.

You are welcome to extend it, customize it, and build your own development workflow on top of it.