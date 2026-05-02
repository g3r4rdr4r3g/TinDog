import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "../Hero";

describe("Hero", () => {
  it("renders the main heading", () => {
    render(<Hero />);
    expect(
      screen.getByText("Meet new and interesting dogs nearby."),
    ).toBeInTheDocument();
  });

  it("renders two download buttons", () => {
    render(<Hero />);
    const buttons = screen.getAllByRole("button", { name: /download/i });
    expect(buttons).toHaveLength(2);
  });

  it("renders the iPhone mockup image", () => {
    render(<Hero />);
    expect(screen.getByAltText("iphone-mockup")).toBeInTheDocument();
  });
});
