import React from 'react';
import { Link } from "react-router-dom";
import { BsCodeSlash } from "react-icons/bs";
import { SiAltiumdesigner } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";


import "../style/Heading.css";

function Heading() {
        return (
                <div className="heading__contianer">
                        <div className="heading__img">
                                <Link to="/"><h3 className='javier'>Javier</h3></Link>
                        </div>
                        <div className="heading__list">
                                <ul>
                                        <Link to="/coding" className='heading__option'> <BsCodeSlash /> Code</Link>
                                        <Link to="/design" className='heading__option'><SiAltiumdesigner /> Design</Link>
                                </ul>
                        </div>
                        <div className="heading__close">
                                <Link to="/">
                                        <GiHamburgerMenu className="menu__icon" />
                                </Link>
                        </div>
                </div>

        )
}

export default Heading