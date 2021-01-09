import React from "react";
import "./index.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <p>Developed with React by Charles-Antoine Dupuy</p>
      <span>
        <FontAwesomeIcon icon={faGithub} /> View code
      </span>
    </footer>
  );
};

export default Footer;
