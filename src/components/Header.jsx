import React from 'react';
import { useState } from "react";
import "../style/Header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial.jsx";
import me from "../material/javier.png";

function Header() {
  const [ scroll, setScroll ] = useState("#");

  return (
    <header id="home">
      <div className="container header__contianer">
        <h2>Hello, I'm</h2>
        <h1>Francisco Murillo</h1>
        <h4 className="text-light"> Front-end Developer </h4>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a
          href={scroll}
          onClick={() => {
            if (scroll === "#contact") {
              setScroll("#home");
            } else {
              setScroll("#contact");
            }
            console.log(scroll);
          }}
          className="scroll__down"
        >
          {scroll === "#contact" ? (
            <h4 style={{ color: "#4db5ff", fontSize: "15px" }}>Scroll Up</h4>
          ) : (
            <h4 style={{ color: "rgb(218, 0, 164)", fontSize: "15px" }}>Scroll Down</h4>
          )}
        </a>
      </div>
    </header>
  );
}

export default Header;
