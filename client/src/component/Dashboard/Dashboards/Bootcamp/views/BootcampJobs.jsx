import React, { Component, Fragment } from 'react';
import JobBoard from '../../../../JobBoard/ JobBoard';

class BootcampJobs extends Component {
  state = {
    
  }

  render() { 
    return ( 
      <Fragment>
        <h1>This is the BootcampJobs component!</h1>
        <JobBoard />
      </Fragment>
    );
  }
}
 
export default BootcampJobs;