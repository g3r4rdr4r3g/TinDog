import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("renders the brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("tindog")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("toggles mobile menu on button click", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const toggler = screen.getByLabelText("Toggle navigation");
    const menu = document.getElementById("navbarNav");

    expect(menu).not.toHaveClass("show");

    await user.click(toggler);
    expect(menu).toHaveClass("show");

    await user.click(toggler);
    expect(menu).not.toHaveClass("show");
  });
});
