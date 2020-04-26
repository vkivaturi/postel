import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


const GJobs = () => {

    const { t, i18n } = useTranslation();


    var [posts_gjobs, setPosts] = useState();

    posts_gjobs = [];

    var contentLoc = {
        website: "http://careers.nisg.org/job-listings-Senior-Manager-IEC-Campaign-UIDAI-NISG-National-Institute-for-Smart-Government-Delhi-10-to-20-years-080420001842?xp=1", image: "https://uidai.gov.in/images/logo/aadhaar_english_logo.svg", organization: "Unique Identification Authority of India",
        position: "SENIOR MANAGER IEC CAMPAIGN – UIDAI", experience: "10 - 20", salary: "NA", location_state: "Delhi",
        location_place: "New Delhi", count_vacancies: "1"
    };

    posts_gjobs.push({
        type: "GJob", id: "1001", content: contentLoc,
        creation_date: "8-Apr-2020", last_date: "31-May-2020", count_views: "0", count_actions: "1"
    });

    contentLoc = {
        website: "http://careers.nisg.org/job-listings-Senior-Manager-IT-Goods-Service-Tax-Network-GSTN-New-Delhi-NISG-National-Institute-for-Smart-Government-Delhi-8-to-13-years-150420005659?xp=1", image: "https://www.gstn.org.in/wp-content/uploads/2020/02/cropped-logo_tm_with_text.png", organization: "Unique Identification Authority of India",
        position: "SENIOR MANAGER IT", experience: "08 - 13", salary: "NA", location_state: "Delhi",
        location_place: "New Delhi", count_vacancies: "1"
    };

    posts_gjobs.push({
        type: "GJob", id: "1002", content: contentLoc,
        creation_date: "10-Apr-2020", last_date: "31-Jul-2020", count_views: "4", count_actions: "5"
    });

    contentLoc = {
        website: "http://www.delhimetrorail.com/CareerDocuments/Advt.No.53-GM-S&T,Patna.pdf", image: "http://www.delhimetrorail.com/images/logo.jpg", organization: "Unique Identification Authority of India",
        position: "General Managaer (S&T)", experience: "58 - 62", salary: "NA", location_state: "Bihar",
        location_place: "Patna", count_vacancies: "1"
    };

    posts_gjobs.push({
        type: "GJob", id: "1003", content: contentLoc,
        creation_date: "8-Apr-2020", last_date: "31-May-2020", count_views: "1", count_actions: "6"
    });

    contentLoc = {
        website: "http://www.iiits.ac.in/iiits-content/uploads/2019/10/IIIT-SriCity-Recruitment-AssistantAssociate-Professor-Oct2019-Instructions-FV.pdf", image: "http://www.iiits.ac.in/iiits-content/uploads/2020/03/logo12-new-1.png", organization: "Unique Identification Authority of India",
        position: "Assistant and Associate Professor", experience: "5 - 15", salary: "NA", location_state: "Andhra",
        location_place: "Chittoor", count_vacancies: "1"
    };

    posts_gjobs.push({
        type: "GJob", id: "1004", content: contentLoc,
        creation_date: "18-Apr-2020", last_date: "31-May-2020", count_views: "3", count_actions: "10"
    });

    return (
        <div class="container">
            <br></br>
            <div class="row">
                <div class="col">

                </div>
                <div class="col-md-14">
                    <div class="card-columns align-center">
                        {posts_gjobs.map((gjob, gindex) => (<div>
                            <div class="card mb-3 border-dark" style={{ width: '25rem' }}>
                                <img class="card-img-top" style={{ width: "400px", height: "75px" }} src={gjob.content.image} alt="" />
                                <div class="card-body">
                                    <h6>{gjob.content.position}</h6>
                                    <div class="row">
                                        <div class="col">Experience</div>
                                        <div class="col">{gjob.content.experience}  {t('years')}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col">Location</div>
                                        <div class="col">{t(gjob.content.location_place)}, {t(gjob.content.location_state)} </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">{t('Apply before')}</div>
                                        <div class="col"><b>{gjob.last_date}</b></div>
                                    </div>

                                    <a href={gjob.content.website} class="btn btn-primary btn-block" target="_blank">
                                        {t('Check details and apply')}</a>
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

                </div>

            </div>

        </div>

    );

}

export default GJobs;
