import React from "react";
import TypingEffect from './TypingEffect';


const NavBar = ({ developer, title }) => {
  return (
    <header className='container'>
      <h1 className="site-title">{developer}</h1>
      {title && <TypingEffect text={title} typingSpeed={70}/>}
    </header>
  );
};

export default NavBar;