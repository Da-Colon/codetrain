import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const CompanyProfile = () => {
  const company = useSelector(state => state.user);
  const [companyInfo, setCompanyInfo] = useState({
    // id: "1",
    email: "",
    name: "",
    company_url: "",
    company_logo_url: "",
    description: ""
  });

  // This plucks the id from the URL so we can use it in the getCompanyInfo and useEffect functions
  let { id } = useParams();

  const getCompanyInfo = async id => {
    const response = await axios.get(
      `http://localhost:3000/companies/id/${id}`
    );
    setCompanyInfo(response.data);
  };

  const history = useHistory()
  const postReport = () => {
    history.push(`/report/company/${companyInfo.id}`)
  }

  useEffect(() => {
    getCompanyInfo(id);
  }, []);

  return (
    <card>
      <h1>Company Name: {companyInfo.name}
      <button onClick={postReport}>Report {companyInfo.name}</button>
      </h1>
      <img src={companyInfo.company_logo_url} alt="company logo" />
      <h2>
        Email:{" "}
        <a href="mailto:{companyInfo.email}">
          {companyInfo.email}
        </a>
      </h2>
      <h2>
        Website:{" "}
        <a href={companyInfo.company_url}>
          {companyInfo.company_url}
        </a>
      </h2>

      <h2>About: </h2>
      <p>{companyInfo.description}</p>
    </card>
  );
};

export default CompanyProfile;
