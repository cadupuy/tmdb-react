import React, { useState } from "react";
import "./index.css";

// Components
import SearchInput from "../../components/SearchInput";

// Images
import Logo from "../../assets/img/logo.svg";

const Header = ({ setMovieId }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleClick = () => {
    window.location.reload();
  };
  return (
    <header>
      <div className="container">
        <img onClick={handleClick} src={Logo} alt="logo" />

        <SearchInput
          searchItem={searchItem}
          setSearchItem={setSearchItem}
          setMovieId={setMovieId}
        />
      </div>
    </header>
  );
};

export default Header;
