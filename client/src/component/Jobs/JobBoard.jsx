import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Moment from "react-moment";
import Axios from "axios";
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardContent,
  Content,
  Button,
  CardFooter,
  CardFooterItem
} from "bloomer";
import styled from "styled-components";

// import { Button } from "../Styles/FormStyles";
import { Anchor } from "../Styles/navStyles";

// This component fetches all the data that will populate each job post
const JobBoard = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobsData = async () => {
    const endpoint = "http://localhost:3000/posts/jobs";
    const res = await Axios.get(endpoint);
    const activeJobs = res.data.filter(job => job.is_active === true);
    setJobs(activeJobs);
  };

  // the 2nd empty array argument prevents infinite re-renders.
  useEffect(() => {
    fetchJobsData();
  }, []);

  // mapping over data and passing job data as props to the Job Card which renders job posts
  return (
    <JobCardWrapper>
      {jobs.map(job => (
        <JobCard key={job.id} data={job} />
      ))}
    </JobCardWrapper>
  );
};

// These are the actual job posts. They receive data from the JobBoard component.
const JobCard = ({ data }) => {
  const user = useSelector(state => state.user);
  const [companyData, setCompanyData] = useState([]);

  // Grabs company profile data based on posts_jobs. This could've been an inner join however, since inner join creates a new table, being able to detect the jobs id in the JobCard Component does not match jobs id in the posts_jobs table
  const fetchCompanyData = async () => {
    const endpoint = `http://localhost:3000/companies/id/${data.companies_id}`;
    const res = await Axios.get(endpoint);
    setCompanyData(res.data);
  };

  useEffect(() => {
    fetchCompanyData();
  }, []);

  // Currently not being used since decision was made to allow an application only when they are viewing the full details of the job post
  // const postApplication = () => {
  //   const endpoint = "http://localhost:3000/job-applications/add-application/";
  //   const payload = {
  //     users_id: user.id,
  //     posts_jobs_id: data.id
  //   };

  //   Axios.post(endpoint, payload)
  //     .then(res => {
  //       alert("Your application was received.");
  //     })
  //     .catch(err => {
  //       alert("You have already applied for this job.");
  //     });
  // };
  const history = useHistory();
  const handleReportClick = () => {
    history.replace(
      `/report/job/${data.id}/${data.companies_id}/${data.users_id}`
    );
  };

  return (
    <Card style={{ maxWidth: "400px", margin: "20px", display: 'flex', flexDirection: 'column'}}>
      <CardHeader>
        <CardHeaderTitle>{data.title}</CardHeaderTitle>
      </CardHeader>
      <CardContent>
        <Content>
          <strong>Company Name: </strong>
          <Link to={`/company/${companyData.id}`}>{companyData.name}</Link>
        </Content>
        <Content>
          <strong>Date Posted: </strong>
          <Moment format="YYYY-MM-DD">{data.date_posted}</Moment>
        </Content>
        <Content>
          <strong>Full post: </strong>
          <Link style={{ color: "blue" }} to={`/jobs/${data.id}`}>
            See full post
          </Link>
        </Content>
        <Content>
          <strong>Experience: </strong> {data.experience}
        </Content>
        <Content>
          <strong>Contact Email: </strong>
          {data.contact_email}
        </Content>
      </CardContent>
      <CardFooter style={{marginTop: 'auto'}}>
      <CardFooterItem>
        <Button isColor="primary" onClick={handleReportClick}>Report this job posting</Button>
      </CardFooterItem>
    </CardFooter>
    </Card>
  );
};

const JobCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default JobBoard;
