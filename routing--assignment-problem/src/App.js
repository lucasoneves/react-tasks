import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import Courses from "./containers/Courses/Courses";
import Course from "./containers/Course/Course";
import Users from "./containers/Users/Users";
import Instructions from "./containers/Instructions/Instructions";
import NoMatch from './containers/NoMatch/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul className="main-nav">
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/">Instructions</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Redirect from="/all-courses" to="/courses" />
            
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/courses/course/:id/:title">
              <Course />
            </Route>
            <Route path="/courses">
              <Courses />
            </Route>
            <Route path="/">
              <Instructions />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
