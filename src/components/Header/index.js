import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

// Components
import Search from "../../components/Search";

// Images
import Logo from "../../assets/img/logo.svg";

const Header = ({ searchItem, setSearchItem }) => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <Search searchItem={searchItem} setSearchItem={setSearchItem} />
      </div>
    </header>
  );
};

export default Header;
