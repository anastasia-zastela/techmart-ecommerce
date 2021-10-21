import { act, render } from "@testing-library/react";

import { Carousel } from "react-responsive-carousel";

test("Smoke test for Slider", () => {
  act(() => {
    render(<Carousel />);
  });
});

test("Slider to be defined", () => {
  act(() => {
    render(<Carousel />);
    const slider = document.querySelector(".carousel-root");
    expect(slider).toBeDefined();
  });
});
