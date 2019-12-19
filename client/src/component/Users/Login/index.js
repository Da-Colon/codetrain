import React, { useState } from "react";
import {theStore} from "../../../index";
import Axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Label, Input, Button, Title } from "../../Styles/FormStyles";



const LoginForm = props => {
  const endpoint = "http://localhost:3000";
  // const endpoint = "http://192.168.0.123:3000";
  let history = useHistory();

  const [login, setLogin] = useState({ email: "", password: "" });

  const updateUser = data => {
    theStore.dispatch({
      type: "user logged in",
      payload: data
    });
  };

  const handleSubmit = async (e, props) => {
    e.preventDefault();
    try {
      const response = await Axios.post(`${endpoint}/login`, login);
      console.log(response)
      const data = await response.data.user;
      await updateUser(data);
      history.push("/home");
    } catch {
      window.alert(
        "Sorry, There Was An Error While Logging In, Please Try Again"
      );
      window.location.reload();
    }
  };

  const handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit} className="form-signin">
      <Title style={{ textAlign: "center" }}>Sign In</Title>
      <Label>
        Email Address:
        <Input
          className="form-control"
          type="email"
          name="email"
          placeholder="Email Address"
          aria-label="Email Input Field"
          onChange={handleInputChange}
        />
      </Label>
      <Label>
        Password:
        <Input
          className="form-control"
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password Input Field"
          onChange={handleInputChange}
        />
      </Label>
      <Button type="submit">LOGIN</Button>
    </Form>
  );
};

function mapStateToProps(state) {
  return {
    ...state.user
  };
}

export default connect(mapStateToProps)(LoginForm);