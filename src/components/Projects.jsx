import React from "react";
import { fetchFeaturedProjects, getImageUrl } from "../data/sanity";

import { Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const projects = await fetchFeaturedProjects();

export const Projects = () => {
  const getThumbnailUrl = (image) => {
    return getImageUrl(image).size(300, 300).url();
  };

  const projectCards = projects.map((project) => {
    return (
      <ProjectCard
        title={project.title}
        text={project.description[0].children[0].text}
        imgSrc={getThumbnailUrl(project.mainImage)}
        appLink={project.url}
        repoLink={project.repository}
        key={project._id}
      />
    );
  });

  return (
    <section class="projects-section">
      <Row>{projectCards}</Row>
    </section>
  );
};

export default Projects;
