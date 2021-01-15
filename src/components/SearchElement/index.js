import React from "react";
import "./index.css";

const SearchElement = ({ movie, setMovieId, setSearchItem }) => {
  const handleClick = () => {
    setMovieId(movie.id);
    setSearchItem("");
  };

  return (
    <p className="searchElement" onClick={handleClick}>
      {movie.title}
    </p>
  );
};

export default SearchElement;
