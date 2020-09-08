import React from "react";
import ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/dom";
import { fireEvent, render } from "@testing-library/react";

import Counter from "../src/components/counter";

// Rendering components for testing
// This requires the babel.config.js file
it("Component renders OK", () => {
  const root = document.createElement("div");
  ReactDOM.render(<Counter />, root);

  expect(root.querySelector("h1").textContent).toBe("0");
});

// Use DOM Testing Library for Querying the DOM
test("renders the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<Counter />, root);

  const { getByText } = getQueriesForElement(root);
  expect(getByText("0")).not.toBeNull();
  // you can also omit the expect, because getByText is the assertion
  // getByText('hello') // this works same as line above
});

// Rendering and Testing with React Testing Library
// getByText
test("renders the correct content", () => {
  const { getByText } = render(<Counter />);

  expect(getByText("0")).not.toBeNull();
});

// getByTestId
test("renders the correct content", () => {
  const { getByTestId } = render(<Counter />);

  expect(getByTestId("counter")).not.toBeNull();
});

// Simulating User Interaction
test("allows users to interact with component", () => {
  const { getByTestId } = render(<Counter />);

  const header = getByTestId("counter");
  const button = getByTestId("button-up");

  fireEvent.click(button);
  expect(header.textContent).toBe("1");
});
