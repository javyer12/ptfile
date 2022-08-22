import "../style/Portfolio.css";
import portfolio1 from "../material/portfolio1.jpg";
import portfolio2 from "../material/portfolio2.jpg";
import portfolio3 from "../material/portfolio3.jpg";
import portfolio4 from "../material/portfolio4.jpg";
import portfolio5 from "../material/portfolio5.png";
import portfolio6 from "../material/portfolio6.jpg";

const portfolios = [
  {
    id: 1,
    portfolioName: " Name of Portfolio",
    image: portfolio1 ,
    githubLink: "https://github.com/javier12",
    demoLink: "https://github.com/",
  },
  {
    id: 2,
    portfolioName: " Name of Portfolio",
    image: portfolio2,
    githubLink: "https://github.com/javier12",
    demoLink: "https://github.com/",
  },
  {
    id: 3,
    portfolioName: " Name of Portfolio",
    image: portfolio3,
    githubLink: "https://github.com/javier12",
    demoLink: "https://github.com/",
  },
  {
    id: 4,
    portfolioName: " Name of Portfolio",
    image: portfolio4,
    githubLink: "https://github.com/javier12",
    demoLink: "https://github.com/",
  },
  {
    id: 5,
    portfolioName: " Name of Portfolio",
    image:portfolio5,
    githubLink: "https://github.com/javier12",
    demoLink: "https://github.com/",
  },
  {
    id: 6,
    portfolioName: " Name of Portfolio",
    image: portfolio6,
    githubLink: "https://github.com/javier12",
    demoLink: "https://github.com/",
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
              <a href={item.githubLink} className="btn">
                Github
              </a>
              <a
                href={item.demoLink}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
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
