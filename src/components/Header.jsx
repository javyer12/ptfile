import React from "react";
import { useState } from "react";
import "../style/Header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial.jsx";
// import me from "../material/front.jpg";

function Header() {
  const [ scroll, setScroll ] = useState("#");


  return (
    <header id="home">
      <div className="container header__contianer">
        <div className="one header__info">
          <h3>Welcome, This is </h3>
          <h1>Francisco Murillo</h1>
          <h4 className=""> Front-End Developer </h4>
        </div>

        {/* <div className="two me">
          <img src={me} alt="me" />
        </div> */}

        <div className="call-to-action">
          <div className="cta__header">
            <CTA />
          </div>
          <div className="social__header">
            <HeaderSocial />
          </div>
        </div>


        <div className="four scroll">
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
              <h4 style={{ color: "#000", fontSize: "15px" }}>Scroll Up</h4>
            ) : (
              <h4 style={{ color: "#000", fontSize: "15px" }}>
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
