import React from "react";
import { useSelector } from "react-redux";

import BootcampApplications from "./BootcampApplications";
import CompanyApplications from "./CompanyApplications";

export default function Home() {
  const user = useSelector(state => state.user);

  return (
    <div>
      {user.user_types_id === 2 && user.auth === true ? (
        <BootcampApplications />
      ) : user.user_types_id === 3 && user.auth === true ? (
        <CompanyApplications />
      ) : (
        window.location.replace("/")
      )}
    </div>
  );
}
