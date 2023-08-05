import React from "react";

import { getImageUrl } from "../lib/api";
import TypingEffect from '../components/TypingEffect';

export const HomePage = ({ profileImage, profile, skills, projects }) => {
  const mapListItems = (items) => {
    return items.map((item, index) => <li key={index}>{item.title}</li>);
  };

  const skillsList = skills.map((skill, index) => {
    return (
      <div key={index}>
        <h4>{skill.title}</h4>
        <ul>{mapListItems(skill.skills)}</ul>
      </div>
    );
  });
  const projectCards = projects.map((project) => {
    return (
      <div key={project._id} className='card project flex-col'>
        <img src={getImageUrl(project.mainImage).size(300, 300).url()} alt="" />
        <h4>{project.title}</h4>
        <p>{project.intro}</p>
      </div>
    );
  });

  return (
    <main className='home page container'>
      <div className="about">
        {profileImage && <img src={profileImage} alt="Profile" />}
        {profile && <TypingEffect text={profile.bio} />}
      </div>
      <div className="skills section">
        <div className="title">
          <h2 className="label">Skills</h2>
        </div>
        <div className="skills-list">
          {skillsList}
        </div>
      </div>
      <div className="projects section">
        <div className="title">
          <h2 className="label">Projects</h2>
        </div>
        <div className="featured-projects grid">
          {projectCards}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
