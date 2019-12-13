import React, { Component, Fragment } from 'react';
import HackerNews from '../../../NewsFeed/HackerNews/'
import TechNews from '../../../NewsFeed/TechNews/';
import BootcampResourcePost from './BootcampResourcePost';
import CompanyProfile from "../Company/views/CompanyProfile";

class BootcampDashboard extends Component {
  render() {
    return (
      <Fragment>
        <CompanyProfile />
        <BootcampResourcePost />
        <HackerNews />
        <TechNews />
      </Fragment>
    );
  }
}

export default BootcampDashboard;
