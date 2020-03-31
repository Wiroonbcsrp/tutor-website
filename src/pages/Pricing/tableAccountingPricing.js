import React from 'react';
import {Translation} from "react-i18next";

class TableAccountingPricing extends React.PureComponent {
    render() {
        return (
            <Translation>
                {(t) => (
                    <div className="table-management">
                        <div className="row mt-3 mt-md-0 mb-5 mb-md-0">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col" className="th-unit text-left" width={878}>
                                                {t("pricing:Accounting and finance system")}
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
                                            <td className="text-left">{t("pricing:Dashboard shows income and expense summary, account receivable, " +
                                                "account payable and financial status in real time.")}</td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Send Invoice / Receive Payment / Issue Receipt via application.")}</td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Receive online payments Bank Transfer / Credit Card / QR Code.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Smart error detection system (AI) automatically inform when a user keys in wrong data.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Create Invoice / Receipt / Credit Note / Receive Advance Payment / Receive Deposit")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Create invoice for Cross Bank Bill Payment. " +
                                                "Prevent unidentified transaction.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td><img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/></td>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Keep a record of Expense / Petty Cash / Advance")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Automatically create daily report for Purchasing / Selling / Expense / Income / General. " +
                                                "Connect information to front office.")}
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
                                            <td className="text-left">{t("pricing:Automatically calculate monthly fine. Separate principal money and a fine.")}</td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Review debtor report and send reminder via system.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td>
                                                {t("pricing:Create a form manually")}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Automatically connect income-expense account to a general ledger account (GL).")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Automatically calculate accrual basis. " +
                                                "For example, when a property management receives annual common fee")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td>
                                                {t("pricing:Calculate in Excel")}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Manage daily account for Purchasing / Selling / Receiving / Expenses / General")}
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
                                            <td className="text-left">{t("pricing:Oversee Financial Statement / Income-Expense Statement / Cash Flow report with details.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Provide cash flow report with a link to detail information.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Create a list of goods with buying cost and " +
                                                "selling price. Manage inventory at anytime.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Provide asset record. " +
                                                "Automatically calculate amortization with attached pictures.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:An accounting manager can see the record of information and work " +
                                                "process of a property management in real time without waiting for monthly report. " +
                                                "Resolve redundant.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Capable of connecting to the revenue department's online tax filing system (Paperless), " +
                                                "e.g. Personal Withholding Tax 3 and Corporate Withholding Tax 53.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Online accounting system with no Software License, " +
                                                "Server Fee, nor Maintenance Fee.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Update software on regular basis. " +
                                                "The software always compatible with a new computer.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Stable system with high speed operation as fast as 0.2 second.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Web Server automatically scales out infrastructure " +
                                                "to serve increasing users and maintain high speed.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:A user can simultaneously sign in with multiple users in every " +
                                                "platform from anywhere in the planet as long as there is internet connection.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td>
                                                {t("pricing:Install the software in a personal computer. Unable to work outside of the office.")}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Export all data in the system to excel file at anytime.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td/>
                                        </tr>

                                        <tr>
                                            <td className="text-left">{t("pricing:Review records of data in real time. " +
                                                "Conveniently transfer database to a new property management.")}
                                            </td>
                                            <td className="td-blue">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/pricing/correct.png'}
                                                     alt="correct"/>
                                            </td>
                                            <td>
                                                {t("pricing:A new property management may not receive complete document or " +
                                                    "only have the hard copy and have to manually input data in the system.")}
                                            </td>
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

export default TableAccountingPricing;