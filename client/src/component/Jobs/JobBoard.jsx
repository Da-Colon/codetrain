// Will need a /profile link to company page from this page once we have profile components built. Company profile page currenlty not built.
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

// This component fetches all the data that will populate each job post
const JobBoard = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobsData = async () => {
    const endpoint = "http://localhost:3000/posts/jobs";
    const res = await Axios.get(endpoint);
    setJobs(res.data);
  };

  // the 2nd empty array argument prevents infinite re-renders.
  useEffect(() => {
    fetchJobsData();
  }, []);

  // mapping over data and passing job data as props to the Job Card which renders job posts
  return (
    <JobCardWrapper>
      {jobs.map(job => {
        return <JobCard key={job.id} data={job} />;
      })}
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
    setCompanyData(res.data[0]);
  };

  useEffect(() => {
    fetchCompanyData();
  }, []);

  const postApplication = async () => {
    const endpoint = "http://localhost:3000/job-applications/add-application/";
    const payload = {
      users_id: user.id,
      posts_jobs_id: data.id
    };
    const res = await Axios.post(endpoint, payload);
    res.status === 200
      ? alert("Your application was received.")
      : alert("Sorry. There was an error.");
  };
  // title, content, experience, date_posted, contact_email, contact_phone, company_name, company_profile, company_url
  return (
    <Card style={{ maxWidth: "400px", margin: "20px" }}>
      <CardHeader>
        <CardHeaderTitle>{data.title}</CardHeaderTitle>
      </CardHeader>
      <CardContent>
        <Content>
          <strong>Date Posted:</strong>
          <Moment format="YYYY-MM-DD">{data.date_posted}</Moment>
        </Content>
        <Content>
          <strong>Job Description: </strong>
          {data.content}
        </Content>
        <Content>
          <strong>Experience:</strong> {data.experience}
        </Content>
        <Content>
          <strong>Company Name:</strong>
          <Link exact to={`/profile/${companyData.id}`}>
            {companyData.name}
          </Link>
        </Content>
        <Content>
          <strong>Contact Email:</strong>
          {data.contact_email}
        </Content>
      </CardContent>
      <CardFooter>
        <CardFooterItem href="#">
          <Button onClick={postApplication}>Apply!</Button>
        </CardFooterItem>
      </CardFooter>
    </Card>
  );
};

const JobCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export default JobBoard;
