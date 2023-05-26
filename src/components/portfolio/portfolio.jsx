import React, { useEffect, useState } from "react";
import "./portfolio.css";
const Portfolio = () => {
  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://zany-lime-dhole-ring.cyclic.app/getAllProjects"
      );
      if (response.ok) {
        const data = await response.json();
        setProjectData(data);
      } else {
        fetchData();
      }
    };

    fetchData();
  }, []);
  return (
    <section id="portfolio" className="hidden">
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projectData ? (
          projectData.map(
            ({ ID, Name, About, Github_Link, Demo_Link, Logo_Path }) => {
              return (
                <article key={ID} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={Logo_Path} alt={Name} className="logo" />
                  </div>
                  <h3>{Name}</h3>
                  <div className="portfolio__item-cta">
                    <a
                      href={Github_Link}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href={Demo_Link}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={About}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      About
                    </a>
                  </div>
                </article>
              );
            }
          )
        ) : (
          <h3>Loading projects...</h3>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
