import React from "react";
import Moment from "react-moment";
import { Link, useHistory } from "react-router-dom";
import EditResourceModal from './EditResourceModal';
import styled from 'styled-components';

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

const BootcampResourceCard = (props) => {
  let history = useHistory();

  const {
    title,
    resourceURL,
    cardResource,
    resourceId,
    datePosted,
    usersId,
    firstName,
    lastName,
    email,
    githubLink,
    linkedinLink,
    descriptionShort,
    descriptionFull,
    user,
    editResource,
    deleteResource,
    editFormActive,
    setEditFormActive,
    fetchResourcesData,
    resourceCardStyles
  } = props;

  return (
    <Card
      style={resourceCardStyles}
    >
      <CardHeader>
        <CardHeaderTitle style={{fontSize: '1.25rem'}}>{title}</CardHeaderTitle>
      </CardHeader>
      <CardContent>
        <Media>
          <MediaContent hasTextAlign={"left"}>
            <Title style={{fontSize: '1.35rem'}}>Resource Info</Title>
            <Subtitle isSize={6}>
              <Breadcrumb style={{fontSize: '1rem'}} isAlign={"left"}>
                <ul>
                  <BreadcrumbItem>
                    <Anchor href={resourceURL} target="_blank">
                      Resource link
              </Anchor>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                  <Link to={`/resources/${resourceId}`}>
                    Full post
            </Link>
                </BreadcrumbItem>
                </ul>
                <ul>
                  <BreadcrumbItem>
              <Moment format="YYYY-MM-DD">{datePosted}</Moment>
                  </BreadcrumbItem> &nbsp;&nbsp;&nbsp;
                  {console.log(cardResource, user)}
                  {cardResource.users_id !== user.id ?
                    <BreadcrumbItem>
                      <Link
                        to={`/report/resource/${cardResource.id}/${cardResource.users_id}`}
                      >
                        Report
              </Link>
                    </BreadcrumbItem> : null}
                </ul>
              </Breadcrumb>
            </Subtitle>
          </MediaContent>
          <MediaContent hasTextAlign={"right"}>
            <Title style={{fontSize: '1.35rem'}}>Resource Creator</Title>
            <Subtitle isSize={6}>
              <Breadcrumb style={{fontSize: '1rem'}} isAlign={"right"}>
                <ul>
                  <BreadcrumbItem>
                    <Link to={`/user/${usersId}`}>
                      {firstName} {lastName}
                    </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href={`mailto:${email}`} target="_blank">
                      Email
              </a>
                  </BreadcrumbItem>
                </ul>
                <ul>
                  <BreadcrumbItem>
                    <a href={githubLink} target="_blank">
                      GitHub
              </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href={linkedinLink} target="_blank">
                      LinkedIn
              </a>
                  </BreadcrumbItem>
                </ul>
              </Breadcrumb>
            </Subtitle>
          </MediaContent>
        </Media>
        <Content>
          <Box style={{fontSize: '1.15rem'}}>{descriptionShort}</Box>
        </Content>
        <Content style={{fontSize: '1.15rem'}}>{descriptionFull}</Content>
      </CardContent>
      {props.BackButton ? props.BackButton() : null}
      {user.id === usersId || user.user_types_id === 1 ? (
        <CardFooter style={{ marginTop: "auto" }}>
          <CardFooterItem>
            <Button
              isColor={`success`}
              onClick={e => editResource(e, cardResource)}
            >
              Edit
      </Button>
          </CardFooterItem>
          <CardFooterItem>
            <Button
              isColor={`danger`}
              onClick={() => {
                deleteResource(resourceId)
              }}
            >
              Delete
      </Button>
          </CardFooterItem>
          {editFormActive.resourceId === cardResource.id ? (
            <EditResourceModal
              editFormActive={editFormActive}
              setEditFormActive={setEditFormActive}
              resource={cardResource}
              fetchResourcesData={fetchResourcesData}
            />
          ) : null}
        </CardFooter>
      ) : null}{" "}
    </Card>
  );
}

const Anchor = styled.a`
  color: blue;
`;

const ResourceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default BootcampResourceCard;