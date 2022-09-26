import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has correct intitial color", () => {
  render(<App />);
  // find an element with the role of button
  const button = screen.getByRole("button", {
    name: "Change to Mid Night Blue",
  });
  expect(button).toHaveStyle({ backgroundColor: "mediumvioletred;" });
});

test("button has correct intitial text", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: "Change to Mid Night Blue",
  });
  expect(button.textContent).toBe("Change to Mid Night Blue");
});

test("button turns blue when clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: "Change to Mid Night Blue",
  });
  expect(button).toHaveStyle({ backgroundColor: "mediumvioletred;" });
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "midnightblue;" });
  expect(button.textContent).toBe("Change to Medium Violet Red");
});

test(" intial conditions", () => {
  render(<App />);
  // check that button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to Mid Night Blue",
  });
  expect(colorButton).toBeEnabled();

  // check that the checbox starts out unchecked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

// when check box is disabled we have to make it disabled
test("button gets enabled and disabled on click of checkbox", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: "Change to Mid Night Blue",
  });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkBox);
  expect(button).toBeDisabled();
  fireEvent.click(checkBox);
  expect(button).toBeEnabled();
});

test("btton color changes to gray when clicking on the checkbox and clicking again becomes red", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: "Change to Mid Night Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray;" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "mediumvioletred;" });
});

test("btton color changes to gray when clicking on the checkbox and clicking again becomes blue", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: "Change to Mid Night Blue",
  });
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "midnightblue;" });

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "midnightblue;" });
});

describe("spaces before the camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("works for one inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnigthBlue")).toBe("Midnigth Blue");
  });
  test("works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
