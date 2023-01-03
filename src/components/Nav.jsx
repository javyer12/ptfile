import React from 'react';
import { useState } from "react";
import "../style/Nav.css";
import { RiHomeHeartFill } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { FcServices } from "react-icons/fc";
import { BiMessageRoundedCheck } from "react-icons/bi";

const Nav = () => {
  const [ activeNav, setActiveNav ] = useState("#");

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#" ? "active" : ""}
      >
        <RiHomeHeartFill />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BsFillJournalBookmarkFill />
      </a>
      {/* <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FcServices />
      </a> */}
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiMessageRoundedCheck />
      </a>
    </nav>
  );
};

export default Nav;
