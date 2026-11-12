# Complete TypeScript Learning Path

Follow the numbered folders in order. Each folder contains a focused `.ts` lesson.
Lessons use comments to explain the topic, use cases, example code, and expected output.

## Setup

```bash
npm init -y
npm install --save-dev typescript tsx
npx tsc --init
```

Run one lesson from its folder, for example:

```bash
npx tsx 002_basic_types/basic_types.ts
```

Check all TypeScript files (some snippets are intentionally instructional and may
need to be run one at a time if you add further examples):

```bash
npx tsc --noEmit
```

## Learning order

1. Fundamentals: folders 001–018
2. Type safety and composition: folders 019–030
3. Object-oriented TypeScript: folders 031–035
4. Modules and runtime programming: folders 036–047
5. Project setup and revision: folders 048–050

## Important

- Do not use `any` as a default; prefer a specific type or `unknown`.
- Turn on `strict` in `tsconfig.json` for new projects.
- TypeScript checks types at compile time; runtime data still needs validation.
- Learn by editing examples, introducing a deliberate type error, then fixing it.