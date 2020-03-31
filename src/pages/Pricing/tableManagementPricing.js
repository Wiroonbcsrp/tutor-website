import React from 'react';
import {Translation} from "react-i18next";

class TableManagementPricing extends React.PureComponent {
    render() {
        return (
            <Translation>
                {(t) => (
                    <div className="table-management">
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col" className="th-unit text-left" width={878}>
                                                {t("pricing:Management System")}
                                            </th>
                                            <th scope="col" width={250}>
                                                <img
                                                    src={process.env.PUBLIC_URL + '/assets/images/pricing/logo-silverman.svg'}
                                                    alt="logo-silverman"/>
                                            </th>
                                            <th scope="col" width={210}><span>Other Software</span></th>
                                        </tr>
                                        </thead>
                                        <tbody>


                                        <tr>
                                            <td className="text-left">{t("pricing:A property management can communicate with a " +
                                                "resident via application. (Two-ways communication)")}</td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Dashboard shows daily work report.")}</td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:A resident owner can save time and easily " +
                                                "manage different properties on single platform.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Get invoice / Pay bill / Get receipt through " +
                                                "application. Review bills and payments record online.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Conveniently make online payment Bank transfer / Credit Card / QR Code")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Online notifications Bills , News, Parcel, to name a few.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:A resident can get news and information " +
                                                "notification even when they are away.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Create survey form to comprehend opinions of committees and residents.")}</td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Send parcel notification with snap shot of the item and tracking number. " +
                                                "Keep a record of recipient's name and receiving date and time.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td>
                                                {t("pricing:Snap shot is not available")}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:File a complaint through private chat. " +
                                                "Keep a record of conversation in a secured database.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Request for maintenance, repair or renovation, " +
                                                "and keep tracks on work in progress via application.")}</td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td>
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:House registration sort residents into an owner, " +
                                                "a resident and a tenant.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td>
                                                {t("pricing:Snap shot is not available")}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Property information and committee information.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td>
                                                {t("pricing:Snap shot is not available")}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Property management information and access setting for each users.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td>
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Application for a resident. Provide convenient communication in real time between a resident and a property management. Available for IOS and Android.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Silverman Application for resident available in Thai/ English /Chinese (Future)")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Silverman for NITI. A property management can handle multiple tasks " +
                                                "(parcel/complaint/maintenance) through an application. Available for unlimited users.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Utilize Google Could and Amazon Cloud, " +
                                                "the high security international standard servers.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:High security database with unlimited " +
                                                "storage and no expiration date.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td>
                                                {t("pricing:Pay for server service with limited storage.")}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Resident's information is encrypted and safe from violation.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Capable of connecting to API of other systems and services handyman, housekeeper, and Internet of Things (IoT)")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Translation>
        );
    }
}

export default TableManagementPricing;