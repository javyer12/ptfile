import React from 'react';
import { Link } from "react-router-dom";
// import { Box, Grid, Button, Tooltip } from '@mui/material/';
import Tooltips from "./blocks/Tooltip";
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import logo from "../material/logo-blue.png";
import { BsCodeSlash } from "react-icons/bs";
import { SiAltiumdesigner } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import "../style/Heading.css";

function Heading() {
        return (
                <div className="heading__contianer">
                        <div className="heading__img">
                        </div>
                        <div className="heading__list">
                                <ul>
                                        <Link to="/coding"> <BsCodeSlash /> Code</Link>
                                        <Link to="/design"><SiAltiumdesigner /> Design</Link>
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