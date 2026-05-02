import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Testimonials from "../Testimonials";

describe("Testimonials", () => {
  it("renders the first testimonial as active by default", () => {
    render(<Testimonials />);
    expect(screen.getByText(/Pebbles, New York/)).toBeInTheDocument();
    expect(screen.getByAltText("dog-profile")).toBeInTheDocument();
  });

  it("navigates to the next testimonial on Next click", async () => {
    const user = userEvent.setup();
    render(<Testimonials />);

    const nextButton = screen.getByLabelText("Next");
    await user.click(nextButton);

    const activeItems = document.querySelectorAll(".carousel-item.active");
    expect(activeItems).toHaveLength(1);
    expect(activeItems[0]).toHaveTextContent("Beverly, Illinois");
  });

  it("navigates to the previous testimonial on Previous click", async () => {
    const user = userEvent.setup();
    render(<Testimonials />);

    const prevButton = screen.getByLabelText("Previous");
    await user.click(prevButton);

    const activeItems = document.querySelectorAll(".carousel-item.active");
    expect(activeItems).toHaveLength(1);
    expect(activeItems[0]).toHaveTextContent("Beverly, Illinois");
  });

  it("wraps around from last to first testimonial", async () => {
    const user = userEvent.setup();
    render(<Testimonials />);

    const nextButton = screen.getByLabelText("Next");
    await user.click(nextButton);
    await user.click(nextButton);

    const activeItems = document.querySelectorAll(".carousel-item.active");
    expect(activeItems).toHaveLength(1);
    expect(activeItems[0]).toHaveTextContent("Pebbles, New York");
  });
});
