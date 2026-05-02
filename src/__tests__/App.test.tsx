import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders the full page with all sections", () => {
    render(<App />);

    expect(screen.getByText("tindog")).toBeInTheDocument();
    expect(
      screen.getByText("Meet new and interesting dogs nearby."),
    ).toBeInTheDocument();
    expect(screen.getByText("Easy to use.")).toBeInTheDocument();
    expect(screen.getByText("Chihuahua")).toBeInTheDocument();
    expect(
      screen.getByText("Find the True Love of Your Dog's Life Today."),
    ).toBeInTheDocument();
  });

  it("renders all main sections", () => {
    render(<App />);

    expect(document.getElementById("title")).toBeInTheDocument();
    expect(document.getElementById("features")).toBeInTheDocument();
    expect(document.getElementById("testimonials")).toBeInTheDocument();
    expect(document.getElementById("press")).toBeInTheDocument();
    expect(document.getElementById("pricing")).toBeInTheDocument();
    expect(document.getElementById("cta")).toBeInTheDocument();
    expect(document.getElementById("footer")).toBeInTheDocument();
  });
});
