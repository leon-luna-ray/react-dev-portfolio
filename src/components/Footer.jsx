import React from "react";

const Footer = ({ name }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="container">
      <div className="inner">
        <span>© {name} {year}</span>
      </div>
    </footer>
  );
};

export default Footer;
