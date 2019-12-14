import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";

import axios from "axios";

import {
  MainContainer,
  SmallCard,
  MappedList,
  MappedItem
} from "../Styles/CardContainers";
import { Title } from "bloomer/lib/elements/Title";

export default function CompanyHome() {
  const endpoint = "http://localhost:3000";
  const user = useSelector(state => state.user);

  const [postUsers, setPostUsers] = useState([]);
  const getJobsByCompany = async () => {
    const response = await axios.get(
      `${endpoint}/job-applications/users/${user.companies_id}`
    );
    const data = response.data;
    setPostUsers(data);
  };

  useEffect(() => {
    getJobsByCompany();
  }, []);

  return (
    <MainContainer>
      <SmallCard>
        <Title>Recent Applicants</Title>
        <button>View All Job Posts</button>
        {postUsers.map((post, index, arr) => {
          return (
            <MappedList key={index}>
                  <>
                  <p>JOB ID: {post.posts_jobs_id}</p>
                  <p>JOB TITLE: {post.title}</p>
                  <p>
                    Applicant Name: {post.first_name} {post.last_name}
                    <button> View Profile</button>
                  </p>
                  <p>Date Applied: <Moment format="YYYY-MM-DD">{post.date_applied}</Moment></p>
                  <p>Status: {(!post.rejected && !post.accepted) ? '<pending>' : (post.rejected) ? 'rejected' : (post.accepted) ? 'approved' : ''}</p>
                </>
                <hr />
                {/* ) }  */}
            </MappedList>
          );
        })}
      </SmallCard>

      <SmallCard>

      </SmallCard>

    </MainContainer>
  );
}
