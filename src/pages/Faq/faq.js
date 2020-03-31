import React from 'react';
import './style.scss'
import {Helmet} from "react-helmet";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import {QueryRenderer} from "react-relay";
import {graphql} from "babel-plugin-relay/macro";
import environment from "../../environment";
import {Translation} from "react-i18next";
import MasterComponent from "../../components/master";

const $ = window.jQuery;

const query = graphql`
    query faqQuery($keyword: String) {
        faqCategoryViewer {
            allFaqCategory(keyword: $keyword) {
                edges {
                    node {
                        id name slug
                        content {
                            edges {
                                node {
                                    id name text
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;


const faqList = ({error, props}) => {

    function backgroundCollapse() {
        $(".card").on("click", function () {
            $(this).addClass("background-collapse");
            $(".card").not(this).removeClass("background-collapse");
        })

    }

    if (error) {
        return <div>{error.message}</div>;
    } else if (props) {

        setTimeout(() => {
            backgroundCollapse();
        }, 200);

        return (
            props.faqCategoryViewer.allFaqCategory.edges.map((category) => (
                <React.Fragment key={category.node.id}>
                    <div className="topic">
                        <h2>{category.node.name}</h2>
                    </div>
                    <div className="question">
                        <div className="accordion" id={category.node.slug}>

                            {category.node.content.edges.map((content) => (
                                <div className="card collapsed" key={content.node.id}
                                     data-toggle="collapse"
                                     data-target={"#collapse-" + window.atob(content.node.id).split(":")[1]}
                                     aria-expanded="false"
                                     aria-controls={"collapse-" + window.atob(content.node.id).split(":")[1]}>
                                    <div className="card-header" id={"header-" + content.node.id}>
                                        <button className="btn btn-link" type="button">
                                            <span>{content.node.name}</span>
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/faq/plus.svg'}
                                                className="float-right plus" alt="plus"/>
                                            <img
                                                src={process.env.PUBLIC_URL + '/assets/images/faq/minus.svg'}
                                                className="float-right minus" alt="minus"/>
                                        </button>
                                    </div>

                                    <div id={"collapse-" + window.atob(content.node.id).split(":")[1]}
                                         className="collapse"
                                         aria-labelledby={"header-" + window.atob(content.node.id).split(":")[1]}
                                         data-parent={"#" + category.node.slug}>
                                        <div className="card-body">
                                            <div dangerouslySetInnerHTML={{__html: content.node.text}}/>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </React.Fragment>
            )))
    }
    return <div className="text-center">Loading ...</div>;
};

class Faq extends MasterComponent {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ""
        };
        this.inputHandle = this.inputHandle.bind(this);
    }

    inputHandle(e) {
        this.setState({keyword: e.target.value});
    }

    render() {
        return (
            <Translation>
                {(t) => (
                    <React.Fragment>
                        <Helmet>
                            <title>{t("faq:title")}</title>
                            <meta name="description" content={t("faq:metaDescription")}/>
                            <meta name="keywords" content={t("faq:metaKeyWord")}/>
                        </Helmet>
                        <ScrollToTopOnMount/>
                        <Navigation/>
                        <div className="faq">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h1>{t("faq:Frequently Asked Questions")}</h1>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-8">
                                        {/*<div className="search">*/}
                                        {/*    <input type="text" className="form-control search-input" onChange={this.inputHandle}*/}
                                        {/*           placeholder="ค้นหาหัวข้อคำถามที่คุณต้องการ"/>*/}
                                        {/*</div>*/}

                                        <div className="group-topic">
                                            <QueryRenderer
                                                environment={environment}
                                                query={query}
                                                variables={{keyword: this.state.keyword}}
                                                render={faqList}
                                            />
                                        </div>
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

export default Faq;