import React, { Component } from 'react';
import GJobs from './GJobs';

class Landing extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>

                <div class="theme-layout">
                    <div class="container-fluid pdng0">
                        <div class="row merged">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="land-featurearea bg-warning">
                                    <div class="land-meta">
                                        <h1>Postel.in</h1>
                                        <p><h4>
                                            Information that helps, posts that matter to you, in a language that you know
                                            </h4></p>
                                        <div class="row container-fluid">
                                            <div class="col">
                                                <div class="card" style={{ width: '18rem' }}>
                                                    <img class="card-img-top" style={{ width: '18rem', height: '10rem' }} src={require("../image/Jobs.png")} alt="Card image cap" />
                                                    <div class="card-body">
                                                        <p class="card-text">Government job announcements across all the States, Union Terriotories and Central Government organizations in India</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card" style={{ width: '18rem' }}>
                                                    <img class="card-img-top" style={{ width: '18rem', height: '10rem' }} src={require("../image/University.png")} alt="Card image cap" />
                                                    <div class="card-body">
                                                        <p class="card-text">Admission announcements in all graduation and post graduation educational institutions from all over India.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row container-fluid">
                                            <div class="col">
                                                <div class="card" style={{ width: '18rem' }}>
                                                    <img class="card-img-top" style={{ width: '18rem', height: '10rem' }} src={require("../image/Jobs.png")} alt="Card image cap" />
                                                    <div class="card-body">
                                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card" style={{ width: '18rem' }}>
                                                    <img class="card-img-top" style={{ width: '18rem', height: '10rem' }} src={require("../image/Jobs.png")} alt="Card image cap" />
                                                    <div class="card-body">
                                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="login-reg-bg  bg-success">
                                    <div class="log-reg-area sign ">
                                        <h2 class="log-title">Login</h2>
                                        <p>
                                            Don’t use Winku Yet? <a href="#" title="">Take the tour</a> or <a href="#" title="">Join now</a>
                                        </p>
                                        <form method="post">
                                            <div class="form-group">
                                                <input type="text" id="input" required="required" />
                                                <label class="control-label" for="input">Username</label><i class="mtrl-select"></i>
                                            </div>
                                            <div class="form-group">
                                                <input type="password" required="required" />
                                                <label class="control-label" for="input">Password</label><i class="mtrl-select"></i>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" checked="checked" /><i class="check-box"></i>Always Remember Me.
							  </label>
                                            </div>
                                            <a href="#" title="" class="forgot-pwd">Forgot Password?</a>
                                            <div class="submit-btns">
                                                <button class="mtr-btn signin" type="button"><span>Login</span></button>
                                                <button class="mtr-btn signup" type="button"><span>Register</span></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="log-reg-area reg">
                                        <h2 class="log-title">Register</h2>
                                        <p>
                                            Don’t use Winku Yet? <a href="#" title="">Take the tour</a> or <a href="#" title="">Join now</a>
                                        </p>
                                        <form method="post">
                                            <div class="form-group">
                                                <input type="text" required="required" />
                                                <label class="control-label" for="input">First & Last Name</label><i class="mtrl-select"></i>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" required="required" />
                                                <label class="control-label" for="input">User Name</label><i class="mtrl-select"></i>
                                            </div>
                                            <div class="form-group">
                                                <input type="password" required="required" />
                                                <label class="control-label" for="input">Password</label><i class="mtrl-select"></i>
                                            </div>
                                            <div class="form-radio">
                                                <div class="radio">
                                                    <label>
                                                        <input type="radio" name="radio" checked="checked" /><i class="check-box"></i>Male
								</label>
                                                </div>
                                                <div class="radio">
                                                    <label>
                                                        <input type="radio" name="radio" /><i class="check-box"></i>Female
								</label>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" required="required" />
                                                <label class="control-label" for="input">Email@</label><i class="mtrl-select"></i>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" checked="checked" /><i class="check-box"></i>Accept Terms & Conditions ?
							  </label>
                                            </div>
                                            <a href="#" title="" class="already-have">Already have an account</a>
                                            <div class="submit-btns">
                                                <button class="mtr-btn signup" type="button"><span>Register</span></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Landing;
