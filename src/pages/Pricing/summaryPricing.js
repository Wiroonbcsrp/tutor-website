import React from 'react';
import {Link} from "react-router-dom";
import numberWithComma from "../../libs/numberWithComma";
import i18n from "../../i18n";
import {Translation} from "react-i18next";

class SummaryPricing extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            unit: 100,
            featurePrice: 990,
            managementPrice: 0,
        };
        this.handleInput = this.handleInput.bind(this);
    }

    _calculateManagementPricing(unit) {
        // let calUnit = unit - 100;
        let totalPrice = 0;
        let restUnit = unit;
        let lotOfUnit = 100;
        let index = 0;

        while (restUnit > 0) {
            // if(restUnit < 100 && restUnit !== 0) {
            //     lotOfUnit = restUnit
            // }
            restUnit -= 100;
            index += 1;
            if (index === 1) {
                totalPrice += 0
            }
            if (index === 2) {
                totalPrice += lotOfUnit * 10
            }
            if (index === 3) {
                totalPrice += lotOfUnit * 8
            }
            if (index === 4) {
                totalPrice += lotOfUnit * 6
            }
            if (index === 5) {
                totalPrice += lotOfUnit * 4
            }
            if (index > 5) {
                totalPrice += lotOfUnit * 1
            }
        }
        return totalPrice;
    }

    handleInput(e) {
        this.setState({
            unit: e.target.value,
            managementPrice: this._calculateManagementPricing(e.target.value)
        });
    }

    render() {
        return (
            <Translation>
                {(t) => (
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="box-summary">
                                <h3>{t("pricing:Pay the price that is right for your needs.")}</h3>
                                <p dangerouslySetInnerHTML={{
                                    __html: t("pricing:At Silverman, we only charge for what you actually use. By simply estimating the number of units that " +
                                        "will download the application, we will calculate the pricing for you.")
                                }}/>
                                <p>{t("pricing:The first 100 units are free.")}</p>
                                <p>{t("pricing:Each unit can download unlimited users.")}</p>

                                <div className="input-number">
                                    <p className="mb-2">{t("pricing:Units")}</p>
                                    <input type="number" className="form-control" onChange={this.handleInput}
                                           placeholder={t("pricing:Add number of units")} value={this.state.unit}/>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-borderless">
                                        <tbody>
                                        <tr>
                                            <td className="pt-4">Accounting Features</td>
                                            <td className="text-right pt-4">{numberWithComma(this.state.featurePrice)}
                                                <small>{t("pricing:Baht/Month")}</small></td>
                                        </tr>
                                        <tr>
                                            <td className="">Management Features</td>
                                            <td className="text-right ">{numberWithComma(this.state.managementPrice)}
                                                <small>{t("pricing:Baht/Month")}</small></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <hr/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><h5>Total</h5></td>
                                            <td className="text-right">
                                                <h5>{numberWithComma(this.state.featurePrice + this.state.managementPrice)}
                                                    <small>{t("pricing:Baht/Month")}</small></h5>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <Link to={(i18n.language !== "th" ? "/" + i18n.language : "") + "/register"}>
                                    <button className="btn btn-primary">
                                        {t("pricing:Register")}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </Translation>
        );
    }
}

export default SummaryPricing;