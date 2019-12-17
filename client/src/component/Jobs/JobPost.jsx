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

// This component fetches the data that will populate a job post
const JobPost = props => {
  const [jobs, setJobs] = useState([]);

  const fetchJobsData = async () => {
    const endpoint = `http://localhost:3000/posts/jobs/id/${props.match.params.job_id}`;
    const res = await Axios.get(endpoint);
    setJobs(res.data);
  };

  // the 2nd empty array argument prevents infinite re-renders.
  useEffect(() => {
    fetchJobsData();
  }, []);

  // mapping over data and passing job data as props to the Job Card which renders job posts
  //   return (
  //     <JobCardWrapper>
  //       {jobs.map(job => {
  //         return <JobCard key={job.id} data={job} />;
  //       })}
  //     </JobCardWrapper>
  //   );

  // These are the actual job posts. They receive data from the JobBoard component.
  // const JobCard = ({ data }) => {
  const user = useSelector(state => state.user);
  const [companyData, setCompanyData] = useState([]);

  // Grabs company profile data based on posts_jobs. This could've been an inner join however, since inner join creates a new table, being able to detect the jobs id in the JobCard Component does not match jobs id in the posts_jobs table
  const fetchCompanyData = async () => {
    const endpoint = `http://localhost:3000/companies/id/${jobs.companies_id}`;
    const res = await Axios.get(endpoint);
    setCompanyData(res.data);
  };

  useEffect(() => {
    fetchCompanyData();
  }, []);

  const postApplication = async () => {
    const endpoint = "http://localhost:3000/job-applications/add-application/";
    const payload = {
      users_id: user.id,
      posts_jobs_id: jobs.id
    };
    Axios.post(endpoint, payload)
      .then(res => {
        alert("Your application was received.");
      })
      .catch(err => {
        alert("You have already applied for this job.");
      });
  };
  // title, content, experience, date_posted, contact_email, contact_phone, company_name, company_profile, company_url
  return (
    <JobCardWrapper>
      <Card style={{ maxWidth: "60vw", margin: "20px" }}>
        <CardHeader>
          <CardHeaderTitle>{jobs.title}</CardHeaderTitle>
          <Link
            to={`/report/job/${jobs.id}/${jobs.companies_id}/${jobs.users_id}`}
          >
            Report Job
          </Link>
        </CardHeader>
        <CardContent>
          <Content>
            <strong>Date Posted:</strong>
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
            <strong>Company Name:</strong>
            <Link to={`/company/${companyData.id}`}>{companyData.name}</Link>
          </Content>
          <Content>
            <strong>Contact Email:</strong>
            {jobs.contact_email}
          </Content>
        </CardContent>
        <CardFooter>
          <CardFooterItem>
            <Button onClick={postApplication}>Apply!</Button>
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
