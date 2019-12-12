import React, { Component, Fragment } from 'react';
import HackerNews from '../../../NewsFeed/HackerNews/'
import TechNews from '../../../NewsFeed/TechNews/';
import BootcampResourcePost from './BootcampResourcePost';

class BootcampDashboard extends Component {
  render() {
    return (
      <Fragment>
        <BootcampResourcePost />
        <HackerNews />
        <TechNews />
      </Fragment>
    );
  }
}

export default BootcampDashboard;
