import React from "react";
import "./index.css";

// Components
import SearchInput from "../../components/SearchInput";

// Images
import Logo from "../../assets/img/logo.svg";

const Header = ({ setMovieId }) => {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <header>
      <div className="container">
        <img onClick={handleClick} src={Logo} alt="logo" />

        <SearchInput setMovieId={setMovieId} />
      </div>
    </header>
  );
};

export default Header;
