import React from "react";
import { useSelector } from "react-redux";

import BootcampViewApplications from "./BootcampViewApplications";
import CompanyApplications from "./CompanyApplications";

export default function Applications() {
  const user = useSelector(state => state.user);

  return (
    <div>
      {user.user_types_id === 2 && user.auth === true ? (
        <BootcampViewApplications />
      ) : user.user_types_id === 3 && user.auth === true ? (
        <CompanyApplications />
      ) : (
        // <></>
        window.location.replace("/")
      )}
    </div>
  );
}
