import { useState } from "react";
import type { Testimonial } from "../types";
import testimonialsData from "../data/testimonials.json";

const testimonials: Testimonial[] = testimonialsData;

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials">
      <div className="carousel slide" data-testid="testimonial-carousel">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              className={`carousel-item${index === activeIndex ? " active" : ""}`}
              key={testimonial.id}
            >
              <h2>{testimonial.quote}</h2>
              <img
                className="testimonial-img"
                src={testimonial.image}
                alt={testimonial.imageAlt}
              />
              <em>
                {testimonial.name}, {testimonial.location}
              </em>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          aria-label="Previous"
          onClick={handlePrev}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          aria-label="Next"
          onClick={handleNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
