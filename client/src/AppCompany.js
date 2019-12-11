import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

// This is a testing component
const MainPage = () => (
    <>
        <h1>You are a company user</h1>
        <ul>
            <li>
                <Link to="/dashboard" label="dashboard">
                    <p>Dashboard</p>
                </Link>
            </li>
            <li>
                <Link to="/applicants" label="applicants">
                    <p>View Job Applicants</p>
                </Link>
            </li>
            <li>
                <Link to="/job/create" label="create-job">
                    <p>Post a job</p>
                </Link>
            </li>
            <li>
                <Link to="/job/edit" label="edit-job">
                    <p>Edit a job</p>
                </Link>
            </li>
        </ul>
    </>
);

const Dashboard = () => (
    <h1>This view will have a card that prompts the user to create a job post</h1>
)

const Applicants = () => (
    <h1>
        This view contains a way for the company user to manage the people who
        have applied to their jobs
    </h1>
);

const CreateJob = () => (
    <h1>This view contains a form that allows a company user to create a job </h1>
)

const EditJob = () => (
    <h1>This view contains a form to edit a job post that a company user created </h1>
)

const AppCompany = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/applicants">
                    <Applicants />
                </Route>
                <Route path="/job/create">
                    <CreateJob />
                </Route>
                <Route path="/job/edit/">
                    <EditJob />
                </Route>
            </Switch>
        </Router>
    );
};

export default AppCompany;
