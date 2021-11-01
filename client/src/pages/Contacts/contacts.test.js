import { render } from "@testing-library/react";

describe("Test Product", () => {
  it("Smoke test for Product", () => {
    render(<Product />);
  });

  it("Slider to be defined", () => {
    render(
      <Product>
        <Slider />
      </Product>
    );
    const slider = document.querySelector(".carousel-root");
    expect(slider).toBeDefined();
  });
});
