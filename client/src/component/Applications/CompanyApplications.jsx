import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";

const CompanyApplications = () => {
  const user = useSelector(state => state.user);
  const [jobs, setJobs] = useState([]);
  const [jobTitle, setJobTitle] = useState();

  const getJobPostsByCompanyId = async () => {
    const endpoint = `http://localhost:3000/posts/jobs/company/${user.companies_id}`;
    const res = await Axios.get(endpoint);
    setJobs(res.data);
    res.data.length > 1 ? setJobTitle([res.data[0].title]) : setJobTitle('')
  };

  // const getApplicantsByJobId

  function handleChange(e) {
    setJobTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

  }

  useEffect(() => {
    getJobPostsByCompanyId();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Select a job to display applicants</h2>
        <select onChange={handleChange}>
          {jobs.map(job => {
            return <option value={job.title}>{job.title}</option>;
          })}
        </select>
        <button type="submit">See Applicants</button>
      </form>

      <ul>

      </ul>
    </>
  );
};

export default CompanyApplications;
