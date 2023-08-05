import React from "react";

const NavBar = ({ developer, title }) => {
  return (
    <header className='container'>
      <div className="site-title">{developer}</div>
      <div className="subtitle">{title}</div>
    </header>
  );
};

export default NavBar;