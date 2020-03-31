import React from 'react';
import {Translation} from "react-i18next";

class TablePackagePricing extends React.PureComponent {
    render() {
        return (
            <Translation>
                {(t) => (
                    <div className="table-package">
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col" className="th-unit" width={295}>{t("pricing:Units")}</th>
                                            <th scope="col" className="th-accounting-management" width={250}>Accounting
                                                Features
                                            </th>
                                            <th scope="col" className="th-accounting-management" width={250}>Management
                                                Features
                                            </th>
                                            <th scope="col" className="th-total" width={250}>Total</th>
                                            {/*<th scope="col" className="th-fee" width={250}>Implementation*/}
                                            {/*    Fee<br/><span>{t("pricing:One-off Initiation")}</span></th>*/}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>0-100</td>
                                            <td rowSpan="6" className="td-blue">990 {t("pricing:Baht")}</td>
                                            <td>{t("pricing:Free")}</td>
                                            <td>990 {t("pricing:Baht")}</td>
                                            {/*<td rowSpan="6" className="td-green">30,000 {t("pricing:Baht")}</td>*/}
                                        </tr>
                                        <tr>
                                            <td>101-200</td>
                                            <td>1,000 {t("pricing:Baht")}</td>
                                            <td>1,990 {t("pricing:Baht")}</td>
                                        </tr>
                                        <tr>
                                            <td>201-300</td>
                                            <td>1,800 {t("pricing:Baht")}</td>
                                            <td>2,790 {t("pricing:Baht")}</td>
                                        </tr>
                                        <tr>
                                            <td>301-400</td>
                                            <td>2,400 {t("pricing:Baht")}</td>
                                            <td>3,390 {t("pricing:Baht")}</td>
                                        </tr>
                                        <tr>
                                            <td>401-500</td>
                                            <td>2,800 {t("pricing:Baht")}</td>
                                            <td>3,790 {t("pricing:Baht")}</td>
                                        </tr>
                                        <tr>
                                            <td>500 {t("pricing:And more")}</td>
                                            <td>+100 {t("pricing:Baht")} / 100 {t("pricing:Unit")}</td>
                                            <td>3,890 {t("pricing:Baht")} ++</td>
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

export default TablePackagePricing;
