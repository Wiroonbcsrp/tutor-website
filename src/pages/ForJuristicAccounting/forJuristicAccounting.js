import React from 'react';
import './style.scss'
import {Helmet} from "react-helmet";
import Navigation from "../../components/navigation/navigation";
import HeaderForJuristicAccounting from "../../components/header/forJuristicAccounting/headerForJuristicAccounting";
import Footer from "../../components/footer/footer";
import Blog from "../../components/blogFooter/blogFooter";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import {Translation} from "react-i18next";
import MasterComponent from "../../components/master";

const $ = window.jQuery;

class ForJuristicAccounting extends MasterComponent {

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
                            <title>{t("forJuristicAccounting:title")}</title>
                            <meta name="description" content={t("forJuristicManagement:metaDescription")}/>
                            <meta name="keywords" content={t("forJuristicManagement:metaKeyWord")}/>
                        </Helmet>
                        <ScrollToTopOnMount/>
                        <Navigation/>
                        <HeaderForJuristicAccounting props={this.props}/>
                        <div className="for-juristic-accounting">
                            <div className="box">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 d-none d-md-block text-center">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forJuristic/auto-revenue.svg'}
                                                alt="auto-revenue" className="img-fluid"/>
                                            <p className="mt-0">Automatic Revenue Recognition System</p>
                                        </div>
                                        <div className="col-md-6 text-left">
                                            <h1>{t("forJuristicAccounting:Automatic Revenue Recognition System")}</h1>
                                            <h2>(Automatic Revenue Recognition System)</h2>
                                            <p dangerouslySetInnerHTML={{
                                                __html: t("forJuristicAccounting:Say goodbye to complicated Excel formulas. " +
                                                    "Save your time and let Silverman handles your accounting works.")
                                            }}/>
                                        </div>
                                        <div className="col-md-6 d-md-none">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forJuristic/auto-revenue.svg'}
                                                alt="auto-revenue" className="img-fluid mb-2"/>
                                            <p className="text-center">Automatic Revenue Recognition System</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-margin-bottom">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 text-left mb-5 mb-md-0">
                                            <h1>AI Smart Detection</h1>
                                            <p dangerouslySetInnerHTML={{
                                                __html: t("forJuristicAccounting:Reduce human error and increase " +
                                                    "accuracy with our AI-powered accounting software.")
                                            }}/>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forJuristic/ai-smart.png'}
                                                alt="ai-smart" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-margin-bottom">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 d-none d-md-block text-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forJuristic/report.png'}
                                                 alt="report" className="img-fluid mb-2"/>
                                        </div>
                                        <div className="col-md-6 text-left mb-5 mb-md-0">
                                            <h1>{t("forJuristicAccounting:Conduct an examination of accounts in One Click")}</h1>
                                            <p dangerouslySetInnerHTML={{
                                                __html: t("forJuristicAccounting:Put an end to the " +
                                                    "complication of accounting works.")
                                            }}/>
                                        </div>
                                        <div className="col-md-6 d-md-none">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forJuristic/report.png'}
                                                 alt="report" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-margin-bottom">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 text-left mb-5 mb-md-0">
                                            <h1 dangerouslySetInnerHTML={{
                                                __html: t("forJuristicAccounting:Automatically " +
                                                    "connect data between Accrued Revenue and Expenditure and General Ledger")
                                            }}/>
                                            <p dangerouslySetInnerHTML={{
                                                __html: t("forJuristicAccounting:Silverman " +
                                                    "Online Accounting System ensures error prevention and avoids redundant works.")
                                            }}/>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forJuristic/gl.png'}
                                                 alt="gl" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 d-none d-md-block text-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forJuristic/debt.png'}
                                                 alt="debt" className="img-fluid mb-2"/>
                                        </div>
                                        <div className="col-md-6 text-left mb-5 mb-md-0">
                                            <h1>{t("forJuristicAccounting:AI Smart Overdue Payment Reminder")}</h1>
                                            <h2>(AI Smart Overdue Payment Reminder)</h2>
                                            <p dangerouslySetInnerHTML={{
                                                __html: t("forJuristicAccounting:Our Overdue Payment " +
                                                    "Reminder makes Common Area Fees Collection more effective.")
                                            }}/>
                                        </div>
                                        <div className="col-md-6 d-md-none">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forJuristic/debt.png'}
                                                 alt="debt" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 text-left mb-5 mb-md-0">
                                            <h1>{t("forJuristicAccounting:Increasing Productivity and Reducing Costs")}</h1>
                                            <p>{t("forJuristicAccounting:Silverman utilizes AI technology to avoid redundant " +
                                                "tasks and enhance the services.")}<br/>
                                                <span className="more">
                                                    <p className="list">
                                                        {t("forJuristicAccounting:Sending invoice and receipt through application")}<br/>
                                                        {t("forJuristicAccounting:Replacing paper newsletter with online notification")}<br/>
                                                        {t("forJuristicAccounting:Reducing the use of a logbook by signing as an acceptance of mail or parcel through application")}<br/>
                                                        {t("forJuristicAccounting:Minimizing man-hour and workforce by using full-featured accounting software")}<br/>
                                                        {t("forJuristicAccounting:Avoiding unnecessary tasks and improving services")}<br/>
                                                        {t("forJuristicAccounting:Cutting stationary costs and increasing cash flow")}<br/>
                                                        {t("forJuristicAccounting:Paying only for monthly subscription with no additional fees for software license, server or maintenance.")}
                                                    </p>
                                                </span>
                                            </p>

                                            <span className="read-more">{t("forJuristicAccounting:Read More")}</span>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forJuristic/cost.png'}
                                                 alt="cost" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 d-none d-md-block text-center">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forJuristic/tax-online.png'}
                                                alt="tax-online" className="img-fluid mb-2"/>
                                        </div>
                                        <div className="col-md-6 text-left">
                                            <h1>{t("forJuristicAccounting:Support the e-filing system")}</h1>
                                            <p>{t("forJuristicAccounting:Start using Silverman today and turn complicated " +
                                                "and time consuming tax filing into yesterday's news.")}<br/>
                                                <span className="more">
                                            <p>
                                                {t("forJuristicAccounting:Silverman is ready to connect to filing system of the Revenue Department.")}
                                            </p>
                                         </span>
                                            </p>

                                            <span className="read-more">{t("forJuristicAccounting:Read More")}</span>
                                        </div>
                                        <div className="col-md-6 d-md-none">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forJuristic/tax-online.png'}
                                                alt="tax-online" className="img-fluid mb-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="function-niti">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h1>{t("forJuristicAccounting:Essential Property Management Accounting Tools")}</h1>
                                        </div>
                                    </div>
                                    <div className="row p-4">
                                        <div className="col-md-6">
                                            <div className="icon-description">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/assets/images/forJuristic/send-invoice.png'}
                                                    alt="send-icon"/>
                                                <h3 dangerouslySetInnerHTML={{__html: t("forJuristicAccounting:Sending bills to residents via application")}}/>
                                            </div>
                                            <div className="icon-description">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/assets/images/forJuristic/graph.png'}
                                                    alt="graph"/>
                                                <h3 dangerouslySetInnerHTML={{__html: t("forJuristicAccounting:Show list of residents in debt")}}/>
                                            </div>
                                            <div className="icon-description">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/assets/images/forJuristic/summary.png'}
                                                    alt="summary"/>
                                                <h3 dangerouslySetInnerHTML={{__html: t("forJuristicAccounting:Automatically calculating late fees (by Month)")}}/>
                                            </div>
                                            <div className="icon-description">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/assets/images/forJuristic/permission-for-niti.png'}
                                                    alt="permission-for-niti"/>
                                                <h3 dangerouslySetInnerHTML={{__html: t("forJuristicAccounting:Assign access to a staff")}}/>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="icon-description">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/assets/images/forJuristic/create-invoice.png'}
                                                    alt="create-invoice"/>
                                                <h3 dangerouslySetInnerHTML={{__html: t("forJuristicAccounting:Issue an invoice for Cross Bank Bill Payment")}}/>
                                            </div>
                                            <div className="icon-description">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/assets/images/forJuristic/daily-journal.png'}
                                                    alt="daily-journal"/>
                                                    <h3 dangerouslySetInnerHTML={{__html: t("forJuristicAccounting:More accurate by auditing")}}/>
                                            </div>
                                            <div className="icon-description">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/assets/images/forJuristic/asset.png'}
                                                    alt="asset"/>
                                                    <h3 dangerouslySetInnerHTML={{__html: t("forJuristicAccounting:Keeping record of assets")}}/>
                                            </div>
                                            <div className="icon-description">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/assets/images/forJuristic/online-accounting.png'}
                                                    alt="online-accounting"/>
                                                    <h3 dangerouslySetInnerHTML={{__html: t("forJuristicAccounting:Online Accounting System")}}/>
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

export default ForJuristicAccounting;