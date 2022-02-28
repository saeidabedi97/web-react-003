import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("it should not break while rendering", () => {
    render(<App />);
    expect(screen.getByTestId("main")).toBeVisible();
  });
  it("the searchbar should be visible  ", () => {
    render(<App />);
    expect(screen.getByTestId("searchbar")).toBeVisible();
  });
  it("the searchbar should filter by name   ", () => {
    render(<App />);
    userEvent.type(screen.getByTestId("searchbar"), "saeid");
    expect(screen.getByTestId("main")).toHaveTextContent("saeid");
  });
});
