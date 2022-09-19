import React from 'react';
import "../style/Portfolio.css";
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
    image: portfolio1,
    githubLink: "https://github.com/javyer12/green-a",
    demoLink: "https://javagreen.netlify.app/",
  },
  {
    id: 2,
    portfolioName: " WANDA LANDING PAGE",
    image: portfolio2,
    githubLink: "https://github.com/javyer12/async-landing",
    demoLink: "https://github.com/",
  },
  {
    id: 3,
    portfolioName: "TO-DO LIST",
    image: portfolio3,
    githubLink: "https://github.com/javyer12/to-doList",
    demoLink: "https://github.com/",
  },
  {
    id: 4,
    portfolioName: " Ask for help",
    image: portfolio4,
    githubLink: "https://github.com/javyer12/hapi",
    demoLink: "https://github.com/javyer12",
  },
  {
    id: 5,
    portfolioName: " FOX LAZY",
    image: portfolio5,
    githubLink: "https://github.com/javyer12/lazy_loading",
    demoLink: "https://lovingfoxes.netlify.app/",
  },
  {
    id: 6,
    portfolioName: " Github Query",
    image: portfolio6,
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
          <article key={item.id} className="portfolio__item">
            <div className="portfolio__item-img">
              <img src={item.image} alt="demo project" />
            </div>
            <h3 className="">{item.portfolioName}</h3>
            <div className="portfolio__item-cta">
              <a
                target="_blank"
                rel=" noopener noreferrer"
                href={item.githubLink} className="btn">
                Github
              </a>
              <a
                href={item.demoLink}
                className="btn btn-primary"
                target="_blank"
                rel=" noopener noreferrer"
              >
                Demo Project
              </a>
            </div>
          </article>
        ))}

      </div>
    </section>
  );
};

export default Portfolio;