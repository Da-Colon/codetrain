import React from "react";
import { useSelector } from "react-redux";
import { theStore } from "../../index";

import { Link, Nav, Ul, Button } from "../Styles/navStyles";

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
        <Button>Resources</Button>
      {user.user_types_id === 1 && user.auth === true ? (
        //  Admin User NavBar
        <Ul>
          <Button onClick={handleLogout}>Logout</Button>
        </Ul>
      ) : user.user_types_id === 2 && user.auth === true ? (
        //  BootCamp User NavBar
        <Ul>
          <Link to="/dashboard">Dashboard</Link>
          <Button>Profile</Button>
          <Link to="/jobs" exact>Jobs</Link>
          <Button>Applicants</Button>
          <Button onClick={handleLogout}>Logout</Button>
        </Ul>
      ) : user.user_types_id === 3 && user.auth === true ? (
        // Company User NavBar
        <Ul>
          <Link to="/dashboard">Dashboard</Link>
          <Button>Company</Button>
          <Button>Jobs</Button>
          <Button>Applicants</Button>
          <Button onClick={handleLogout}>Logout</Button>
        </Ul>
      ) : (user.user_types_id === 2 || user.user_types_id === 3) &&  user.auth === false ? (
        // Not Auth User
        <Ul>
          <Button>Profile</Button>
          <Button onClick={handleLogout}>Logout</Button>
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
