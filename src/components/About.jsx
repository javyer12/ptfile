import React from 'react';
import "../style/About.css";
import { MdLocationOn } from 'react-icons/md'
import { IoIosCodeWorking } from "react-icons/io";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import me from '../material/me.png'
import eng from '../material/eng.png';
import spn from '../material/spn.png';

import { FaLanguage } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";


const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="about_me about__container">
        <div className="left-section">
          <div className="about__me-img">
            <img src={me} alt="me" />
          </div>
        </div>

        <div className="right-section">
          <p>
            Francisco Murillo loves evolution, science and <span className="highlight__word">technological development</span>, lover of new technologies that help us build a <span className="highlight__word">digital world </span>in the near future, I'm a frontend dev-junior with <span className="highlight__word">JavaScript, React js</span>, others, passionate about it sports and the 7 arts.
          </p>
          <div className='about_list'>
            <ul>
              <li><p><MdLocationOn /></p></li>
              <li><p>El Progreso, Yoro, Honduras</p></li>
              <li>
                <div className="languages">
                  <img src={spn} alt="Spanish" />
                  <img src={eng} alt="English" />
                </div>
                <p>Spanish || English</p>
              </li>
            </ul>
          </div>
          <div className='btn_about-me'>
            <a className="me-btn" href="#contact">
              Let's Talk
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
export default About;
// DejaVu Sans Mono,