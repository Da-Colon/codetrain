import React from "react";
import { useSelector } from "react-redux";
import { theStore } from "../../index";

import { Link, Nav, Ul, Button } from "../Styles/navStyles";

const NavBar = () => {
  const user = useSelector(state => state.user);
  console.log('user is', user)

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
        <Link to="/resources">Resources</Link>
      {user.user_types_id === 1 && user.auth === true ? (
        //  Admin User NavBar
        <Ul>
          <Button onClick={handleLogout}>Logout</Button>
        </Ul>
      ) : user.user_types_id === 2 && user.auth === true ? (
        //  BootCamp User NavBar
        <Ul>
          <Link to="/home">Home</Link>
          <Link to={`/user/${user.id}`}>Profile</Link>
          <Link to="/jobs" exact>Jobs</Link>
          <Link to="/applications">Applications</Link>
          <Button onClick={handleLogout}>Logout</Button>
        </Ul>
      ) : user.user_types_id === 3 && user.auth === true ? (
        // Company User NavBar
        <Ul>
          <Link to="/home">Home</Link>
          <Link to={`/company/${user.companies_id}`}>Company</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/applications">Applicants</Link>
          <Button onClick={handleLogout}>Logout</Button>
        </Ul>
      ) : (user.user_types_id === 2 || user.user_types_id === 3) &&  user.auth === false ? (
        // Not Auth User
        <Ul>
          <Link to="/profile">Profile</Link>
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
