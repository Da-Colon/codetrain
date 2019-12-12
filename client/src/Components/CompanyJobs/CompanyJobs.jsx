import React, { useState } from "react";
import axios from "axios";

const CompanyJobs = () => {
  const [state, setState] = useState({
    job_title: "",
    description: "",
    experience: "",
    email: "",
    phone: "",
    isSubmitted: false
  });

  // prevents the use of writing several handleChange functions by deconstructing name and value from the onchange event
  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // We will need to look up the companies_id and the users_id from the global store. At the moment, I will manually set companies_id to 1 and users_id to 6 for testing purposes.
  const handleSubmit = async e => {
    e.preventDefault();
    const endpoint = "http://localhost:3000/posts/jobs/add";

    const payload = {
      title: state.job_title,
      content: state.description,
      experience: state.experience,
      contact_email: state.email,
      contact_phone: state.phone,
      companies_id: 1,
      users_id: 6
    };

    const response = await axios.post(endpoint, payload);
    setState({ ...state, isSubmitted: true });
  };

  return (
    <>
      <h1>Create a Job Post</h1>
      {state.isSubmitted ? (
        <div>
          <h2> Thank you for your submission {state.contact_name}</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Job Title
            <input
              type="text"
              placeholder="Job Title"
              name="job_title"
              value={state.name}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Job Description
            <textarea
              rows="5"
              cols="33"
              placeholder="Job Description Information"
              name="description"
              value={state.description}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Experience Desired
            <textarea
              rows="5"
              cols="33"
              placeholder="What skills are you looking for?"
              name="experience"
              value={state.experience}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Contact Email
            <input
              type="email"
              placeholder="Contact Email"
              name="email"
              value={state.email}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Contact Phone Number
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={state.phone}
              onChange={handleChange}
            ></input>
          </label>
          <button type="submit">Create Job</button>
        </form>
      )}
    </>
  );
};

export default CompanyJobs;
