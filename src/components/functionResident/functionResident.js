import React from 'react';
import './style.scss'
import {Translation} from "react-i18next";

class functionResident extends React.PureComponent {

    render() {
        return (
            <Translation>
                {(t) => (
                    <div className="function-resident">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1>{t("forResident:Application with speed, ease of use, and convenient communication")}</h1>
                                    <h2>{t("forResident:Get in touch with the Property Management 24/7")}</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-12">
                                    <div className="description">
                                        <div className="icon">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forBoard/news-update.png'}
                                                alt="news-update"/>
                                        </div>
                                        <div className="content">
                                            <h3>{t("forResident:News Update")}</h3>
                                            <p>{t("forResident:Getting notification when you are on-the-go")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-12">
                                    <div className="description">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forBoard/chat.png'}
                                                 alt="chat"/>
                                        </div>
                                        <div className="content">
                                            <h3>{t("forResident:Private Chat")}</h3>
                                            <p>{t("forResident:Contact or file complaint through private chat")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-12">
                                    <div className="description">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forBoard/parcel.png'}
                                                 alt="parcel"/>
                                        </div>
                                        <div className="content">
                                            <h3>{t("forResident:Mail and Parcel")}</h3>
                                            <p>{t("forResident:Send parcel/mail notification with snapshot")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-12">
                                    <div className="description">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forBoard/emergency.png'}
                                                 alt="emergency"/>
                                        </div>
                                        <div className="content">
                                            <h3>{t("forResident:Emergency call")}</h3>
                                            <p>{t("forResident:In case of sickness or accident")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-12">
                                    <div className="description">
                                        <div className="icon">
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/forBoard/fix-request.png'}
                                                alt="fix-request"/>
                                        </div>
                                        <div className="content">
                                            <h3>{t("forResident:Maintenance Requests")}</h3>
                                            <p>{t("forResident:Request for Maintenance or Renovation")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-12">
                                    <div className="description">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/forBoard/download.png'}
                                                 alt="download"/>
                                        </div>
                                        <div className="content">
                                            <h3>{t("forResident:Free Download")}</h3>
                                            <p>{t("forResident:Available on iOS and Android")}
                                            </p>
                                        </div>
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

export default functionResident;
