import React from "react";
import { useSelector } from "react-redux";

import CompanyProfile from "./CompanyProfile";

export default function Index() {
  const user = useSelector(state => state.user);

  return (
    <div>
      {/* as long as you're authorized, you can view the company profile. This opens it up for company users and bootcamp users to see each others profiles */}
      {user.auth === true ? (
        <CompanyProfile />
      ) : (user.user_types_id === 2 || user.user_types_id === 3) &&
        user.auth === false ? (
        <>
          This is what someone who has an account registered but is unauthorized
          would see
        </>
      ) : (
        window.location.replace("/")
      )}
    </div>
  );
}
