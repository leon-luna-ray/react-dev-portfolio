import React from "react";
import { useGlobalContext } from "../store/GlobalContext";

import TypingEffect from './TypingEffect';

const NavBar = () => {
  const { global, profile } = useGlobalContext();

  return (
    <header className='container mobile-container'>
      <h1 className="site-title">{profile?.name}</h1>
      {global?.title && <TypingEffect text={global.title} typingSpeed={70} />}
    </header>
  );
};

export default NavBar;