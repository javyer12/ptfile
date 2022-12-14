import React from 'react';
import { BsPatchCheckFill } from "react-icons/bs";
import "../style/experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developmet</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h5>HTML5</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h5>CSS3</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h5>JavaScript</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h5>React js</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h5>Tailwind</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h5>Bootstrap</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* //end of frontend  */}
        <div className="experience__backend">
          <h3>Backend Developmet</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h5>Node.js  || Express.js ||</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h5>PostgreSQL</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h5>C# || Net Core ||</h5>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h5> Python</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h5>Typescript</h5>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h5>Microsoft Azure</h5>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      <a href="https://platzi.com/p/franmurillo/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn">More about my Experience</a>
    </section>
  );
};

export default Experience;
