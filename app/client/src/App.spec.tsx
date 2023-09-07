import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("renders h1 text", () => {
  render(
    <div>
      <h1>Vite + React</h1>
    </div>,
  );
  const headerElement = screen.getByRole("heading", { level: 1 });
  expect(headerElement).toHaveTextContent("Vite + React");
});
