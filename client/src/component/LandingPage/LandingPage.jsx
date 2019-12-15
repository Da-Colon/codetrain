import React from "react";
import { Link } from "react-router-dom";
import { CenteredContainer } from "../Styles/CardContainers";

const LandingPage = () => {
  return (
    <CenteredContainer>
      <h1>
        <strong>Welcome to CodeTrain</strong>
      </h1>
      <p>
        A community of bootcamp students and employers looking to hire new
        developers. Bootcamper students can share learning resources with each
        other and apply to job posts. Company representatives can list their job
        opprtunities here and connect with bootcampers.
      </p>
      <br />
      <Link to="/resources">
        Browse learning resources posted by our community
      </Link>
      <hr />
      <p>
        Do you attend a coding bootcamp? Are you a company looking to hire new
        developers?
      </p>
      <Link to="/signup">Sign Up Here</Link>
      <p>
        Already a user? <Link to="/login">Login here</Link>
      </p>
    </CenteredContainer>
  );
};

export default LandingPage;
