import React from "react";
import CompanyJobs from "../Dashboard/Dashboards/Company/views/CompanyJobs/CompanyJobs";
import BootcampJobs from "../Dashboard/Dashboards/Bootcamp/views/BootcampJobs";
import { useSelector } from "react-redux";

const Jobs = () => {
  const user = useSelector(state => state.user);

  return (
    <div>
      {user.user_types_id === 2 ? (
        <BootcampJobs />
      ) : user.user_types_id === 3 ? (
        <CompanyJobs />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Jobs;
