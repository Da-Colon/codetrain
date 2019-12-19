import React, {Fragment, useState} from 'react';
import {useSelector} from 'react-redux';
import axios from "axios";
// import { Form, Label, Input, Button, Title } from '../Styles/FormStyles'
import {useHistory} from 'react-router-dom';
import {
  Box,
  Select,
  Input,
  Field,
  Label,
  Title,
  TextArea,
  Button
} from "bloomer";

const BootcampResourcePost = () => {
  const user = useSelector(state => state.user);
  let history = useHistory();
  const [state, setState] = useState({
    title: "",
    short_description: "",
    full_description: "",
    resource_url: "http://",
    resourceSubmitted: false
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const userId = user.id;
    const endpoint = `http://localhost:3000/resources/add/${userId}`;

    const payload = {
      title: state.title,
      short_description: state.short_description,
      full_description: state.full_description,
      resource_url: state.resource_url,
      userId
    };

    const response = await axios.post(endpoint, payload);
    setState({ ...state, resourceSubmitted: true });
    setTimeout(() => {
      history.push('/resources')
    }, 1000)
  }

  return ( 
    <Box style={{margin: "32px"}}>
    {state.resourceSubmitted ? (
      <Box>
        <Title>Thank you for submitting a resource!</Title>
      </Box>
    ) : (
      <form onSubmit={handleSubmit}>
      <Title style={{textAlign: "center"}}>Submit Your Resource</Title>
        <Field>

        <Label>
          Resource Title
          <Input
            type="text"
            placeholder="Resource Title"
            name="title"
            value={state.title}
            onChange={handleChange}
            ></Input>
        </Label>
            </Field>
            <Field>

        <Label>
          Resource Description (short)
          <TextArea
            rows="5"
            cols="33"
            placeholder="Short description of resource"
            name="short_description"
            value={state.short_description}
            onChange={handleChange}
            />
        </Label>
            </Field>
            <Field>

        <Label>
          Resource Description (full)
          <TextArea
            rows="5"
            cols="33"
            placeholder="Full description of resource"
            name="full_description"
            value={state.full_description}
            onChange={handleChange}
            />
        </Label>
            </Field>
            <Field>

        <Label>
          Resource Link (URL)
          <Input
            type="url"
            placeholder="Link to resource"
            name="resource_url"
            value={state.resource_url}
            onChange={handleChange}
            ></Input>
        </Label>
            </Field>
        <Button isColor="primary" type="submit">Submit Resource</Button>
      </form>
    )}
    </Box>
  );
}
 
export default BootcampResourcePost;