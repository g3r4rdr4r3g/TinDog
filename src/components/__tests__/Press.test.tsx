import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Press from "../Press";

describe("Press", () => {
  it("renders all press logos", () => {
    render(<Press />);
    expect(screen.getByAltText("TechCrunch logo")).toBeInTheDocument();
    expect(screen.getByAltText("The Next Web logo")).toBeInTheDocument();
    expect(screen.getByAltText("Business Insider logo")).toBeInTheDocument();
    expect(screen.getByAltText("Mashable logo")).toBeInTheDocument();
  });

  it("renders exactly four press images", () => {
    render(<Press />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(4);
  });
});
