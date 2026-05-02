import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Pricing from "../Pricing";

describe("Pricing", () => {
  it("renders the section heading", () => {
    render(<Pricing />);
    expect(
      screen.getByText("A Plan for Every Dog's Needs"),
    ).toBeInTheDocument();
  });

  it("renders all three plan names", () => {
    render(<Pricing />);
    expect(screen.getByText("Chihuahua")).toBeInTheDocument();
    expect(screen.getByText("Labrador")).toBeInTheDocument();
    expect(screen.getByText("Mastiff")).toBeInTheDocument();
  });

  it("renders prices for each plan", () => {
    render(<Pricing />);
    expect(screen.getByText("Free")).toBeInTheDocument();
    expect(screen.getByText("$49 / mo")).toBeInTheDocument();
    expect(screen.getByText("$99 / mo")).toBeInTheDocument();
  });

  it("renders three Sign Up buttons", () => {
    render(<Pricing />);
    const buttons = screen.getAllByRole("button", { name: /sign up/i });
    expect(buttons).toHaveLength(3);
  });

  it("applies correct button styles for highlighted plans", () => {
    render(<Pricing />);
    const buttons = screen.getAllByRole("button", { name: /sign up/i });
    expect(buttons[0]).toHaveClass("btn-outline-dark");
    expect(buttons[1]).toHaveClass("btn-dark");
    expect(buttons[2]).toHaveClass("btn-dark");
  });
});
