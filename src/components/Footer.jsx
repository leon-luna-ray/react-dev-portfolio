import React from "react";
import "../style.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="text-center">© Ray Luna {year}</p>
    </footer>
  );
};

export default Footer;
