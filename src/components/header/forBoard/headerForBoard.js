import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";
import {Translation} from "react-i18next";
import i18n from "../../../i18n";
import _ from "lodash";

class HeaderForBoard extends React.PureComponent {

    render() {
        return (
            <Translation>
                {(t) => (
                    <div className="header-for-board">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">

                                    <div className="subMenu">
                                        <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/for-board"}
                                              className={_.get(this.props.props, "match.path") === "/:lang?/for-board" ? "active" : ""}>
                                            {t("forResident:Committee")}
                                        </Link>
                                        <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/for-resident"}
                                              className={_.get(this.props.props, "match.path") === "/:lang?/for-resident" ? "active" : ""}>
                                            {t("forResident:Resident")}
                                        </Link>
                                    </div>

                                    <div className="cover">
                                        <h1 dangerouslySetInnerHTML={{__html: t("forBoard:SILVERMAN...The system that committees can trust")}} />
                                        <h2 dangerouslySetInnerHTML={{__html: t("forBoard:Our reliable platform will simply boosts committees' " +
                                                "credibility and build trust with residents.")}} />
                                        <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/register"}>
                                            <button className="btn btn-primary mt-4">
                                                {t("forBoard:Try it free")}
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

export default HeaderForBoard;
