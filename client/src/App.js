import React from "react";
import HackerNews from "./Components/HackerNews";
import TechNews from "./Components/TechNews"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

// This is a testing component
const MainPage = () => (
    <>
        <h1>You are on the main page</h1>
        <Link to="/dashboard" label="View Dashboard">
          <p>Dashboard</p>
        </Link>
    </>
);

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/dashboard">
                    <HackerNews />
                    <TechNews />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
