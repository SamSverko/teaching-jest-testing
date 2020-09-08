const functions = require("../src/utils");

// `test('it works', () => {})` is the Jest test runner.
// `expect(actual).toBe(expected)` is the Jest assertion library.

// .toBe() | Tests primitive data types (`numbers`, `strings`, etc.) to equal a value.
test("Adds 2 + 2 to equal 4", () => {
  const myValue = 2 + 2;
  expect(myValue).toBe(4);
});

// .not() | Tests if value should not be a certain value
test("Adds 2 + 2 to not equal 5", () => {
  const myValue = 2 + 2;
  expect(myValue).not.toBe(5);
});

// .toBeNull() | Tests if value should equal `null`
test("Should be null", () => {
  const myValue = null;
  expect(myValue).toBeNull();
});

// .toBeUndefined() | Tests if value should equal `undefined`
test("Should be undefined", () => {
  const myValue = undefined;
  expect(myValue).toBeUndefined();
});

// .toBeDefined() | Tests if value should equal `toBeUndefined`
test("Should be defined", () => {
  const myValue = "hello";
  expect(myValue).toBeDefined();
});

// .toBeTruth() | Ttests if value should equal `true`
test("Should be truthy", () => {
  const myValueBoolean = true;
  const myValueString = "hello";
  const myValueNumber = 1;
  expect(myValueBoolean).toBeTruthy();
  expect(myValueString).toBeTruthy();
  expect(myValueNumber).toBeTruthy();
});

// .toBeFalsy() | Tests if value should equal `false`
test("Should be falsy", () => {
  const myValueBoolean = false;
  const myValueString = null;
  const myValueNumber = 0;
  expect(myValueBoolean).toBeFalsy();
  expect(myValueString).toBeFalsy();
  expect(myValueNumber).toBeFalsy();
});

// .toEqual() | Tests composite data types (`objects`, `functions`, etc.) to equal a value.
test("User should be Jane Doe object", () => {
  const myValue = {
    firstName: "Jane",
    lastName: "Doe",
  };
  expect(myValue).toEqual({
    firstName: "Jane",
    lastName: "Doe",
  });
});

test("myFunction function exists", () => {
  const myFunction = () => {
    return "hello";
  };
  expect(typeof myFunction).toEqual("function");
});

// .toBeLessThan() & .toBeLessThanOrEqual | Tests of value if value is less than, or if value is less than or equal to a certain value
test("Should be less than 1000", () => {
  const value = 900;
  expect(value).toBeLessThan(1000);
});

test("Should be less than or equal to 1000", () => {
  const value = 1000;
  expect(value).toBeLessThanOrEqual(1000);
});

// .toBeGreaterThan() & .toBeGreaterThanOrEqual | Tests of value if value is greater than, or if value is greater than or equal to a certain value
test("Should be greater than 1000", () => {
  const value = 1100;
  expect(value).toBeGreaterThan(1000);
});

test("Should be greater than or equal to 1000", () => {
  const value = 1000;
  expect(value).toBeGreaterThanOrEqual(1000);
});

// .toMatch() | Tests regular expressions (regex)
test("There is no I in team", () => {
  expect("team").not.toMatch(/i/i);
});

// .toContain | Tests if value exists inside array
test("Admin should be in usernames", () => {
  const usernames = ["maliha", "sam", "admin"];
  expect(usernames).toContain("admin");
});

// Async data
// You must use `expect.assertions(numberOfAssertions)` when working with async data in tests.
// Promise
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async/Await
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});

// Group tests
describe("These tests are grouped", () => {
  test("First grouped test", () => {
    const value = 1;
    expect(value).toBe(1);
  });

  test("Second grouped test", () => {
    const value = 2;
    expect(value).toBe(2);
  });
});

// Execute methods before/after tests
// Before/after each test

// beforeEach(() => functions.initDatabase());
// afterEach(() => functions.closeDatabase());

// Before/after all tests
// beforeAll(() => functions.initDatabase());
// afterAll(() => functions.closeDatabase());

// Before/after a group of tests
describe("Checking names", () => {
  beforeEach(() => functions.checkName());

  test("User is Maliha", () => {
    const user = "Maliha";
    expect(user).toBe("Maliha");
  });

  test("User is Sam", () => {
    const user = "Sam";
    expect(user).toBe("Sam");
  });
});
