import React from 'react';
import './style.scss';
import {Helmet} from "react-helmet";
import Navigation from "../../components/navigation/navigation";
import HeaderAbout from "../../components/header/about/headerAbout";
import NavigationAbout from "../../components/navigation/about/navigationAbout";
import Footer from "../../components/footer/footer";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import scriptLoader from 'react-async-script-loader'
import {Translation} from "react-i18next";
import i18n from "../../i18n";

class Contact extends React.PureComponent {

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.match.params.lang === 'en') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('th');
        }
        const {isScriptLoaded, isScriptLoadSucceed} = nextProps;
        if (isScriptLoaded && isScriptLoadSucceed) {
            let map = new window.google.maps.Map(document.getElementById('map'), {
                center: {lat: 13.801197, lng: 100.580073},
                zoom: 16
            });

            new window.google.maps.Marker({position: {lat: 13.801197, lng: 100.580073}, map: map});
        }
        return true;
    }

    render() {
        return (
            <Translation>
                {(t) => (
                    <React.Fragment>
                        <Helmet>
                            <title>{t("contact:title")}</title>
                            <meta name="description" content={t("contact:metaDescription")}/>
                            <meta name="keywords" content={t("contact:metaKeyWord")}/>
                        </Helmet>
                        <ScrollToTopOnMount/>
                        <Navigation props={this.props}/>
                        <HeaderAbout/>
                        <div className="background-contact">
                            <NavigationAbout props={this.props}/>
                            <div className="contact">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div id="map" className="mb-5" style={{height: 500}}/>
                                        </div>
                                        <div className="col-md-5 mt-md-5 mt-0">
                                            <h1>Training Center</h1>
                                            <p dangerouslySetInnerHTML={{__html: t("contact:72 pav")}}/>
                                            <div className="phone">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/home/phone.png'}
                                                     alt="phone" className="arrow"/>
                                                <h3><a href="tel:081 442 6888">081 442 6888</a></h3>
                                            </div>
                                            <div className="phone">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/home/email.png'}
                                                     alt="email" className="arrow"/>
                                                <h3><a href="mailto:hello@silverman.app">hello@silverman.app</a></h3>
                                            </div>

                                            <a href="https://www.facebook.com/pg/SilvermanApp" target="_blank"
                                               rel="noopener noreferrer">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/home/facebook.png'}
                                                     alt="facebook" className="social"/>
                                            </a>
                                            <a href="http://line.me/ti/p/%40silvermanapp">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/home/line.png'}
                                                     alt="line" className="social"/>
                                            </a>
                                            <a href="https://www.youtube.com/channel/UC8FZEnXfjUEYkrOeY_63N3w"
                                               target="_blank" rel="noopener noreferrer">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/home/youtube.png'}
                                                     alt="youtube" className="social"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="company">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h6>&nbsp;</h6>
                                                <h2>{t("contact:EQUILIBRIUM CORP COMPANY LIMITED")}</h2>
                                                <p dangerouslySetInnerHTML={{__html: t("contact:1086/16-17 4th")}}/>
                                                <div className="phone">
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/home/phone.png'}
                                                         alt="phone" className="arrow"/>
                                                    <h3><a href="tel:081 442 6888">081 442 6888</a></h3>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mt-sm-5 mt-5 mt-md-0">
                                                <h6>{t("contact:Developed by")}</h6>
                                                <h2>{t("contact:port80")}</h2>
                                                <p dangerouslySetInnerHTML={{__html: t("contact:port80 address")}}/>
                                                <div className="phone">
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/home/phone.png'}
                                                         alt="phone" className="arrow"/>
                                                    <h3><a href="tel:081 442 6888">081 442 6888</a></h3>
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
        );
    }
}

export default scriptLoader([
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyCVb6oMdxMQm9kOrGUy9_8hrjFGu2O2hho&callback=initMap"
])(Contact);
