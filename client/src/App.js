import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./component/NavBar/NavBar";
import Signup from "./component/Users/Signup/Signup";
import Login from "./component/Users/Login/Login";
import Home from "./component/Home";
import Dashboard from "./component/Dashboard";
import Jobs from './component/Jobs/Jobs'

// Ideally the Profile component can render the correct view based on user type similar to the Jobs component. Choosing the company profile component here for testing purposes of the company link in the job post
import Profile from './component/Dashboard/Dashboards/Company/views/CompanyProfile'

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/profile" component={Profile} exact/>
      </Router>
    </>
  );
};

export default App;
