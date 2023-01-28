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

// const About = () => {
//   return (
//     <section id="about">
//       <h5>Get to Know</h5>
//       <h2>About me</h2>

//       <div className="container about__container">
//         {/* <div className="about__me "> */}
//         {/*<div className="about__me-img cards__about"> */}
//         {/* <CardsAbout className="upper" />
//             <CardsAbout className="middle" />
//             <CardsAbout className="buttom" /> */}
//         {/* </div> */}
//         <div className="about__cards">
//           <article className="about__card">
//             <IoIosCodeWorking className="about__icon" />
//             <h6>Experience</h6>
//             <small>1+ Years Working</small>
//           </article>
//           <article className="about__card hidded_class">
//             <FaLanguage className="about__icon" />
//             <h6>Languages</h6>
//             <div className="languages">
//               <div>
//                 <p>Spanish</p>
//                 <img src={spn} alt="Spanish" />
//                 <small>Native</small>
//               </div>
//               <div>
//                 <p>English</p>
//                 <img src={eng} alt="English" />
//                 <small>B2</small>
//               </div>
//             </div>

//           </article>
//           <article className="about__card hidded_class">
//             <AiOutlineFundProjectionScreen className="about__icon" />
//             <h6>Personal Brand</h6>
//             <small>Physoft</small>
//           </article>
//           <article className="about__card">
//             <IoMdDoneAll className="about__icon" />
//             <h6>Projects</h6>
//             <small>30+ Completed</small>
//           </article>
//         </div>
//         {/* </div> */}

//         <div className="about__content">
//           <p>
//             Francisco Murillo is a person who loves evolution, science and <span className="highlight__word">technological development</span>, lover of new technologies that help us build a <span className="highlight__word">digital world </span>in the near future, I am a frontend dev-junior with <span className="highlight__word">JavaScript, React js</span> others, passionate about it sports and the 7 arts.
//           </p>
//           <a className="btn btn-primary" href="#contact">
//             Let's Talk
//           </a>
//         </div>
//       </div>
//     </section >
//   );
// };

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="about_me about__container">
        <div className="left-section">
          <div className=" about__me-img">
            {/* <RoundedImages images={spn} name="me" className="me" /> */}
            <img src={me} alt="me" />
          </div>

        </div>

        <div clasName="right-section ">
          <p>
            Francisco Murillo loves evolution, science and <span className="highlight__word">technological development</span>, lover of new technologies that help us build a <span className="highlight__word">digital world </span>in the near future, I'm a frontend dev-junior with <span className="highlight__word">JavaScript, React js</span>, others, passionate about it sports and the 7 arts.
          </p>
          <div>

            <a className="me-btn" href="#contact">
              Let's Talk
            </a>
          </div>
          {/* <div className='about_list'>
            <ul>
              <li><p><MdLocationOn /></p></li>
              <li><p>El Progreso, Yoro</p></li>
              <li>
                <div className="languages">
                  <div>
                    <img src={spn} alt="Spanish" />
                  </div>
                  <div>
                    <img src={eng} alt="English" />
                  </div>
                </div>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  )
}
export default About;
// DejaVu Sans Mono,