import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GJobs from './component/GJobs';
import Landing from './component/Landing';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { translate, Trans } from "react-i18next";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      language: "en",
    }

  }

  languageChange = (selLang) => {
    this.setState({ language: selLang });
    console.log("Inside select")
    return <Redirect to='/Home' />
  }

  render() {
    //const { t } = useTranslation();

    const { t, i18n } = this.props;

    return (
      <div className="App">

        <Navbar bg="warning" variant="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="gjobs">Government Jobs</Nav.Link>
              <Nav.Link href="link">What is this?</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <i class="material-icons" style={{ color: "white", fontSize: "25px" }}>language</i>
          <select class="custom-select bg-success text-white" id="inputGroupSelect02" style={{ width: '6rem' }} onChange={(e) => this.languageChange(e.target.value)} >
            <option selected value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="te">తెలుగు</option>
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
                    </div>
                  </div>
                  <div class="col align-self-end">
                  </div>
                </div>
              </Route>
              <Route path="/Home">
                <GJobs />
              </Route>
              <Route path="/">
                <h2>Test</h2>
                <Trans>{t("Weclome")}</Trans>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
