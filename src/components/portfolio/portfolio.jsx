import React, { useEffect, useState } from "react";
import "./portfolio.css";
import PortfolioAbout from "./portfolio_about/portfolio_about";
const Portfolio = () => {
  const [projectData, setProjectData] = useState(null);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [about, setAbout] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.paul-wortmann.me/project");
      if (response.ok) {
        const data = await response.json();
        setProjectData(data);
      }
      setIsLoadingProjects(false);
    };

    fetchData();
  }, []);

  const handleOpenModal = (aboutText, ProjectTitle, Tags) => {
    setAbout(aboutText);
    setProjectTitle(ProjectTitle);
    setTags(Tags);
    setOpenModal(true);
  };
  return (
    <>
      <section id="portfolio" className="hidden">
        <h5>Recent Projects</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {!isLoadingProjects &&
            projectData(
              projectData.map(
                ({
                  ID,
                  Name,
                  About,
                  Github_Link,
                  Demo_Link,
                  Logo_Path,
                  Tags,
                  Status,
                }) => {
                  return (
                    <article key={ID} className="portfolio__item">
                      <div className="portfolio__item-image" key={ID}>
                        <img src={Logo_Path} alt={Name} className="logo" />
                      </div>
                      <h3>{Name}</h3>
                      <div className="portfolio__item-cta">
                        <a
                          href={Github_Link ? Github_Link : null}
                          className={
                            Github_Link
                              ? "btn btn-primary"
                              : "btn btn-primary disabled-link"
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github
                        </a>
                        <a
                          href={Demo_Link ? Demo_Link : null}
                          className={Demo_Link ? "btn" : "btn disabled-link"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>

                        <button
                          onClick={() => handleOpenModal(About, Name, Tags)}
                          className="btn btn-primary"
                        >
                          About
                        </button>
                      </div>
                      <div className="portfolio__item-state">{Status}</div>
                    </article>
                  );
                },
              ),
            )}
          {isLoadingProjects && <h3>Loading projects...</h3>}
          {!isLoadingProjects &&
            !projectData(<h3>Failed to load projects!</h3>)}
        </div>
      </section>
      <PortfolioAbout
        modalOpen={openModal}
        about={about}
        setOpenModal={setOpenModal}
        projectTitle={projectTitle}
        tags={tags}
      />
    </>
  );
};

export default Portfolio;
