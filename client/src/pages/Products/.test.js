
import React from "react";
import { Provider } from "react-redux";
import Products from "./index";
import store from "../../redux/store";
import { unmountComponentAtNode } from "react-dom";
import { act, render } from "@testing-library/react";
import {
  sortByAscending,
  sortByDescending,
} from "../../redux/actions/productActions";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Test Products function", () => {
  const fromMin = [{ currentPrice: 1000 }, { currentPrice: 2000 }, { currentPrice: 3000 }];
  const fromMax = [{ currentPrice: 3000 }, { currentPrice: 2000 }, { currentPrice: 1000 }];
  test("Test function Sort By Ascending", () => {
    const sort = sortByAscending(fromMin);
    expect(sort[0].currentPrice).toBe(3000);
  });

  test("Test Function Sort By Descending", () => {
    const sort = sortByDescending(fromMax);
    expect(sort[0].currentPrice).toBe(1000);
  });
});

import { BrowserRouter } from "react-router-dom";

test("Render Products", () => {
  act(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Products />
        </Provider>
      </BrowserRouter>,
      container
    );
  });
});
