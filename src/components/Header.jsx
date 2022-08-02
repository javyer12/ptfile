import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import me from "../material/me.png";
import  "../style/Header.css";

const Header = () => {
    return (
        <>
        <header>
            <div className="contianer header__contianer">
                <h5>Hello I'm</h5>
                <h1>Francisco Murillo</h1>
                <h5 classname="text-light"> Front-end Developer </h5>
                <CTA/>
                <HeaderSocial/>

                <div className="me">
                    <img src={me} alt="me"/>
                </div>

                <a href="#contact" classname="scroll_down">Scroll Down</a>
            </div>
        </header>
        </>
    )
}

export default Header;