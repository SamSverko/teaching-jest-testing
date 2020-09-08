# teaching-jest-testing

This repo contains examples to teach the basics of [Jest](https://jestjs.io/) and [Testing Library (React)](https://testing-library.com/docs/react-testing-library/intro).

---

## Getting Started

1) Clone repository, run `git clone git@github.com:SamSverko/teaching-jest-testing.git`.
2) Install dependencies, run `yarn`.
3) Start React app, run `yarn start`.

---

## Project Orientation

There are two lessons, **Jest Basics** and **Testing Library**.

The only files you will need to edit are located inside the `__tests__` directory.

There are two types of test files, or "**Test Suites**", inside `__tests__`:

1) **Lesson Suites** (files that end with the convention `.start.test.js`).
2) **Answer Suites** (files that end with the convention `.end.test.js`).

Each **Lesson Suite** will have a respective **Answer Suite** (e.g. the Lesson Suite file `1-jest-basics.start.test.js` has a respective **Answer Suite** file `1-jest-basics.end.test.js`).

---

## Helpful Commands

- To test all **Lesson Suites**, run `yarn test`.
- To test and watch all **Lesson Suites**, run `yarn test-watch`.
- To test all **Test Suites** (i.e. all **Lesson** & **Answer Suites**), run `yarn test-all`.
- To test a specific file, run `yarn jest __tests__/[TEST_SUITE_FILE_NAME]` (e.g. `yarn jest __tests__/1-jest-basics.start.test.js`).

---

## Resources

- [Jest | Getting Started](https://jestjs.io/docs/en/getting-started)
- [Testing Library | Introduction](https://testing-library.com/docs/intro)
- [Kent C. Dodds | How to know what to test](https://kentcdodds.com/blog/how-to-know-what-to-test)
- [YouTube - Traversy Media | Jest Crash Course - Unit Testing in JavaScript](https://www.youtube.com/watch?v=7r4xVDI2vho)
- [YouTube - Headway | Intro to React Testing [Jest and React Testing Library Tutorial]](https://www.youtube.com/watch?v=ZmVBCpefQe8)

---

## Acknowledgements

The examples found in this repo have been developed off the following tutorials:
- [Traversy Media's Jest Crash Course - Unit Testing in JavaScript](https://www.youtube.com/watch?v=7r4xVDI2vho)
- [Headway's Intro to React Testing [Jest and React Testing Library Tutorial]](https://www.youtube.com/watch?v=ZmVBCpefQe8)
