import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hi From my app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi From my app/i);
  expect(linkElement).toBeInTheDocument();
});
