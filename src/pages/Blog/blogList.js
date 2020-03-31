import React from 'react';
import './style.scss'
import {Helmet} from "react-helmet";
import Navigation from "../../components/navigation/navigation";
import {Link} from "react-router-dom";
import Footer from "../../components/footer/footer";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import {graphql} from "babel-plugin-relay/macro";
import environment from "../../environment";
import {QueryRenderer} from "react-relay";
import _ from "lodash";
import {Translation} from "react-i18next";
import MasterComponent from "../../components/master";

const $ = window.jQuery;

const query = graphql`
    query blogListQuery ($category: String) {
        blogCategoryViewer {
            allBlogCategory {
                edges {
                    node {
                        id name metaDescription slug
                    }
                }
            }
        }

        banner: blogContentViewer {
            allBlogContent (last: 2) {
                edges {
                    node {
                        id name metaDescription thumbnail
                    }
                }
            }
        }

        list: blogContentViewer {
            allBlogContent (category: $category){
                edges {
                    node {
                        id name metaDescription thumbnail category {
                            id name slug
                        } tag {
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
    }
`;


function setBanner() {
    $('.blog-slide').slick({
        arrow: false,
        infinite: true,
        prevArrow: "",
        nextArrow: "",
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: true,
    });

    $('.blog-slide-mobile').slick({
        prevArrow: "",
        nextArrow: "",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });
}

const blogBannerList = ({error, props}) => {
    if (error) {
        return <div>{error.message}</div>;
    } else if (props) {

        setTimeout(function () {
            setBanner();
        }, 200);

        return (
            <div className="blog-slide d-none d-sm-none d-md-block">
                {props.banner.allBlogContent.edges.map((blog) => (
                    <div className="slide" key={blog.node.id}>
                        <div className="banner">
                            <img src={blog.node.thumbnail}
                                 alt={blog.node.name} className="img-fluid"/>
                        </div>
                        <div className="description">
                            <h2>{blog.node.name}</h2>
                            <p>{blog.node.metaDescription}</p>
                            <Link to={"/blog/detail/" + blog.node.id}>อ่านต่อ</Link>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    return <div className="text-center">Loading ...</div>;
};


const blogBannerMobileList = ({error, props}) => {
    if (error) {
        return <div>{error.message}</div>;
    } else if (props) {
        return (
            <div className="blog-slide-mobile d-block d-sm-block d-md-none">
                {props.banner.allBlogContent.edges.map((blog) => (
                    <Link to={"/blog/detail/" + blog.node.id} key={blog.node.id}>
                        <div className="slide-mobile" key={blog.node.id}>
                            <div>
                                <img src={blog.node.thumbnail}
                                     alt={blog.node.name} className="img-fluid"/>
                            </div>
                            <div className="description">
                                <h4>{blog.node.name}</h4>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }
    return <div className="text-center">Loading ...</div>;
};

const blogList = ({error, props}) => {
    if (error) {
        return <div>{error.message}</div>;
    } else if (props) {
        return (
            props.list.allBlogContent.edges.map((blog) => (
                <div className="news" key={blog.node.id}>
                    <Link to={"/blog/detail/" + blog.node.id}>
                        <div className="thumbnail">
                            <img src={blog.node.thumbnail}
                                 alt={blog.node.name} className="img-fluid"/>
                        </div>
                        <div className="detail">
                            <h4>{blog.node.name}</h4>
                            {
                                blog.node.tag.edges.map((tag) => (
                                    <div className="group-tag" key={tag.node.id}>
                                        <p className="tag">{tag.node.name}</p>
                                    </div>
                                ))
                            }
                            <p className="description d-none d-sm-none d-md-block">{blog.node.metaDescription}</p>
                        </div>
                    </Link>
                </div>

            ))
        )
    }
    return <div className="text-center">Loading ...</div>;
};

const blogCategoryList = ({error, props}) => {
    if (error) {
        return <div>{error.message}</div>;
    } else if (props) {
        return (
            props.blogCategoryViewer.allBlogCategory.edges.map((category) => (
                <h5 key={category.node.id}><Link
                    to={"/blog/" + category.node.slug}><strong>- </strong>{category.node.name}</Link></h5>
            ))
        )
    }
    return <div className="text-center">Loading ...</div>;
};


class BlogList extends MasterComponent {
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
                            <title>{t("blog:Our Clients")}</title>
                            <meta name="description" content={t("blog:metaDescription")}/>
                            <meta name="keywords" content={t("blog:metaKeyWord")}/>
                        </Helmet>
                        <ScrollToTopOnMount/>
                        <Navigation/>
                        <div className="general-news-list">
                            <div className="container">
                                <div className="row d-none d-sm-none d-md-block">
                                    <div className="col-12">
                                        <h1>{t("blog:SILVERMAN's Articles")}</h1>
                                    </div>
                                </div>
                            </div>

                            <QueryRenderer
                                environment={environment}
                                query={query}
                                variables={{}}
                                render={blogBannerMobileList}
                            />

                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <QueryRenderer
                                            environment={environment}
                                            query={query}
                                            variables={{}}
                                            render={blogBannerList}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="container">

                                {/*<div className="row mt-5">*/}
                                {/*    <div className="col-6">*/}
                                {/*        <div className="search-mobile float-right">*/}
                                {/*            <input type="text" className="form-control search-input pl-5"*/}
                                {/*                   placeholder="ค้นหา"/>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}

                                {/*    <div className="col-6">*/}
                                {/*        <div className="search-mobile">*/}
                                {/*            <ul className="navbar-nav justify-content-between align-items-center">*/}
                                {/*                <li className="nav-item dropdown">*/}
                                {/*                    <Link to={"#"} className="nav-link" id="navbarDropdown"*/}
                                {/*                          role="button" data-toggle="dropdown" aria-haspopup="true"*/}
                                {/*                          aria-expanded="false">*/}
                                {/*                        หมวดหมู่*/}
                                {/*                        <img*/}
                                {/*                            src={process.env.PUBLIC_URL + '/assets/images/navigation/dropdown.svg'}*/}
                                {/*                            alt="dropdown-icon" className="dropdown-icon"/>*/}
                                {/*                    </Link>*/}
                                {/*                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                                {/*                        <QueryRenderer*/}
                                {/*                            environment={environment}*/}
                                {/*                            query={query}*/}
                                {/*                            variables={{}}*/}
                                {/*                            render={blogCategoryList}*/}
                                {/*                        />*/}
                                {/*                    </div>*/}
                                {/*                </li>*/}
                                {/*            </ul>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                <div className="row mt-md-5 mt-0">
                                    <div className="col-12">
                                        <h3>{t("blog:Latest Articles")}</h3>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-9">

                                        <QueryRenderer
                                            environment={environment}
                                            query={query}
                                            variables={{category: this.props.match.params.category}}
                                            render={blogList}
                                        />

                                    </div>
                                    <div className="col-md-3">
                                        <div className="search">
                                            {/*<input type="text" className="form-control search-input pl-5"*/}
                                            {/*       placeholder="ค้นหาบทความ"/>*/}
                                            <h4>{t("blog:Blog Categories")}</h4>

                                            <QueryRenderer
                                                environment={environment}
                                                query={query}
                                                variables={{}}
                                                render={blogCategoryList}
                                            />

                                        </div>
                                    </div>
                                </div>

                                {/*<div className="row">*/}
                                {/*    <div className="col-12">*/}
                                {/*        <nav aria-label="Page navigation example" className="pagination-center">*/}
                                {/*            <ul className="pagination">*/}
                                {/*                <li className="page-item">*/}
                                {/*                    <a className="page-link" href="#" aria-label="Previous">*/}
                                {/*                        <span aria-hidden="true">&laquo;</span>*/}
                                {/*                        /!*<img src={process.env.PUBLIC_URL + '/assets/images/navigation/dropdown.svg'}*!/*/}
                                {/*                        /!*     alt="dropdown-icon" className="dropdown-icon"/>*!/*/}
                                {/*                    </a>*/}
                                {/*                </li>*/}
                                {/*                <li className="page-item "><a className="page-link" href="#">1</a></li>*/}
                                {/*                <li className="page-item"><a className="page-link" href="#">2</a></li>*/}
                                {/*                <li className="page-item"><a className="page-link" href="#">3</a></li>*/}
                                {/*                <li className="page-item">*/}
                                {/*                    <a className="page-link" href="#" aria-label="Next">*/}
                                {/*                        <span aria-hidden="true">&raquo;</span>*/}
                                {/*                        /!*<img src={process.env.PUBLIC_URL + '/assets/images/navigation/dropdown.svg'}*!/*/}
                                {/*                        /!*     alt="dropdown-icon" className="dropdown-icon"/>*!/*/}
                                {/*                    </a>*/}
                                {/*                </li>*/}
                                {/*            </ul>*/}
                                {/*        </nav>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                            </div>
                        </div>
                        <Footer/>
                    </React.Fragment>
                )}
            </Translation>
        );
    }
}

export default BlogList;