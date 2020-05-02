import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


const GJobs = () => {

    const { t, i18n } = useTranslation();


    var [posts_gjobs, setPosts] = useState();

    posts_gjobs = [];

    var contentLoc = {
        website: "http://careers.nisg.org/job-listings-Senior-Manager-IEC-Campaign-UIDAI-NISG-National-Institute-for-Smart-Government-Delhi-10-to-20-years-080420001842?xp=1", organization: "Unique Identification Authority of India",
        position: "SENIOR MANAGER IEC CAMPAIGN – UIDAI", experience: "10 - 20", salary: "NA", location_state: "Delhi",
        location_place: "New Delhi", count_vacancies: "1"
    };

    posts_gjobs.push({
        type: "GJob", id: "1001", content: contentLoc,
        creation_date: "8-Apr-2020", last_date: "31-May-2020", count_views: "0", count_actions: "1"
    });

    contentLoc = {
        website: "http://careers.nisg.org/job-listings-Senior-Manager-IT-Goods-Service-Tax-Network-GSTN-New-Delhi-NISG-National-Institute-for-Smart-Government-Delhi-8-to-13-years-150420005659?xp=1", organization: "Goods and Services Tax Network",
        position: "SENIOR MANAGER IT", experience: "08 - 13", salary: "NA", location_state: "Delhi",
        location_place: "New Delhi", count_vacancies: "1"
    };

    posts_gjobs.push({
        type: "GJob", id: "1002", content: contentLoc,
        creation_date: "10-Apr-2020", last_date: "31-Jul-2020", count_views: "4", count_actions: "5"
    });

    contentLoc = {
        website: "http://www.delhimetrorail.com/CareerDocuments/Advt.No.53-GM-S&T,Patna.pdf", organization: "Delhi Metro Rail Corporation",
        position: "General Managaer (S&T)", experience: "58 - 62", salary: "NA", location_state: "Bihar",
        location_place: "Patna", count_vacancies: "1"
    };

    posts_gjobs.push({
        type: "GJob", id: "1003", content: contentLoc,
        creation_date: "8-Apr-2020", last_date: "31-May-2020", count_views: "1", count_actions: "6"
    });

    contentLoc = {
        website: "http://www.iiits.ac.in/iiits-content/uploads/2019/10/IIIT-SriCity-Recruitment-AssistantAssociate-Professor-Oct2019-Instructions-FV.pdf", organization: "Unique Identification Authority of India",
        position: "Assistant and Associate Professor", experience: "5 - 15", salary: "NA", location_state: "Andhra Pradesh",
        location_place: "Chittoor", count_vacancies: "1"
    };

    posts_gjobs.push({
        type: "GJob", id: "1004", content: contentLoc,
        creation_date: "18-Apr-2020", last_date: "31-May-2020", count_views: "3", count_actions: "10"
    });

    return (
        <div>
            <br></br>
            <div class="row">
                <div class="col"></div>
                <div class="col">
                    <span >{t('Organisation')}</span>
                    <br></br>
                    <select class="custom-select border-success text-dark" id="inputGroupSelect01" style={{ width: '15rem' }} >
                        <option selected value="1">Delhi Metro Rail Corporation</option>
                        <option value="2">Goods and Services Tax Network</option>
                        <option value="3">IIIT</option>
                        <option value="4">UIDAI</option>
                    </select>
                    <br></br><br></br>
                    <span>{t('Designation')}</span>
                    <br></br>
                    <select class="custom-select border-success text-dark" id="inputGroupSelect02" style={{ width: '15rem' }} >
                        <option selected value="1">Manager</option>
                        <option value="2">Professor</option>
                    </select>
                    <br></br><br></br>
                    <span>{t('Location')}</span>
                    <br></br>
                    <select class="custom-select border-success text-dark" id="inputGroupSelect03" style={{ width: '15rem' }} >
                        <option selected value="1">Delhi</option>
                        <option value="2">Andhra Pradesh</option>
                        <option value="3">Bihar</option>
                    </select>
                </div>

                <div class="col">
                    <h4>{t('NavItem1')}</h4>
                    {posts_gjobs.map((gjob, gindex) => (<div>
                        <div class="card mb-3 border-dark" style={{ width: '45rem' }}>
                            <div class="card-body text-dark">
                                <div class="row">
                                    <div class="col">
                                        <h6>{gjob.content.position}</h6>
                                    </div>
                                    <div class="col">
                                        <a href={gjob.content.website} class="btn btn-warning" target="_blank">
                                            {t('Check details and apply')}</a>
                                    </div>
                                </div>
                                <h6>{gjob.content.organization}</h6>
                                {t('Experience')} {": "}
                                {gjob.content.experience}  {t('years')} {" , "}
                                {t('Location')} {": "}
                                {t(gjob.content.location_place)}, {t(gjob.content.location_state)} {" , "}
                                {t('Apply before')} {": "}
                                <b>{gjob.last_date}</b>
                                <div class="row">
                                    <div class="col-md-12 text-secondary">
                                        {t('This job is searched')} {" "}
                                        {gjob.count_views}  {t('times')} {" and details viewed "}
                                        {gjob.count_actions} {t('times')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))},


                </div>
                <div class="col"></div>

            </div>

        </div>

    );

}

export default GJobs;
