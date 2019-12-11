import React, { Component, Fragment } from 'react';
import HackerNews from '../HackerNews';
import TechNews from '../TechNews';

class BootcampDashboard extends Component {
  render() {
    return (
      <Fragment>
        <HackerNews />
        <TechNews />
      </Fragment>
    );
  }
}

export default BootcampDashboard;
