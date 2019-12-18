import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Moment from "react-moment";

import {
  Panel,
  PanelBlock,
  PanelHeading,
  PanelIcon,
  PanelTab,
  PanelTabs,
  Control,
  Input,
  Icon,
  Select,
  Box,
  Button
} from "bloomer";

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

export default function Reports() {
  const user = useSelector(state => state.user);

  if (user.user_types_id !== 1) {
    window.location.replace("/");
  }

  // report types
  const [allReports, setAllReports] = useState([]);
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [resources, setResources] = useState([]);
  // resolved types
  const [allResolvedReports, setAllResolvedReports] = useState([]);
  const [usersResolved, setUsersResolved] = useState([]);
  const [companiesResolved, setCompaniesResolved] = useState([]);
  const [jobsResolved, setJobsResolved] = useState([]);
  const [resourcesResolved, setResourcesResolved] = useState([]);

  // single report
  const [singleReport, setReport] = useState([]);
  const [sendMessage, setSendMessage] = useState([]);
  // conditional rendering states
  const [showResolved, setShowResolved] = useState(false);
  const [showUnResolved, setShowUnResolved] = useState(true);
  const [showAll, setShowAll] = useState(true);
  const [showUserReports, setShowUserReports] = useState(false);
  const [showCompanyReports, setShowCompanyReports] = useState(false);
  const [showJobReports, setShowJobReports] = useState(false);
  const [showResourceReports, setShowResourceReports] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleResolveTabClick = () => {
    setShowResolved(true);
    setShowUnResolved(false);
  };

  const handleUnresolvedTabClick = () => {
    setShowUnResolved(true);
    setShowResolved(false);
  };

  const changeStatus = status => {
    let show = status;
    setShowAll(show[0]);
    setShowUserReports(show[1]);
    setShowCompanyReports(show[2]);
    setShowJobReports(show[3]);
    setShowResourceReports(show[4]);
  };

  const handleSelectChange = e => {
    const selection = e.target.value;
    switch (selection) {
      case "all":
        return changeStatus([true, false, false, false, false]);
      case "user":
        return changeStatus([false, true, false, false, false]);
      case "company":
        return changeStatus([false, false, true, false, false]);
      case "job":
        return changeStatus([false, false, false, true, false]);
      case "resource":
        return changeStatus([false, false, false, false, true]);
      default:
        return "Make a selection";
    }
  };

  const ENDPOINT = `http://localhost:3000`;

  // Unresolved reports
  const getReports = async () => {
    const all = await axios.get(`${ENDPOINT}/reports`);
    const data = all.data;
    setAllReports(data);
  };

  const getUsersReports = async () => {
    const response = await axios.get(`${ENDPOINT}/reports/all/users`);
    const data = response.data;
    if (response.status === 200) {
      setUsers(data);
    } else {
      alert("Sorry, there was an error");
    }
  };

  const getCompaniesReports = async () => {
    const response = await axios.get(`${ENDPOINT}/reports/all/companies`);
    const data = response.data;
    if (response.status === 200) {
      setCompanies(data);
    } else {
      alert("Sorry, there was an error");
    }
  };

  const getJobsReports = async () => {
    const response = await axios.get(`${ENDPOINT}/reports/all/jobs`);
    const data = response.data;
    if (response.status === 200) {
      setJobs(data);
    } else {
      alert("Sorry, there was an error");
    }
  };

  const getResourcesReports = async () => {
    const response = await axios.get(`${ENDPOINT}/reports/all/resources`);
    const data = response.data;
    if (response.status === 200) {
      setResources(data);
    } else {
      alert("Sorry, there was an error");
    }
  };

  // Resolved reports
  const getResolvedReports = async () => {
    const all = await axios.get(`${ENDPOINT}/reports/resolved`);
    const data = all.data;
    setAllResolvedReports(data);
  };

  const getUsersResolvedReports = async () => {
    const response = await axios.get(`${ENDPOINT}/reports/all/resolved/users`);
    const data = response.data;
    if (response.status === 200) {
      setUsersResolved(data);
    } else {
      alert("Sorry, there was an error");
    }
  };

  const getCompaniesResolvedReports = async () => {
    const response = await axios.get(
      `${ENDPOINT}/reports/all/resolved/companies`
    );
    const data = response.data;
    if (response.status === 200) {
      setCompaniesResolved(data);
    } else {
      alert("Sorry, there was an error");
    }
  };

  const getJobsResolvedReports = async () => {
    const response = await axios.get(`${ENDPOINT}/reports/all/resolved/jobs`);
    const data = response.data;
    if (response.status === 200) {
      setJobsResolved(data);
    } else {
      alert("Sorry, there was an error");
    }
  };

  const getResourcesResolvedReports = async () => {
    const response = await axios.get(
      `${ENDPOINT}/reports/all/resolved/resources`
    );
    const data = response.data;
    if (response.status === 200) {
      setResourcesResolved(data);
    } else {
      alert("Sorry, there was an error");
    }
  };

  const getTheReport = async id => {
    const response = await axios.get(`${ENDPOINT}/report/${id}`);
    const data = response.data;
    if (response.status === 200) {
      setReport(data);
    } else {
      alert("Sorry, there was an error");
    }
  };

  useEffect(() => {
    getReports();
    getUsersReports();
    getCompaniesReports();
    getJobsReports();
    getResourcesReports();
    getResolvedReports();
    getUsersResolvedReports();
    getCompaniesResolvedReports();
    getJobsResolvedReports();
    getResourcesResolvedReports();
  }, []);

  const handleReportClick = id => {
    setShowReport(true);
    getTheReport(id);
  };

  return (
    <div style={{ display: "flex" }}>
      <Panel
        style={{
          width: "300px",
          height: "88vh",
          overflowY: "scroll",
          overflowX: "hidden"
        }}
      >
        <PanelHeading>Reports</PanelHeading>
        <PanelBlock>
          <Control hasIcons="left">
            <Select onChange={handleSelectChange}>
              <option defaultValue value="all">
                All Reports
              </option>
              <option value="user">User Reports</option>
              <option value="company">Company Reports</option>
              <option value="job">Job Reports</option>
              <option value="resource">Resource Reports</option>
            </Select>
          </Control>
        </PanelBlock>
        <PanelTabs>
          <PanelTab
            isActive={showUnResolved}
            onClick={handleUnresolvedTabClick}
          >
            Unresolved
          </PanelTab>
          <PanelTab isActive={showResolved} onClick={handleResolveTabClick}>
            Resolved
          </PanelTab>
        </PanelTabs>

        {showUnResolved ? (
          showAll ? (
            allReports.map(report => {
              return (
                <PanelBlock
                  onClick={() => handleReportClick(report.id)}
                  style={{
                    backgroundColor: report.id === singleReport.id ? "lightgrey" : "unset",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                  }}
                >
                  <h4>Report# {report.id}</h4>
                  <h6>
                    Date Reported:{" "}
                    <Moment format="YYYY-MM-DD">{report.date_reported}</Moment>
                  </h6>
                  <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5>
                </PanelBlock>
              );
            })
          ) : showUserReports ? (
            users.map(report => {
              return (
                <PanelBlock
                  onClick={() => handleReportClick(report.id)}
                  style={{
                    backgroundColor: report.id === singleReport.id ? "lightgrey" : "unset",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                  }}
                >
                  <h4>Report# {report.id}</h4>
                  <h6>
                    Date Reported:{" "}
                    <Moment format="YYYY-MM-DD">{report.date_reported}</Moment>
                  </h6>
                  <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5>
                </PanelBlock>
              );
            })
          ) : showCompanyReports ? (
            companies.map(report => {
              return (
                <PanelBlock
                  onClick={() => handleReportClick(report.id)}
                  style={{
                    backgroundColor: report.id === singleReport.id ? "lightgrey" : "unset",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                  }}
                >
                  <h4>Report# {report.id}</h4>
                  <h6>
                    Date Reported:{" "}
                    <Moment format="YYYY-MM-DD">{report.date_reported}</Moment>
                  </h6>
                  <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5>
                </PanelBlock>
              );
            })
          ) : showJobReports ? (
            jobs.map(report => {
              return (
                <PanelBlock
                  onClick={() => handleReportClick(report.id)}
                  style={{
                    backgroundColor: report.id === singleReport.id ? "lightgrey" : "unset",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                  }}
                >
                  <h4>Report# {report.id}</h4>
                  <h6>
                    Date Reported:{" "}
                    <Moment format="YYYY-MM-DD">{report.date_reported}</Moment>
                  </h6>
                  <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5>
                </PanelBlock>
              );
            })
          ) : showResourceReports ? (
            resources.map(report => {
              return (
                <PanelBlock
                  onClick={() => handleReportClick(report.id)}
                  style={{
                    backgroundColor: report.id === singleReport.id ? "lightgrey" : "unset",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                  }}
                >
                  <h4>Report# {report.id}</h4>
                  <h6>
                    Date Reported:{" "}
                    <Moment format="YYYY-MM-DD">{report.date_reported}</Moment>
                  </h6>
                  <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5>
                </PanelBlock>
              );
            })
          ) : (
            <></>
          )
        ) : (
          <></>
        )}

        {showResolved ? (
          showAll ? (
            allResolvedReports.map(report => {
              return (
                <PanelBlock
                  onClick={() => handleReportClick(report.id)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                  }}
                >
                  <h4>Report# {report.id}</h4>
                  <h6>
                    Date Reported:{" "}
                    <Moment format="YYYY-MM-DD">{report.date_reported}</Moment>
                  </h6>
                  <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5>
                </PanelBlock>
              );
            })
          ) : showUserReports ? (
            usersResolved.map(report => {
              return (
                <PanelBlock
                  onClick={() => handleReportClick(report.id)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                  }}
                >
                  <h4>Report# {report.id}</h4>
                  <h6>
                    Date Reported:{" "}
                    <Moment format="YYYY-MM-DD">{report.date_reported}</Moment>
                  </h6>
                  <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5>
                </PanelBlock>
              );
            })
          ) : showCompanyReports ? (
            companiesResolved.map(report => {
              return (
                <PanelBlock
                  onClick={() => handleReportClick(report.id)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                  }}
                >
                  <h4>Report# {report.id}</h4>
                  <h6>
                    Date Reported:{" "}
                    <Moment format="YYYY-MM-DD">{report.date_reported}</Moment>
                  </h6>
                  <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5>
                </PanelBlock>
              );
            })
          ) : showJobReports ? (
            jobsResolved.map(report => {
              return (
                <PanelBlock
                  onClick={() => handleReportClick(report.id)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                  }}
                >
                  <h4>Report# {report.id}</h4>
                  <h6>
                    Date Reported:{" "}
                    <Moment format="YYYY-MM-DD">{report.date_reported}</Moment>
                  </h6>
                  <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5>
                </PanelBlock>
              );
            })
          ) : showResourceReports ? (
            resourcesResolved.map(report => {
              return (
                <PanelBlock
                  onClick={() => handleReportClick(report.id)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                  }}
                >
                  <h4>Report# {report.id}</h4>
                  <h6>
                    Date Reported:{" "}
                    <Moment format="YYYY-MM-DD">{report.date_reported}</Moment>
                  </h6>
                  <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5>
                </PanelBlock>
              );
            })
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </Panel>
      {showReport ? (
        <Box style={{ width: "80%", margin: "0 auto" }}>
          <Box>
            <h1>Report # {singleReport.id}</h1>
            {singleReport.companies_id === null &&
            singleReport.posts_jobs_id === null ? (
              <h2>
                {" "}
                Offender:{" "}
                {singleReport.first_name + " " + singleReport.last_name}
              </h2>
            ) : singleReport.posts_jobs_id === null ? (
              <>Offending Company: {singleReport.name}</>
            ) : (
              <>
                <h2>Offending Company{singleReport.name}</h2>
                <h2>
                  Company User:{" "}
                  {singleReport.first_name + " " + singleReport.last_name}
                </h2>
                <h2>Job Post: {singleReport.jobtitle}</h2>
              </>
            )}
            <h1>
              Status: {singleReport.resolved ? "Resolved" : "Not Resolved"}
            </h1>
            <Box style={{ margin: "32px" }}>Reason: {singleReport.reason}</Box>
          </Box>
          {!singleReport.resolved ? (
            <Box style={{ display: "flex", flexWrap: "wrap" }}>
              <Button style={{ margin: "16px" }}>Resolve</Button>
              <Button style={{ margin: "16px" }}>View Offender Profile</Button>
              <Button style={{ margin: "16px" }}>Message Offender</Button>
              <Button style={{ margin: "16px" }}>
                Message Report Submitter
              </Button>
              <Button style={{ margin: "16px" }}>Ban User</Button>
              {singleReport.companies_id !== null ? (
                <>
                  <Button style={{ margin: "16px" }}>
                    View Company Profile
                  </Button>
                  <Button style={{ margin: "16px" }}>Message Company</Button>
                  <Button style={{ margin: "16px" }}>Ban Company</Button>
                </>
              ) : (
                ""
              )}
              {singleReport.posts_jobs_id !== null ? (
                <Button style={{ margin: "16px" }}>View Job Post</Button>
              ) : (
                ""
              )}
              {singleReport.resource_id !== null ? (
                <Button style={{ margin: "16px" }}> Resource Post </Button>
              ) : (
                ""
              )}
            </Box>
          ) : (
            ""
          )}
        </Box>
      ) : (
        " "
      )}
    </div>
  );
}
