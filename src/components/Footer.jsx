import React from "react";
import { useGlobalContext } from "../store/GlobalContext";

import IconLinkedin from './icons/IconLinkedin'
import IconGithub from './icons/IconGithub'
import IconEmail from './icons/IconEmail'

const Footer = () => {
  const { profile } = useGlobalContext();
  const year = new Date().getFullYear();

  return (
    <footer className="container">
      <div className="inner">
        <div className="social-icons">
          {profile?.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <IconGithub />
            </a>
          )}
          {profile?.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <IconLinkedin />
            </a>
          )}
          {profile?.email && (
            <a href={`mailto:${profile.email}`}>
              <IconEmail />
            </a>
          )}
        </div>
        <span>© {profile?.name} {year}</span>
      </div>
    </footer>
  );
};

export default Footer;
