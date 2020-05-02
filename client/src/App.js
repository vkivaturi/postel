import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
//import GJobs from './component/GJobs';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Landing from './component/Landing';
import GJobs from './component/GJobs';

const App = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = code => {
        i18n.changeLanguage(code);
    };

    return (
        <div className="App">

            <Navbar bg="success" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="gjobs"><span class="text-white" style={{fontSize: "20px" }}>{t('NavItem1')} |</span></Nav.Link>
                        <Nav.Link href="gjobs"><span class="text-white" style={{fontSize: "20px" }}>{t('NavItem3')} |</span></Nav.Link>
                        <Nav.Link href="link"><span class="text-white" style={{fontSize: "20px" }}>{t('NavItem2')}</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <select class="custom-select bg-success text-white" id="inputGroupSelect02" style={{ width: '6rem' }} onChange={(e) => changeLanguage(e.target.value)} >
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
                  <GJobs />
              </Route>
              <Route path="/home">
                <Landing />
              </Route>
              <Route path="/">
                <h2>Test</h2>
              </Route>
            </Switch>
          </div>
        </Router>

        </div>
    );
};

export default App;