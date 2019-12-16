import React, { Component, Fragment } from "react";
import BootcampResourcePost from "./BootcampResourcePost";
import BootcampResourceGet from "./BootcampResourceGet";

class Resources extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <BootcampResourceGet />
        {/* <BootcampResourcePost /> */}
      </Fragment>
    );
  }
}

export default Resources;
