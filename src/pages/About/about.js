import React from "react";
import './style.scss';
import {Helmet} from "react-helmet";
import Navigation from "../../components/navigation/navigation";
import HeaderAbout from "../../components/header/about/headerAbout";
import NavigationAbout from "../../components/navigation/about/navigationAbout";
import Footer from "../../components/footer/footer";
import {Link} from "react-router-dom"
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import i18n from "../../i18n";
import MasterComponent from "../../components/master";
import {Translation} from "react-i18next";

class About extends MasterComponent {

    render() {
        return (
            <Translation>
                {(t) => (
                    <React.Fragment>
                        <Helmet>
                            <title>{t("about:title")}</title>
                            <meta name="description" content={t("about:metaDescription")}/>
                            <meta name="keywords" content={t("about:metaKeyWord")}/>
                        </Helmet>
                        <ScrollToTopOnMount/>
                        <Navigation props={this.props}/>
                        <HeaderAbout/>
                        <NavigationAbout props={this.props}/>
                        <div className="about">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="pills-concept"
                                                 role="tabpanel"
                                                 aria-labelledby="pills-concept-tab">
                                                <div className="equation">
                                                    <img
                                                        src={process.env.PUBLIC_URL + '/assets/images/about/equation.png'}
                                                        alt="equation" className="img-fluid"/>
                                                        <h1 className="d-none d-sm-none d-md-block" dangerouslySetInnerHTML={{__html: t("about:SILVERMAN, the best solution to every property management")}}/>
                                                </div>

                                                <div className="row justify-content-center">
                                                    <div className="col-md-9">
                                                        <div className="d-block d-sm-block d-md-none">
                                                            <h1 dangerouslySetInnerHTML={{__html: t("about:SILVERMAN, the best solution to every property management")}}/>
                                                        </div>
                                                        <div className="content">
                                                            <p>{t("about:From our experience as a resident, we've learned that different people have different needs.")}</p>

                                                            <div className="sentence">
                                                                <h3 dangerouslySetInnerHTML={{__html: t("about:simplify property management " +
                                                                        "tasks in every aspect as well as provide the best service to residents.")}}/>
                                                            </div>
                                                            <p>{t("about:As a result, we have created Silverman, the application that perfectly serve all types")}</p>
                                                            <p dangerouslySetInnerHTML={{__html: t("about:Silverman is a comprehensive platform for property management and accounting in digital age.")}}/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="technology">
                                                    <img
                                                        src={process.env.PUBLIC_URL + '/assets/images/about/technology.png'}
                                                        alt="technology" className="img-fluid"/>
                                                        <h1 className="d-none d-sm-none d-md-block" dangerouslySetInnerHTML={{__html: t("about:Good is not good enough when our " +
                                                                "goal is to achieve a Better technology")}}/>
                                                </div>

                                                <div className="row justify-content-center">
                                                    <div className="col-md-9">
                                                        <div className="d-block d-sm-block d-md-none">
                                                            <h1 dangerouslySetInnerHTML={{__html: t("about:Good is not good enough when our " +
                                                                "goal is to achieve a Better technology")}}/>
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                {t("about:In technology world, you either move forward or being left behind. " +
                                                                    "To ensure that our system is always at the forefront,")}
                                                            </p>
                                                            <p>
                                                                {t("about:We believe that good technology should change life in a better way, " +
                                                                    "so we develop the system that is truly practical for both")}
                                                            </p>
                                                            <div className="register">
                                                                <h3>{t("about:For a better living, make the change to Silverman and discover the difference.")}</h3>
                                                                <Link
                                                                    to={(i18n.language !== "th" ? "/" + i18n.language : "") + "/register"}>
                                                                    <button className="btn btn-primary mt-4">{t("about:Register")}</button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </React.Fragment>
                )}
            </Translation>
        )
    }
}

export default About;
