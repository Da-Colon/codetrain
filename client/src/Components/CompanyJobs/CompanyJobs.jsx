import React, { Component, Fragment } from 'react';
import JobBoard from '../JobBoard/ JobBoard';

class CompanyJobs extends Component {
  state = {

  }

  render() {
    return (
      <Fragment>
        <h1>This is the CompanyJobs component!</h1>
        <JobBoard />
      </Fragment>
    );
  }
}

export default CompanyJobs;