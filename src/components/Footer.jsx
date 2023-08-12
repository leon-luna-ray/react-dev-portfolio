import React from "react";
import IconLinkedin from './icons/IconLinkedin'
import IconGithub from './icons/IconGithub'
import IconEmail from './icons/IconEmail'

const Footer = ({ name }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="container">
      <div className="inner">
        <div className="social-icons">
          <IconEmail />
          <IconGithub/>
          <IconLinkedin/>
        </div>
        <span>© {name} {year}</span>
      </div>
    </footer>
  );
};

export default Footer;
