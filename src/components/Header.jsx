import React from "react";
import { useState } from "react";
import "../style/Header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial.jsx";
import me from "../material/perfil.jpeg";

function Header() {
  const [ scroll, setScroll ] = useState("#");

  return (
    <header id="home">
      <div className="container header__contianer">
        <div className="header__info">
          <h3>Hello, I'm</h3>
          <h1>Francisco Murillo</h1>
          <h4 className=""> Front-End Developer </h4>
        </div>
        <div className="cta__header">
          <CTA />
        </div>
        <div className="social__header">
          <HeaderSocial />
        </div>

        <div className="me">
          <img src={me} alt="me" />
        </div>

        <div className="scroll">
          <a
            href={scroll}
            onClick={() => {
              if (scroll === "#contact") {
                setScroll("#home");
              } else {
                setScroll("#contact");
              }
            }}
            className="scroll__down"
          >
            {scroll === "#contact" ? (
              <h4 style={{ color: "#4db5ff", fontSize: "15px" }}>Scroll Up</h4>
            ) : (
              <h4 style={{ color: "#b9b8b5", fontSize: "15px" }}>
                Scroll Down
              </h4>
            )}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
