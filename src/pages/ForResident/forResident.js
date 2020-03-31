import React from 'react';
import './style.scss'
import {Helmet} from "react-helmet";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import FunctionResident from "../../components/functionResident/functionResident";
import Blog from "../../components/blogFooter/blogFooter";
import HeaderForResident from "../../components/header/forResident/headerForResident";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import {Translation} from "react-i18next";
import MasterComponent from "../../components/master";

const $ = window.jQuery;

class ForResident extends MasterComponent {

    componentDidMount() {
        $(".read-more").on("click", function () {
            $(this).siblings("p").children(".more").toggle("slow");
        });
    }

    render() {
        return (
            <Translation>
                {(t) => (
                    <React.Fragment>
                        <Helmet>
                            <title>{t("forResident:title")}</title>
                            <meta name="description" content={t("forResident:metaDescription")}/>
                            <meta name="keywords" content={t("forResident:metaKeyWord")}/>
                        </Helmet>
                        <ScrollToTopOnMount/>
                        <Navigation/>
                        <HeaderForResident props={this.props}/>
                        <div className="for-resident">
                            <div className="box">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 d-none d-md-block text-center">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forResident/manage-all-project.png'}
                                                alt="trace" className="img-fluid mb-2"/>
                                        </div>
                                        <div className="col-md-6 text-left">
                                            <h1>{t("forResident:Manage multiple properties on a single platform")}</h1>
                                            <p>{t("forResident:Whether you are buying an investment property or home " +
                                                "to live in, Silverman can make your life easy.Make the change to " +
                                                "Silverman today and discover the difference.")}<br/>
                                                <span className="more">
                                                    {t("forResident:Receiving bills, getting newsletter, and contacting the management through Silverman application")}<br/>
                                                    {t("forResident:Choosing a property you want to manage and viewing insights of each property in one application.")}<br/>
                                                    {t("forResident:Organizing your property, Removing an old tenant and adding a new one by simply using Invitation Code.")}<br/>
                                                    {t("forResident:Viewing all the bills and keeping track on tenant's payment record to prevent debt.")}
                                                </span>
                                            </p>

                                            <span className="read-more">{t("forResident:Read More")}</span>
                                        </div>
                                        <div className="col-md-6 d-md-none">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forResident/manage-all-project.png'}
                                                alt="manage-all-project" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-margin-bottom">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 text-left">
                                            <h1>{t("forResident:Conveniently check your bills and make payment online")}</h1>
                                            <p dangerouslySetInnerHTML={{__html: t("forResident:Online billing notification " +
                                                    "ensures that you will get every bill sent to you without checking your mail box.")}}/>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forResident/receipt.png'}
                                                 alt="receipt" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="corrupt">
                                <div className="box-margin-bottom">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6 d-none d-md-block text-center">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/assets/images/forResident/corrupt.png'}
                                                    alt="corrupt" className="img-fluid mb-2"/>
                                            </div>
                                            <div className="col-md-6 text-left mb-5 mb-md-0">
                                                <div className="text-margin">
                                                    <h1>{t("forResident:Increase accountability and transparency for property management team")}</h1>
                                                    <p dangerouslySetInnerHTML={{__html: t("forResident:By connecting to " +
                                                            "the application, residents can easily access to Income and Expense Report")}}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-md-none">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/assets/images/forResident/corrupt.png'}
                                                    alt="corrupt" className="img-fluid mb-2"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-margin-bottom">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 text-left mb-5 mb-md-0">
                                            <h1>{t("forResident:Never miss any news and updates from your property")}</h1>
                                            <p dangerouslySetInnerHTML={{__html: t("forResident:Being on the go or occupied with work, " +
                                                    "whatever the case, Silverman's Notification System")}}/>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forResident/notification.png'}
                                                alt="notification" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 d-none d-md-block text-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forResident/safety.png'}
                                                 alt="safety" className="img-fluid mb-2"/>
                                        </div>
                                        <div className="col-md-6 text-left">
                                            <h1>{t("forResident:Your data is safe with us")}</h1>
                                            <p>{t("forResident:Silverman is a vault that only you can access. To protect " +
                                                "your data, you can reset your password anytime you want.")}<br/>
                                                <span className="more">
                                            {t("forResident:Username and Password is required to enter the system")}<br/>
                                            {t("forResident:The users can always change their password to prevent hackers from entering their accounts.")}<br/>
                                            {t("forResident:Cloud storage ensures that your data is safe, and prevents data loss.")}<br/>
                                            {t("forResident:Silverman system is protected by Encryption which will conceal information by converting")}<br/>
                                            {t("forResident:The property owner can delete and add users in case of change of tenant to prevent interference by a former tenant.")}
                                        </span>
                                            </p>

                                            <span className="read-more">{t("forResident:Read More")}</span>
                                        </div>
                                        <div className="col-md-6 d-md-none">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forResident/safety.png'}
                                                 alt="safety" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 text-left mb-5 mb-md-0">
                                            <h1>{t("forResident:Online booking for every activity and service")}</h1>
                                            <p>{t("forResident:With a mission to make it easier for residents to use service at their convenience,")}</p>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forResident/booking.png'}
                                                 alt="booking" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="iot">
                                <div className="box">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 d-none d-md-block text-center">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/forResident/iot.png'}
                                                     alt="iot" className="img-fluid mb-2"/>
                                            </div>
                                            <div className="col-md-6 ">
                                                <h1>{t("forResident:Compatible with Internet of Things (IoT)")}</h1>
                                                <p>{t("forResident:Written in Python, a user friendly, powerful and versatile programming language,")}<br/>
                                                    <span className="more">
                                                {t("forResident:Silverman maximize the potential of the modern lifestyle")}<br/>
                                                {t("forResident:Connect to intruder alarm system and get notification when there is violation of the property.")}<br/>
                                                {t("forResident:View security DVR system through application when connect to CCTV.")}<br/>
                                                {t("forResident:Support the full Internet of Things value chain with capability of connecting to other devices in Smart Home,")}
                                            </span>
                                                </p>

                                                <span className="read-more">{t("forResident:Read More")}</span>
                                            </div>
                                            <div className="col-md-6 d-md-none">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/forResident/iot.png'}
                                                     alt="iot" className="img-fluid mb-2"/>
                                            </div>
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

export default ForResident;