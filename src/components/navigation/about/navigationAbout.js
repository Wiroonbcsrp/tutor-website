import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";
import {Translation} from "react-i18next";
import i18n from "../../../i18n";
import _ from "lodash";

const $ = window.jQuery;

class NavigationAbout extends React.PureComponent {

    componentDidMount() {
        let navigation = $('.navigation-about');
        let navigation_offset_top = navigation.offset().top;
        $(window).scroll(function () {
            if ($(document).scrollTop() > navigation_offset_top) {
                $("#navigation .about").slideDown();
            } else {
                $("#navigation .about").slideUp();
            }
        });
    }

    render() {
        return (
            <Translation>
                {(t) => (
                    <div className="navigation-about">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="navigation-wrapper">
                                        <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/about"}
                                              className={_.get(this.props.props, "match.path") === "/:lang?/about" ? "active" : ""}>
                                            {t("about:Our Principle")}
                                        </Link>
                                        <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/customer"}
                                              className={_.get(this.props.props, "match.path") === "/:lang?/customer" ? "active" : ""}>
                                            {t("about:Our Clients")}
                                        </Link>
                                        <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/contact"}
                                              className={_.get(this.props.props, "match.path") === "/:lang?/contact" ? "active" : ""}>
                                            {t("about:Contact Us")}
                                        </Link>
                                        {/*<Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/join-us"} className={_.get(this.props.props, "location.pathname") === "/join-us" ? "active" : ""}>*/}
                                        {/* {t("about:Work with Us")}*/}
                                        {/*</Link>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Translation>
        );
    }
}

export default NavigationAbout;
