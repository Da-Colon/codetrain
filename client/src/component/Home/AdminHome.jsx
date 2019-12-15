import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function AdminHome() {
  const [users, setUsers] = useState([])
  const [companies, setCompanies] = useState([])
  const [authUsers, setAuthUsers] = useState([])
  const [authCompaniesUsers, setAuthCompaniesUsers] = useState([])

  const endpoint = 'http://localhost:3000'

  const searchCompanies = () => {}
  const searchUsers = () => {}

  const pendingAuth = async () => {
    // BootCamp
    const response = await axios.get(`${endpoint}/authusers`);
    const data = response.data;
    setAuthUsers(data);
    // Company
    const res = await axios.get(`${endpoint}/authcompanyusers`)
    const info = res.data;
    setAuthCompaniesUsers(info)
  }

  useEffect(() =>{
    pendingAuth(); 
  },[])

  return (
    <div>
      {/* Pending Authorizations */}
      <h1>Pending BootCamp Users</h1>
      {authUsers.map((user) => {
        return(
          <ul key={user.id}>
            <li>Name: {user.first_name} {user.last_name}</li>
            {/* Button for Viewing PDF (ACCEPTANCE Letter) */}
            <button>View Submited PDF</button>
          </ul>
        )
      })}
      <hr />
      <h1>Pending Company Users</h1>
      {authCompaniesUsers.map(user => {
        return (
          <ul key={user.id}>
            <li>Name: {user.first_name} {user.last_name}</li>
            {/* Button for Viewing PDF (ACCEPTANCE Letter) */}
            <button>View Submited PDF</button>
          </ul>
        )
      })}

      {/* SEARCH USERS */}
      {/* SEARCH COMPANIES */}
    </div>
  )
}
