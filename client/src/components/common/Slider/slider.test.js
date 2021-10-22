import { render } from "@testing-library/react";

import { Carousel } from "react-responsive-carousel";

describe('Test Product', () => {

test("Smoke test for Slider", () => {
    render(<Carousel />);
  
});

test("Slider to be defined", () => {
    render(<Carousel />);
    const slider = document.querySelector(".carousel-root");
    expect(slider).toBeDefined();
  });
});
