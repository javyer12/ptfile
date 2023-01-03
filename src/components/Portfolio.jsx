import React from 'react';
import "../style/Portfolio.css";
import { FaGithub } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import portfolio1 from "../material/green.png";
import portfolio2 from "../material/wanda.png";
import portfolio3 from "../material/to-do.png";
import portfolio4 from "../material/ask-for-help.png";
import portfolio5 from "../material/fox.png";
import portfolio6 from "../material/github.png";

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
  {
    id: 4,
    portfolioName: " Ask for help",
    images: portfolio4,
    githubLink: "https://github.com/javyer12/hapi",
    demoLink: "https://github.com/javyer12",
  },
  {
    id: 5,
    portfolioName: " FOX LAZY",
    images: portfolio5,
    githubLink: "https://github.com/javyer12/lazy_loading",
    demoLink: "https://lovingfoxes.netlify.app/",
  },
  {
    id: 6,
    portfolioName: " Github Query",
    images: portfolio6,
    githubLink: "https://github.com/javyer12/seek-github",
    demoLink: "https://github.com/javyer12",
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
            <h2 className="portfolio-title">{item.portfolioName}</h2>
            <div className="portfolio__item-cta">
              <a
                target="_blank"
                rel=" noopener noreferrer"
                href={item.githubLink}
              // className="btn btn-g"
              >
                <FaGithub className="project-icon" /> {" "}
                {/* Github */}
              </a>
              <a
                href={item.demoLink}
                // className="btn-d  btn btn-primary"
                target="_blank"
                rel=" noopener noreferrer"
              >
                <FaChrome className="project-icon" /> {" "}
                {/* Demo Project */}
              </a>
            </div>
          </article>
        ))}

      </div>
      <a href="https://github.com/javyer12?tab=repositories"
        target="_blank"
        rel=" noopener noreferrer"
        className="btn more_project">More Porjects</a>
    </section>
  );
};

export default Portfolio;
