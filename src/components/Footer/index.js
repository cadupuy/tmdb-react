import React from "react";
import "./index.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/cadupuy" target="_blank" rel="noreferrer">
        Developed for @Fleet by Charles-Antoine Dupuy
      </a>
      <span>
        <a
          href="https://github.com/cadupuy/TMDB-React"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> View code
        </a>
      </span>
    </footer>
  );
};

export default Footer;
