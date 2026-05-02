import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders copyright text", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(`\u00A9 Copyright ${year} TinDog`),
    ).toBeInTheDocument();
  });

  it("renders all social media links", () => {
    render(<Footer />);
    expect(screen.getByLabelText("Twitter")).toBeInTheDocument();
    expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
    expect(screen.getByLabelText("Instagram")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("social links open in new tab", () => {
    render(<Footer />);
    const twitterLink = screen.getByLabelText("Twitter");
    expect(twitterLink).toHaveAttribute("target", "_blank");
    expect(twitterLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
