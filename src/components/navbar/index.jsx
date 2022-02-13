import React from 'react';

import logo from '../../images/bx-logo.png';
import './styles.css';

function Navbar() {
  return (
    <header>
      <img src={logo} alt="Buildbox-logo" />
    </header>
  );
}

export default Navbar;
