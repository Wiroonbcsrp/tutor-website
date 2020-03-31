import React from "react";
import './style.scss'
import {Helmet} from "react-helmet";
import Navigation from "../../components/navigation/navigation";
import TablePackagePricing from "./tablePackagePricing";
import SummaryPricing from "./summaryPricing";
import TableManagementPricing from "./tableManagementPricing";
import TableAccountingPricing from "./tableAccountingPricing";
import Footer from "../../components/footer/footer";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import MasterComponent from "../../components/master";
import {Translation} from "react-i18next";

class Pricing extends MasterComponent {
    render() {
        return (
            <Translation>
                {(t) => (
                    <React.Fragment>
                        <Helmet>
                            <title>{t("pricing:title")}</title>
                            <meta name="description" content={t("pricing:metaDescription")}/>
                            <meta name="keywords" content={t("pricing:metaKeyWord")}/>
                        </Helmet>
                        <ScrollToTopOnMount/>
                        <Navigation/>
                        <div className="pricing">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h1>{t("pricing:Choose the package that is right for you.")}</h1>
                                        <h4>{t("pricing:Price / Property / 1 Month")}</h4>
                                    </div>
                                </div>

                                <TablePackagePricing/>

                                <div className="row mt-3">
                                    <div className="col-12">
                                        <div className="note">
                                            <p className="topic">{t("pricing:Remarks")}</p>
                                            <div className="description">
                                                <p>{t("pricing:The property have to register for Accounting Feature to " +
                                                    "be able to use the Management Features.")}<br/>
                                                    {t("pricing:The property can make the later purchase for management " +
                                                        "feature for the remaining units.")}<br/>
                                                        {t("pricing:Satisfaction guaranteed. You may request for a refund within 30 days.")}
                                                </p>
                                                {/*<h2>{t("pricing:Free 30,000 baht implementation fee")}</h2>*/}
                                                {/*<p>{t("pricing:when register before 31st of December 2019.")}</p>*/}
                                            </div>
                                            <div className="d-none d-sm-none d-md-block">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/home/guarantee.svg'}
                                                     alt="guarantee" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2 mb-5 d-block d-sm-block d-md-none text-center">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/home/guarantee.svg'}
                                         alt="guarantee" className="img-fluid"/>
                                </div>

                                <SummaryPricing/>

                                <div className="row mt-5">
                                    <div className="col-12 text-center">
                                        <h1>{t("pricing:SILVERMAN's Features")}</h1>
                                        <h5>{t("pricing:Application that is designed to serve property " +
                                            "managements and delight residents")}</h5>
                                    </div>
                                </div>

                                <TableManagementPricing/>

                                <TableAccountingPricing/>

                                {/*<Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/"}>*/}
                                {/*    <button className="btn btn-primary download">*/}
                                {/*        <img src={process.env.PUBLIC_URL + '/assets/images/pricing/download.svg'}*/}
                                {/*             alt="download"/>*/}
                                {/*        <span>ดาวน์โหลดรายละเอียดฟังก์ชันของ Silverman</span>*/}
                                {/*    </button>*/}
                                {/*</Link>*/}
                            </div>
                        </div>
                        <Footer/>
                    </React.Fragment>
                )}
            </Translation>
        )
    }
}

export default Pricing;
