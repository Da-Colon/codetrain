import React, { Fragment } from 'react';
import BootcampResourceCard from './BootcampResourceCard';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, useHistory, Route } from 'react-router-dom';
import {Title, Button} from 'bloomer';

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
    const resourcesEndpoint = 'http://localhost:3000/resources/getAllResources';
    const res = await axios.get(resourcesEndpoint);
    setResources(res.data);
    setResourcesFetched(true);
  };

  const deleteResource = async resourceId => {
    let confirmation = window.confirm('Are you sure you want to delete this resource you worked so hard to create?')
    if (confirmation) {
      const endpoint = `http://localhost:3000/resources/delete/${resourceId}`;
      await axios.put(endpoint);
      fetchResourcesData();
    }
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

  const history = useHistory();

  const resourceCardStyles = {
    maxWidth: '600px',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <Fragment>
      {user.user_types_id === 2 && (
        <Link to="/resources/submit">
          <Title isSize={3} style={{textAlign: 'center', paddingTop: 10}}><Button isColor={'success'} isOutlined>Submit a resource!</Button></Title>
        </Link>
      )}
      <ResourceWrapper>
        {resourcesFetched ? (
          resources.map((resource, i) => {
            const {
              id: resourceId,
              up_votes,
              down_votes,
              title,
              short_description: descriptionShort,
              full_description: descriptionFull,
              resource_url: resourceURL,
              is_deleted: isDeleted,
              date_posted: datePosted /* information beyond this line relates to resource poster */,
              users_id: usersId,
              email,
              first_name: firstName,
              last_name: lastName,
              github_url: githubLink,
              linkedin_url: linkedinLink,
              bootcamp_name: bootcampAffiliation
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
                  // descriptionFull={descriptionFull}
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

const Anchor = styled.a`
  color: blue;
`;

const ResourceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default BootcampResourceGet;
