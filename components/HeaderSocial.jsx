import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "../style/Header.css";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/francisco-javier-murillo-guillen-6302bb203/"
      >
        <BsLinkedin />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/javyer12">
        <FaGithub />
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/FBollys">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocial;
