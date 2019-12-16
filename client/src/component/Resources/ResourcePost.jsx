import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";

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

const ResourcePost = props => {
  const user = useSelector(state => state.user);
  const [resources, setResources] = useState([]);
  const [resourcesFetched, setResourcesFetched] = useState(false);

  const fetchResourcesData = async () => {
    const resourcesEndpoint = `http://localhost:3000/resources/${props.match.params.resource_id}`;
    const res = await axios.get(resourcesEndpoint);
    setResources(res.data);
    setResourcesFetched(true);
  };

  const deleteResource = async resourceId => {
    const endpoint = `http://localhost:3000/resources/delete/${resourceId}`;
    await axios.delete(endpoint);
    fetchResourcesData();
  };

  useEffect(() => {
    fetchResourcesData();
  }, []);

  return (
    <ResourceWrapper>
      {resourcesFetched ? (
        // resources.map((resource, i) => {
        //   const {
        //     id: resourceId,
        //     up_votes,
        //     down_votes,
        //     title,
        //     short_description: descriptionShort,
        //     full_description: descriptionFull,
        //     resource_url: resourceURL,
        //     date_posted: datePosted /* information beyond this line relates to resource poster */,
        //     users_id: usersId,
        //     email,
        //     first_name: firstName,
        //     last_name: lastName,
        //     github_url: githubLink,
        //     linkedin_url: linkedinLink,
        //     bootcamp_name: bootcampAffiliation
        //   } = resource;
        //   return (
        <Card style={{ maxWidth: "60vw", margin: "20px" }}>
          <CardHeader>
            <CardHeaderTitle>{resources.title}</CardHeaderTitle>
          </CardHeader>
          <CardContent>
            <Media>
              <MediaContent hasTextAlign={"left"}>
                <Title isSize={5}>Resource Info</Title>
                <Subtitle isSize={6}>
                  <Anchor href={resources.resource_url}>
                    Link to resource
                  </Anchor>
                  <p>
                    Posted:{" "}
                    <Moment format="YYYY-MM-DD">{resources.date_posted}</Moment>
                  </p>
                </Subtitle>
              </MediaContent>
              <MediaContent hasTextAlign={"right"}>
                <Title isSize={5}>Resource Creator</Title>
                <Subtitle isSize={6}>
                  <Breadcrumb isSize={`small`} isAlign={"right"}>
                    <ul>
                      <BreadcrumbItem>
                        <Link to={`/user/${resources.users_id}`}>
                          {resources.first_name} {resources.last_name}
                        </Link>
                      </BreadcrumbItem>
                      <BreadcrumbItem>
                        <a href={`mailto:${resources.email}`}>Email</a>
                      </BreadcrumbItem>
                    </ul>
                    <ul>
                      <BreadcrumbItem>
                        <a href={resources.github_url}>GitHub</a>
                      </BreadcrumbItem>
                      <BreadcrumbItem>
                        <a href={resources.linkin_url}>LinkedIn</a>
                      </BreadcrumbItem>
                    </ul>
                  </Breadcrumb>
                </Subtitle>
              </MediaContent>
            </Media>
            <Content>
              <Box>{resources.short_description}</Box>
            </Content>
            <Content>{resources.full_description}</Content>
          </CardContent>
          {user.id === resources.users_id ? (
            <CardFooter>
              <CardFooterItem>
                <Button
                  isColor={`success`}
                  onClick={() => console.log(`Hopefully we can edit soon!`)}
                >
                  Edit
                </Button>
              </CardFooterItem>
              <CardFooterItem>
                <Button
                  isColor={`danger`}
                  onClick={() => deleteResource(resources.id)}
                >
                  Delete
                </Button>
              </CardFooterItem>
            </CardFooter>
          ) : null}
        </Card>
      ) : (
        //   );
        // })
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
