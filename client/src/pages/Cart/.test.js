import React from "react";
import { Provider } from "react-redux";
import Products from "./index";
import store from "../../redux/store";
import { unmountComponentAtNode } from "react-dom";
import { act, render } from "@testing-library/react";

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
