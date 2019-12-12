import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from './component/NavBar/NavBar';
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login'

import "./App.css";



const App = () => {
  return (
    <>
      <NavBar />
    <Router>
      <Route path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </Router>
    </>
  );
}

export default App