import React from 'react';
import "../style/About.css";
import { MdLocationOn } from 'react-icons/md'
import me from '../material/me1.png'
import eng from '../material/eng.png';
import spn from '../material/spn.png';



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
              <div className="lang-field">
                <div className="languages">
                  <p> En</p>
                  <img src={eng} alt="English" />
                </div>
                <div className="languages">
                  <p>Es</p>
                  <img src={spn} alt="Spanish" />
                </div>

              </div>
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