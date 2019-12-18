import React from "react";
import { Link } from "react-router-dom";
import { CenteredContainer } from "../Styles/CardContainers";
import { Content } from "bloomer";
import { Anchor } from "../Styles/navStyles";

const LandingPage = () => {
  return (
    <CenteredContainer>
      <Content>
        <h1>
          <strong>Welcome to CodeTrain</strong>
        </h1>
        <p>
          A community of bootcamp students and employers looking to hire new
          developers. Bootcamper students can share learning resources with each
          other and apply to job posts. Company representatives can list their
          job opprtunities here and connect with bootcampers.
        </p>
        <br />
        <Link to="/resources">
          <Anchor>Browse learning resources posted by our community</Anchor>
        </Link>
        <br />
        <p>
          Do you attend a coding bootcamp? Are you a company looking to hire new
          developers?
        </p>
        <Link to="/signup">
          <Anchor>Sign Up Here</Anchor>
        </Link>
        <p>
          Already a user?{" "}
          <Link to="/login">
            <Anchor>Login here</Anchor>
          </Link>
        </p>
      </Content>
    </CenteredContainer>
  );
};

export default LandingPage;
