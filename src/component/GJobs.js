import React, { Component } from 'react';

class GJobs extends Component {


    constructor(props) {
        super(props);

        const posts_gjobs = [];
        var contentLoc = {
            website: "http://careers.nisg.org/job-listings-Senior-Manager-IEC-Campaign-UIDAI-NISG-National-Institute-for-Smart-Government-Delhi-10-to-20-years-080420001842?xp=1", image: "https://uidai.gov.in/images/logo/aadhaar_english_logo.svg", organization: "Unique Identification Authority of India",
            position: "SENIOR MANAGER IEC CAMPAIGN – UIDAI", experience: "10 - 20", salary: "NA", location_state: "Delhi",
            location_place: "New Delhi", count_vacancies: "1"
        };

        posts_gjobs.push({
            type: "GJob", id: "1001", content: contentLoc,
            creation_date: "8-Apr-2020", last_date: "31-May-2020", count_views: "0", count_actions: "1"
        });

        posts_gjobs.push({
            type: "GJob", id: "1002", content: contentLoc,
            creation_date: "10-Apr-2020", last_date: "28-May-2020", count_views: "4", count_actions: "5"
        });

        posts_gjobs.push({
            type: "GJob", id: "1003", content: contentLoc,
            creation_date: "8-Apr-2020", last_date: "10-May-2020", count_views: "3", count_actions: "6"
        });

        posts_gjobs.push({
            type: "GJob", id: "1004", content: contentLoc,
            creation_date: "18-Apr-2020", last_date: "11-May-2020", count_views: "3", count_actions: "10"
        });

        posts_gjobs.push({
            type: "GJob", id: "1005", content: contentLoc,
            creation_date: "3-Apr-2020", last_date: "21-May-2020", count_views: "10", count_actions: "21"
        });

        this.state = {
            posts_gjobs,
        }
    }


    render() {

        return (
            <div class="d-flex align-items-center flex-wrap">
                {this.state.posts_gjobs.map((gjob, gindex) => (<div >

                    <div class="card mb-3 border" style={{ width: '15rem' }}>
                        <img class="card-img-top" src={gjob.content.image} alt="" />
                        <div class="card-body">
                            <h6>{gjob.content.position}</h6>
                            <div>{gjob.content.experience + " Years"}</div>
                            <div>{gjob.content.location_state + ", "} {gjob.content.location_place}</div>
                            <br></br>
                            <a href={gjob.content.website} class="btn btn-primary btn-block" target="_blank">
                                Check details & apply</a>
                            <div>Apply before <b>{gjob.last_date}</b></div>
                            <hr></hr>
                            <div class="row">
                                <div class="col">
                                    <i class="material-icons" style={{ color: "orange", fontSize: "30px" }}>remove_red_eye</i>
                                    <sup>2.2k</sup>
                                </div>
                                <div class="col">
                                    <i class="material-icons" style={{ color: "green", fontSize: "30px" }}>favorite</i>
                                    <sup>2.2k</sup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))},

            </div>

        );
    }
}

export default GJobs;
