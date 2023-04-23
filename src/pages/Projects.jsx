import React from 'react';

import { projects } from '../constants/projects';

const Projects = () => {
  return (
    <main className="main">
      <h2 className="projectTitle">My Projects</h2>
      <div className="container">
        <div className="flexContainer">
          {projects.map(
            ({ id, preview_image, title, description, code, site }) => {
              return (
                <div key={id} className="blogCard">
                  <div>
                    <div className="imgWrapper">
                      <img
                        width="500px"
                        src={preview_image}
                        alt="project"
                        className="img"
                      />
                    </div>
                    <div className="titleContent">
                      <h3 title="true">{title}</h3>
                      <hr className="hr" />
                    </div>
                    <p className="cardInfo">{description}</p>
                  </div>
                  <div className="utilityList">
                    <a href={code} className="externalLinks">
                      Code
                    </a>
                    <a href={site} className="externalLinks">
                      Site
                    </a>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </main>
  );
};

export default Projects;
