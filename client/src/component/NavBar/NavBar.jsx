import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link, Nav, Ul } from "../Styles/navStyles";

const NavBar = () => {
  const user = useSelector(state => state.user);

  return (
    <Nav>
      <Link
        exact
        to="/"
        className="brand-logo"
        style={{ backgroundColor: "unset" }}
      >
        codetrain
      </Link>
      {user.user_types_id === 1 ? (
        <></>
      ) : user.user_types_id === 2 ? (
        <Link exact to="/jobs">Jobs</Link>
      ) : user.user_types_id === 3 ? (
        <></>
      ) : (
        <Ul>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
        </Ul>
      )}
    </Nav>
  );
};

export default NavBar;
