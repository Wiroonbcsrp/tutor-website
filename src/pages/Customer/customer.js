import React from 'react';
import './style.scss'
import {Helmet} from "react-helmet";
import Navigation from "../../components/navigation/navigation";
import HeaderAbout from "../../components/header/about/headerAbout";
import NavigationAbout from "../../components/navigation/about/navigationAbout";
import ReviewCustomer from "./reviewCustomer"
import Footer from "../../components/footer/footer";
import SlideCustomer from "./slideCustomer";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import {Translation} from "react-i18next";
// import MasterComponent from "../../components/master";
import i18n from "../../i18n";
import scriptLoader from "react-async-script-loader";

class Customer extends React.PureComponent {

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.match.params.lang === 'en') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('th');
        }

        let locations = [
            {lat: 13.626067, lng: 100.445869},
            {lat: 13.766221, lng: 100.540323},
            {lat: 13.905425, lng: 100.445001},
            {lat: 13.716254, lng: 100.547139},
            {lat: 13.762288, lng: 100.471963},
            {lat: 13.716248, lng: 100.547143},
            {lat: 13.776668, lng: 100.484040},
            {lat: 13.976600, lng: 100.583726},
            {lat: 13.665474, lng: 100.432984},
            {lat: 13.746922, lng: 100.556473},
            {lat: 13.805853, lng: 100.679894},
            {lat: 13.712963, lng: 100.467945},
            {lat: 12.874843, lng: 100.887190},
            {lat: 12.892588, lng: 100.877807},
            {lat: 13.711353, lng: 100.543514},
            {lat: 13.555599, lng: 100.683244},
            {lat: 13.848132, lng: 100.611698},
            {lat: 13.726945, lng: 100.536784},
            {lat: 13.798760, lng: 100.582989},
            {lat: 13.613892, lng: 100.687942},
            {lat: 13.736485, lng: 100.745444},
            {lat: 13.701103, lng: 100.430493},
            {lat: 13.683404, lng: 100.537714},
            {lat: 13.798716, lng: 100.741923},
            {lat: 13.809622, lng: 100.451776},
            {lat: 13.915038, lng: 100.540043},
            {lat: 13.664326, lng: 100.631439},
            {lat: 16.464181, lng: 102.828694},
            {lat: 12.805035, lng: 100.940512},
            {lat: 12.809844, lng: 100.938782},
            {lat: 13.739906, lng: 100.406313},
            {lat: 13.899934, lng: 100.539980},
        ];
        const {isScriptLoaded, isScriptLoadSucceed} = nextProps;
        if (isScriptLoaded && isScriptLoadSucceed) {
            let map = new window.google.maps.Map(document.getElementById('map-customer'), {
                center: {lat: 13.801197, lng: 100.580073},
                zoom: 11,
            });

            let markers = locations.map(function (location, i) {
                return new window.google.maps.Marker({
                    position: location,
                    icon: {
                        url: "/assets/images/about/pin.png"
                    }
                });
            });

            new window.MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        }
        return true;
    }

    render() {
        return (
            <Translation>
                {(t) => (
                    <React.Fragment>
                        <Helmet>
                            <title>{t("customer:title")}</title>
                            <meta name="description" content={t("customer:metaDescription")}/>
                            <meta name="keywords" content={t("customer:metaKeyWord")}/>
                        </Helmet>
                        <ScrollToTopOnMount/>
                        <Navigation props={this.props}/>
                        <HeaderAbout/>
                        <NavigationAbout props={this.props}/>
                        <div className="customer">
                            <SlideCustomer/>
                            <div id="map-customer" className="mt-5" style={{height: 500}}/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <ReviewCustomer/>
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

export default scriptLoader([
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyCVb6oMdxMQm9kOrGUy9_8hrjFGu2O2hho&callback=initMap",
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"
])(Customer);
