import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";

import {
  Panel,
  PanelBlock,
  PanelHeading,
  PanelTab,
  PanelTabs,
  Control,
  Input,
  Select,
  Box,
  Field,
  Label,
  Title,
  TextArea,
  Button
} from "bloomer";

import {
  getReports,
  getUsersReports,
  getCompaniesReports,
  getJobsReports,
  getResourcesReports,
  getResolvedReports,
  getUsersResolvedReports,
  getCompaniesResolvedReports,
  getJobsResolvedReports,
  getResourcesResolvedReports
} from "./reportFunctions";

//   deleteJob,
//   deleteResource,

export default function Reports() {
  const history = useHistory();
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
  const [sendMessage, setSendMessage] = useState({
    subject: "",
    message: "",
    sent_from: "",
    sent_to: ""
  });

  const [messageData, setMessageData] = useState({ id: "", name: "" });

  const [sendCompanyMessage, setSendCompanyMessage] = useState({
    subject: "",
    message: "",
    sent_from: "",
    companies_id: ""
  });
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
  const [showCompanyMessage, setShowCompanyMessage] = useState(false);

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

  useEffect(() => {
    getReports().then(reports => setAllReports(reports));
  }, []);

  useEffect(() => {
    getUsersReports().then(reports => setUsers(reports));
  }, []);

  useEffect(() => {
    getCompaniesReports().then(reports => setCompanies(reports));
  }, []);

  useEffect(() => {
    getJobsReports().then(reports => setJobs(reports));
  }, []);

  useEffect(() => {
    getResourcesReports().then(reports => setResources(reports));
  }, []);

  useEffect(() => {
    getResolvedReports().then(reports => setAllResolvedReports(reports));
  }, []);

  useEffect(() => {
    getUsersResolvedReports().then(reports => setUsersResolved(reports));
  }, []);

  useEffect(() => {
    getCompaniesResolvedReports().then(reports =>
      setCompaniesResolved(reports)
    );
  }, []);

  useEffect(() => {
    getJobsResolvedReports().then(reports => setJobsResolved(reports));
  }, []);

  useEffect(() => {
    getResourcesResolvedReports().then(reports =>
      setResourcesResolved(reports)
    );
  }, []);

  const getTheReport = async id => {
    const response = await axios.get(`${ENDPOINT}/report/${id}`);
    const data = response.data;
    if (response.status === 200) {
      setReport(data);
    } else {
      alert("Sorry, there was an error");
    }
  };

  const handleReportClick = id => {
    setShowReport(true);
    getTheReport(id);
    setShowMessage(false);
  };

  const handleViewProfileClick = id => {
    history.push(`/user/${id}`);
  };

  const handleViewCompanyProfileClick = id => {
    history.push(`/company/${id}`);
  };

  const handleViewJobPostClick = id => {
    history.push(`/jobs/${id}`);
  };

  const handleViewResourcePostClick = id => {
    history.push(`/resources/${id}`);
  };

  const handleBanUserClick = async id => {
    const response = await axios.put(`${ENDPOINT}/reports/auth/user/${id}`);
    console.log(response);
    if (response.status === 200) {
      alert("User Authorization revoked");
    } else {
      alert("Sorry There was an error updating authorization");
    }
  };

  const handleResolveClick = async id => {
    const response = await axios.post(`${ENDPOINT}/reports/resolve/${id}`);
    if (response.status === 200) {
      alert("Report Resolved");
      setReport(false);
      setShowResolved(false);
      setShowUnResolved(false);
      getReports().then(reports => setAllReports(reports))
      getUsersReports().then(reports => setUsers(reports));
      getCompaniesReports().then(reports => setCompanies(reports));
      getJobsReports().then(reports => setJobs(reports));
      getResourcesReports().then(reports => setResources(reports));
      getResolvedReports().then(reports => setAllResolvedReports(reports));
      getUsersResolvedReports().then(reports => setUsersResolved(reports));
      getCompaniesResolvedReports().then(reports =>
        setCompaniesResolved(reports)
      );
      getJobsResolvedReports().then(reports => setJobsResolved(reports));
      getResourcesResolvedReports().then(reports =>
        setResourcesResolved(reports)
      );
      setShowUnResolved(true);
    } else {
      alert("Sorry, There was an Error resolving report");
    }
  };

  const handleMessageSubmit = async e => {
    e.preventDefault();
    const endpoint = "http://localhost:3000";
    const send = await axios.post(`${endpoint}/sendmessage`, sendMessage);
    if (send.status === 200) {
      alert("Message Sent");
      setShowMessage(false);
    } else {
      alert("There was a problem sending the message please try again later");
    }
  };

  const handleCompanyMessageSubmit = async e => {
    e.preventDefault();
    const endpoint = "http://localhost:3000";
    const send = await axios.post(
      `${endpoint}/reports/send/company`,
      sendCompanyMessage
    );
    if (send.status === 200) {
      alert("Message Sent");
      setShowCompanyMessage(false);
    } else {
      alert("There was a problem sending the message please try again later");
    }
  };

  const handleUserMessageForm = id => {
    setShowMessage(true);
    setShowReport(false);
    setMessageData({ ...messageData, id: id });
  };

  const handleCompanyMessageForm = id => {
    setShowCompanyMessage(true);
    setShowReport(false);
  };

  const handleMessageChange = e => {
    const { name, value } = e.target;
    setSendMessage({
      ...sendMessage,
      [name]: value,
      sent_from: user.id,
      sent_to: messageData.id
    });
  };
  const handleCompanyMessageChange = e => {
    const { name, value } = e.target;
    setSendCompanyMessage({
      ...sendCompanyMessage,
      [name]: value,
      sent_from: user.id,
      companies_id: singleReport.companies_id
    });
  };

  const handleCompanyBanClick = async e => {
    const response = await axios.put(
      `${ENDPOINT}/reports/auth/company/${singleReport.companies_id}`
    );
    if (response.status === 200) {
      alert("Company Ban Successful");
    } else {
      alert("Sorry there was an error with the ban");
    }
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
                    backgroundColor:
                      report.id === singleReport.id ? "lightgrey" : "unset",
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
                  {/* <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5> */}
                </PanelBlock>
              );
            })
          ) : showUserReports ? (
            users.map(report => {
              return (
                <PanelBlock
                  onClick={() => handleReportClick(report.id)}
                  style={{
                    backgroundColor:
                      report.id === singleReport.id ? "lightgrey" : "unset",
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
                  {/* <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5> */}
                </PanelBlock>
              );
            })
          ) : showCompanyReports ? (
            companies.map(report => {
              return (
                <PanelBlock
                  onClick={() => handleReportClick(report.id)}
                  style={{
                    backgroundColor:
                      report.id === singleReport.id ? "lightgrey" : "unset",
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
                  {/* <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5> */}
                </PanelBlock>
              );
            })
          ) : showJobReports ? (
            jobs.map(report => {
              return (
                <PanelBlock
                  onClick={() => handleReportClick(report.id)}
                  style={{
                    backgroundColor:
                      report.id === singleReport.id ? "lightgrey" : "unset",
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
                  {/* <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5> */}
                </PanelBlock>
              );
            })
          ) : showResourceReports ? (
            resources.map(report => {
              return (
                <PanelBlock
                  onClick={() => handleReportClick(report.id)}
                  style={{
                    backgroundColor:
                      report.id === singleReport.id ? "lightgrey" : "unset",
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
                  {/* <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5> */}
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
                  {/* <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5> */}
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
                  {/* <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5> */}
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
                  {/* <h5>
                    {/* Reported By: {report.first_name} {report.last_name} */}
                  {/* </h5>  */}
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
                  {/* <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5> */}
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
                  {/* <h5>
                    Reported By: {report.first_name} {report.last_name}
                  </h5> */}
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
                <span style={{ fontWeight: "900" }}>
                  {!singleReport.auth ? "User Banned" : ""}
                </span>
              </h2>
            ) : singleReport.posts_jobs_id === null ? (
              <>Offending Company: {singleReport.name}</>
            ) : (
              <>
                <h2>Offending Company: {singleReport.name}</h2>
                <h2>
                  Company User:{" "}
                  {singleReport.first_name + " " + singleReport.last_name}
                  <span style={{ fontWeight: "900" }}>
                    {!singleReport.auth ? "User Banned" : ""}
                  </span>
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
              <Button
                onClick={() => handleResolveClick(singleReport.id)}
                style={{ margin: "16px" }}
              >
                Resolve
              </Button>
              {singleReport.users_id ? (
                <>
                  <Button
                    onClick={() =>
                      handleViewProfileClick(singleReport.users_id)
                    }
                    style={{ margin: "16px" }}
                  >
                    View Offender Profile
                  </Button>
                  <Button
                    onClick={() => handleUserMessageForm(singleReport.users_id)}
                    style={{ margin: "16px" }}
                  >
                    Message Offender
                  </Button>
                  <Button
                    onClick={() => handleBanUserClick(singleReport.users_id)}
                    style={{ margin: "16px" }}
                  >
                    Ban User
                  </Button>
                </>
              ) : (
                <></>
              )}
              <Button
                onClick={() => handleUserMessageForm(singleReport.submited_by)}
                style={{ margin: "16px" }}
              >
                Message Report Submitter
              </Button>
              {singleReport.companies_id !== null ? (
                <>
                  <Button
                    onClick={() =>
                      handleViewCompanyProfileClick(singleReport.companies_id)
                    }
                    style={{ margin: "16px" }}
                  >
                    View Company Profile
                  </Button>
                  <Button
                    onClick={() =>
                      handleCompanyMessageForm(singleReport.users_id)
                    }
                    style={{ margin: "16px" }}
                  >
                    Message Company
                  </Button>
                  <Button
                    onClick={handleCompanyBanClick}
                    style={{ margin: "16px" }}
                  >
                    Ban Company
                  </Button>
                </>
              ) : (
                ""
              )}
              {singleReport.posts_jobs_id !== null ? (
                <Button
                  onClick={() =>
                    handleViewJobPostClick(singleReport.posts_jobs_id)
                  }
                  style={{ margin: "16px" }}
                >
                  View Job Post
                </Button>
              ) : (
                ""
              )}
              {singleReport.resource_id !== null ? (
                <Button
                  onClick={() =>
                    handleViewResourcePostClick(singleReport.resource_id)
                  }
                  style={{ margin: "16px" }}
                >
                  {" "}
                  Resource Post{" "}
                </Button>
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
      {showMessage ? (
        <Box
          style={{ display: "flex", flexDirection: "column", margin: "0 auto" }}
        >
          <Title isSize={4}>Send Message</Title>
          <form onSubmit={handleMessageSubmit}>
            {/* <Field>
          <Label>Send To</Label>
          <Control>
            <Input
              type="text"
              name="receiver"
              aria-label="receiver"
              disabled
            />
          </Control>
        </Field> */}

            <Field>
              <Label>Subject</Label>
              <Control>
                <Input
                  type="text"
                  onChange={handleMessageChange}
                  name="subject"
                  aria-label="subject"
                />
              </Control>
            </Field>

            <Field>
              <Label>Message</Label>
              <Control>
                <TextArea
                  type="textarea"
                  onChange={handleMessageChange}
                  name="message"
                  aria-label="message"
                />
              </Control>
            </Field>

            <Field isGrouped>
              <Control>
                <Button type="submit" isColor="primary">
                  Submit
                </Button>
              </Control>
            </Field>
          </form>
        </Box>
      ) : (
        ""
      )}
      {showCompanyMessage ? (
        <Box
          style={{ display: "flex", flexDirection: "column", margin: "0 auto" }}
        >
          <Title isSize={4}>Send Message to {singleReport.name}</Title>
          <form onSubmit={handleCompanyMessageSubmit}>
            <Field>
              <Label>Send To</Label>
              <Control>
                <Input
                  type="text"
                  placeholder={singleReport.name}
                  name="receiver"
                  aria-label="receiver"
                  disabled
                />
              </Control>
            </Field>

            <Field>
              <Label>Subject</Label>
              <Control>
                <Input
                  type="text"
                  onChange={handleCompanyMessageChange}
                  name="subject"
                  aria-label="subject"
                />
              </Control>
            </Field>

            <Field>
              <Label>Message</Label>
              <Control>
                <TextArea
                  type="textarea"
                  onChange={handleCompanyMessageChange}
                  name="message"
                  aria-label="message"
                />
              </Control>
            </Field>

            <Field isGrouped>
              <Control>
                <Button type="submit" isColor="primary">
                  Submit
                </Button>
              </Control>
            </Field>
          </form>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
}
