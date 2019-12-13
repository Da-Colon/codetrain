import React from "react";
import { useSelector } from "react-redux";

import BootcampProfile from "./BootcampProfile"
import CompanyProfile from "./CompanyProfile";

export default function Dashboard() {
  const user = useSelector(state => state.user);

  return (
    <div>
      {user.user_types_id === 2 && user.auth === true ? (
        <BootcampProfile />
      ) : user.user_types_id === 3 && user.auth === true ? (
        <CompanyProfile />
      ) : (user.user_types_id === 2 || user.user_types_id === 3) &&
        user.auth === false ? (
        <>hello</>
      ) : (
        // <></>
        window.location.replace("/")
      )}
    </div>
  );
}
