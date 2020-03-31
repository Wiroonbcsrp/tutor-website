import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";
import _ from "lodash";
import {Translation} from "react-i18next";
import i18n from "../../../i18n";

class HeaderForJuristicManagement extends React.PureComponent {

    render() {
        return (
            <Translation>
                {(t) => (
                    <div className="header-for-juristic-management">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="subMenu">
                                        <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/for-juristic-accounting"}
                                              className={_.get(this.props.props, "match.path") === "/:lang?/for-juristic-accounting" ? "active" : ""}>
                                            {t("forJuristicManagement:Accounting and Finance")}
                                        </Link>
                                        <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/for-juristic-management"}
                                              className={_.get(this.props.props, "match.path") === "/:lang?/for-juristic-management" ? "active" : ""}>
                                            {t("forJuristicManagement:Management")}
                                        </Link>
                                    </div>
                                    <div className="cover">
                                        <h1>{t("forJuristicManagement:The Central Hub for Property Management")}</h1>
                                        <h2 dangerouslySetInnerHTML={{__html: t("forJuristicManagement:Silverman features include property management, " +
                                            "administration and residential registration.")}}/>
                                        <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/register"}>
                                            <button className="btn btn-primary mt-4">
                                                {t("forJuristicManagement:Register Now")}
                                            </button>
                                        </Link>
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

export default HeaderForJuristicManagement;
