import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container">
      <div className="inner">
        <span>© Ray Luna {year}</span>
      </div>
    </footer>
  );
};

export default Footer;
