import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="text-center">© Ray Luna {year}</p>
    </footer>
  );
};

export default Footer;
