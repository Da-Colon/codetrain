import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from './component/NavBar/NavBar';
import Signup from './component/Users/Signup/Signup';
import Login from './component/Users/Login/Login'
import Home from './component/Home';
import Dashboard from './component/Dashboard';

import "./App.css";



const App = () => {
  return (
    <>
    <Router>
      <NavBar />
      <Route path="/" component={Home} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/dashboard" component={Dashboard} exact/>
    </Router>
    </>
  );
}

export default App