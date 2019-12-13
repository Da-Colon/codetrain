import React, { Component, Fragment } from 'react';
import HackerNews from '../../../Home/HackerNews'
import TechNews from '../../../Home/TechNews';
import BootcampResourcePost from './BootcampResourcePost';
import CompanyProfile from "../Company/views/CompanyProfile";
import UserProfile from "./views/BootcampProfile";

class BootcampDashboard extends Component {
  render() {
    return (
      <Fragment>
        <UserProfile />
        <CompanyProfile />
        <BootcampResourcePost />
        <HackerNews />
        <TechNews />
      </Fragment>
    );
  }
}

export default BootcampDashboard;
