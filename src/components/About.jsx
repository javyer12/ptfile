import React from 'react';
import "../style/About.css";
// import myphoto from "../material/portfolio6.jpg";
import me from "../material/perfil.jpeg"
// import me1 from "../material/portfolio6.jpg";
import { IoIosCodeWorking } from "react-icons/io";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import { FiUsers } from "react-icons/fi";
import { IoMdDoneAll } from "react-icons/io";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me ">
          <div className="about__me-image">
            {/* <img src={myphoto} alt="my profile" />{" "} */}
            <div class="gallery__1">
              <img src="https://picsum.photos/id/1040/300/300" alt="a house on a mountain" />
              <img src="https://picsum.photos/id/106/300/300" alt="sime pink flowers" />
              <img src="https://picsum.photos/id/136/300/300" alt="big rocks with some trees" />
              {/* <img src="https://picsum.photos/id/110/300/300" alt="a cool landscape" /> */}
            </div>
          </div>
          <div className=" gallery">
            <img src="https://picsum.photos/id/1040/300/300" alt="a house on a mountain" />
            <img src={me} alt="sime pink flowers" />
            {/* <img src="https://picsum.photos/id/106/300/300" alt="sime pink flowers" /> */}
            <img src="https://picsum.photos/id/136/300/300" alt="big rocks with some trees" />
            <img src="https://picsum.photos/id/1039/300/300" alt="a waterfall, a lot of tree and a great view from the sky" />
            <img src="https://picsum.photos/id/110/300/300" alt="a cool landscape" />
            <img src="https://picsum.photos/id/1047/300/300" alt="inside a town between two big buildings" />
            <img src="https://picsum.photos/id/1057/300/300" alt="a great view of the sea above the mountain" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <IoIosCodeWorking className="about__icon" />
              <h6>Experience</h6>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card hidded_class">
              <FiUsers className="about__icon" />
              <h6>Clients</h6>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card hidded_class">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h6>Personal Brand</h6>
              <small>Physoft</small>
            </article>
            <article className="about__card">
              <IoMdDoneAll className="about__icon" />
              <h6>Projects</h6>
              <small>50+ Completed</small>
            </article>
          </div>
          <div className="about__desc">

            <p>
              I am a person who loves evolution, science and <span className="highlight__word">technological development</span>, lover of new technologies that help us build a <span className="highlight__word">digital world </span>in the near future, I am a frontend dev-junior with <span className="highlight__word">JavaScript, React js</span> others, passionate about it sports and the 7 arts.
            </p>
            <a className="btn btn-primary" href="#contact">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
