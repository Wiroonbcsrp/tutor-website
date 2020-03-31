import React from 'react';
import './style.scss'
import {Helmet} from "react-helmet";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import {graphql} from "babel-plugin-relay/macro";
import {commitMutation} from 'react-relay';
import environment from "../../environment";
import MasterComponent from "../../components/master";
import {Translation} from "react-i18next";

const mutation = graphql`
    mutation registerMutation($input: RegisterMutationInput!) {
        register (input: $input) {
            register {
                id
            }
        }
    }
`;

class Register extends MasterComponent {
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
        this.onRoleButton = this.onRoleButton.bind(this);
    }

    onRoleButton(role) {

        if (role === "juristic") {
            this.setState({
                contact_type: role
            })
        } else if (role === "board") {
            this.setState({
                contact_type: role
            })
        } else if (role === "resident") {
            this.setState({
                contact_type: role
            })
        } else if (role === "developer") {
            this.setState({
                contact_type: role
            })
        }
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
                    <React.Fragment>
                        <Helmet>
                            <title>{t("register:title")}</title>
                            <meta name="description" content={t("register:title")}/>
                            <meta name="keywords" content={t("register:title")}/>
                        </Helmet>
                        <ScrollToTopOnMount/>
                        <Navigation/>
                        <div id="register">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-8 col-lg-12">

                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <h1>{t("register:Register for SILVERMAN account")}</h1>
                                                <p className="mt-4">{t("register:Choose your position")}</p>
                                            </div>
                                        </div>

                                        <div className="select-role">
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-sm-12 col-xl-3 col-lg-3">
                                                    <button
                                                        className={this.state.contact_type === "juristic" ? "btn active" : "btn"}
                                                        onClick={() => this.onRoleButton("juristic")}>{t("register:Property Management")}
                                                        <img
                                                            src={process.env.PUBLIC_URL + '/assets/images/register/select-role.svg'}
                                                            alt="select-role"
                                                            className={this.state.contact_type === "juristic" ? "img-fluid d-block" : "d-none"}/>
                                                    </button>
                                                </div>
                                                <div className="col-12 col-md-6 col-sm-12 col-xl-3 col-lg-3">
                                                    <button
                                                        className={this.state.contact_type === "board" ? "btn active" : "btn"}
                                                        onClick={() => this.onRoleButton("board")}>{t("register:Committee")}
                                                        <img
                                                            src={process.env.PUBLIC_URL + '/assets/images/register/select-role.svg'}
                                                            alt="select-role"
                                                            className={this.state.contact_type === "board" ? "img-fluid d-block" : "d-none"}/>
                                                    </button>
                                                </div>
                                                <div className="col-12 col-md-6 col-sm-12 col-xl-3 col-lg-3">
                                                    <button
                                                        className={this.state.contact_type === "resident" ? "btn active" : "btn"}
                                                        onClick={() => this.onRoleButton("resident")}>{t("register:Resident")}
                                                        <img
                                                            src={process.env.PUBLIC_URL + '/assets/images/register/select-role.svg'}
                                                            alt="select-role"
                                                            className={this.state.contact_type === "resident" ? "img-fluid d-block" : "d-none"}/>
                                                    </button>
                                                </div>
                                                <div className="col-12 col-md-6 col-sm-12 col-xl-3 col-lg-3">
                                                    <button
                                                        className={this.state.contact_type === "developer" ? "btn active" : "btn"}
                                                        onClick={() => this.onRoleButton("developer")}>{t("register:Developer")}
                                                        <img
                                                            src={process.env.PUBLIC_URL + '/assets/images/register/select-role.svg'}
                                                            alt="select-role"
                                                            className={this.state.contact_type === "developer" ? "img-fluid d-block" : "d-none"}/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <form id="register" onSubmit={this.submit}>
                                            <div className="row mt-5">
                                                <div className="col-md-6">
                                                    <label htmlFor="fullname">{t("register:First-Last Name")}<span>*</span></label>
                                                    <input type="text" name="name" className="form-control" required
                                                           onChange={this.handelInput} value={this.state.name}/>

                                                    <label htmlFor="role">{t("register:Title")}<span>*</span></label>
                                                    <input type="text" name="position" className="form-control" required
                                                           onChange={this.handelInput} value={this.state.position}/>

                                                    <label htmlFor="phone">{t("register:Phone")}<span>*</span></label>
                                                    <input type="text" name="phone" className="form-control" required
                                                           onChange={this.handelInput} value={this.state.phone}/>

                                                    <label htmlFor="email">{t("register:Email")}<span>*</span></label>
                                                    <input type="text" name="email" className="form-control" required
                                                           onChange={this.handelInput} value={this.state.email}/>
                                                </div>

                                                <div className="col-md-6">
                                                    <label
                                                        htmlFor="project_name">{t("register:Property/Company Name")}<span>*</span></label>
                                                    <input type="text" name="project_name" className="form-control"
                                                           required onChange={this.handelInput}
                                                           value={this.state.project_name}/>

                                                    <label htmlFor="province">{t("register:Province")}<span>*</span></label>
                                                    <input type="text" name="province" className="form-control" required
                                                           onChange={this.handelInput} value={this.state.province}/>

                                                    <label htmlFor="type_of_project">{t("register:Type of Property")}<span>*</span></label>
                                                    <input type="text" name="project_type" className="form-control"
                                                           required onChange={this.handelInput}
                                                           value={this.state.project_type}/>

                                                    <label htmlFor="number_of_unit">{t("register:Unit Amount")}<span>*</span></label>
                                                    <input type="text" name="unit" className="form-control" required
                                                           onChange={this.handelInput} value={this.state.unit}/>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 text-center submit">
                                                    {this.state.loading &&
                                                    <div className="mt-5 alert alert-warning animated fadeIn slower"
                                                         role="alert">
                                                        {t("register:Saving your information.")}
                                                    </div>
                                                    }
                                                    {this.state.send_completed &&
                                                    <div className="mt-5 alert alert-success animated fadeIn slower"
                                                         role="alert">
                                                        {t("register:Thank you for Registering with Silverman.")} <br/>
                                                        {t("register:Please see more information in your email. Our sale staff will contact you shortly.")}
                                                    </div>
                                                    }
                                                    {!this.state.loading &&
                                                    <button type="submit" className="btn btn-primary animated fadeIn"
                                                            disabled={this.state.loading}>
                                                        {t("register:Register")}
                                                    </button>
                                                    }

                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </React.Fragment>
                )}
            </Translation>
        );
    }
}

export default Register;