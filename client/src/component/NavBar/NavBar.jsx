import React from "react";
import { useSelector } from "react-redux";
import { theStore } from "../../index";

import { Link, Nav, Ul, Logout } from "../Styles/navStyles";

const NavBar = () => {
  const user = useSelector(state => state.user);

  const handleLogout = async e => {
    // await Axios.post(`${endpoint}/logout`);
    theStore.dispatch({
      type: "user logged out"
    });
    window.location.replace("/");
  };

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

      {user.user_types_id === 1 && user.auth === true ? (
        <Ul>
          <Logout onClick={handleLogout}>Logout</Logout>
        </Ul>
      ) : user.user_types_id === 2 && user.auth === true ? (
        <Ul>
          <Logout onClick={handleLogout}>Logout</Logout>
        </Ul>
      ) : user.user_types_id === 3 && user.auth === true ? (
        <Ul>
          <Logout onClick={handleLogout}>Logout</Logout>
        </Ul>
      ) : user.user_types_id === 2 || (3 && user.auth === false) ? (
        <Ul>
          <Logout onClick={handleLogout}>Logout</Logout>
        </Ul>
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
