import React from 'react';
import './style.scss';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import Navigation from "../../../components/navigation/navigation";
import Footer from "../../../components/footer/footer";
// import BlogWithTag from "../../../components/blogFooter/blogWithTag";
import ScrollToTopOnMount from "../../../components/ScrollToTopOnMount";
import {graphql} from "babel-plugin-relay/macro";
import environment from "../../../environment";
import {QueryRenderer} from "react-relay";
import {Translation} from "react-i18next";

const $ = window.jQuery;

const query = graphql`
    query blogDetailQuery($id: ID) {
        detail: blogContentViewer {
            allBlogContent (id: $id) {
                edges {
                    node {
                        id name text metaDescription thumbnail publishDate
                        category {
                            id name slug metaDescription metaKeyword
                        }
                        tag {
                            edges {
                                node {
                                    id name
                                }
                            }
                        }
                    }
                }
            }
        }

        category: blogCategoryViewer {
            allBlogCategory {
                edges {
                    node {
                        id name slug metaDescription metaKeyword
                    }
                }
            }
        }
    }
`;

function addImgFluid() {
    $(".content img").addClass("img-fluid")
}

const blogList = ({error, props}) => {
    if (error) {
        return <div>{error.message}</div>;
    } else if (props) {
        setTimeout(() => {
            addImgFluid();
        }, 100);
        return (
            props.detail.allBlogContent.edges.map((blog) => (

                <div className="col-md-9 content" key={blog.node.id}>
                    <Helmet>
                        <title>{blog.node.name}</title>
                        <meta name="description" content={blog.node.metaDescription}/>
                        <meta name="keywords" content={blog.node.metaKeyword}/>
                    </Helmet>

                    <img src={blog.node.thumbnail}
                         alt={blog.node.thumbnail} className="img-fluid d-block d-sm-block d-md-none mt-3"/>
                    <p className="type d-none d-sm-none d-md-block"><Link
                        to={"/blog"}>บทความ</Link>/<strong>{blog.node.category.name}</strong></p>
                    <h3 className="mt-3 mt-md-0">{blog.node.name}</h3>
                    {/*<p className="date">{blog.node.publishDate}</p>*/}
                    <img src={blog.node.thumbnail}
                         alt={blog.node.thumbnail} className="img-fluid d-none d-sm-none d-md-block"/>
                    <div className="description">
                        <div dangerouslySetInnerHTML={{__html: blog.node.text}}/>
                    </div>
                    <div className="tag-share">
                        <div className="tag">
                            {blog.node.tag.edges.map((tag) => (
                                <p key={tag.node.id}>{tag.node.name}</p>
                            ))}
                        </div>
                        {/*<div className="share d-none d-sm-none d-md-block">*/}
                        {/*    <div className="line">*/}
                        {/*        <img src={process.env.PUBLIC_URL + '/assets/images/blog/line.png'}*/}
                        {/*             alt="line icon"/>*/}
                        {/*        <h5>Line</h5>*/}
                        {/*    </div>*/}
                        {/*    <div className="facebook">*/}
                        {/*        <img src={process.env.PUBLIC_URL + '/assets/images/blog/facebook.png'}*/}
                        {/*             alt="facebook icon"/>*/}
                        {/*        <h5>facebook</h5>*/}
                        {/*    </div>*/}
                        {/*    <h4>Share</h4>*/}
                        {/*</div>*/}
                    </div>

                    {/*<div className="tag-share d-block d-sm-block d-md-none">*/}
                    {/*    <div className="share-mobile">*/}
                    {/*        <div className="facebook">*/}
                    {/*            <img src={process.env.PUBLIC_URL + '/assets/images/blog/facebook.png'}*/}
                    {/*                 alt="facebook icon"/>*/}
                    {/*            <h5>facebook</h5>*/}
                    {/*        </div>*/}
                    {/*        <div className="line">*/}
                    {/*            <img src={process.env.PUBLIC_URL + '/assets/images/blog/line.png'}*/}
                    {/*                 alt="line icon"/>*/}
                    {/*            <h5>Line</h5>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<BlogWithTag query={props.detail} slug={blog.node.category.slug}/>*/}
                </div>
            ))
        )
    }
    return <div className="text-center">Loading ...</div>;
};

const categoryList = ({error, props}) => {
    if (error) {
        return <div>{error.message}</div>;
    } else if (props) {
        return (
            props.category.allBlogCategory.edges.map((category) => (
                <h5 key={category.node.id}><Link
                    to={"/blog/" + category.node.slug}><strong>- </strong>{category.node.name}</Link></h5>
            ))
        )
    }
    return <div className="text-center">Loading ...</div>;
};

class BlogDetail extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id

        }
    }

    render() {
        return (
            <Translation>
                {(t) => (
                    <React.Fragment>
                        <ScrollToTopOnMount/>
                        <Navigation/>
                        <div className="blog-detail">
                            <div className="container">
                                <div className="row">
                                    <QueryRenderer
                                        environment={environment}
                                        query={query}
                                        variables={{id: this.state.id}}
                                        render={blogList}
                                    />

                                    <div className="col-md-3 d-none d-sm-none d-md-block">
                                        <div className="search">
                                            {/*<input type="text" className="form-control search-input pl-5"*/}
                                            {/*       placeholder="ค้นหาบทความ"/>*/}
                                            <h4 className="mt-5">{t("blog:Blog Categories")}</h4>
                                            <QueryRenderer
                                                environment={environment}
                                                query={query}
                                                variables={{}}
                                                render={categoryList}
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

export default BlogDetail;