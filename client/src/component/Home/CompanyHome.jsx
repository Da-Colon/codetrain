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
  const user = useSelector(state => state.user);
  
  const [postUsers, setPostUsers] = useState([]);
  const [messages, setMessages] = useState([])

  const endpoint = "http://localhost:3000";
  
  const getJobsByCompany = async () => {
    const response = await axios.get(
      `${endpoint}/job-applications/users/${user.companies_id}`
    );
    const data = response.data;
    setPostUsers(data);
  };

  const getMessages = async () => {
    const response = await axios.get(
      `${endpoint}/messages/${user.id}`
    );
    const data = response.data;
    setMessages(data);
  }

  useEffect(() => {
    getJobsByCompany();
    getMessages();
  },[]);

  return (
    <MainContainer>
      <SmallCard>
        <Title>Recent Applicants</Title>
        <button>View All Job Posts</button>
        {postUsers.map((post, index, arr) => {
          return (
            <MappedList key={index}>
                  <>
                  <MappedItem>JOB ID: {post.id}</MappedItem>
                  <MappedItem>JOB TITLE: {post.title}</MappedItem>
                  <MappedItem>
                    Applicant Name: {post.first_name} {post.last_name}
                    <button> View Profile</button>
                  </MappedItem>
                  <MappedItem>Date Applied: <Moment format="YYYY-MM-DD">{post.date_applied}</Moment></MappedItem>
                  <MappedItem>Status: {(!post.rejected && !post.accepted) ? '<pending>' : (post.rejected) ? 'rejected' : (post.accepted) ? 'approved' : ''}</MappedItem>
                </>
                <hr />
                {/* ) }  */}
            </MappedList>
          );
        })}
      </SmallCard>

      <SmallCard>
        <Title>Messages</Title>
        <button>View All Messages</button>
        {messages.map((message, index) => {
          return(
          <MappedList key={index}>

            <MappedItem>From: {message.first_name} {message.last_name}</MappedItem>
            <MappedItem>Date Sent: <Moment format="YYYY-MM-DD">{message.date_sent}</Moment></MappedItem>
            <MappedItem>Subject: {message.subject}</MappedItem>
            <button>View Message</button>


          </MappedList>
          )
        })}
        
      </SmallCard>

    </MainContainer>
  );
}
