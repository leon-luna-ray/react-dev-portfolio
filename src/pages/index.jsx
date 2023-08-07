import React from "react";

import TypingEffect from '../components/TypingEffect';
import ContactForm from '../components/ContactForm';
import CardProject from '../components/cards/CardProject';

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
    return <CardProject key={project._id} project={project} />
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
      {/* <div className="contact section">
        <div className="title">
          <h2 className='label'>Get in touch</h2>
        </div>
        <ContactForm />
      </div> */}
    </main>
  );
};

export default HomePage;
