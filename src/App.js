import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GJobs from './component/GJobs';
import Landing from './component/Landing';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Navbar bg="dark" variant="primary" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <i class="material-icons" style={{ color: "green", fontSize: "25px" }}>language</i>
        <NavDropdown title="My language" id="basic-nav-dropdown" >
          <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Hindi</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Telugu</NavDropdown.Item>
        </NavDropdown>
        <select class="custom-select custom-select-sm">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </Navbar>


      <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/gjobs">
          <div class="row">
        <div class="col" >
        </div>
        <div class="col">
          <div class="card card-block">
            <GJobs />
          </div>
        </div>
        <div class="col align-self-end">
        </div>
      </div>
          </Route>
          <Route path="/about">
            About Us
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
