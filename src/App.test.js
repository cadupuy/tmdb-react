import React from "react";
import App from "./App";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";

it("should display homepage", async () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  await waitForElementToBeRemoved(container.querySelector("div.loading"));

  const searchInput = screen.getByLabelText("search-label");
  fireEvent.change(searchInput, { target: { value: "Star Wars" } });

  expect(searchInput.value).toBe("Star Wars");
});
