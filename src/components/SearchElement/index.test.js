import React from "react";
import SearchElement from "./index";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";

const elem = {
  popularity: 34.023,
  vote_count: 7126,
  video: false,
  poster_path: "/oErEczcVUmJm0EPdvWsvK4g4Lv3.jpg",
  id: 769,
  adult: false,
  backdrop_path: "/sw7mordbZxgITU877yTpZCud90M.jpg",
  original_language: "en",
  original_title: "GoodFellas",
  genre_ids: [80, 18],
  title: "GoodFellas",
  vote_average: 8.4,
  overview:
    "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
  release_date: "1990-09-12",
};

it("renders without crashing", () => {
  const setSearchItem = jest.fn();
  const setMovieId = jest.fn();
  const index = elem.id;

  const { container } = render(
    <Router>
      <SearchElement
        key={index}
        movies={elem}
        setMovieId={setMovieId}
        setSearchItem={setSearchItem}
      />
    </Router>
  );
  expect(screen.getByText(elem.title)).toBeInTheDocument();
  fireEvent.click(container.querySelector("p.searchElement"));
  expect(setSearchItem).toHaveBeenCalledTimes(1);
  expect(setMovieId).toHaveBeenCalledTimes(1);
});
