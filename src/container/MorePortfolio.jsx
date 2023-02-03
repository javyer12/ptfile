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
            description: "lorem lorem loremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremlorem loremloremlorem loremloremloremlorem "
      },
      {
            id: 2,
            portfolioName: " WANDA LANDING PAGE",
            images: portfolio2,
            githubLink: "https://github.com/javyer12/async-landing",
            demoLink: "https://javyer12.github.io/async-landing/index.html",
            description: "lorem lorem loremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremlorem loremloremlorem loremloremloremlorem "
      },
      {
            id: 3,
            portfolioName: "TO-DO LIST",
            images: portfolio3,
            githubLink: "https://github.com/javyer12/to-doList",
            demoLink: "https://todoyourlist.netlify.app/",
            description: "lorem lorem loremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremlorem loremloremlorem loremloremloremlorem "
      },
      {
            id: 4,
            portfolioName: " Ask for help",
            images: portfolio4,
            githubLink: "https://github.com/javyer12/hapi",
            demoLink: "https://github.com/javyer12",
            description: "lorem lorem loremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremlorem loremloremlorem loremloremloremlorem "
      },
      {
            id: 5,
            portfolioName: " FOX LAZY",
            images: portfolio5,
            githubLink: "https://github.com/javyer12/lazy_loading",
            demoLink: "https://lovingfoxes.netlify.app/",
            description: "lorem lorem loremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremlorem loremloremlorem loremloremloremlorem "
      },
      {
            id: 6,
            portfolioName: " Github Query",
            images: portfolio6,
            githubLink: "https://github.com/javyer12/seek-github",
            demoLink: "https://github.com/javyer12",
            description: "lorem lorem loremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremlorem loremloremloremloremloremloremloremlorem loremloremlorem loremloremloremlorem "
      },
];
const Portfolio = () => {
      return (
            <section id="portfolio more-portfolio">
                  <h2></h2>
                  <h2>Portfolio</h2>
                  <div className="container portfolio__container ">
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
                                          <div>
                                                <p>{item.description}</p>
                                          </div>
                                    </div>
                              </article>
                        ))}

                  </div>
            </section>
      );
};

export default Portfolio;
