import React from 'react';
import {Link} from "react-router-dom";
import {graphql} from "babel-plugin-relay/macro";
import environment from "../../environment";
import {QueryRenderer} from "react-relay";
import {Translation} from "react-i18next";
import i18n from "../../i18n";

let $ = window.jQuery;

const query = graphql`
    query mobileNavigationQuery {
        blogCategoryViewer {
            allBlogCategory {
                edges {
                    node {
                        id name metaDescription slug
                    }
                }
            }
        }
    }
`;

const blogCategory = ({error, props}) => {
    if (error) {
        return <div>{error.message}</div>;
    } else if (props) {
        return (
            props.blogCategoryViewer.allBlogCategory.edges.map((category) => (
                <React.Fragment key={category.node.id}>
                    <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/blog/" + category.node.slug}><p>{category.node.name}</p></Link>
                </React.Fragment>
            ))
        )
    }
    return <div className="text-center">Loading ...</div>;
};

class MobileNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.getUrl = this.getUrl.bind(this);
    }

    openDrawer() {
        // $('body').addClass('overflowHidden');
        $('.mobile-navigation').show().removeClass("slideOutLeft").addClass("slideInLeft");
    }

    closeDrawer() {
        // $('body').removeClass('overflowHidden');
        $('.mobile-navigation').removeClass("slideInLeft").addClass("slideOutLeft");
    }

    getUrl(lang) {
        let pathname = window.location.pathname;
        if (lang === 'en') {
            return "/en"+pathname.replace("/en", "");
        } else {
            return pathname.replace("/en", "");
        }
    }

    render() {
        return (
            <Translation>
                {(t) => (
                    <React.Fragment>
                        <img src={process.env.PUBLIC_URL + '/assets/images/icon/menu.png'}
                             className="menu d-lg-none" alt="menu" onClick={this.openDrawer}/>

                        <div className="mobile-navigation animated faster">
                            <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/"}>
                                <img src={process.env.PUBLIC_URL + '/assets/images/navigation/logo-silverman.svg'}
                                     alt="silverman" className="logo"/>
                            </Link>

                            <img src={process.env.PUBLIC_URL + '/assets/images/icon/close.svg'}
                                 alt="silverman" className="navigation-close" onClick={this.closeDrawer}/>

                            <hr/>

                            <div className="menu">

                                <h6>{t("navigation:For Resident")}</h6>
                                <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/for-board"}>
                                    {t("navigation:Committee")}
                                </Link>
                                <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/for-resident"}>
                                    {t("navigation:Resident")}
                                </Link>
                                <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/video"}>
                                    {t("navigation:Silverman Academy")}
                                </Link>
                                <hr/>

                                <h6>{t("navigation:For Property Management")}</h6>
                                <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/for-juristic-accounting"}>
                                    {t("navigation:Accounting and Finance")}
                                </Link>
                                <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/for-juristic-management"}>
                                    {t("navigation:Management")}
                                </Link>
                                <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/video"}>
                                    {t("navigation:Silverman Academy")}
                                </Link>
                                <hr/>

                                <h6>{t("navigation:Articles")}</h6>
                                <QueryRenderer
                                    environment={environment}
                                    query={query}
                                    variables={{}}
                                    render={blogCategory}
                                />
                                <hr/>

                                <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/pricing"}>
                                    {t("navigation:Pricing Package")}
                                </Link>
                                <hr/>

                                <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/about"}>
                                    {t("navigation:About Us")}
                                </Link>
                                <hr/>

                                <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/contact"}>
                                    {t("navigation:Contact Us")}
                                </Link>
                                <hr/>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </Translation>
        )
    }
}

export default MobileNavigation;
