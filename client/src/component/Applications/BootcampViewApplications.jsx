import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import {
  CardContent,
  Card,
  CardHeader,
  CardHeaderTitle,
  CardFooter
} from "bloomer";
import { Anchor } from "../Styles/navStyles";
import styled from "styled-components";

const BootcampViewApplications = () => {
  const user = useSelector(state => state.user);
  const [userApplications, setUserApplications] = useState([]);

  const getUserApplications = async id => {
    const response = await axios.get(
      `http://localhost:3000/job-applications/user/${id}`
    );
    setUserApplications(response.data);
  };

  useEffect(() => {
    getUserApplications(user.id);
  }, []);

  return (
    <ul>
      <ApplicationCardWrapper>
        {userApplications.map(application => {
          return (
            <Card style={{ width: "400px", margin: "20px" }}>
              <li key={application.id}>
                <CardHeader>
                  <CardHeaderTitle>
                    <Link to={`/jobs/${application.posts_jobs_id}`}>
                      <Anchor>Job Title: {application.title}</Anchor>
                    </Link>
                  </CardHeaderTitle>
                </CardHeader>
                <CardContent>
                  <p>Company: {application.name}</p>
                  <p>
                    Date Applied:{" "}
                    <Moment format="YYYY-MM-DD">
                      {application.date_applied}
                    </Moment>
                  </p>
                  <p>
                    Date Posted:{" "}
                    <Moment format="YYYY-MM-DD">
                      {application.date_posted}
                    </Moment>
                  </p>
                  <CardFooter />
                  <p>
                    Application Status:{" "}
                    {!application.rejected && !application.accepted
                      ? "Pending"
                      : application.rejected
                      ? "Rejected"
                      : application.accepted
                      ? "Approved"
                      : ""}
                  </p>
                </CardContent>
              </li>
            </Card>
          );
        })}
      </ApplicationCardWrapper>
    </ul>
  );
};

const ApplicationCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export default BootcampViewApplications;
