import React from 'react';
import './style.scss'
import {Helmet} from "react-helmet";
import Navigation from "../../components/navigation/navigation";
import HeaderForJuristicManagement from "../../components/header/forJuristicManagement/headerForJuristicManagement";
import Footer from "../../components/footer/footer";
import Blog from "../../components/blogFooter/blogFooter";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import {Translation} from "react-i18next";
import MasterComponent from "../../components/master";

const $ = window.jQuery;

class ForJuristicManagement extends MasterComponent {

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
                            <title>{t("forJuristicManagement:title")}</title>
                            <meta name="description" content={t("forJuristicManagement:metaDescription")}/>
                            <meta name="keywords" content={t("forJuristicManagement:metaKeyWord")}/>
                        </Helmet>
                        <ScrollToTopOnMount/>
                        <Navigation/>
                        <HeaderForJuristicManagement props={this.props}/>
                        <div className="for-juristic-management">
                            <div className="box">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 d-none d-md-block text-center">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forJuristic/dashboard.png'}
                                                alt="dashboard" className="img-fluid mb-2"/>
                                        </div>
                                        <div className="col-md-6 text-left">
                                            <h1>{t("forJuristicManagement:DASHBOARD a Quick Overview of Essential Data And Insights.")}</h1>
                                            <p>{t("forJuristicManagement:From one simple Dashboard, you can access to daily activities in the project.")}<br/>
                                                <span className="more">
                                            {t("forJuristicManagement:Provide daily work report and allow property manager to effectively plan a work schedule.")}<br/>
                                            {t("forJuristicManagement:Update work status; parcel & mailing, maintenance and complaint, via notification.")}<br/>
                                            {t("forJuristicManagement:Compare every income and expense in single screen.")}<br/>
                                            {t("forJuristicManagement:Show a list of specific resident with outstanding debt in real time.")}<br/>
                                            {t("forJuristicManagement:Update information about residents in the property.")}<br/>
                                            {t("forJuristicManagement:Allow property manager to oversee all tasks in the property 24/7 from everywhere.")}
                                        </span>
                                            </p>

                                            <span className="read-more">{t("forJuristicManagement:Read More")}</span>
                                        </div>
                                        <div className="col-md-6 d-md-none">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forJuristic/dashboard.png'}
                                                alt="dashboard" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-margin-bottom">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 text-left">
                                            <h1>{t("forJuristicManagement:Better communication with residents via Co-Owner/Member feature")}</h1>
                                            <p>{t("forJuristicManagement:Silverman provides a two-way communication platform that allows the management")}<br/>
                                                <span className="more">
                                            {t("forJuristicManagement:Sharing news and information with residents even when they're on-the-go.")}<br/>
                                            {t("forJuristicManagement:Sending bills through application and accepting mobile payment using cross bank transfer, credit card and QR Code.")}<br/>
                                            {t("forJuristicManagement:Sending parcel notification with snapshot of the item to a resident. Automatically keeping record of the recipient's name and delivery date.")}<br/>
                                            {t("forJuristicManagement:Residents can contact or complain via private chat without visiting the management office.")}<br/>
                                            {t("forJuristicManagement:Creating survey form to improve services that meet the needs of residents and committees.")}
                                        </span>
                                            </p>

                                            <span className="read-more">{t("forJuristicManagement:Read More")}</span>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forJuristic/function-tenant.png'}
                                                alt="function-tenant" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-margin-bottom">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 d-none d-md-block text-center">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forJuristic/function-fix.png'}
                                                alt="function-fix" className="img-fluid mb-2"/>
                                        </div>
                                        <div className="col-md-6 text-left">
                                            <h1>{t("forJuristicManagement:Improve maintenance service with Maintenance Request feature")}</h1>
                                            <p>{t("forJuristicManagement:The residents can submit maintenance request for living units and common areas via application.")}<br/>
                                                <span className="more">
                                            {t("forJuristicManagement:Easy to search. Sort tasks into categories; urgent, resident service, maintenance, demolition, renovation etc.")}<br/>
                                            {t("forJuristicManagement:Organize and control a list of items in stock with record of requesting person.")}<br/>
                                            {t("forJuristicManagement:Provide daily report and monthly repair schedule.")}
                                        </span>
                                            </p>

                                            <span className="read-more">{t("forJuristicManagement:Read More")}</span>
                                        </div>
                                        <div className="col-md-6 d-md-none">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forJuristic/function-fix.png'}
                                                alt="function-fix" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-margin-bottom">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 text-left">
                                            <h1 dangerouslySetInnerHTML={{__html: t("forJuristicManagement:Protect your data with highest security standard")}} />
                                            <p>{t("forJuristicManagement:To ensure that your important data never ends up in the wrong hands,")}<br/>
                                                <span className="more">
                                            {t("forJuristicManagement:Images and information of owners, residents and tenants are stored on Google Cloud and Amazon Cloud.")}<br/>
                                            {t("forJuristicManagement:Our encrypted system requires a user to fill the password before access to any data.")}<br/>
                                            {t("forJuristicManagement:Silverman allows you to assign access permission for staff, and to keep track of every activity in the system.")}<br/>
                                            {t("forJuristicManagement:Silverman keeps record of resident's information; vehicle, pet, keycard and ownership, and updates database in real time.")}<br/>
                                            {t("forJuristicManagement:The use of multiple servers around the world improves Silverman's reliability and ensures that our system is ready to serve you 24/7.")}<br/>
                                        </span>
                                            </p>

                                            <span className="read-more">{t("forJuristicManagement:Read More")}</span>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forJuristic/function-residential.png'}
                                                alt="function-residential" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-margin-bottom">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6 d-none d-md-block text-center">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forJuristic/silverman-niti-app.png'}
                                                alt="function-fix" className="img-fluid mb-2"/>
                                        </div>
                                        <div className="col-md-6 text-left">
                                            <div className="logo-description">
                                                <div className="silverman-logo-xl">
                                                    <img
                                                        src={process.env.PUBLIC_URL + '/assets/images/forJuristic/silverman-for-niti-logo.png'}
                                                        alt="silverman-for-niti-logo"
                                                        className="d-none d-xl-block logo img-fluid"/>
                                                </div>
                                                <div>
                                                    <div className="d-xl-none text-center mb-4">
                                                        <img
                                                            src={process.env.PUBLIC_URL + '/assets/images/forJuristic/silverman-for-niti-logo.png'}
                                                            alt="silverman-for-niti-logo" className="logo img-fluid"/>
                                                    </div>
                                                    <h1>SILVERMAN for NITI</h1>
                                                    <p dangerouslySetInnerHTML={{__html: t("forJuristicManagement:Empowering your property management services.")}}/>
                                                    <p>
                                                        <span className="more">
                                                            <div className="correct">
                                                                <img
                                                                    src={process.env.PUBLIC_URL + '/assets/images/forJuristic/correct.svg'}
                                                                    alt="correct" className="img-fluid"/>
                                                                <h6>{t("forJuristicManagement:Easy to handle and resolve complaints via private chat.")}</h6>
                                                            </div>
                                                            <div className="correct">
                                                                <img
                                                                    src={process.env.PUBLIC_URL + '/assets/images/forJuristic/correct.svg'}
                                                                    alt="correct" className="img-fluid"/>
                                                                <h6 dangerouslySetInnerHTML={{__html: t("forJuristicManagement:Accepting repair requests, planning a service, and keeping track of maintenance status.")}}/>
                                                            </div>
                                                            <div className="correct">
                                                                <img
                                                                    src={process.env.PUBLIC_URL + '/assets/images/forJuristic/correct.svg'}
                                                                    alt="correct" className="img-fluid"/>
                                                                <h6 dangerouslySetInnerHTML={{__html: t("forJuristicManagement:Sending snapshots of mail, parcel, water meter and electricity bill to residents through application.")}}/>
                                                            </div>
                                                        </span>
                                                    </p>
                                                    <span className="read-more">{t("forJuristicManagement:Read More")}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-md-none">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forJuristic/silverman-niti-app.png'}
                                                alt="function-fix" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="technology">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h1>{t("forJuristicManagement:Ultimate technology for getting things done")}</h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-12">
                                            <div className="description">
                                                <div className="icon">
                                                    <img
                                                        src={process.env.PUBLIC_URL + '/assets/images/forJuristic/tag-code.png'}
                                                        alt="tag-code"/>
                                                </div>
                                                <div className="content">
                                                    <h3 dangerouslySetInnerHTML={{__html: t("forJuristicManagement:Improving our system performance")}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-12">
                                            <div className="description">
                                                <div className="icon">
                                                    <img
                                                        src={process.env.PUBLIC_URL + '/assets/images/forJuristic/platform.png'}
                                                        alt="platform"/>
                                                </div>
                                                <div className="content">
                                                    <h3 dangerouslySetInnerHTML={{__html: t("forJuristicManagement:Allowing managements and residents to use Silverman")}} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-12">
                                            <div className="description">
                                                <div className="icon">
                                                    <img
                                                        src={process.env.PUBLIC_URL + '/assets/images/forJuristic/database.png'}
                                                        alt="database"/>
                                                </div>
                                                <div className="content">
                                                    <h3 dangerouslySetInnerHTML={{__html: t("forJuristicManagement:Securing your database")}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-12">
                                            <div className="description">
                                                <div className="icon">
                                                    <img
                                                        src={process.env.PUBLIC_URL + '/assets/images/forJuristic/cloud.png'}
                                                        alt="cloud"/>
                                                </div>
                                                <div className="content">
                                                    <h3 dangerouslySetInnerHTML={{__html: t("forJuristicManagement:Storing your daily data on cloud backup")}} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-12">
                                            <div className="description">
                                                <div className="icon">
                                                    <img
                                                        src={process.env.PUBLIC_URL + '/assets/images/forJuristic/update.png'}
                                                        alt="update"/>
                                                </div>
                                                <div className="content">
                                                    <h3 dangerouslySetInnerHTML={{__html: t("forJuristicManagement:Updating our software regularly to keep our")}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-12">
                                            <div className="description">
                                                <div className="icon">
                                                    <img
                                                        src={process.env.PUBLIC_URL + '/assets/images/forJuristic/permission.png'}
                                                        alt="permission"/>
                                                </div>
                                                <div className="content">
                                                    <h3 dangerouslySetInnerHTML={{__html: t("forJuristicManagement:Updating our software regularly to keep our")}} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Blog/>
                        </div>
                        <Footer/>
                    </React.Fragment>
                )}
            </Translation>
        );
    }
}

export default ForJuristicManagement;