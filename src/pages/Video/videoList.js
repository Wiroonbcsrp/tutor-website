import React from 'react';
import './style.scss'
import {Helmet} from "react-helmet";
import Navigation from "../../components/navigation/navigation";
import {Link} from "react-router-dom";
import Footer from "../../components/footer/footer";
import {QueryRenderer} from "react-relay";
import environment from "../../environment";
import {graphql} from "babel-plugin-relay/macro";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import _ from "lodash";
import MasterComponent from "../../components/master";
import {Translation} from "react-i18next";

const query = graphql`
    query videoListQuery ($category: String) {
        tutorialCategoryViewer {
            allTutorialCategory {
                edges {
                    node {
                        id name metaKeyword metaDescription slug parent { id slug }
                    }
                }
            }
        }

        list: tutorialVideoViewer {
            allTutorialVideo (category: $category){
                edges {
                    node {
                        id name metaKeyword metaDescription thumbnail youtubeId
                        category {
                            id name slug
                        }
                    }
                }
            }
        }
    }
`;

const videoList = ({error, props}) => {
    if (error) {
        return <div>{error.message}</div>;
    } else if (props) {
        return (
            props.list.allTutorialVideo.edges.map((video) => (
                <div className="video" key={video.node.id}>
                    <Link to={"/video/detail/" + video.node.category.slug + "/" + video.node.id}>
                        <img src={"https://img.youtube.com/vi/" + video.node.youtubeId + "/maxresdefault.jpg"}
                             alt={video.node.name} className="img-fluid thumbnail"/>
                        <h6>{video.node.name}</h6>
                        {/*<div className="time">*/}
                        {/*    <img src={process.env.PUBLIC_URL + '/assets/images/video/clock-gray.png'}*/}
                        {/*         alt="clock"/>*/}
                        {/*    <p>42 นาที</p>*/}
                        {/*</div>*/}
                    </Link>
                </div>
            ))
        )
    }
    return <div className="text-center">Loading ...</div>;
};

const videoCategoryList = ({error, props}) => {
    if (error) {
        return <div>{error.message}</div>;
    } else if (props) {
        return (
            props.tutorialCategoryViewer.allTutorialCategory.edges.map((category) => (
                <React.Fragment key={category.node.id}>
                    {
                        category.node.parent === null &&
                        <React.Fragment>
                            <a data-toggle="collapse" href={"#" + category.node.slug}
                               role="button" aria-expanded="false" aria-controls={category.node.slug}>
                                <h3><strong>- </strong>{category.node.name}</h3>
                            </a>
                            {
                                props.tutorialCategoryViewer.allTutorialCategory.edges.map((category_child) => (
                                    <React.Fragment key={category_child.node.id}>
                                        {
                                            _.get(category_child.node.parent, "id") === category.node.id &&
                                            <div className="collapse" id={category.node.slug}>
                                                <div className="card card-body">
                                                    <Link to={"/video/" + category_child.node.slug}>
                                                        <strong>- </strong>{category_child.node.name}
                                                    </Link>
                                                </div>
                                            </div>
                                        }
                                    </React.Fragment>
                                ))
                            }
                        </React.Fragment>

                    }
                </React.Fragment>
            ))
        )
    }
    return <div className="text-center">Loading ...</div>;
};

class VideoList extends MasterComponent {
    constructor(props) {
        super(props);
        this.state = {
            category: _.get(props, "props.match.params.category", "")
        }
    }

    render() {
        return (
            <Translation>
                {(t) => (
                    <React.Fragment>
                        <Helmet>
                            <title>{t("video:title")}</title>
                            <meta name="description" content={t("video:metaDescription")}/>
                            <meta name="keywords" content={t("video:metaKeyWord")}/>
                        </Helmet>
                        <ScrollToTopOnMount/>
                        <Navigation/>
                        <div className="video-list">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <h1 className="d-none d-sm-none d-md-block">{t("video:SILVERMAN Academy")}</h1>
                                        <h1 className="text-center d-block d-sm-block d-md-none">{t("video:SILVERMAN Academy")}</h1>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-md-3">
                                        <div className="search d-none d-sm-none d-md-block">
                                            {/*<input type="text" className="form-control search-input pl-5"*/}
                                            {/*       placeholder="ค้นหาวิดีโอ"/>*/}
                                            <h2>{t("video:VDO Categories")}</h2>

                                            <QueryRenderer
                                                environment={environment}
                                                query={query}
                                                variables={{}}
                                                render={videoCategoryList}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-9">
                                        <div className="group-video">
                                            <QueryRenderer
                                                environment={environment}
                                                query={query}
                                                variables={{category: this.props.match.params.category}}
                                                render={videoList}
                                            />
                                        </div>

                                        {/*<nav aria-label="Page navigation example" className="pagination-center mt-5">*/}
                                        {/*    <ul className="pagination">*/}
                                        {/*        <li className="page-item">*/}
                                        {/*            <a className="page-link" href="#" aria-label="Previous">*/}
                                        {/*                <span aria-hidden="true">&laquo;</span>*/}
                                        {/*                /!*<img src={process.env.PUBLIC_URL + '/assets/images/navigation/dropdown.svg'}*!/*/}
                                        {/*                /!*     alt="dropdown-icon" className="dropdown-icon"/>*!/*/}
                                        {/*            </a>*/}
                                        {/*        </li>*/}
                                        {/*        <li className="page-item "><a className="page-link" href="#">1</a></li>*/}
                                        {/*        <li className="page-item"><a className="page-link" href="#">2</a></li>*/}
                                        {/*        <li className="page-item"><a className="page-link" href="#">3</a></li>*/}
                                        {/*        <li className="page-item">*/}
                                        {/*            <a className="page-link" href="#" aria-label="Next">*/}
                                        {/*                <span aria-hidden="true">&raquo;</span>*/}
                                        {/*            </a>*/}
                                        {/*        </li>*/}
                                        {/*    </ul>*/}
                                        {/*</nav>*/}
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

export default VideoList;