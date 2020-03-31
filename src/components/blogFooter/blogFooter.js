import React from 'react';
import './style.scss'
import {graphql} from "babel-plugin-relay/macro";
import {Link} from "react-router-dom";
import environment from "../../environment";
import {QueryRenderer} from "react-relay";
import {Translation} from "react-i18next";
import i18n from "../../i18n";

const query = graphql`
    query blogFooterQuery {
        blogContentViewer {
            allBlogContent (first: 3){
                edges {
                    node {
                        id name metaDescription thumbnail
                    }
                }
            }
        }
    }
`;

const blogList = ({error, props}) => {
    if (error) {
        return <div>{error.message}</div>;
    } else if (props) {
        return (
            props.blogContentViewer.allBlogContent.edges.map((blog) => (
                <div className="col-md-4" key={blog.node.id}>
                    <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/blog/detail/" + blog.node.id}>
                        <div className="group-description">
                            <img src={blog.node.thumbnail}
                                 alt={blog.node.thumbnail} className="img-fluid"/>
                            <h2>{blog.node.name}</h2>
                            <p className="description">{blog.node.text}</p>
                        </div>
                    </Link>
                </div>
            ))
        )
    }
    return <div className="text-center">Loading ...</div>;
};

class BlogFooter extends React.PureComponent {
    render() {
        return (
            <Translation>
                {(t) => (
                    <div className="blog-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mt-2 mt-md-0">
                                    <h1>{t("blog:Interesting Articles")}</h1>
                                </div>
                            </div>

                            <div className="row">
                                <QueryRenderer
                                    environment={environment}
                                    query={query}
                                    variables={{}}
                                    render={blogList}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </Translation>
        );
    }
}

export default BlogFooter;