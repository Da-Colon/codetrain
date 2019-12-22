import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import { Main, Message } from "../Styles/messageStyles";
import {
  Box,
  Panel,
  PanelBlock,
  PanelHeading,
  PanelTab,
  PanelTabs,
  Control,
  Input,
  Field,
  Label,
  Title,
  TextArea,
  Button,
} from "bloomer";

export default function Messages() {
  const user = useSelector(state => state.user);
  const [messages, setMessages] = useState([]);
  const [sentMessages, setSentMessages] = useState([]);
  const [singleMessage, setMessage] = useState([{ id: "" }]);
  const [showMessage, setShowMessage] = useState(false);
  const [showSent, setShowSent] = useState(false);
  const [showInbox, setShowInbox] = useState(true);
  const [sendMessage, setSendMessage] = useState({
    subject: "",
    message: "",
    sent_to: "",
    sent_from: "",
    sent_from_companies_id: null
  });

  const endpoint = "http://localhost:3000";
  let { user_id } = useParams();

  const getMessages = async () => {
    const inboxMessages = await axios.get(
      `${endpoint}/messages/all/${user.id}`
    );
    const inboxData = inboxMessages.data;
    setMessages(inboxData);

    const getSentMessages = await axios.get(
      `${endpoint}/messages/sent/${user.id}`
    );
    const sentData = getSentMessages.data;
    setSentMessages(sentData);
  };

  const showMessageAndReplyForm = async message_id => {
    const response = await axios.get(`${endpoint}/messages/one/${message_id}`);
    const data = response.data;
    setMessage(data);
    setShowMessage(true);
  };

  const ShowMessageParam = id => {
    showMessageAndReplyForm(id);
  };

  useEffect(() => {
    getMessages();
    if (user_id) {
      ShowMessageParam(user_id);
    }
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const send = await axios.post(`${endpoint}/sendmessage`, sendMessage);
    if (send.status === 200) {
      alert("Message Sent");
      setShowMessage(false);
      getMessages();
    } else {
      alert("There was a problem sending the message please try again later");
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setSendMessage({
      ...sendMessage,
      [name]: value,
      sent_from: singleMessage[0].sent_from,
      sent_to: user.id,
      sent_from_companies_id: user.companies_id
    });
  };

  const handleClick = id => {
    setShowMessage(false);
    showMessageAndReplyForm(id);
  };

  const handleSentTabClick = () => {
    setShowSent(true);
    setShowInbox(false);
    setShowMessage(false);
  };

  const handleInboxTabClick = () => {
    setShowInbox(true);
    setShowSent(false);
    setShowMessage(false);
  };

  const history = useHistory();
  const postReport = e => {
    e.preventDefault();
    history.push(
      `/report/user/${singleMessage[0].id}/${singleMessage[0].sent_from_companies_id}`
    );
  };

  return (
    <Main>
      {messages.length === 0 && sentMessages === 0 ? (
        <h1>No Messages</h1>
      ) : (
        <Panel
          style={{
            width: "300px",
            height: "88vh",
            overflowY: "scroll",
            overflowX: "hidden",
            position: "absolute"
          }}
        >
          <PanelHeading>Messages</PanelHeading>
          <PanelTabs>
            <PanelTab isActive={showInbox} onClick={handleInboxTabClick}>
              Inbox
            </PanelTab>
            <PanelTab isActive={showSent} onClick={handleSentTabClick}>
              Sent
            </PanelTab>
          </PanelTabs>
          {showInbox
            ? messages.map((message, index) => {
                return (
                  <PanelBlock
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor:
                        message.id === singleMessage[0].id
                          ? "lightgrey"
                          : "unset"
                    }}
                  >
                    <ul
                      key={message.id}
                      onClick={() => handleClick(message.id)}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginLeft: "8px"
                      }}
                    >
                      <li>
                        <strong>
                          From: {message.first_name} {message.last_name}
                        </strong>
                      </li>
                      <li>
                        <strong>Date Sent:</strong>
                        <Moment format="YYYY-MM-DD">{message.date_sent}</Moment>
                      </li>
                      <li>
                        <strong>Subject:</strong> {message.subject}
                      </li>
                    </ul>
                  </PanelBlock>
                );
              })
            : ""}
          {showSent ? (
            <PanelBlock style={{ display: "flex", flexDirection: "column" }}>
              {sentMessages.map((message, index) => {
                return (
                  <ul
                    key={message.id}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      marginLeft: "8px"
                    }}
                  >
                    <li>
                      <strong>
                        To: {message.first_name} {message.last_name}
                      </strong>
                    </li>
                    <li>
                      <strong>Date Sent:</strong>
                      <Moment format="YYYY-MM-DD">{message.date_sent}</Moment>
                    </li>
                    <li>
                      <strong>Subject:</strong> {message.subject}
                    </li>
                    <hr />
                  </ul>
                );
              })}
            </PanelBlock>
          ) : (
            ""
          )}
          ;
        </Panel>
      )}
      {showMessage ? (
        <Message
          style={{
            position: "relative",
            left: "150px",
            overflowY: "scroll",
            overflowX: "hidden",
            height: "90vh",
            margin: "0 auto",
            width: "80vw",
            padding: "32px"
          }}
        >
          {singleMessage.map((message, index) => {
            return (
              <Box key={message.id}>
                <Title>
                  {message.first_name} {message.last_name}{" "}
                  <Button isColor="danger" onClick={postReport}>
                    Report {message.first_name}
                  </Button>
                </Title>
                <p>
                  Date Sent:
                  <Moment format="YYYY-MM-DD">{message.date_sent}</Moment>
                </p>
                <p>Subject: {message.subject}</p>
                <Box style={{ padding: "16px", margin: "16px" }}>
                <Title isSize={5}>Message</Title>
                  {message.message}
                </Box>
              </Box>
            );
          })}
          <Box>
          <Title isSize={4}>Reply to {singleMessage[0].first_name}</Title>

          <form onSubmit={handleSubmit}>
            <Field>
              <Label>Send To</Label>
              <Control>
                <Input
                  type="text"
                  placeholder={singleMessage[0].first_name}
                  name="receiver"
                  aria-label="receiver"
                  disabled
                  />
              </Control>
            </Field>

            <Field>
              <Label>Subject</Label>
              <Control>
                <Input
                  type="text"
                  onChange={handleChange}
                  name="subject"
                  aria-label="subject"
                  />
              </Control>
            </Field>

            <Field>
              <Label>Message</Label>
              <Control>
                <TextArea
                  type="textarea"
                  onChange={handleChange}
                  name="message"
                  aria-label="message"
                  />
              </Control>
            </Field>

            <Field isGrouped>
              <Control>
                <Button type="submit" isColor="primary">
                  Submit
                </Button>
              </Control>
            </Field>
          </form>
                  </Box>
        </Message>
      ) : (
        ""
      )}
    </Main>
  );
}
