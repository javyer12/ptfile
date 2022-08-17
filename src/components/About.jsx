import "../style/About.css";
import myphoto from "../material/portfolio2.jpg";
import { IoIosCodeWorking } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { IoMdDoneAll } from "react-icons/io";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myphoto} alt="my profile" />{" "}
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <IoIosCodeWorking className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <IoMdDoneAll className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
          <p>
            das lorean lorean lorean lorean lorean lorean lorean lorean lord der
            hist lorean lorean lorean lorean lorean lorean lorean lorean lorean
            lorean lorean lorean lorean lorean lorean lorean lorean lorean
            lorean lorean lorean lorean lorean lorean lorean
          </p>
          <button className="btn btn-primary" href="#contact">
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
