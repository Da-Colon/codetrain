import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardContent,
  Content,
  CardFooter,
  CardFooterItem
} from "bloomer";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/FormStyles";

const CompanyApplications = () => {
  const user = useSelector(state => state.user);
  const [jobs, setJobs] = useState([]);
  // const [jobTitle, setJobTitle] = useState();
  const [jobId, setJobId] = useState("");
  const [showApplicants, setShowApplicants] = useState(false);

  const getJobPostsByCompanyId = async () => {
    const endpoint = `http://localhost:3000/posts/jobs/company/${user.companies_id}`;
    const res = await Axios.get(endpoint);

    res.data.length > 1 ? setJobs(res.data) : setJobs();
    res.data.length > 1 ? setJobId(String(res.data[0].id)) : setJobId();
  };

  function handleChange(e) {
    setJobId(e.target.value);
    setShowApplicants(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowApplicants(true);
  }

  useEffect(() => {
    getJobPostsByCompanyId();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Select a job to display applicants</h2>
        <select onChange={handleChange} value={jobId}>
          {jobs.map(job => {
            return <option value={job.id}>{job.title}</option>;
          })}
        </select>
        <button type="submit">See Applicants</button>
      </form>

      <ApplicantCardWrapper>
        {showApplicants ? <ApplicantsData jobId={jobId} /> : <></>}
      </ApplicantCardWrapper>
    </>
  );
};

const ApplicantsData = props => {
  const [applicants, setApplicants] = useState([]);

  const getApplicantsByJobId = async () => {
    const endpoint = `http://localhost:3000/api/applicants/${props.jobId}`;
    const res = await Axios.get(endpoint);
    setApplicants(res.data);
  };

  useEffect(() => {
    getApplicantsByJobId();
  }, []);

  const handleRejection = async (applicantId, jobId) => {
    const endpoint = `http://localhost:3000/job-applications/update-status/${applicantId}/${jobId}`
    const res = await Axios.put(endpoint)
    alert('Applicant was rejected.')
  }

  return (
    <>
      {applicants ? (
        applicants.map(applicant => {
          return (
            <Card style={{ maxWidth: "400px", margin: "20px" }}>
              <CardHeader>
                <CardHeaderTitle>
                  {applicant.first_name} {applicant.last_name}
                </CardHeaderTitle>
              </CardHeader>
              <CardContent>
                <Content>
                  <strong>Date Applied:</strong>
                  <Moment format="YYYY-MM-DD">{applicant.date_applied}</Moment>
                </Content>
                <Content>
                  <strong>Email Address:</strong> {applicant.email}
                </Content>
                <Content>
                  <strong>Skills:</strong>
                  <ul style={{ display: "inline", listStyleType: "none" }}>
                    {applicant.skills.map(skill => {
                      return <li>{skill}</li>;
                    })}
                  </ul>
                </Content>
                <Content>
                  <strong>Github Page:</strong>
                  <a href={applicant.github_url}>
                    {applicant.first_name}'s Github Profile
                  </a>
                </Content>
                <Content>
                  <strong>LinkedIn:</strong>
                  <a href={applicant.linkedin_url}>
                    {applicant.first_name}'s LinkedIn Profile
                  </a>
                </Content>
                <Content>
                  <strong>Bootcamp Name:</strong>
                  <p>{applicant.bootcamp_name}</p>
                </Content>
                <Content>
                  <strong>Application Status:</strong>
                  <p>{(!applicant.rejected && !applicant.accepted) ? '<pending>' : (applicant.rejected) ? 'rejected' : (applicant.accepted) ? 'approved' : ''}</p>
                </Content>
              </CardContent>
              <CardFooter>
                <CardFooterItem>
                  <Button>
                    <Link to={`/user/${applicant.applicantid}`}>
                      View Applicant
                    </Link>
                  </Button>
                  <Button onClick={() => handleRejection(applicant.applicantid, applicant.jobid)}>Reject Applicant</Button>
                </CardFooterItem>
              </CardFooter>
            </Card>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default CompanyApplications;

const ApplicantCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;
