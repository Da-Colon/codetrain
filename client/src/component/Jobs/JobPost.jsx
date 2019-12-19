import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Axios from "axios";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardContent,
  Content,
  CardFooter,
  CardFooterItem
} from "bloomer";
import styled from "styled-components";
import {
  Form,
  Label,
  Input,
  Button,
  Title,
  TextArea
} from "../Styles/FormStyles";

const JobPost = props => {
  const user = useSelector(state => state.user);

  const [isEditMode, setEditMode] = useState(false);
  const [jobs, setJobs] = useState([]);
  let history = useHistory();

  const [editJobState, setEditJobState] = useState({
    job_title: "",
    description: "",
    experience: "",
    email: "",
    phone: "",
    isSubmitted: false
  });

  const fetchJobsData = async () => {
    const endpoint = `http://localhost:3000/posts/jobs/id/${props.match.params.job_id}`;
    const res = await Axios.get(endpoint);
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobsData();
  }, []);

  const postApplication = async () => {
    const endpoint = "http://localhost:3000/job-applications/add-application/";
    const payload = {
      users_id: user.id,
      posts_jobs_id: jobs.id
    };
    Axios.post(endpoint, payload)
      .then(res => {
        alert("Your application was received.");
      })
      .catch(err => {
        alert("You have already applied for this job.");
      });
  };

  const handleEditMode = () => {
    setEditJobState({
      job_title: jobs.title,
      description: jobs.description,
      experience: jobs.experience,
      email: jobs.email,
      phone: jobs.phone
    });
    setEditMode(true);
  };

  // prevents the use of writing several handleChange functions by deconstructing name and value from the onchange event
  const handleChange = e => {
    const { name, value } = e.target;
    setEditJobState({ ...editJobState, [name]: value });
  };

  const handleEditSubmit = async e => {
    e.preventDefault();
    const endpoint = `http://localhost:3000/posts/jobs/update/${props.match.params.job_id}`;

    const payload = {
      title: editJobState.job_title,
      content: editJobState.description,
      experience: editJobState.experience,
      contact_email: editJobState.email,
      contact_phone: editJobState.phone
    };

    const response = await Axios.put(endpoint, payload);
    alert("Edit Successful!");
    setEditMode(false);
    fetchJobsData()
    history.push(`/jobs/${props.match.params.job_id}`);
  };

  const handleRemoveJob = async e => {
    e.preventDefault()
    confirmAlert({
      title: 'Are you sure?',
      message: 'You will not be able to recover this job posting once it has been removed.',
      buttons: [
        {
          label: 'Delete',
          onClick: async () => {
            const endpoint = `http://localhost:3000/posts/jobs/delete/${props.match.params.job_id}`
            const response = await Axios.put(endpoint);
            history.push(`/jobs`)
          }
        },
        {
          label: 'Keep',
          onClick: () => null
        }
      ]
    });
  };




  return (
    <>
      {isEditMode ? (
        <Form onSubmit={handleEditSubmit}>
          <Label>
            Job Title
            <Input
              type="text"
              placeholder="Job Title"
              name="job_title"
              value={editJobState.job_title}
              onChange={handleChange}
            ></Input>
          </Label>
          <Label>
            Job Description
            <TextArea
              placeholder="Job Description Information"
              name="description"
              value={editJobState.description}
              onChange={handleChange}
            ></TextArea>
          </Label>
          <Label>
            Experience Desired
            <TextArea
              placeholder="What skills are you looking for?"
              name="experience"
              value={editJobState.experience}
              onChange={handleChange}
            ></TextArea>
          </Label>
          <Label>
            Contact Email
            <Input
              type="email"
              placeholder="Contact Email"
              name="email"
              value={editJobState.email}
              onChange={handleChange}
            ></Input>
          </Label>
          <Label>
            Contact Phone Number
            <Input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={editJobState.phone}
              onChange={handleChange}
            ></Input>
          </Label>
          <Button type="submit">Edit Job Post</Button>
          <Button onClick={handleRemoveJob}>Remove Job Post</Button>
        </Form>
      ) : (
          <CardFooterItem>
            <Card style={{ maxWidth: "60vw", margin: "20px" }}>
              <CardHeader>
                <CardHeaderTitle>{jobs.title}</CardHeaderTitle>
              </CardHeader>
              <CardContent>
                <Content>
                  <strong>Company Name: </strong>
                  <Link to={`/company/${jobs.companies_id}`}>{jobs.name}</Link>
                </Content>
                <Content>
                  <strong>Date Posted: </strong>
                  <Moment format="YYYY-MM-DD">{jobs.date_posted}</Moment>
                </Content>
                <Content>
                  <strong>Job Description: </strong>
                  {jobs.content}
                </Content>
                <Content>
                  <strong>Experience:</strong> {jobs.experience}
                </Content>
                <Content>
                  <strong>Contact Email: </strong>
                  {jobs.contact_email}
                </Content>
                <Content>
                  <strong>Report: </strong>
                  <Link to={`/report/job/${jobs.id}/${jobs.companies_id}/${jobs.users_id}`}>Report this job posting</Link>
                </Content>
              </CardContent>
              <CardFooter>
                <CardFooterItem>
                  {/* If it's a bootcamp user viewing the job, give them ability to apply. If it's a user representing the company that posted the job, give them the option to apply. */}
                  {user.user_types_id === 2 ? (
                    <Button onClick={postApplication}>Apply!</Button>
                  ) : user.companies_id === jobs.companies_id ? (
                    <Button onClick={handleEditMode}>Edit Post</Button>
                  ) : (
                        <></>
                      )}
                </CardFooterItem>
              </CardFooter>
            </Card>
          </CardFooterItem>
        )}
    </>
  );
};

const JobCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export default JobPost;
