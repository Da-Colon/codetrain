import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { theStore } from "../../index";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarEnd
} from "bloomer";
import ColorTheme from "../Styles/ColorTheme";

const NavBar = () => {
  const user = useSelector(state => state.user);
  const { greyLighterColor } = ColorTheme;

  const handleLogout = async e => {
    theStore.dispatch({
      type: "user logged out"
    });
    window.location.replace("/");
  };

  const onClickNav = () => setIsActive(!isActive);
  const [isActive, setIsActive] = useState(false);

  return (
    <Navbar
      style={{
        borderBottom: "solid 0.01rem grey",
        margin: "0",
        backgroundColor: "#88BBD6"
      }}
    >
      <NavbarBrand>
        <NavbarItem>
          <NavLink to="/home">CodeTrain</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/resources">Resources</NavLink>
        </NavbarItem>
        <NavbarBurger isActive={isActive} onClick={onClickNav} />
      </NavbarBrand>
      <NavbarMenu isActive={isActive} onClick={onClickNav}>
        <NavbarEnd>
          {/* Below items only render for Admins */}
          {user.user_types_id === 1 && user.auth === true ? (
            <>
              <NavbarItem>
                <NavLink to="/home">Home</NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink to="/admin/reports">Reports</NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink to="/jobs">Jobs</NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink to="/messages">Messages</NavLink>
              </NavbarItem>
              <NavbarItem>
                <Link to="" onClick={handleLogout}>
                  Logout
                </Link>
              </NavbarItem>
            </>
          ) : // Below items only render for Bootcamp Users
          user.user_types_id === 2 && user.auth === true ? (
            <>
              <NavbarItem>
                <NavLink to="/home">Home</NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink to={`/user/${user.id}`}>Profile</NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink to="/jobs">Jobs</NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink to="/applications">Applications</NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink to="/messages">Messages</NavLink>
              </NavbarItem>
              <NavbarItem>
                <Link to="" onClick={handleLogout}>
                  Logout
                </Link>
              </NavbarItem>
            </>
          ) : user.user_types_id === 3 && user.auth === true ? (
            // Company User NavBar
            <>
              <NavbarItem>
                <NavLink to="/home">Home</NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink to={`/company/${user.companies_id}`}>Company</NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink to="/jobs">Jobs</NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink to="/applications">Applicants</NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink to="/messages">Messages</NavLink>
              </NavbarItem>
              <NavbarItem>
                <Link to="" onClick={handleLogout}>
                  Logout
                </Link>
              </NavbarItem>
            </>
          ) : (user.user_types_id === 2 || user.user_types_id === 3) &&
            user.auth === false ? (
            // Not Auth User
            <>
              <NavbarItem>
                <NavLink to="/home">Home</NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink to="/profile">Profile</NavLink>
              </NavbarItem>
              <NavbarItem>
                <Link to="" onClick={handleLogout}>
                  Logout
                </Link>
              </NavbarItem>
            </>
          ) : (
            <>
              <NavbarItem>
                <Link to="/signup">Sign up</Link>
              </NavbarItem>
              <NavbarItem>
                <Link to="/login">Log in</Link>
              </NavbarItem>
            </>
          )}
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
