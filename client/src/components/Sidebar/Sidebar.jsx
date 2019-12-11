import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <nav>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/resources">Resources</NavLink>
      <NavLink to="/applications">Applications</NavLink>
    </nav>
  );
}

export default SideBar;