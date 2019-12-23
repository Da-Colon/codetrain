import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import axios from "axios";
import {useHistory} from 'react-router-dom'

import { Button, Box, Title, Container, Card } from "bloomer";

const endpoint = "http://localhost:3000";

const getJobsByCompany = async (companyId) => {
  const response = await axios.get(
    `${endpoint}/job-applications/users/${companyId}`
  );
  if(response.status === 200){
    const data = response.data;
    return data
  }else {
    console.log("There was an Error Returning Data")
  }
};

const getMessages = async (userId) => {
  const response = await axios.get(
    `${endpoint}/messages/all/${userId}`
  );
  if(response.status === 200){
    const data = response.data;
    return data
  }else {
    console.log("There was an Error Returning Data")
  }
}

export default function CompanyHome() {
  const user = useSelector(state => state.user);
  const history = useHistory();
  
  const [postUsers, setPostUsers] = useState([]);
  const [messages, setMessages] = useState([])

  

  useEffect(() => {
    getJobsByCompany(user.companies_id).then(data => setPostUsers(data));
  },[user.companies_id]);

  useEffect(()=> {
    getMessages(user.id).then(data => setMessages(data));
  },[user.id]);

  return (
    <Container style={{display: "flex", width: "100%"}}>
    <Card style={{margin: "32px", width: "50%"}}>
      <Box style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Title>Recent Applicants</Title>
        <Button isColor="primary" onClick={()=> history.push('/jobs')}>View All Job Posts</Button>
        </Box>
        <Box style={{overflowY: "scroll", height: "75vh"}}>
        {postUsers.map((post, index, arr) => {
          return (
            <Box style={{height: "200px"}} key={index}>
                  <>
                  <Title isSize={5}>JOB #: {post.id}</Title>
                  <p><strong>JOB TITLE:</strong> {post.title}</p>
                  <p>
                  <strong>Applicant Name:</strong> {post.first_name} {post.last_name}
                  </p>
                  <p><strong>Date Applied:</strong> <Moment format="YYYY-MM-DD">{post.date_applied}</Moment></p>
                  <p><strong>Status:</strong> {(!post.rejected && !post.accepted) ? '<pending>' : (post.rejected) ? 'rejected' : (post.accepted) ? 'approved' : ''}</p>
                </>
            </Box>
          );
        })}
        </Box>
      </Card>
      <Card style={{margin: "32px", width: "50%"}}>
      <Box style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Title>Messages</Title>
        <Button isColor="primary" onClick={() => history.push(`/messages`)}>View All Messages</Button>
        </Box>
        <Box style={{overflowY: "scroll", height: "75vh"}}>
        {messages.map((message, index) => {
          return(
            <Box style={{display: "flex", flexDirection: "column", height: "200px"}} key={index}>

            <Title isSize={5} >From: {message.first_name} {message.last_name}</Title>
            <p>Date Sent: <Moment format="YYYY-MM-DD">{message.date_sent}</Moment></p>
            <p>Subject: {message.subject}</p>
            <Button isColor="primary" onClick={() => history.push(`/messages/${message.id}`)} style={{width: "fit-content", margin: "0 auto"}}>View Message</Button>
          </Box>
          )
        })}
        </Box>
    </Card>
    </Container>
  );
}
