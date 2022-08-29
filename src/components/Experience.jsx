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
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>React js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>Bootstrap</h4>
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
                <h4>Node.js  || Express.js ||</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>C# || Net Core ||</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4> Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="ex-icon" />
              <div>
                <h4>Microsoft Azure</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
