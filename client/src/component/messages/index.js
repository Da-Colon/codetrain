import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import axios from "axios";
import { SideBar, Main, Message } from "../Styles/messageStyles";
import {
  Panel,
  PanelBlock,
  PanelHeading,
  PanelIcon,
  PanelTab,
  PanelTabs,
  Control,
  Input,
  Field,
  Label,
  Title,
  TextArea,
  Button,
  Icon
} from "bloomer";
import { useHistory } from "react-router-dom";

export default function Messages() {
  const user = useSelector(state => state.user);
  const [messages, setMessages] = useState([]);
  const [sentMessages, setSentMessages] = useState([])
  const [message, setMessage] = useState([]);
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

  const getMessages = async () => {
    const inboxMessages = await axios.get(`${endpoint}/messages/all/${user.id}`);
    const inboxData = inboxMessages.data;
    setMessages(inboxData);

    const getSentMessages = await axios.get(`${endpoint}/messages/sent/${user.id}`);
    const sentData = getSentMessages.data;
    setSentMessages(sentData)
  };

  const showMessageAndReplyForm = async message_id => {
    const response = await axios.get(`${endpoint}/messages/one/${message_id}`);
    const data = response.data;
    setMessage(data);
    setShowMessage(true);
  };

  useEffect(() => {
    getMessages();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const send = await axios.post(`${endpoint}/sendmessage`, sendMessage);
    if (send.status === 200) {
      alert("Message Sent");
      setShowMessage(false);
    } else {
      alert("There was a problem sending the message please try again later");
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setSendMessage({
      ...sendMessage,
      [name]: value,
      sent_from: message[0].sent_from,
      sent_to: user.id,
      sent_from_companies_id: user.companies_id
    });
  };

  const handleClick = id => {
    setShowMessage(false);
    showMessageAndReplyForm(id);
  };

  const handleSentTabClick = () => {
    setShowSent(true)
    setShowInbox(false);
  }

  const handleInboxTabClick  = () => {
    setShowInbox(true);
    setShowSent(false)
  }

  

  const history = useHistory();
  const postReport = e => {
    e.preventDefault();
    history.push(
      `/report/user/${message[0].id}/${message[0].sent_from_companies_id}`
    );
  };

  return (
    <Main>
      {messages.length === 0 ? (
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
            <PanelTab isActive={showInbox} onClick={handleInboxTabClick}>Inbox</PanelTab>
            <PanelTab isActive={showSent} onClick={handleSentTabClick}>Sent</PanelTab>
          </PanelTabs>
          {showInbox ? (
          <PanelBlock
            style={{ display: "flex", flexDirection: "column" }}
          >
            {messages.map((message, index) => {
              return (
                <ul key={message.id} onClick={() => handleClick(message.id)} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <li>
                    <PanelIcon className="fa fa-code-fork" />
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
          </PanelBlock>
          ) : ''}

          {showSent ? (

            <PanelBlock
            style={{ display: "flex", flexDirection: "column" }}
            >
            {sentMessages.map((message, index) => {
              return (
                <ul key={message.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <li>
                To: {message.first_name} {message.last_name}
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
          </PanelBlock>
        ) : ''};
        </Panel>
      )}
      {showMessage ? (
        <Message style={{ position: "relative", left: "300px", overflowY: "scroll", overflowX: "hidden", height: "86vh" }}>
          {message.map((message, index) => {
            return (
              <ul key={message.id}>
                <li>
                  {message.first_name} {message.last_name}
                  <button onClick={postReport}>
                    Report {message.first_name}
                  </button>
                </li>
                <li>
                  Date Sent:
                  <Moment format="YYYY-MM-DD">{message.date_sent}</Moment>
                </li>
                <li>Subject: {message.subject}</li>
                <li>{message.message}</li>
                <hr />
              </ul>
            );
          })}
          <Title isSize={4}>Reply to {message[0].first_name}</Title>
          <form onSubmit={handleSubmit}>
            <Field>
              <Label>Send To</Label>
              <Control>
                <Input
                  type="text"
                  placeholder={message[0].first_name}
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
        </Message>
      ) : (
        ""
      )}
    </Main>
  );
}
