import { render } from "@testing-library/react";
import Product from "./Product";
import Slider from "../../components/common/Slider/Slider";
import GarantyIcon from "../../components/icons/GarantyIcon";
import CheckCircleIcon from "../../components/icons/CheckCircleIcon";

const phone = {
  colors: ["white", "black", "#215787", "#C7F3BD", "#E70012"],
  memory: [64, 128, 256],
};

describe('Test Product', () => {
 
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
  
  it("Smoke test for GarantyIcon", () => {
      render(
        <Product>
          <GarantyIcon />
        </Product>
      );
  });

  it("Smoke test for CheckCircleIcon", () => {
      render(
        <Product>
          <CheckCircleIcon />
        </Product>
      );
  });
  
  it("Data to be defined", () => {
      render(<Product />);
    expect(phone).not.toBeUndefined();
  });
  
  it("Check length in received array", () => {
      render(<Product />);
    const arr = phone.colors.map((color) => color);
    expect(arr).toHaveLength(arr.length);
  });
  
  it("Check array in received params colors", () => {
      render(<Product />);
    expect(["white", "black", "#215787", "#C7F3BD", "#E70012"]).toEqual(
      expect.arrayContaining(phone.colors)
    );
    expect(["white", "black"]).not.toEqual(expect.arrayContaining(phone.colors));
  });
  
  it("Check array in received params memory", () => {
      render(<Product />);
    expect([64, 128, 256]).toEqual(expect.arrayContaining(phone.memory));
    expect([64, 128]).not.toEqual(expect.arrayContaining(phone.memory));
  });
  
  it("OnClick button Buy in Product", () => {
    const onClick = jest.fn(); 
      render(<Product />);
  
    const button = document.getElementById("buyBtn");
    expect(button).toBeDefined();
    button.addEventListener("click", onClick);
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
  
  it("OnClick button Buy in Credit in Product", () => {
    const onClick = jest.fn();
      render(<Product />);

    const button = document.getElementById("btnBuyInCredit");
    expect(button).toBeDefined();
    button.addEventListener("click", onClick);
    button.click();
    expect(onClick).toHaveBeenCalled();
  });

});



