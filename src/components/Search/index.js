import React from "react";
import "./index.css";

const SearchBar = ({ searchItem, setSearchItem }) => {
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
    </div>
  );
};

export default SearchBar;
