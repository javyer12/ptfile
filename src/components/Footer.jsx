import React from 'react';
import brand from "../material/py-best.png";
import fg from "../material/fg.png";
import "../style/Footer.css";
const Footer = () => {
    return (
        <footer>
            <div className="left__footer responsive">
                <a href='#' className='foote__logo'>F. Murillo</a>
                <a href="#services"><img src={brand} className="img-fluid" alt="personal brand" /></a>
            </div>
            <ul className='permalink center__footer'>
                <li><a href='#home'>More about my skills</a></li>
                <li><a href='#home'>Goals</a></li>
                <li><a href='#home'>Achievements</a></li>
            </ul>
            <div className="right__footer">
                <img src={fg} alt='my logo' />
            </div>
        </footer>
    )
}

export default Footer;