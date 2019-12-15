import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Form,
  Label,
  Input,
  Button,
  Title,
  TextArea
} from "../Styles/FormStyles";
import axios from "axios";

const CompanyJobs = () => {
  const company = useSelector(state => state.user);

  const [state, setState] = useState({
    job_title: "",
    description: "",
    experience: "",
    email: "",
    phone: "",
    isSubmitted: false
  });

  // prevents the use of writing several handleChange functions by deconstructing name and value from the onchange event
  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const endpoint = "http://localhost:3000/posts/jobs/add";

    const payload = {
      title: state.job_title,
      content: state.description,
      experience: state.experience,
      contact_email: state.email,
      contact_phone: state.phone,
      companies_id: company.companies_id,
      users_id: company.id
    };

    const response = await axios.post(endpoint, payload);
    setState({ ...state, isSubmitted: true });
  };

  return (
    <>
      <Title>Create a Job Post</Title>
      {state.isSubmitted ? (
        <div>
          <h2> Thank you for your submission {state.contact_name}</h2>
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Label>
            Job Title
            <Input
              type="text"
              placeholder="Job Title"
              name="job_title"
              value={state.name}
              onChange={handleChange}
            ></Input>
          </Label>
          <Label>
            Job Description
            <TextArea
              placeholder="Job Description Information"
              name="description"
              value={state.description}
              onChange={handleChange}
            ></TextArea>
          </Label>
          <Label>
            Experience Desired
            <TextArea
              placeholder="What skills are you looking for?"
              name="experience"
              value={state.experience}
              onChange={handleChange}
            ></TextArea>
          </Label>
          <Label>
            Contact Email
            <Input
              type="email"
              placeholder="Contact Email"
              name="email"
              value={state.email}
              onChange={handleChange}
            ></Input>
          </Label>
          <Label>
            Contact Phone Number
            <Input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={state.phone}
              onChange={handleChange}
            ></Input>
          </Label>
          <Button type="submit">Create Job</Button>
        </Form>
      )}
    </>
  );
};

export default CompanyJobs;
