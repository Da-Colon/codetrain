import React, { useState, useEffect } from 'react';
import axios from 'axios'

const CompanyProfile = () => {
  const [companyInfo, setCompanyInfo] = useState({
    id: "1",
    email: "",
    name: "",
    company_url: "",
    company_logo_url: "",
    description: ""

  })

  const getCompanyInfo = async (id) => {
    const response = await axios.get(`http://localhost:3000/companies/id/${id}`)
    console.log(response)
    setCompanyInfo(response.data)
  }

  useEffect(() => {
    getCompanyInfo(companyInfo.id)
    console.log('company info', companyInfo)
  }, [])

  return (
    <card>
      <h1>Company Name: {companyInfo.name}</h1>
      <img src={companyInfo.company_logo_url} placeholder='company logo' />
      <h2>Email: <a href='mailto:{companyInfo.email}' target='_blank'>{companyInfo.email}</a></h2>
      <h2>Website: <a href={companyInfo.company_url} target='_blank'>{companyInfo.company_url}</a></h2>

      <h2>About: </h2>
      <p>{companyInfo.description}</p>

    </card>
  );

}

export default CompanyProfile;