import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import axios from 'axios'
import Moment from 'react-moment'

const BootcampViewApplications = () => {
    const user = useSelector(state => state.user);
    const [userApplications, setUserApplications] = useState([])

    const getUserApplications = async (id) => {
        const response = await axios.get(`http://localhost:3000/job-applications/user/${id}`)
        setUserApplications(response.data)
    }

    useEffect(() => {
        getUserApplications(user.id)
    }, [])

    return (
        <card>
            <ul>
                {userApplications.map(application => {

                    return (

                        <li key={application.id}>
                            {/* Will link to specific job description page */}
                            <Link to={`/jobs`}>
                                Job Title: {application.title}</Link>
                            <p>Company: {application.name}</p>
                            <p>Date Applied: <Moment format="YYYY-MM-DD">{application.date_applied}</Moment></p>
                            <p>Date Posted: <Moment format="YYYY-MM-DD">{application.date_posted}</Moment></p>
                            <p>Application Status: {(!application.rejected && !application.accepted) ? 'Pending' : (application.rejected) ? 'Rejected' : (application.accepted) ? 'Approved' : ''}</p>
                            <hr />
                        </li>
                    )
                })}
            </ul>
        </card>
    );
}

export default BootcampViewApplications;