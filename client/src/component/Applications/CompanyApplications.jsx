import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";

const CompanyApplications = () => {
  const user = useSelector(state => state.user);
  const [jobs, setJobs] = useState([]);
  // const [jobTitle, setJobTitle] = useState();
  const [jobId, setJobId] = useState("");
  const [showApplicants, setApplicants] = useState(false);

  const getJobPostsByCompanyId = async () => {
    const endpoint = `http://localhost:3000/posts/jobs/company/${user.companies_id}`;
    const res = await Axios.get(endpoint);

    res.data.length > 1 ? setJobs(res.data) : setJobs();
    res.data.length > 1 ? setJobId(String(res.data[0].id)) : setJobId();
  };

  function handleChange(e) {
    setJobId(e.target.value);
    console.log("job id is", jobId);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setApplicants(true);
  }

  useEffect(() => {
    getJobPostsByCompanyId();
    console.log(jobId);
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

      <ul>{showApplicants ? <ApplicantsData jobId={jobId} /> : <></>}</ul>
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

  console.log(applicants);

  return (
    <>
      {applicants ? (
        applicants.map(applicant => {
          return <p>{applicant.first_name}</p>;
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default CompanyApplications;
