import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import CreateCompany from "./CreateCompany";

import {
  Box,
  Select,
  Input,
  Field,
  Label,
  Title,
  Button
} from "bloomer";

const SignupForm = () => {
  const endpoint = "http://localhost:3000";
  // const endpoint = "http://192.168.0.123:3000";
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    github_url: "https://",
    linkedin_url: "https://",
    user_type: null,
    bootcamp_name: null,
    company_id: null
  });

  const [companyInfo, setCompanyInfo] = useState([]);

  const getCompanyInfo = async () => {
    const response = await Axios.get(`http://localhost:3000/companies`);
    setCompanyInfo(response.data);
  };

  useEffect(() => {
    getCompanyInfo();
  }, []);

  const addInput = () => {
    if (newUser.user_type === "2") {
      return (
        <Field>
          <Label>
            Bootcamp Name
            <Input
              type="text"
              placeholder="Name of Bootcamp"
              onChange={handleInputChange}
              name="bootcamp_name"
              aria-label="Bootcamp Name"
              required
            />
          </Label>
        </Field>
      );
    }
    if (newUser.user_type === "3") {
      return (
        <Field>
          <Label>
            Company Name
            <br />
            <Select onChange={handleInputChange} name="company_id">
              <option>Select a company</option>
              {companyInfo.map(company => {
                return (
                  <option name="company_id" value={company.id}>
                    {company.name}
                  </option>
                );
              })}
            </Select>
          </Label>
          <Label>
            Is your company not listed? Add it here.
            {/* <Input
              type="text"
              placeholder="Name of Company"
              onChange={handleInputChange}
              name="company_name"
              aria-label="Company Name"
              // required
            /> */}
            <CreateCompany getCompanyInfo={getCompanyInfo} />
          </Label>
        </Field>
      );
    }
  };
  const history = useHistory();
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await Axios.post(`${endpoint}/signup`, newUser);
      console.log(response);
      alert("Successfully signed up, please log in");
      history.replace("/login");
    } catch {
      window.alert(
        "Sorry, There Was An Error With Signing up, Please Try Again"
      );
      window.location.reload();
    }
  };

  const handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <Box style={{ margin: "0 auto", maxWidth: '60vw', marginTop: 40 }}>
      <form onSubmit={handleSubmit}>
        <Title style={{ textAlign: "center" }}>Create an Account</Title>
        <Field>
          <Label>
            Email Address
            <Input
              type="email"
              placeholder="Email Address"
              onChange={handleInputChange}
              name="email"
              aria-label="Email Address"
            />
          </Label>
        </Field>
        <Field>
          <Label>
            Password
            <Input
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
              name="password"
              aria-label="Password"
            />
          </Label>
        </Field>
        <Field>
          <Label>
            First Name
            <Input
              type="text"
              placeholder="Enter First Name"
              onChange={handleInputChange}
              name="first_name"
              aria-label="First Name"
            />
          </Label>
        </Field>
        <Field>
          <Label>
            Last Name
            <Input
              type="text"
              placeholder="Enter Last Name"
              onChange={handleInputChange}
              name="last_name"
              aria-label="Last Name"
            />
          </Label>
        </Field>
        <Field>
          <Label>
            Github Profile
            <Input
              type="url"
              placeholder="Link to your Github Profile"
              onChange={handleInputChange}
              name="github_url"
              value={newUser.github_url}
              aria-label="Github URL"
            />
          </Label>
        </Field>
        <Field>
          <Label>
            LinkedIn Profile
            <Input
              type="url"
              placeholder="Link to your LinkedIn Profile"
              onChange={handleInputChange}
              name="linkedin_url"
              value={newUser.linkedin_url}
              aria-label="Linkedin URL"
            />
          </Label>
        </Field>

        <Title isSize={5}>Are you part of a Bootcamp or a Company?</Title>
        <Field>
          <Label>
            <input
              type="radio"
              value="2"
              onChange={handleInputChange}
              name="user_type"
              aria-label="Bootcamp"
            /> 
            Bootcamp
          </Label>
        </Field>
        <Field>
          <Label>
            <input
              type="radio"
              value="3"
              onChange={handleInputChange}
              name="user_type"
              aria-label="Bootcamp"
            />
            Company
          </Label>
        </Field>
        {addInput()}

        <Button type="submit">Create Your Account</Button>
      </form>
    </Box>
  );
};

export default SignupForm;
