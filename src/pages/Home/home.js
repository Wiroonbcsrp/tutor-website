import './style.scss';
import React from 'react';
import {Helmet} from "react-helmet";
import scrollAnimate from "../../libs/scrollAnimate";
import Navigation from "../../components/navigation/navigation";
import HeaderHome from "./headerHome";
import FeatureHome from "./featureHome";
import CourseOnlineHome from "./courseOnlineHome";
import CourseToeicHome from "./courseToeicHome";
import FeedbackHome from "./feedbackHome";
// import ReasonHome from "./reasonHome";
import ReviewHome from "./reviewHome";
import Footer from "../../components/footer/footer";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import { Translation } from 'react-i18next';

class Home extends React.PureComponent {

    componentDidMount() {
        scrollAnimate();
    }

    render() {
        return (
            <React.Fragment>
                <Translation>
                    {(t) => (
                        <Helmet>
                            <title>Mahidol Tutor Home</title>
                            <meta name="description" content={t("home:metaDescription")}/>
                            <meta name="keywords" content={t("home:metaKeyWord")}/>
                        </Helmet>
                    )}
                </Translation>
                <ScrollToTopOnMount/>
                <Navigation props={this.props}/>
                <div id="home" className="animated">
                    <HeaderHome/>
                    <FeatureHome/>
                    <CourseOnlineHome/>
                    <CourseToeicHome/>
                    {/*<ReasonHome/>*/}
                    <FeedbackHome/>
                    <ReviewHome/>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Home;
