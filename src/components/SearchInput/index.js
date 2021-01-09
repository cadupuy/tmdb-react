import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

// Components
import SearchElement from "../SearchElement";

const SearchBar = ({ searchItem, setSearchItem, setMovieId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchItem !== "") {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${searchItem}&api_key=1ac11d33c66adb8718d8acf5fedd457f`
          );
          setMovies(response.data);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    }
  }, [searchItem]);

  const handleSearch = (ev) => {
    setSearchItem(ev.target.value);
  };

  return (
    <div className="search-bar">
      <input
        onChange={handleSearch}
        type="text"
        value={searchItem}
        placeholder="Search Movie Title..."
      />

      {movies.results && searchItem !== "" && (
        <div className="searchElementsContainer">
          {movies.results.slice(0, 6).map((elem, index) => {
            return (
              <SearchElement
                key={index}
                movies={elem}
                setMovieId={setMovieId}
                setSearchItem={setSearchItem}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
