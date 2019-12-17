import React from "react";
import { useState, useEffect } from "react";
import BootcampResourceCard from './BootcampResourceCard';
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import { Link, useHistory } from "react-router-dom";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardHeader,
  CardHeaderTitle,
  CardContent,
  Content,
  CardFooter,
  CardFooterItem,
  Media,
  MediaContent,
  Title,
  Subtitle
} from "bloomer";

import EditResourceModal from "./EditResourceModal";

const ResourcePost = props => {
  const user = useSelector(state => state.user);
  const [resources, setResources] = useState([]);
  const [resourcesFetched, setResourcesFetched] = useState(false);
  const [editFormActive, setEditFormActive] = useState({
    isActive: false,
    resourceId: null
  });

  const fetchResourcesData = async () => {
    const resourcesEndpoint = `http://localhost:3000/resources/${props.match.params.resource_id}`;
    const res = await axios.get(resourcesEndpoint);
    setResources(res.data);
    setResourcesFetched(true);
  };

  let history = useHistory();

  const deleteResource = async resourceId => {
    const endpoint = `http://localhost:3000/resources/delete/${resourceId}`;
    await axios.put(endpoint);
    history.push('/resources')
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

  return (
    <ResourceWrapper>
      {resourcesFetched ? (
        <BootcampResourceCard
          title={resources.title}
          resourceURL={resources.resource_url}
          cardResource={resources}
          resourceId={resources.id}
          datePosted={resources.date_posted}
          usersId={resources.users_id}
          firstName={resources.first_name}
          lastName={resources.last_name}
          email={resources.email}
          githubLink={resources.github_url}
          linkedinLink={resources.linkin_url}
          descriptionShort={resources.short_description}
          descriptionFull={resources.full_description}
          user={user}
          editResource={editResource}
          deleteResource={deleteResource}
          editFormActive={editFormActive}
          setEditFormActive={setEditFormActive}
          fetchResourcesData={fetchResourcesData}
        />
      ) : (
          <p>Loading ...</p>
        )}
    </ResourceWrapper>
  );
};

const Anchor = styled.a`
  color: blue;
`;

const ResourceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default ResourcePost;
