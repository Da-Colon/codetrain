import React from "react";
import { useSelector } from "react-redux";

import BootcampHome from "./BootcampHome";
import AdminHome from "./AdminHome";
import CompanyHome from "./CompanyHome";

export default function Home() {
  const user = useSelector(state => state.user);

  return (
    <div>
      {user.user_types_id === 1 && user.auth === true ? (
        <AdminHome />
      ) : user.user_types_id === 2 && user.auth === true ? (
        <BootcampHome />
      ) : user.user_types_id === 3 && user.auth === true ? (
        <CompanyHome />
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
