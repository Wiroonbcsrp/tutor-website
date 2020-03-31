import React from 'react';
import {Link} from "react-router-dom";
import {Translation} from "react-i18next";
import i18n from "../../i18n";

class ReasonHome extends React.PureComponent {
    render() {
        return (
            <Translation>
                {(t) => (
                    <div className="reason">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1>{t("home:Why SILVERMANY")}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="box">
                                        <div className="reason-box">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/home/performance.png'}
                                                 alt="performance"/>
                                            <h2>{t("home:Efficiency")}</h2>
                                            <p>{t("home:At Silverman, we work tirelessly to bring you the best system with highest security.")}</p>
                                            <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/about"}>
                                                {t("home:Read More")}
                                                <img
                                                    src={process.env.PUBLIC_URL + '/assets/images/home/arrow-right-blue.svg'}
                                                    alt="arrow right blue" className="arrow"/>
                                            </Link>
                                        </div>
                                        <div className="reason-box">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/home/service.png'}
                                                 alt="service"/>
                                            <h2>{t("home:Service")}</h2>
                                            <p>{t("home:Your satisfaction is our ultimate goal. Our attentive support team is the best in the industry.")}</p>
                                            <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/about"}>
                                                {t("home:Read More")}
                                                <img
                                                    src={process.env.PUBLIC_URL + '/assets/images/home/arrow-right-blue.svg'}
                                                    alt="arrow right blue" className="arrow"/>
                                            </Link>
                                        </div>
                                        <div className="reason-box">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/home/experience.png'}
                                                 alt="experience"/>
                                            <h2>{t("home:Expertise")}</h2>
                                            <p>{t("home:We are the team of experienced professionals in different aspects; technology, accounting and property management.")}</p>
                                            <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/about"}>
                                                {t("home:Read More")}
                                                <img
                                                    src={process.env.PUBLIC_URL + '/assets/images/home/arrow-right-blue.svg'}
                                                    alt="arrow right blue" className="arrow"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Translation>
        )
    }
}

export default ReasonHome;