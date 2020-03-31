import React from 'react';
import './style.scss'
import {Helmet} from "react-helmet";
import Navigation from "../../components/navigation/navigation";
import HeaderForBoard from "../../components/header/forBoard/headerForBoard";
import FunctionResident from "../../components/functionResident/functionResident";
import Footer from "../../components/footer/footer";
import Blog from "../../components/blogFooter/blogFooter";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import {Translation} from "react-i18next";
import MasterComponent from "../../components/master";

class ForBoard extends MasterComponent {

    render() {
        return (
            <Translation>
                {(t) => (
                    <React.Fragment>
                        <Helmet>
                            <title>{t("forBoard:title")}</title>
                            <meta name="description" content={t("forBoard:metaDescription")}/>
                            <meta name="keywords" content={t("forBoard:metaKeyWord")}/>
                        </Helmet>
                        <ScrollToTopOnMount/>
                        <Navigation/>
                        <HeaderForBoard props={this.props}/>
                        <div className="for-board">
                            <div className="box">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 d-none d-md-block text-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forBoard/trace.png'}
                                                 alt="trace" className="img-fluid mb-2"/>
                                        </div>
                                        <div className="col-md-6 text-left">
                                            <h1>{t("forBoard:Keep an eye on accounting activities.")}</h1>
                                            <p>{t("forBoard:Silverman offers an ultimate feature designed specially for committees.")}</p>
                                        </div>
                                        <div className="col-md-6 d-md-none">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forBoard/trace.png'}
                                                 alt="trace" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 text-left">
                                            <h1>{t("forBoard:The answer to debt problems")}</h1>
                                            <p>{t("forBoard:Committee members can see the list of residents in debt on common area fees or other purchases.")}</p>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forBoard/receipt.png'}
                                                 alt="receipt" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 d-none d-md-block text-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forBoard/real-time.png'}
                                                 alt="real-time" className="img-fluid mb-2"/>
                                        </div>
                                        <div className="col-md-6 text-left">
                                            <h1>{t("forBoard:Update financial status in real time")}</h1>
                                            <p>{t("forBoard:On Silverman platform, committees always get actionable intelligence from reports;")}</p>
                                        </div>
                                        <div className="col-md-6 d-md-none">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forBoard/real-time.png'}
                                                 alt="real-time" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 text-left">
                                            <h1>{t("forBoard:Urgency made easy by Silverman")}</h1>
                                            <p>{t("forBoard:In event that requires immediate action, " +
                                                "committee members will be notified and be able to respond")}</p>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forBoard/quick.png'}
                                                 alt="receipt" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 d-none d-md-block text-center">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forBoard/fix-complaint.png'}
                                                alt="fix-complaint.png" className="img-fluid mb-2"/>
                                        </div>
                                        <div className="col-md-6 text-left">
                                            <h1>{t("forBoard:Maintenance/Complaint Management")}</h1>
                                            <p>{t("forBoard:Via online summary reports, committee members can keep " +
                                                "track of all maintenance requests and complaints.")}</p>
                                        </div>
                                        <div className="col-md-6 d-md-none">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forBoard/fix-complaint.png'}
                                                alt="fix-complaint.png" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 text-left">
                                            <h1>{t("forBoard:Secure and up to date")}</h1>
                                            <p>{t("forBoard:Residential information is crucial for smooth management " +
                                                "in every property.")}</p>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forBoard/update.png'}
                                                 alt="receipt" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <FunctionResident/>
                            <Blog/>
                        </div>
                        <Footer/>
                    </React.Fragment>
                )}
            </Translation>
        );
    }
}

export default ForBoard;