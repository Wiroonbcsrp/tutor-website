import React from 'react';
import './style.scss'
// import {graphql} from "babel-plugin-relay/macro";
// import {Link} from "react-router-dom";
// import environment from "../../environment";
// import {QueryRenderer} from "react-relay";

// const query = graphql`
//     query blogWithTagQuery {
//         blogContentViewer {
//             allBlogContent {
//                 edges {
//                     node {
//                         id name text metaDescription thumbnail publishDate
//                         category {
//                             id name slug metaDescription metaKeyword
//                         }
//                         tag {
//                             edges {
//                                 node {
//                                     id name
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `;
//
// const blogList = ({error, props}) => {
//     if (error) {
//         return <div>{error.message}</div>;
//     } else if (props) {
//         return (
//             props.blogContentViewer.allBlogContent.edges.map((blog) => (
//                 <React.fragment key={blog.node.id}>
//                     <div className="col-md-4">
//                         <div className="group-description">
//                             <img src="https://picsum.photos/id/120/420/280"
//                                  alt="" className="img-fluid"/>
//                             <h6>งบการเงินคอนโด เรื่องที่คุณไม่เคยรู้</h6>
//                             <p className="description">ทวิตเตอร์บั๊กไอโฟน ไดรเวอร์มีเดียเมลโปรแกรมเมอร์
//                                 แอนิเมชั่นมอนิเตอร์บั๊ก</p>
//                         </div>
//                     </div>
//                 </React.fragment>
//             ))
//         )
//     }
//     return <div className="text-center">Loading ...</div>;
// };

class BlogWithTag extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            // slug: props.slug
        }
    }
    render() {
        return (
            <div className="blog-with-tag">
                <div className="row mt-5">
                    <div className="col-12">
                        <h2>บทความที่เกี่ยวข้อง</h2>
                    </div>
                </div>

                <div className="row">
                    {/*<QueryRenderer*/}
                    {/*    environment={environment}*/}
                    {/*    query={query}*/}
                    {/*    variables={{}}*/}
                    {/*    render={blogList}*/}
                    {/*/>*/}

                    {/*<div className="col-md-4">*/}
                    {/*    <div className="group-description">*/}
                    {/*        <img src="https://picsum.photos/id/120/420/280"*/}
                    {/*             alt="" className="img-fluid"/>*/}
                    {/*        <h6>งบการเงินคอนโด เรื่องที่คุณไม่เคยรู้</h6>*/}
                    {/*        <p className="description">ทวิตเตอร์บั๊กไอโฟน ไดรเวอร์มีเดียเมลโปรแกรมเมอร์*/}
                    {/*            แอนิเมชั่นมอนิเตอร์บั๊ก</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-4">*/}
                    {/*    <div className="group-description">*/}
                    {/*        <img src="https://picsum.photos/id/185/420/280"*/}
                    {/*             alt="" className="img-fluid"/>*/}
                    {/*        <h6>งบการเงินคอนโด เรื่องที่คุณไม่เคยรู้</h6>*/}
                    {/*        <p className="description">ทวิตเตอร์บั๊กไอโฟน ไดรเวอร์มีเดียเมลโปรแกรมเมอร์*/}
                    {/*            แอนิเมชั่นมอนิเตอร์บั๊ก</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-4">*/}
                    {/*    <div className="group-description">*/}
                    {/*        <img src="https://picsum.photos/id/199/420/280"*/}
                    {/*             alt="" className="img-fluid"/>*/}
                    {/*        <h6>งบการเงินคอนโด เรื่องที่คุณไม่เคยรู้</h6>*/}
                    {/*        <p className="description">ทวิตเตอร์บั๊กไอโฟน ไดรเวอร์มีเดียเมลโปรแกรมเมอร์*/}
                    {/*            แอนิเมชั่นมอนิเตอร์บั๊ก</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default BlogWithTag;