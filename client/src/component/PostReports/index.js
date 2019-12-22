import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

import {
  Box,
  Field,
  Label,
  Title,
  Button,
  TextArea
} from "bloomer";

export default function PostReports() {
  const user = useSelector(state => state.user);
  const history = useHistory();
  let { user_id, posts_job_id, companies_id, resource_id } = useParams();
  // change string to null
  if (user_id === "null") {
    user_id = null;
  }
  if (posts_job_id === "null") {
    posts_job_id = null;
  }
  if (companies_id === "null") {
    companies_id = null;
  }
  if (resource_id === "null") {
    resource_id = null;
  }

  const [sendMessage, setSendMessage] = useState({
    users_id: user_id,
    posts_job_id: posts_job_id,
    companies_id: companies_id,
    resource_id: resource_id,
    reason: "",
    submited_by: user.id
  });

  const endpoint = "http://localhost:3000";

  const handleSubmit = async e => {
    e.preventDefault();

    const send = await axios.post(`${endpoint}/reports/newreport`, sendMessage);
    console.log(send);
    if (send.status === 200) {
      alert("Message Sent");
      history.push("/home");
    } else {
      alert("There was a problem sending the message please try again later");
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setSendMessage({
      ...sendMessage,
      [name]: value,
      users_id: user_id,
      posts_job_id: posts_job_id,
      companies_id: companies_id,
      resource_id: resource_id,
      submited_by: user.id
    });
  };

  return (
    <Box style={{ margin: "128px" }}>
      <Title style={{ textAlign: "center" }}>Report</Title>
      <form onSubmit={handleSubmit} style={{ padding: "32px" }}>
        <Field>
          <Label>
            Sending To:
            <input
              type="text"
              placeholder="ADMIN"
              name="receiver"
              aria-label="receiver"
              disabled
            />
          </Label>
        </Field>
        <Field>
          <Label>
            Reason:
            <TextArea
              type="text"
              onChange={handleChange}
              name="reason"
              aria-label="reason"
            />
          </Label>
        </Field>

        <Button isColor="primary" type="submit">
          Send Report
        </Button>
      </form>
    </Box>
  );
}
