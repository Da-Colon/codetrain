import React from 'react';

import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav>
        <NavLink exact to="/" className="brand-logo">codetrain</NavLink>
        <ul>
          <li><NavLink to="/signup">Sign up</NavLink></li>
          <li><NavLink to="/login">Log in</NavLink></li>
        </ul>
    </nav>
  );
}

export default NavBar;