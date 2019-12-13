import React from "react";
import { useSelector } from "react-redux";

import BootcampDashboard from "./BootcampHome";
import AdminDashboard from "./AdminHome";
import CompanyDashboard from "./CompanyHome";

export default function Home() {
  const user = useSelector(state => state.user);

  return (
    <div>
      {user.user_types_id === 1 && user.auth === true ? (
        <AdminDashboard />
      ) : user.user_types_id === 2 && user.auth === true ? (
        <BootcampDashboard />
      ) : user.user_types_id === 3 && user.auth === true ? (
        <CompanyDashboard />
      ) : (user.user_types_id === 2 || user.user_types_id === 3) &&
        user.auth === false ? (
        ""
      ) : (
        // <></>
        window.location.replace("/")
      )}
    </div>
  );
}
