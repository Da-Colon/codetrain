import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'


import {
  Form,
  Label,
  Input,
  Button,
  Title,
  TextArea
} from "../Styles/FormStyles";


export default function PostReports() {
  const user = useSelector(state => state.user);
  const { user_id = null, posts_job_id = null, companies_id = null, resource_id = null } = useParams();
  const [sendMessage, setSendMessage] = useState({users_id: user_id, posts_job_id: posts_job_id, companies_id: companies_id, resource_id: resource_id, reason: '', submited_by: ''});
  
  const endpoint = "http://localhost:3000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const send = await axios.post(`${endpoint}/reports/newreport`, sendMessage)
    console.log(send)
    if(send.status === 200){
      alert("Message Sent")
    } else{
      alert("There was a problem sending the message please try again later")
    }
  }

  const handleChange = (e) =>{
      const { name, value } = e.target;
      setSendMessage({ ...sendMessage, [name]: value, users_id: user_id, posts_job_id: posts_job_id, companies_id: companies_id, resource_id: resource_id, submited_by: user.id });
      
    };

  return (
    <div>
      <Title>Report</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            Sending To:
            <input
            type="text"
            placeholder='ADMIN'
            name="receiver"
            aria-label="receiver"
            disabled />
          </Label>
          <Label>
            Reason:
            <TextArea 
            type="text"
            onChange={handleChange}
            name="reason"
            aria-label="subject"
            />
          </Label>

          <Button type="submit">Send Report</Button>
        </Form>
    </div>
  )
}
