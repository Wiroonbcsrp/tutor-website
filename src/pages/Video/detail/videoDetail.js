import React from 'react';
import './style.scss';
import {Helmet} from "react-helmet";
import Navigation from "../../../components/navigation/navigation";
import {Link} from "react-router-dom";
import Footer from "../../../components/footer/footer";
import {graphql} from "babel-plugin-relay/macro";
import environment from "../../../environment";
import {QueryRenderer} from "react-relay";
import ScrollToTopOnMount from "../../../components/ScrollToTopOnMount";
import {Translation} from "react-i18next";
import MasterComponent from "../../../components/master";

const query = graphql`
    query videoDetailQuery($id: ID, $category: String) {
        detail: tutorialVideoViewer {
            allTutorialVideo (id: $id) {
                edges {
                    node {
                        id name text youtubeId metaDescription metaKeyword
                        category {
                            id name slug
                        }
                    }
                }
            }
        }

        groupVideo: tutorialVideoViewer {
            allTutorialVideo (category: $category, first: 4){
                edges {
                    node {
                        id name thumbnail
                        category {
                            id name slug
                        }
                    }
                }
            }
        }
    }
`;

const videoDetail = ({error, props}) => {
    if (error) {
        return <div>{error.message}</div>;
    } else if (props) {
        return (
            props.detail.allTutorialVideo.edges.map((video) => (
                <Translation>
                    {(t) => (
                        <div className="row" key={video.node.id}>
                            <Helmet>
                                <title>{video.node.name}</title>
                                <meta name="description" content={video.node.metaDescription}/>
                                <meta name="keywords" content={video.node.metaKeyword}/>
                            </Helmet>
                            <div className="col-md-8 col-12">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe title="Silverman video tutorial"
                                            className="embed-responsive-item"
                                            src={"https://www.youtube.com/embed/" + video.node.youtubeId}
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="description">
                                    <p className="type mt-4 mt-md-0 mb-0"><Link
                                        to={"/video"}>{t("video:SILVERMAN Academy")}</Link>
                                        / <strong>{video.node.category.name}</strong>
                                    </p>
                                    <h1>{video.node.name}</h1>
                                    {/*<div className="time">*/}
                                    {/*    <img src={process.env.PUBLIC_URL + '/assets/images/video/clock-gray.png'}*/}
                                    {/*         alt="clock"/>*/}
                                    {/*    <p>42 นาที</p>*/}
                                    {/*</div>*/}
                                    <p>{video.node.text}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </Translation>
            ))
        )
    }
    return <div className="text-center">Loading ...</div>;
};

// const groupVideo = ({error, props}) => {
//     if (error) {
//         return <div>{error.message}</div>;
//     } else if (props) {
//         return (
//             props.groupVideo.allTutorialVideo.edges.map((group_video) => (
//                 <div className="group-video" key={group_video.node.id}>
//                     <Link to={"/video/detail/"+ group_video.node.category.slug + "/" + group_video.node.id}>
//                         <div className="video">
//                             <img src={group_video.node.thumbnail}
//                                  alt={group_video.node.thumbnail} className="img-fluid"/>
//                             <h6>{group_video.node.name}</h6>
//                             {/*<div className="time">*/}
//                             {/*    <img*/}
//                             {/*        src={process.env.PUBLIC_URL + '/assets/images/video/clock-gray.png'}*/}
//                             {/*        alt="clock"/>*/}
//                             {/*    <p>42 นาที</p>*/}
//                             {/*</div>*/}
//                         </div>
//                     </Link>
//                 </div>
//             ))
//         )
//     }
//     return <div className="text-center">Loading ...</div>;
// };

class VideoDetail extends MasterComponent {

    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            category: props.match.params.category,
        };
    }

    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount/>
                <Navigation/>
                <div className="video-detail mb-5">
                    <div className="container">
                        <QueryRenderer
                            environment={environment}
                            query={query}
                            variables={{id: this.state.id}}
                            render={videoDetail}
                        />

                        {/*<div className="row mt-5 mb-5">*/}
                        {/*    <div className="col-12">*/}
                        {/*        <h1 className="mb-3 mb-md-0">วิดีโอที่เกี่ยวข้อง</h1>*/}
                        {/*        <QueryRenderer*/}
                        {/*            environment={environment}*/}
                        {/*            query={query}*/}
                        {/*            variables={{category: this.state.category}}*/}
                        {/*            render={groupVideo}*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default VideoDetail;