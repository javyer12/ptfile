import "../style/Header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial.jsx";
import me from "../material/me.png";

function Header() {
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

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
