import React from 'react';

import { projects } from '../constants/projects';

const Projects = () => {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <h1 style={{ color: '#fff' }}>My Projects</h1>
      <div className="gridContainer">
        {projects.map(
          ({ id, preview_image, title, description, code, site }) => {
            return (
              <div key={id} className="blogCard">
                <div className="imgWrapper">
                  <img
                    width="900px"
                    height="455px"
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
                <div className="utilityList">
                  <a href={code} className="externalLinks">
                    code
                  </a>
                  <a href={site} className="externalLinks">
                    site
                  </a>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
