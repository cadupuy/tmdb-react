import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./index";

it("should renders without crashing", () => {
  const { container } = render(
    <Router>
      <Footer />
    </Router>
  );

  expect(
    screen.getByText("Developed for @Fleet by Charles-Antoine Dupuy")
  ).toBeInTheDocument();

  expect(screen.getByText("View code")).toBeInTheDocument();

  expect(
    container.querySelector('svg[data-icon="github"]')
  ).toBeInTheDocument();
});
