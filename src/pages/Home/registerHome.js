import React from 'react';
import {graphql} from "babel-plugin-relay/macro";
import {commitMutation} from "react-relay";
import environment from "../../environment";
import {Translation} from "react-i18next";

const mutation = graphql`
    mutation registerHomeMutation($input: RegisterMutationInput!) {
        register (input: $input) {
            register {
                id
            }
        }
    }
`;

class RegisterHome extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handelInput = this.handelInput.bind(this);
        this.state = {
            contact_type: "juristic",
            name: "",
            position: "",
            phone: "",
            email: "",
            project_name: "",
            province: "",
            project_type: "",
            unit: "",
            loading: false,
            send_completed: false
        };
        this.submit = this.submit.bind(this);
    }

    handelInput(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    submit(e) {
        e.preventDefault();
        this.setState({
            loading: true,
            send_completed: false,
        });
        let variables = {
            input: {
                "name": this.state.name,
                "position": this.state.position,
                "contactType": this.state.contact_type,
                "phone": this.state.phone,
                "email": this.state.email,
                "projectName": this.state.project_name,
                "province": this.state.province,
                "projectType": this.state.project_type,
                "unit": this.state.unit,
            }
        };

        commitMutation(environment, {
            mutation,
            variables,
            onCompleted: (response, errors) => {
                this.setState({
                    loading: false,
                    send_completed: true,
                    name: "",
                    position: "",
                    phone: "",
                    email: "",
                    project_name: "",
                    province: "",
                    project_type: "",
                    unit: "",
                })
            },
            onError: error => {
                this.setState({loading: false});
            }
        });

        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-121199550-2');
        gtag('event', 'submit-form');
    }

    render() {
        return (
            <Translation>
                {(t) => (
                    <div className="register d-none d-sm-none d-md-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="box">
                                        <h1>{t("home:Please Register")}</h1>
                                        <p>{t("home:We will contact you shortly.")}</p>
                                        <form className="row" onSubmit={this.submit} id="register-home">
                                            <div className="col-md-6">
                                                <div className="field">
                                                    <input type="text" name="name" id="name"
                                                           placeholder={t("home:Full Name")} required
                                                           onChange={this.handelInput}
                                                           value={this.state.name}/>
                                                    <label htmlFor="name">{t("home:Full Name")}<span>*</span></label>
                                                </div>
                                                <div className="field">
                                                    <input type="text" name="phone" id="phone"
                                                           placeholder={t("home:Telephone no.")} required
                                                           onChange={this.handelInput}
                                                           value={this.state.phone}/>
                                                    <label htmlFor="phone">{t("home:Telephone no.")}<span>*</span></label>
                                                </div>
                                                <div className="field">
                                                    <input type="text" name="email" id="email"
                                                           placeholder={t("home:Email")} required onChange={this.handelInput}
                                                           value={this.state.email}/>
                                                    <label htmlFor="email">{t("home:Email")}<span>*</span></label>
                                                </div>
                                                <div className="field">
                                                    <input type="text" name="position" id="position"
                                                           placeholder={t("home:Position")} required onChange={this.handelInput}
                                                           value={this.state.position}/>
                                                    <label htmlFor="position">{t("home:Position")}<span>*</span></label>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field">
                                                    <input type="text" name="project_name" id="project_name"
                                                           placeholder={t("home:Property Name")} required
                                                           onChange={this.handelInput}
                                                           value={this.state.project_name}/>
                                                    <label htmlFor="project_name">{t("home:Property Name")}<span>*</span></label>
                                                </div>
                                                <div className="field">
                                                    <input type="text" name="project_type" id="project_type"
                                                           placeholder={t("home:Property Type")} required
                                                           onChange={this.handelInput}
                                                           value={this.state.project_type}/>
                                                    <label htmlFor="project_type">{t("home:Property Type")}<span>*</span></label>
                                                </div>
                                                <div className="field">
                                                    <input type="text" name="unit" id="unit"
                                                           placeholder={t("home:Unit Amount")} required onChange={this.handelInput}
                                                           value={this.state.unit}/>
                                                    <label htmlFor="unit">{t("home:Unit Amount")}<span>*</span></label>
                                                </div>
                                                <div className="field">
                                                    <input type="text" name="province" id="province"
                                                           placeholder={t("home:Province")} required onChange={this.handelInput}
                                                           value={this.state.province}/>
                                                    <label htmlFor="province">{t("home:Province")}<span>*</span></label>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 text-center submit">
                                                    {this.state.loading &&
                                                    <div className="mt-5 alert alert-warning animated fadeIn slower"
                                                         role="alert">
                                                        {t("home:Saving your information.")}
                                                    </div>
                                                    }
                                                    {this.state.send_completed &&
                                                    <div className="mt-5 alert alert-success animated fadeIn slower"
                                                         role="alert" dangerouslySetInnerHTML={{__html: t("home:Thank you for Registering with Silverman.")}}>
                                                    </div>
                                                    }
                                                    {!this.state.loading &&
                                                    <div className="text-left">
                                                        <button type="submit"
                                                                className="btn btn-primary animated fadeIn"
                                                                disabled={this.state.loading}>
                                                            {t("home:Register")}
                                                        </button>
                                                    </div>
                                                    }
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Translation>
        )
    }
}

export default RegisterHome;