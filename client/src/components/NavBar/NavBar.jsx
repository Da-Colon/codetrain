import React from 'react';

import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

const NavBar = (props) => {
  console.log(props);
  return (
    <nav className="black">
      <div className="nav-wrapper">
        <NavLink exact to="/" className="brand-logo">codetrain</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/signup">Sign up</NavLink></li>
          <li><NavLink to="/login">Log in</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;