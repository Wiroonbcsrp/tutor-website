import React from 'react';
import "./style.scss"
import {graphql} from "babel-plugin-relay/macro";
import environment from "../../environment";
import {QueryRenderer} from "react-relay";
import {Translation} from "react-i18next";

const $ = window.jQuery;

const query = graphql`
    query slideCustomerQuery {
        customerViewer {
            allCustomer {
                edges {
                    node {
                        id name position quote thumbnail text
                    }
                }
            }
        }
    }
`;

function setBanner() {
    let feedback = $('.feedback');
    feedback.slick({
        infinite: true,
        slidesToScroll: 1,
        appendArrows: $(".slide-arrow"),
        prevArrow: "<img src='/assets/images/home/arrow-slide-left.svg' alt='arrow slide left' class='slick-prev'/>",
        nextArrow: "<img src='/assets/images/home/arrow-slide-right.svg' alt='arrow slide right' class='slick-next'/>",
        variableWidth: true
    });
}

const customerList = ({error, props}) => {

    if (error) {
        return <div>{error.message}</div>;
    } else if (props) {
        setTimeout(() => {
            setBanner()
        }, 100);
        return (
            props.customerViewer.allCustomer.edges.map((customer) => (
                <div className="feedback-slide" key={customer.node.id}>
                    <div>
                        <img src={customer.node.thumbnail}
                             alt={customer.node.name} className="img-slide"/>
                    </div>
                    <div className="comment">
                        <h2>{customer.node.quote}</h2>
                        <p>{customer.node.text}</p>
                        <div className="credit">
                            <h3>{customer.node.name}</h3>
                            <h4>{customer.node.position}</h4>
                        </div>
                    </div>
                </div>
            )))
    }
    return <div className="text-center">Loading ...</div>;
};


class SlideCustomer extends React.PureComponent {

    render() {
        return (
            <Translation>
                {(t) => (
                    <div className="review-customer">

                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="filter">
                                        <h2 className="m-0">รีวิว</h2>
                                        <h6 className="m-0">จากผู้ใช้งาน Silverman</h6>
                                        <ul>
                                            <li className="active">ความเห็นจากกรรมการ</li>
                                            <li>ความเห็นจากลูกบ้าน</li>
                                            <li>ความเห็นจากนิติบุคคล</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="feedback mb-4">
                                        <QueryRenderer
                                            environment={environment}
                                            query={query}
                                            variables={{}}
                                            render={customerList}
                                        />
                                    </div>
                                    <div className="slide-arrow"/>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </Translation>
        );
    }
}

export default SlideCustomer;
