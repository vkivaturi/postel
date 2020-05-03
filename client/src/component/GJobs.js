import React, { Component, Suspense } from 'react';
import { withTranslation } from 'react-i18next';

class GJobs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts_gjobs: [],
        }
    }

    componentDidMount() {
        fetch('/api/jobs/latest')
            .then(res => res.json())
            .then(posts_gjobs => this.setState({ posts_gjobs }));

    }


    render() {
        const { t } = this.props;

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
                        {this.state.posts_gjobs.map((gjob, gindex) => (<div>
                            <div class="card mb-3 border-dark" style={{ width: '45rem' }}>
                                <div class="card-body text-dark">
                                    <div class="row">
                                        <div class="col">
                                            <h6>{t(gjob.position_id)}</h6>
                                        </div>
                                        <div class="col">
                                            <a href={gjob.website} class="btn btn-warning" target="_blank">
                                                {t('Check details and apply')}</a>
                                        </div>
                                    </div>
                                    <h6>{t(gjob.org_id)}</h6>
                                    {t('Experience')} {": "}
                                    {gjob.experience}  {t('years')} {" , "}
                                    {t('Location')} {": "}
                                    {t(gjob.city)}, {t(gjob.state_id)} {" , "}
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
        )
    }
}

export default withTranslation()(GJobs);
