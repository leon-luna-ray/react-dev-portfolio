import React, { useEffect, useState } from "react";
import {
  getImageUrl,
} from "../lib/api";
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
      <div key={project._id}>
        <h4>{project.title}</h4>
        <img src={getImageUrl(project.mainImage).size(300, 300).url()} alt="" />
      </div>
    );
  });

  return (
    <main className='home page container'>
      {profileImage && <img src={profileImage} alt="Profile" />}
      {profile && <TypingEffect text={profile.bio} />}
      <div className="skills-list">
        {skillsList}
      </div>
      <div className="featured-projects grid">
        {projectCards}
      </div>
    </main>
  );
};

export default HomePage;
