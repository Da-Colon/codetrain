import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Sidebar from './components/Sidebar/Sidebar';
import FrozenDept from './components/FrozenDept/FrozenDept';
import HackerNews from "./Components/HackerNews";
import TechNews from "./Components/TechNews"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

const Login = () => <h1>Login</h1>
const Signup = () => <h1>Sign up</h1>

const Dashboard = () => <h1>This is the Dashboard</h1>
const Profile = () => <h1>This is the Profile</h1>
const Jobs = () => <h1>This is the Jobs</h1>
const Resources = () => <h1>This is the Resources</h1>

// This is a testing component
const MainPage = () => (
  <>
      <h1>You are on the main page</h1>
      <Link to="/dashboard" label="View Dashboard">
        <p>Dashboard</p>
      </Link>
  </>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={NavBar} />
        <Route path="/" component={Sidebar} />
        <Route path="/" exact component={MainPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/bootcamp-dashboard">
            <HackerNews />
            <TechNews />
        </Route>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/frozen-dept" component={FrozenDept} />
      </Switch>
    </Router>
  );
}

export default App