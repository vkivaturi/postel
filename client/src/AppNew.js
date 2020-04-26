import React from 'react';
import { useTranslation} from 'react-i18next';

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

const App = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = code => {
        i18n.changeLanguage(code);
    };

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
                <select class="custom-select bg-success text-white" id="inputGroupSelect02" style={{ width: '6rem' }} onChange={(e) => changeLanguage(e.target.value)} >
                    <option selected value="en">English</option>
                    <option value="hi">हिन्दी</option>
                    <option value="te">తెలుగు</option>
                </select>
            </Navbar>


            <h1>{t('message1')}</h1>
            <Landing />

        </div>
    );
};

export default App;