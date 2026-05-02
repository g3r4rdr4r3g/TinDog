import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CallToAction from "../CallToAction";

describe("CallToAction", () => {
  it("renders the CTA heading", () => {
    render(<CallToAction />);
    expect(
      screen.getByText("Find the True Love of Your Dog's Life Today."),
    ).toBeInTheDocument();
  });

  it("renders two download buttons", () => {
    render(<CallToAction />);
    const buttons = screen.getAllByRole("button", { name: /download/i });
    expect(buttons).toHaveLength(2);
  });
});
