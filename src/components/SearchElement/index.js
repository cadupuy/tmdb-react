import React from "react";
import "./index.css";

const SearchElement = ({ movies, setMovieId, setSearchItem }) => {
  const handleClick = () => {
    setMovieId(movies.id);
    setSearchItem("");
  };

  return (
    <p className="searchElement" onClick={handleClick}>
      {movies.title}
    </p>
  );
};

export default SearchElement;
