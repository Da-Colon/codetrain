import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Sidenav from './components/Sidenav/Sidenav'


import './App.css';

const Login = () => <h1>Login</h1>
const Signup = () => <h1>Sign in</h1>

function App() {
  return (
    <Router>

      <Route path="/" component={NavBar} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/sidebar" component={Sidenav} />
    </Router>
  );
}

export default App;