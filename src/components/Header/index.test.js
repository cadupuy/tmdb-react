import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./index";

it("should renders without crashing", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  expect(screen.getByAltText("logo")).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText("Search Movie Title...")
  ).toBeInTheDocument();
});
