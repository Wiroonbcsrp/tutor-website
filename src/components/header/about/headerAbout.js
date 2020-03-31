import React from 'react';
import './style.scss'
import {Translation} from "react-i18next";

class HeaderAbout extends React.PureComponent {

    render() {
        return (
            <Translation>
                {(t) => (
                    <div className="header-about">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <div className="cover">
                                        <h1>SMART PROPERTY SOLUTION</h1>
                                        <h2 dangerouslySetInnerHTML={{__html: t("about:By implementing Smart AI technology, Silverman not only")}}/>
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

export default HeaderAbout;
