import React from "react";
import { useState, useEffect } from "react";
import BootcampResourceCard from './BootcampResourceCard';
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {Button} from 'bloomer'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const fetchResourcesData = async (resourceId) => {
  const resourcesEndpoint = `http://localhost:3000/resources/${resourceId}`;
  const res = await axios.get(resourcesEndpoint);
  const data = res.data
  return data
};

const ResourcePost = props => {
  const user = useSelector(state => state.user);
  const [resources, setResources] = useState([]);
  const [resourcesFetched, setResourcesFetched] = useState(false);
  const [editFormActive, setEditFormActive] = useState({
    isActive: false,
    resourceId: null
  });


  let history = useHistory();

  const deleteResource = async resourceId => {
    confirmAlert({
      title: 'Are you sure?',
      message: 'Who knows how many people you helped by creating this resource! Please reconsider before clicking Yes. Regardless, thank you for your contribution, and we hope you contribute again soon!',
      buttons: [
        {
          label: 'Delete',
          onClick: async () => {
            const endpoint = `http://localhost:3000/resources/delete/${resourceId}`;
            await axios.put(endpoint);
            history.push('/resources')
          }
        },
        {
          label: 'Keep',
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
    fetchResourcesData(props.match.params.resource_id).then(data => {
    setResources(data)
    setResourcesFetched(true);
  })
  }, [props.match.params.resource_id]);

  const resourceCardStyles = {
    maxWidth: "1000px",
    margin: "20px",
    display: "flex",
    flexDirection: "column"
  }

  const BackButton = () => <Link to='/resources' style={{textAlign: 'center', marginBottom: 20}}><Button isColor={'link'} isOutlined>See All Resources</Button></Link>

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
          resourceCardStyles={resourceCardStyles}
          BackButton={BackButton}
        />
      ) : (
          null
        )}
    </ResourceWrapper>
  );
};

const ResourceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default ResourcePost;
