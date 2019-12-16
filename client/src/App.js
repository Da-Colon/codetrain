import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./component/NavBar/NavBar";
import Signup from "./component/Users/Signup";
import Login from "./component/Users/Login";
import LandingPage from "./component/LandingPage";
import Home from "./component/Home";
import Jobs from "./component/Jobs";
import BootcampProfile from "./component/BootcampProfile";
import CompanyProfile from "./component/CompanyProfile";
import Applications from "./component/Applications";
import Resources from "./component/Resources";
import ResourcePost from "./component/Resources/ResourcePost";
import JobPost from "./component/Jobs/JobPost";

import "./App.css";

import "./App.css";
import Messages from "./component/messages";
import BootcampResourcePost from "./component/Resources/BootcampResourcePost";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Route path="/" component={LandingPage} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/applications" component={Applications} exact />
        <Route path="/messages" component={Messages} exact />
        <Route path="/user/:id" component={BootcampProfile} exact />
        <Route path="/company/:id" component={CompanyProfile} exact />
        <Route path="/jobs" component={Jobs} exact />
        <Route path="/jobs/:job_id" component={JobPost} exact />
        <Route path="/resources" component={Resources} exact />
        <Route path="/resources/:resource_id" component={ResourcePost} exact />
        <Route
          path="/resources/submit"
          component={BootcampResourcePost}
          exact
        />
      </Router>
    </>
  );
};

export default App;
