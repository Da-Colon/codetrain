import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Card,
  CardHeader,
  CardHeaderTitle,
  CardImage,
  CardContent,
  CardFooter,
  CardFooterItem,
  Image
} from "bloomer";
import {
  Form,
  Label,
  Input,
  Button,
  Title,
  TextArea
} from "../Styles/FormStyles";
import { Anchor } from "../Styles/navStyles";
import { CardContainer } from "../Styles/CardContainers";

const UserProfile = () => {
  const user = useSelector(state => state.user);
  const [skillsArray, setSkillsArray] = useState([]);
  const [isEditMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    github_url: "",
    linkedin_url: "",
    bootcamp_name: "",
    personal_website: "",
    about: "",
    skills: "",
    profile_pic_url: ""
  });

  // This plucks the id from the URL so we can use it in the getUserInfo and useEffect functions
  let { id } = useParams();
  const history = useHistory();

  const getUserInfo = async id => {
    const response = await axios.get(`http://localhost:3000/profiles/id/${id}`);
    setUserInfo(response.data);
    setSkillsArray(response.data.skills);
  };

  useEffect(() => {
    getUserInfo(id);
  }, []);

  const postReport = e => {
    e.preventDefault();
    history.push(`/report/user/${userInfo.id}/${userInfo.companies_id}`);
  };

  const handleEditMode = e => {
    e.preventDefault();
    setEditMode(true);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const updateUser = async id => {
    const endpoint = `http://localhost:3000/update/${id}`;

    let skillsArray = userInfo.skills.split(",");

    const payload = {
      github_url: userInfo.github_url,
      linkedin_url: userInfo.linkedin_url,
      personal_website: userInfo.personal_website,
      about: userInfo.about,
      skills: skillsArray,
      profile_pic_url: userInfo.profile_pic_url
    };
    const response = await axios.put(endpoint, payload);
    setSkillsArray(skillsArray);
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    updateUser(id);
    setEditMode(false);
    history.push(`/user/${id}`);
  };

  return (
    <>
      {isEditMode ? (
        <Form onSubmit={handleEditSubmit}>
          <Label>
            Profile Pic URL
            <Input
              type="url"
              placeholder="Profile Pic URL"
              name="profile_pic_url"
              value={userInfo.profile_pic_url}
              onChange={handleChange}
            ></Input>
          </Label>
          <Label>
            Github Profile
            <Input
              type="url"
              placeholder="Github Profile URL"
              name="github_url"
              value={userInfo.github_url}
              onChange={handleChange}
            ></Input>
          </Label>
          <Label>
            LinkedIn Profile
            <Input
              type="url"
              placeholder="LinkedIn Profile"
              name="linkedin_url"
              value={userInfo.linkedin_url}
              onChange={handleChange}
            ></Input>
          </Label>
          <Label>
            Personal Website
            <Input
              type="url"
              placeholder="Your Personal Website"
              name="personal_website"
              value={userInfo.personal_website}
              onChange={handleChange}
            ></Input>
          </Label>
          <Label>
            About Me
            <TextArea
              type="text"
              placeholder="About Me"
              name="about"
              value={userInfo.about}
              onChange={handleChange}
            ></TextArea>
          </Label>
          <Label>
            Skills
            <TextArea
              type="text"
              placeholder="Skills"
              name="skills"
              value={userInfo.skills}
              onChange={handleChange}
            ></TextArea>
          </Label>
          <Button type="submit">Edit Your Profile</Button>
        </Form>
      ) : (
        <CardContainer>
          <Card>
            {userInfo.id === user.id ? (
              <Button onClick={handleEditMode}>Edit Your Profile</Button>
            ) : (
              <></>
            )}
            <CardHeaderTitle>
              User Name: {userInfo.first_name} {userInfo.last_name}
            </CardHeaderTitle>
            {userInfo.id !== user.id && (
              <button onClick={postReport}>Report {userInfo.first_name}</button>
            )}
            <CardContent>
              <CardImage>
                <Image isSize="128x128" src={userInfo.profile_pic_url} />
              </CardImage>
              <h2>Bootcamp: {userInfo.bootcamp_name}</h2>
              <h2>
                Email:{" "}
                <Anchor href="mailto:{userInfo.email}">{userInfo.email}</Anchor>
              </h2>
              <h2>
                Github:{" "}
                <Anchor href={userInfo.github_url}>
                  {userInfo.github_url}
                </Anchor>
              </h2>
              <h2>
                LinkedIn:{" "}
                <Anchor href={userInfo.linkedin_url}>
                  {userInfo.linkedin_url}
                </Anchor>
              </h2>
              <h2>
                Personal Website:{" "}
                <Anchor href={userInfo.personal_website}>
                  {userInfo.personal_website}
                </Anchor>
              </h2>
              <h2>About: </h2>
              <p>{userInfo.about}</p>
              <h2>Skills: </h2>
              {skillsArray ? (
                <ul>
                  {Object.values(skillsArray).map(skill => {
                    return (
                      <li style={{ display: "inline", margin: "10px" }}>
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <></>
              )}{" "}
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </>
  );
};

export default UserProfile;
