import React, { useState } from "react";

import { Form, Label, Input, Button, Title } from "../../Styles/FormStyles";
import Axios from "axios";

const CreateCompany = props => {
  const [state, setState] = useState({
    email: "",
    name: ""
  });

  // prevents the use of writing several handleChange functions by deconstructing name and value from the onchange event
  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const endpoint = "http://localhost:3000/companies/add";

    const payload = {
      email: state.email,
      name: state.name
    };

    const response = await Axios.post(endpoint, payload);
    // alert("Your company was added");
    setState({ ...state, isSubmitted: true });

    props.getCompanyInfo();
  };

  return (
    <>
      {state.isSubmitted ? (
        <p>Your company was added</p>
      ) : (
        <Form>
          <Label>
            Company Email
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Company Name
            <Input
              placeholder="Name"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </Label>
          <Button onClick={handleSubmit}>Add Company</Button>
        </Form>
      )}
    </>
  );
};

export default CreateCompany;
