import React, { Fragment } from "react";
import BootcampResourceCard from "./BootcampResourceCard";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Title, Button } from "bloomer";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const BootcampResourceGet = () => {
  const user = useSelector(state => state.user);
  const [resources, setResources] = useState([]);
  const [resourcesFetched, setResourcesFetched] = useState(false);
  // const [editFormActive, setEditFormActive] = useState(false);
  const [editFormActive, setEditFormActive] = useState({
    isActive: false,
    resourceId: null
  });

  const fetchResourcesData = async () => {
    const resourcesEndpoint = "http://localhost:3000/resources/getAllResources";
    const res = await axios.get(resourcesEndpoint);
    setResources(res.data);
    setResourcesFetched(true);
  };

  const deleteResource = resourceId => {
    confirmAlert({
      title: "Are you sure?",
      message:
        "Who knows how many people you helped by creating this resource! Please reconsider before clicking Yes. Regardless, thank you for your contribution, and we hope you contribute again soon!",
      buttons: [
        {
          label: "Delete",
          onClick: async () => {
            const endpoint = `http://localhost:3000/resources/delete/${resourceId}`;
            await axios.put(endpoint);
            await fetchResourcesData();
          }
        },
        {
          label: "Keep",
          onClick: () => null
        }
      ]
    });
  };

  const editResource = (e, resource) => {
    setEditFormActive({
      isActive: true,
      resourceId: resource.id
    });
  };

  useEffect(() => {
    fetchResourcesData();
  }, []);

  const resourceCardStyles = {
    maxWidth: "600px",
    margin: "20px",
    display: "flex",
    flexDirection: "column"
  };

  return (
    <Fragment>
      {user.user_types_id === 2 && (
        <Title isSize={3} style={{ textAlign: "center", marginTop: 30 }}>
          <Link to="/resources/submit">
            <Button isColor={"link"} isOutlined={true}>
              Submit a resource!
            </Button>
          </Link>
        </Title>
      )}
      <ResourceWrapper>
        {resourcesFetched ? (
          resources.map((resource, i) => {
            const {
              id: resourceId,
              title,
              short_description: descriptionShort,
              resource_url: resourceURL,
              date_posted: datePosted /* information beyond this line relates to resource poster */,
              users_id: usersId,
              email,
              first_name: firstName,
              last_name: lastName,
              github_url: githubLink,
              linkedin_url: linkedinLink
            } = resource;
            // const postReport = () => {
            //   history.push(
            //     `/report/resource/${resource.id}/${resource.users_id}`
            //   );
            // };
            return (
              <Fragment>
                <BootcampResourceCard
                  key={i}
                  title={title}
                  resourceURL={resourceURL}
                  cardResource={resource}
                  resourceId={resourceId}
                  datePosted={datePosted}
                  usersId={usersId}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  githubLink={githubLink}
                  linkedinLink={linkedinLink}
                  descriptionShort={descriptionShort}
                  user={user}
                  editResource={editResource}
                  deleteResource={deleteResource}
                  editFormActive={editFormActive}
                  setEditFormActive={setEditFormActive}
                  fetchResourcesData={fetchResourcesData}
                  resourceCardStyles={resourceCardStyles}
                />
              </Fragment>
            );
          })
        ) : (
          <p>Loading ...</p>
        )}
      </ResourceWrapper>
    </Fragment>
  );
};


const ResourceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default BootcampResourceGet;
