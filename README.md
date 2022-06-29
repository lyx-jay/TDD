## What is TDD ? (TEST DRIVE DEVELOPMENT)

Unit tests are just testing a part of your code. What is a unit? Generally refers to a class or function, they have no dependencies or integration, and do not involve framework details. These kinds of tests that focus on a single function are usually simple, easy to write, and quick to run. Write as many unit tests as possible to ensure more bugs are found.

## TDD Principles

**Write test code first, then business code**

1. write a test
2. Run this test and see the expected failure
3. Write as little business code as possible to make the tests pass
4. refactor code
5. Keep repeating the above process

## Use Vitest

```bash
# with npm
npm install -D vitest

# with pnpm
pnpm add -D vitest

# with yarn
yarn add -D vitest
```

## Contribute
The goal of this repository is to help you learn how to write TDD, if you want to add examples to it, please name it according to the specification

```bash
-src
  -example_0
    -index.ts          # business code
    -index.spec.ts     # test code
    -description.md         # detailed description
  -example_1
    -index.ts          # business code
    -index.spec.ts     # test code
    -description.md         # detailed description
  ...
  ...
  ...
```