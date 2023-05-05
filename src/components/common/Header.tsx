import React from 'react';

import Hamburger from '@/assets/hamburger.svg';
import Left from '@/assets/left.svg';

const Header = () => {
  return (
    <header>
      <Left />
      <h1>SOBISA!</h1>
      <Hamburger />
    </header>
  );
};

export default Header;
