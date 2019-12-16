import React, {useState, useEffect} from 'react'
import axios from 'axios'

//   getAllCompanyReports,
//   getAllJobReports,
//   getAllResourceReports,
//   getAllUserReports,
//   sendMessageCompany,
//   sendMessageUser,
//   postReport,
//   deleteJob,
//   deleteResource,
//   removeAuthCompanyUsers,
//   removeAuthUser,
//   getReports,
//   resolveIssue
//   getCompaniesReports,
//   getUsersReports,
//   getJobsReports,
//   getResourcesReport



export default function AdminHome() {
  const [users, setUsers] = useState([])
  const [companies, setCompanies] = useState([])

  const endpoint = 'http://localhost:3000'

  useEffect(() =>{
  
  },[])


  return (
    <></>
  )
}
