import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiPlatzi } from "react-icons/si";

import "../style/Header.css";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/francisco-javier-murillo-guillen-6302bb203/"
      >
        <BsLinkedin className="social_icon" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/javyer12">
        <FaGithub className="social_icon" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/FBollys">
        <BsTwitter className="social_icon" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/FBollys">
        <SiPlatzi className="social_icon" />
      </a>
    </div>
  );
};

export default HeaderSocial;
