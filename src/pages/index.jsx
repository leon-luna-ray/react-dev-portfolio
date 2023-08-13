import React from "react";
import { useGlobalContext } from "../store/GlobalContext";

import TypingEffect from '../components/TypingEffect';
import ContactForm from '../components/ContactForm';
import CardProject from '../components/cards/CardProject';

export const HomePage = () => {
  const { profile, profileImage, projects, skills } = useGlobalContext();

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
      <div className="skills section mobile-container">
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
        <div className="featured-projects grid-3">
          {projectCards}
        </div>
      </div>
      <div className="contact section">

        <div className="title">
          <h2 className='label'>Contact</h2>
        </div>
        <div className="content">
        <div className="contact-form flex-col">
            <h3>Get in touch</h3>
            <ContactForm />
          </div>
          <div className="contact-info">
            <h3>Info</h3>
            <ul className="contact-list flex-col">
              {profile?.github && (<li>
                <span>Email:</span>
                <a href={`mailto:${profile?.email}`} target="_blank">
                  {profile?.email}
                </a>
              </li>)}
              {profile?.github && (<li>
                <span>Github:</span>
                <a href={profile?.github} target="_blank">
                  {profile?.github_user}
                </a>
              </li>)}
              {profile?.linkedin && (<li>
                <span>Linkedin:</span>
                <a href={profile?.linkedin} target="_blank">
                  {profile?.linkedin_user}
                </a>
              </li>)}
              {profile?.website && (<li>
                <span>Website:</span>
                <a href={profile?.website} target="_blank">
                  {profile?.website_name}
                </a>
              </li>)}
            </ul>
          </div>


        </div>

      </div>
    </main>
  );
};

export default HomePage;
