import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import Moment from "react-moment";
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardContent,
  Content,
  Title,
  Breadcrumb,
  BreadcrumbItem,
  Subtitle
} from "bloomer";
import { notDeepStrictEqual } from "assert";

//   getAllCompanyReports,
//   getAllJobReports,
//   getAllResourceReports,
//   getAllUserReports,
//   sendMessageCompany,
//   sendMessageUser,
//   postReport,
//   deleteJob,
//   deleteResource,
//   removeAuthCompanyUsers,
//   removeAuthUser,
//   getReports,
//   resolveIssue

export default function AdminHome() {
  const user = useSelector(state => state.user);

  if (user.user_types_id !== 1) {
    window.location.replace("/");
  }

  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [resources, setResources] = useState([]);

  const ENDPOINT = "localhost:3000";

  const getUsersReports = async () => {
    const response = await axios.get(`http://${ENDPOINT}/reports/all/users`);
    console.log("UsersReport", response.data);
    const data = response.data;
    if (response.status === 200) {
      setUsers(data);
    } else {
      alert("Sorry, there was an error");
    }
  };

  const getCompaniesReports = async () => {
    const response = await axios.get(
      `http://${ENDPOINT}/reports/all/companies`
    );
    console.log("CompaniesReport", response.data);
    const data = response.data;
    if (response.status === 200) {
      setCompanies(data);
    } else {
      alert("Sorry, there was an error");
    }
  };

  const getJobsReports = async () => {
    const response = await axios.get(`http://${ENDPOINT}/reports/all/jobs`);
    console.log("CompaniesReport", response.data);
    const data = response.data;
    if (response.status === 200) {
      setJobs(data);
    } else {
      alert("Sorry, there was an error");
    }
  };

  const getResourcesReports = async () => {
    const response = await axios.get(
      `http://${ENDPOINT}/reports/all/resources`
    );
    console.log("ResourcesReport", response.data);
    const data = response.data;
    if (response.status === 200) {
      setResources(data);
    } else {
      alert("Sorry, there was an error");
    }
  };

  useEffect(() => {
    getUsersReports();
    getCompaniesReports();
    getJobsReports();
    getResourcesReports();
  }, []);

  return (
    <AdminWrapper>
      <Card style={{overflowY:"scroll"}}>
        <CardHeader>
          <CardHeaderTitle>Users Reports</CardHeaderTitle>
        </CardHeader>
        <CardContent>
          <Content>
          {(users.length < 1) ? <h4>No Reports</h4> :
            users.map(report => {
              return (
                <>
                  <Subtitle isSize={6} style={{margin: 0}}>Report # {report.id}</Subtitle>
                  <Title isSize={6} style={{margin: 0}}>
                    Name: {report.first_name} {report.last_name}
                  </Title>
                  <Breadcrumb isSize={`small`} style={{margin: 0}}>
                    <BreadcrumbItem>
                      Reported:
                      <Moment format="YYYY-MM-DD">
                        {report.date_reported}
                      </Moment>
                    </BreadcrumbItem>
                  </Breadcrumb>
                  <button>View Report</button>
                <hr />
                </>
              );
            })}
          </Content>
        </CardContent>
      </Card>

      <Card style={{overflowY:"scroll"}}>
        <CardHeader>
          <CardHeaderTitle>Companies Reports</CardHeaderTitle>
        </CardHeader>
        <CardContent>
          <Content>
          {(companies.length < 1) ? <h4>No Reports</h4> :
            companies.map(report => {
              console.log(report)
              return (
                <>
                  <Subtitle isSize={6} style={{margin: 0}}>Report # {report.id}</Subtitle>
                  <Title isSize={6} style={{margin: 0}}>
                    Company: {report.name}
                    Name: {report.first_name} {report.last_name}
                  </Title>
                  <Breadcrumb isSize={`small`} style={{margin: 0}}>
                    <BreadcrumbItem>
                      Reported:
                      <Moment format="YYYY-MM-DD">
                        {report.date_reported}
                      </Moment>
                    </BreadcrumbItem>
                  </Breadcrumb>
                  <button>View Report</button>
                <hr />
                </>
              );
            })}
          </Content>
        </CardContent>
      </Card>

      <Card style={{overflowY:"scroll"}}>
        <CardHeader>
          <CardHeaderTitle >Jobs Reports</CardHeaderTitle>
        </CardHeader>
        <CardContent>
          <Content>
          {(jobs.length < 1) ? <h4>No Reports</h4> :
            jobs.map(report => {
              return (
                <>
                  <Subtitle isSize={6} style={{margin: 0}}>Report # {report.id}</Subtitle>
                  <Title isSize={6} style={{margin: 0}}>
                    Company: {report.name}
                  </Title>
                    <Title isSize={6} style={{margin: 0}}>Job Post: {report.title}</Title>
                    <p style={{margin: 0}}>Posted by: {report.first_name} {report.last_name}</p>
                  <Breadcrumb isSize={`small`} style={{margin: 0}}>
                    <BreadcrumbItem>
                      Reported:
                      <Moment format="YYYY-MM-DD">
                        {report.date_reported}
                      </Moment>
                    </BreadcrumbItem>
                  </Breadcrumb>
                  <button>View Report</button>
                <hr />
                </>
              );
            })}
          </Content>
        </CardContent>
      </Card>

      <Card style={{overflowY:"scroll"}}>
        <CardHeader>
          <CardHeaderTitle>Resources Reports</CardHeaderTitle>
        </CardHeader>
        <CardContent>
          <Content>
            {(resources.length < 1) ? <h4>No Reports</h4> :
            resources.map(report => {
              return (
                <>
                  <Subtitle isSize={6} style={{margin: 0}}>Report # {report.id}</Subtitle>
                  <Title isSize={6} style={{margin: 0}}>
                  </Title>
                    Name: {report.first_name} {report.last_name}
                    Resource Post: Title: {report.title}
                  <Breadcrumb isSize={`small`} style={{margin: 0}}>
                    <BreadcrumbItem>
                      Reported:
                      <Moment format="YYYY-MM-DD">
                        {report.date_reported}
                      </Moment>
                    </BreadcrumbItem>
                  </Breadcrumb>
                  <button>View Report</button>
                <hr />
                </>
              );
            })} 
            
          </Content>
        </CardContent>
      </Card>
    </AdminWrapper>
  );
}

const AdminWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
