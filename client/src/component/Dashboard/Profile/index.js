import React from "react";
import { useSelector } from "react-redux";

import BootcampProfile from "../Dashboards/Bootcamp/views/BootcampProfile";
import CompanyProfile from "../Dashboards/Company/views/CompanyProfile";

export default function Dashboard() {
  const user = useSelector(state => state.user);

  return (
    <div>
      {user.user_types_id === 2 && user.auth === true ? (
        <BootcampProfile />
      ) : user.user_types_id === 3 && user.auth === true ? (
        <CompanyProfile />
      ) : (user.user_types_id === 2 || user.user_types_id) === 3 &&
        user.auth === false ? (
        ""
      ) : (
        // <></>
        window.location.replace("/")
      )}
    </div>
  );
}
