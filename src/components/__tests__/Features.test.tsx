import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Features from "../Features";

describe("Features", () => {
  it("renders all three feature titles", () => {
    render(<Features />);
    expect(screen.getByText("Easy to use.")).toBeInTheDocument();
    expect(screen.getByText("Elite Clientele")).toBeInTheDocument();
    expect(screen.getByText("Guaranteed to work.")).toBeInTheDocument();
  });

  it("renders feature descriptions", () => {
    render(<Features />);
    expect(
      screen.getByText("So easy to use, even your dog could do it."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("We have all the dogs, the greatest dogs."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Find the love of your dog's life or your money back.",
      ),
    ).toBeInTheDocument();
  });
});
