import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Axios from "axios";
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardContent,
  Content,
  CardFooter,
  CardFooterItem
} from "bloomer";
import styled from "styled-components";

import { Button } from "../Styles/FormStyles";

const JobPost = props => {
  const user = useSelector(state => state.user);
  console.log("user data is", user);
  const [jobs, setJobs] = useState([]);

  const fetchJobsData = async () => {
    const endpoint = `http://localhost:3000/posts/jobs/id/${props.match.params.job_id}`;
    const res = await Axios.get(endpoint);
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobsData();
  }, []);

  const postApplication = async () => {
    const endpoint = "http://localhost:3000/job-applications/add-application/";
    const payload = {
      users_id: user.id,
      posts_jobs_id: jobs.id
    };
    const res = await Axios.post(endpoint, payload);
    res.status === 200
      ? alert("Your application was received.")
      : alert("Sorry. There was an error.");
  };

  return (
    <JobCardWrapper>
      <Card style={{ maxWidth: "60vw", margin: "20px" }}>
        <CardHeader>
          <CardHeaderTitle>{jobs.title}</CardHeaderTitle>
        </CardHeader>
        <CardContent>
          <Content>
            <strong>Date Posted: </strong>
            <Moment format="YYYY-MM-DD">{jobs.date_posted}</Moment>
          </Content>
          <Content>
            <strong>Job Description: </strong>
            {jobs.content}
          </Content>
          <Content>
            <strong>Experience:</strong> {jobs.experience}
          </Content>
          <Content>
            <strong>Company Name: </strong>
            <Link to={`/company/${jobs.companies_id}`}>{jobs.name}</Link>
          </Content>
          <Content>
            <strong>Contact Email: </strong>
            {jobs.contact_email}
          </Content>
        </CardContent>
        <CardFooter>
          <CardFooterItem>
            {/* If it's a bootcamp user viewing the job, give them ability to apply. If it's a user representing the company that posted the job, give them the option to apply. */}
            {user.id === 2 ? (
              <Button onClick={postApplication}>Apply!</Button>
            ) : user.companies_id === jobs.companies_id ? (
              <Button>Edit Post</Button>
            ) : (
              <></>
            )}
          </CardFooterItem>
        </CardFooter>
      </Card>
    </JobCardWrapper>
  );
};

const JobCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export default JobPost;
