import React, { useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Form, Label, Input, Button, Title } from "../../Styles/FormStyles";


const SignupForm = () => {
  const endpoint = "http://localhost:3000";
  // const endpoint = "http://192.168.0.123:3000";
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    github_url: '',
    linkedin_url: '',
    user_type: null,
    bootcamp_name: null,
    company_id: null,
    company_name: null,
  });

  const addInput = () =>{
    if(newUser.user_type === "2"){
      return <Label>Bootcamp Name<Input type="text" placeholder="Name of Bootcamp" onChange={handleInputChange} name="bootcamp_name" aria-label="Bootcamp Name" required /></Label>
    }
    if(newUser.user_type === "3"){
      return <Label>Company Name<Input type="text" placeholder="Name of Company" onChange={handleInputChange} name="company_name" aria-label="Company Name" required /></Label>
    }
}
  const history = useHistory();
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await Axios.post(`${endpoint}/signup`, newUser);
      alert('Successfully signed up, please log in')
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
    <Form onSubmit={handleSubmit}>
      <Title style={{ textAlign: "center" }}>Create an Account</Title>
      <Label>
        Email Adress
        <Input
          type="email"
          placeholder="Email Address"
          onChange={handleInputChange}
          name="email"
          aria-label="Email Address"
        />
      </Label>
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
      <Label>
        Github URL
        <Input
          type="url"
          placeholder="Enter your github url"
          onChange={handleInputChange}
          name="github_url"
          aria-label="Github URL"
        />
      </Label>
      <Label>
        Linkedin URL
        <Input
          type="url"
          placeholder="Enter your github url"
          onChange={handleInputChange}
          name="linkedin_url"
          aria-label="Linkedin URL"
        />
      </Label>

        <Title>Are you part of a Bootcamp or a Company?</Title>
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
      {addInput()}

      <Button type="submit">Create Your Account</Button>
      <Link to="/login" style={{ fontSize: "150%" }}>
        Already have an account, Sign in!
      </Link>
    </Form>
  );
};

export default SignupForm;
