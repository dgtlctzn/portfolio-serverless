import React from "react";
import { Card, CardTitle, Icon } from "react-materialize";
import "./ProjectCard.css";

const ProjectCard = ({ name, link, gh_link, image, icon, text, tech }) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="col s12 m4">
        <Card
          className="card"
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image={image} reveal waves="light" />}
          reveal={
            <>
              <p>{text}</p>
              <img className="icon" src={icon} alt={name} />
              <ul>
                {tech.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>
                <a href={gh_link} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </p>
            </>
          }
          revealIcon={<Icon>more...</Icon>}
          title={
            link.length > 0 ? (
              <a href={link} target="_blank" rel="noreferrer">
                {name}
              </a>
            ) : (
              name
            )
          }
        >
          <p>
            <a href={gh_link} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ProjectCard;
