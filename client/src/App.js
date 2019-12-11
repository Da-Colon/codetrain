import React, { Fragment } from 'react';
import BootcampApplications from './components/BootcampApplications/BootcampApplications';
import CompanyApplications from './components/CompanyApplications/CompanyApplications';
import BootcampProfile from './components/BootcampProfile/BootcampProfile';
import CompanyProfile from './components/CompanyProfile/CompanyProfile';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import NavBar from './components/NavBar/NavBar';
import BootcampJobs from './components/BootcampJobs/BootcampJobs';
import CompanyJobs from './components/CompanyJobs/CompanyJobs';
import Resources from './components/Resources/Resources';
import Sidebar from './components/Sidebar/Sidebar';
import FrozenDept from './components/FrozenDept/FrozenDept';
import BootcampDashboard from './components/BootcampDashboard/BootcampDashboard';
import CompanyDashboard from './components/CompanyDashboard/CompanyDashboard';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";

// const userType = 'bootcamper'
const userType = 'company'

function App() {
  return (
    <Router>
    {/* Shared Routes  */}
      <Route path="/" component={NavBar} />
      <Route path="/" component={Sidebar} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/applications" render={() => {
        return userType === 'bootcamper' ? <BootcampApplications /> : <CompanyApplications />
      }} />
      <Route exact path="/dashboard" render={() => {
        return userType === 'bootcamper' ? <BootcampDashboard /> : <CompanyDashboard />
      }} />
      <Route exact path="/jobs" render={() => {
        return userType === 'bootcamper' ? <BootcampJobs /> : <CompanyJobs />
      }} />
      <Route exact path="/profile" render={() => {
        return userType === 'bootcamper' ? <BootcampProfile /> : <CompanyProfile />
      }} />
      {/* Bootcamper Routes */}
      <Route exact path="/resources" component={Resources} />
      {/* Reference Routes */}
      <Route exact path="/frozen-dept" component={FrozenDept} />
    </Router>
  );
}

export default App