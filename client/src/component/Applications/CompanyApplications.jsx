import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardContent,
  Content,
  CardFooter,
  CardFooterItem,
  Control,
  Input,
  Field,
  Label,
  Title,
  TextArea,
  Button
} from "bloomer";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CompanyApplications = () => {
  const user = useSelector(state => state.user);
  const [jobs, setJobs] = useState([]);
  // const [jobTitle, setJobTitle] = useState();
  const [jobId, setJobId] = useState("");
  const [showApplicants, setShowApplicants] = useState(false);

  const getJobPostsByCompanyId = async () => {
    const endpoint = `http://localhost:3000/posts/jobs/company/${user.companies_id}`;
    const res = await Axios.get(endpoint);

    res.data.length > 1 ? setJobs(res.data) : setJobs();
    res.data.length > 1 ? setJobId(String(res.data[0].id)) : setJobId();
  };

  function handleChange(e) {
    setJobId(e.target.value);
    setShowApplicants(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowApplicants(true);
  }

  useEffect(() => {
    getJobPostsByCompanyId();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Select a job to display applicants</h2>
        <select onChange={handleChange} value={jobId}>
          {jobs.map((job, i) => {
            return (
              <option key={i} value={job.id}>
                {job.title}
              </option>
            );
          })}
        </select>
        <button type="submit">See Applicants</button>
      </form>

      <ApplicantCardWrapper>
        {showApplicants ? <ApplicantsData jobId={jobId} /> : <></>}
      </ApplicantCardWrapper>
    </>
  );
};

const ApplicantsData = props => {
  const user = useSelector(state => state.user);
  const [applicants, setApplicants] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [showApplicants, setShowApplicants] = useState(true);
  const [messageApplicant, setMessageApplicant] = useState("");
  const [sendMessage, setSendMessage] = useState({
    subject: "",
    message: "",
    sent_from: "",
    sent_to: "",
    sent_from_companies_id: null
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const endpoint = "http://localhost:3000";
    const send = await Axios.post(`${endpoint}/sendmessage`, sendMessage);
    if (send.status === 200) {
      alert("Message Sent");
      setShowMessage(false);
    } else {
      alert("There was a problem sending the message please try again later");
    }
  };

  const getApplicantsByJobId = async () => {
    const endpoint = `http://localhost:3000/api/applicants/${props.jobId}`;
    const res = await Axios.get(endpoint);
    setApplicants(res.data);
  };

  useEffect(() => {
    getApplicantsByJobId();
  }, []);

  const handleRejection = async (applicantId, jobId) => {
    const endpoint = `http://localhost:3000/job-applications/update-status/${applicantId}/${jobId}`;
    const res = await Axios.put(endpoint);
    getApplicantsByJobId();
    alert("Applicant was rejected.");
  };

  const showMessageForm = applicant => {
    setShowMessage(true);
    setShowApplicants(false);
    setMessageApplicant(applicant);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setSendMessage({
      ...sendMessage,
      [name]: value,
      sent_from: user.id,
      sent_to: messageApplicant.applicantid,
      sent_from_companies_id: user.companies_id
    });
  };

  return (
    <>
      {applicants && showApplicants ? (
        applicants.map(applicant => {
          return (
            <Card
              key={applicant.jobId}
              style={{
                maxWidth: "400px",
                margin: "20px",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <CardHeader>
                <CardHeaderTitle>
                  {applicant.first_name} {applicant.last_name}
                </CardHeaderTitle>
              </CardHeader>
              <CardContent>
                <Content>
                  <strong>Date Applied:</strong>
                  <Moment format="YYYY-MM-DD">{applicant.date_applied}</Moment>
                </Content>
                <Content>
                  <strong>Email Address:</strong> {applicant.email}
                </Content>
                <Content>
                  <strong>Skills:</strong>
                  <ul style={{ display: "inline", listStyleType: "none" }}>
                    {applicant.skills.map((skill, i) => {
                      return <li key={i}>{skill}</li>;
                    })}
                  </ul>
                </Content>
                <Content>
                  <strong>Github Page:</strong>
                  <a href={applicant.github_url}>
                    {applicant.first_name}'s Github Profile
                  </a>
                </Content>
                <Content>
                  <strong>LinkedIn:</strong>
                  <a href={applicant.linkedin_url}>
                    {applicant.first_name}'s LinkedIn Profile
                  </a>
                </Content>
                <Content>
                  <strong>Bootcamp Name:</strong>
                  <p>{applicant.bootcamp_name}</p>
                </Content>
                <Content>
                  <strong>Application Status:</strong>
                  <p>
                    {!applicant.rejected && !applicant.accepted
                      ? "<pending>"
                      : applicant.rejected
                      ? "rejected"
                      : applicant.accepted
                      ? "approved"
                      : ""}
                  </p>
                </Content>
              </CardContent>
              <CardFooter style={{ marginTop: "auto" }}>
                <CardFooterItem>
                  <Button onClick={() => showMessageForm(applicant)}>
                    Message
                  </Button>
                  <Link to={`/user/${applicant.applicantid}`}>
                    <Button>View Profile</Button>
                  </Link>
                  <Button
                    onClick={() =>
                      handleRejection(applicant.applicantid, applicant.jobid)
                    }
                  >
                    Reject
                  </Button>
                </CardFooterItem>
              </CardFooter>
            </Card>
          );
        })
      ) : showMessage ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Title isSize={4}>Reply to {messageApplicant.first_name}</Title>
          <form onSubmit={handleSubmit}>
            <Field>
              <Label>Send To</Label>
              <Control>
                <Input
                  type="text"
                  placeholder={
                    messageApplicant.first_name +
                    " " +
                    messageApplicant.last_name
                  }
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
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CompanyApplications;

const ApplicantCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;
