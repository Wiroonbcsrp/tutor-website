import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom'
import {graphql} from "babel-plugin-relay/macro";
import environment from "../../environment";
import {QueryRenderer} from "react-relay";
import {Translation} from "react-i18next";
import i18n from "../../i18n";

const query = graphql`
    query footerQuery {
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

class Footer extends React.PureComponent {
    render() {
        return (
            <Translation>
                {(t) => (
                    <div id="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2 d-none d-sm-none d-md-block">
                                    <h4>{t('footer:Products')}</h4>
                                    <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/for-juristic-management"}><p>{t('footer:Management Features')}</p></Link>
                                    <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/for-juristic-accounting"}><p>{t('footer:Accounting and Financial Features')}</p></Link>
                                    <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/pricing"}><p>{t('footer:Pricing Plans')}</p></Link>
                                    <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/register"}><p>{t('footer:Register')}</p></Link>
                                    {/*<Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/"}><p>{t('footer:Training Schedule')}</p></Link>*/}
                                </div>
                                <div className="col-md-2 d-none d-sm-none d-md-block">
                                    <h4>{t('footer:Company Profile')}</h4>
                                    <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/about"}><p>{t('footer:About Us')}</p></Link>
                                    <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/customer"}><p>{t('footer:Our Clients')}</p></Link>
                                    <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/faq"}><p>{t('footer:FAQ')}</p></Link>
                                    {/*<Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/"}><p>{t('footer:Work with Us')}</p></Link>*/}
                                    <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/contact"}><p>{t('footer:Contact Us')}</p></Link>
                                    {/*<Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/"}><p>{t('footer:Privacy Policy')}</p></Link>*/}
                                </div>
                                <div className="col-md-2 d-none d-sm-none d-md-block">
                                    <h4>{t('footer:Articles')}</h4>
                                    <QueryRenderer
                                        environment={environment}
                                        query={query}
                                        variables={{}}
                                        render={blogCategory}
                                    />
                                </div>
                                <div className="col-md-2 d-none d-sm-none d-md-block">
                                    <h4>{t('footer:Silverman Academy')}</h4>
                                    <Link to={"/video"}><p>{t('footer:For Property Management')}</p></Link>
                                    <Link to={"/video"}><p>{t('footer:For Resident')}</p></Link>
                                    <Link to={"/video"}><p>{t('footer:For Committee')}</p></Link>
                                </div>

                                <div className="col-md-3 offset-md-1 offset-0">
                                    <h3>{t('footer:Contact Us Topic')}</h3>
                                    <div className="contact">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/home/clock.png'}
                                             alt="clock"/>
                                        <h5 dangerouslySetInnerHTML={{__html: t("footer:Operation Hours Mon-Fri")}}/>
                                    </div>
                                    <div className="contact">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/home/phone.png'}
                                             alt="phone"/>
                                        <h5><a href="tel:081 442 6888">081 442 6888</a></h5>
                                    </div>
                                    <div className="contact">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/home/email.png'}
                                             alt="email"/>
                                        <h5><a href="mailto:hello@silverman.app">hello@silverman.app</a></h5>
                                    </div>

                                    {/*<div className="contact-sale">*/}
                                    {/*    <h3>{t('footer:Sale Representative')}</h3>*/}
                                    {/*    <div className="contact">*/}
                                    {/*        <img src={process.env.PUBLIC_URL + '/assets/images/home/phone.png'}*/}
                                    {/*             alt="phone"/>*/}
                                    {/*        <h5><a href="tel:095 426 4554">095 426 4554</a></h5>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md-8 d-none d-sm-none d-md-block">
                                    <h6>Member of</h6>
                                    <img src={process.env.PUBLIC_URL + '/assets/images/home/house.png'}
                                         alt="house" className="mr-2 partner"/>
                                    <img src={process.env.PUBLIC_URL + '/assets/images/home/condominium.png'}
                                         alt="condominium" className="partner"/>
                                </div>
                                <div className="col-md-3 offset-md-1 offset-0">
                                    <h3>{t('footer:Find us on social media')}</h3>
                                    <a href="https://www.facebook.com/pg/SilvermanApp" target="_blank"
                                       rel="noopener noreferrer">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/home/facebook.png'}
                                             alt="facebook" className="social"/>
                                    </a>
                                    <a href="http://line.me/ti/p/%40silvermanapp">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/home/line.png'}
                                             alt="line" className="social"/>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UC8FZEnXfjUEYkrOeY_63N3w" target="_blank"
                                       rel="noopener noreferrer">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/home/youtube.png'}
                                             alt="youtube" className="social"/>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-block d-sm-block d-md-none">
                                    <h6>Member of</h6>
                                    <img src={process.env.PUBLIC_URL + '/assets/images/home/house.png'}
                                         alt="house" className="mr-2 partner"/>
                                    <img src={process.env.PUBLIC_URL + '/assets/images/home/condominium.png'}
                                         alt="condominium" className="partner"/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Translation>
        )
    }
}

export default Footer;
