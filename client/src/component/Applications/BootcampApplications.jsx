import React, { useState, Fragment} from 'react';
import axios from "axios";

const BootcampApplications = () => {
  const [state, setState] = useState({
    date_applied: new Date(),
    rejected: false,
    accepted: false,
    applicationSubmitted: false
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: Number(value) });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const endpoint = "http://localhost:3000/job-applications/add-application";

    const payload = {
      date_applied: state.date_applied,
      rejected: state.rejected,
      accepted: state.accepted,
      users_id: 1, /* we need to pull this from session or something similar */
      posts_jobs_id: state.posts_jobs_id
    };

    const response = await axios.post(endpoint, payload);
    setState({ ...state, applicationSubmitted: true });
  };

  return (
    <Fragment>
      <h1>Submit an Application</h1>
      {state.applicationSubmitted ? (
        <div>
          <h2>Thank you for submitting an application! We'll be in touch shortly.</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Job to which you are applying:
            <input
              type="number"
              name="posts_jobs_id"
              value={state.name}
              onChange={handleChange}
            ></input>
          </label>
          <button type="submit">Submit Application</button>
        </form>
      )}
    </Fragment>
  );
};

export default BootcampApplications;
