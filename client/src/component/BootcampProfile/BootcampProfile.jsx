import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {
  const user = useSelector(state => state.user);
  const [userInfo, setUserInfo] = useState({
    // id: "1",
    email: "",
    first_name: "",
    last_name: "",
    github_url: "",
    linkedin_url: "",
    bootcamp_name: ""
  });

  // This plucks the id from the URL so we can use it in the getUserInfo and useEffect functions
  let { id } = useParams();

  const getUserInfo = async id => {
    const response = await axios.get(`http://localhost:3000/profiles/id/${id}`);
    setUserInfo(response.data);
  };

  useEffect(() => {
    getUserInfo(id);
  }, []);

  return (
    <card>
      <h1>
        User Name: {userInfo.first_name} {userInfo.last_name}
      </h1>
      <h2>Bootcamp: {userInfo.bootcamp_name}</h2>
      <h2>
        Email:{" "}
        <a href="mailto:{userInfo.email}" target="_blank">
          {userInfo.email}
        </a>
      </h2>
      <h2>
        Github:{" "}
        <a href={userInfo.github_url} target="_blank">
          {userInfo.github_url}
        </a>
      </h2>
      <h2>
        LinkedIn:{" "}
        <a href={userInfo.linkedin_url} target="_blank">
          {userInfo.linkedin_url}
        </a>
      </h2>

      {/* <h2>About: </h2>
      <p>{userInfo.description}</p> */}
    </card>
  );
};

export default UserProfile;
