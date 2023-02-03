import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Portfolio.css";
import { FaGithub } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import portfolio1 from "../material/green.png";
import portfolio2 from "../material/wanda.png";
import portfolio3 from "../material/to-do.png";


// const URL_REPO = "https://api.github.com/users/javyer12/repos"
const portfolios = [
  {
    id: 1,
    portfolioName: " Green A Phrases",
    images: portfolio1,
    githubLink: "https://github.com/javyer12/green-a",
    demoLink: "https://javagreen.netlify.app/",
  },
  {
    id: 2,
    portfolioName: " WANDA LANDING PAGE",
    images: portfolio2,
    githubLink: "https://github.com/javyer12/async-landing",
    demoLink: "https://javyer12.github.io/async-landing/index.html",
  },
  {
    id: 3,
    portfolioName: "TO-DO LIST",
    images: portfolio3,
    githubLink: "https://github.com/javyer12/to-doList",
    demoLink: "https://todoyourlist.netlify.app/",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolios.map((item) => (
          <article key={item.id} className="portfolio__item  bg-light">
            <div className="portfolio__item-img">
              <img src={item.images} alt="demo project" />
            </div>
            <div className="portfolio__item-cta">
              <h2 className="portfolio-title">{item.portfolioName.toLocaleUpperCase()}</h2>
              <div className="item__links">
                <a
                  target="_blank"
                  rel=" noopener noreferrer"
                  href={item.githubLink}
                  className="portfolio_links"
                >
                  <FaGithub className="project-icon" /> {" "}
                  Github
                </a>
                <a
                  href={item.demoLink}
                  className="portfolio_links"
                  target="_blank"
                  rel=" noopener noreferrer"
                >
                  <FaChrome className="project-icon" /> {" "}
                  Demo Project
                </a>
              </div>
            </div>
          </article>
        ))}

      </div>
      <div className='more__projects-btn'>
        <Link to="/more-portfolio"
          target="_blank"
          rel=" noopener noreferrer"
          className="btn more-project">More Porjects</Link>
      </div>
    </section>
  );
};

export default Portfolio;
