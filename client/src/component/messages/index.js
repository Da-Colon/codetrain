import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import axios from "axios";
import { SideBar, Main, Message } from "../Styles/messageStyles";

import {
  Form,
  Label,
  Input,
  Button,
  Title,
  TextArea
} from "../Styles/FormStyles";

export default function Messages() {

  const user = useSelector(state => state.user);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState([]);
  const [showMessage, setShowMessage] = useState(false)
  const [sendMessage, setSendMessage] = useState({subject: '', message: '', sent_to: '', sent_from: '', sent_from_companies_id: null});

  const endpoint = "http://localhost:3000";


  const getMessages = async () => {
    const response = await axios.get(`${endpoint}/messages/all/${user.id}`);
    const data = response.data;
    setMessages(data);
  };
  
  const showMessageAndReplyForm = async (message_id) => {
    const response = await axios.get(`${endpoint}/messages/one/${message_id}`)
    const data = response.data;
    setMessage(data);
    setShowMessage(true);
  }

  useEffect(() => {
    getMessages()
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const send = await axios.post(`${endpoint}/sendmessage`, sendMessage)
    console.log(send)
    if(send.status === 200){
      alert("Message Sent")
      setShowMessage(false)
    } else{
      alert("There was a problem sending the message please try again later")
    }
  }

  const handleChange = (e) =>{
      const { name, value } = e.target;
      setSendMessage({ ...sendMessage, [name]: value, sent_from: message[0].sent_from, sent_to: user.id, sent_from_companies_id: user.companies_id});
    };

  const handleClick = (id) => {
    setShowMessage(false)
    showMessageAndReplyForm(id)
    
  };

  return (
    <Main>
      {(messages.length === 0) ? <h1>No Messages</h1> : 
      <SideBar>
        {messages.map((message, index) => {
          return (
            <ul key={message.id} onClick={() =>handleClick(message.id)}>
            <li>
            From: {message.first_name} {message.last_name}
            </li>
            <li>
            Date Sent:
            <Moment format="YYYY-MM-DD">{message.date_sent}</Moment>
            </li>
            <li>Subject: {message.subject}</li>
            <hr />
            </ul>
            );
          })}
        
      </SideBar>
        }
      {(showMessage) ? 
      <Message>
        {message.map((message, index) => {
          return(
            <ul key={message.id} onClick={handleClick}>
              <li>
                {message.first_name} {message.last_name}
              </li>
              <li>
                Date Sent:
                <Moment format="YYYY-MM-DD">{message.date_sent}</Moment>
              </li>
              <li>Subject: {message.subject}</li>
              <li>{message.message}</li>
              <hr />
            </ul>
            
          )
        })}
        <Title>Replay to {message[0].first_name}</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            Send To:
            <input
            type="text"
            placeholder= {message[0].first_name}
            name="receiver"
            aria-label="receiver"
            disabled />
          </Label>
          <Label>
            Subject:
            <Input 
            type="text"
            onChange={handleChange}
            name="subject"
            aria-label="subject"
            />
          </Label>
          <Label>
            Message
            <TextArea 
            type="textarea"
            onChange={handleChange}
            name="message"
            aria-label="message"
            />
          </Label>

          <Button type="submit">Send Reply</Button>
        </Form>

      </Message>
        : ''}
    </Main>
  );
}
