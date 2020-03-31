import React from "react"
import {Helmet} from "react-helmet";
import Navigation from "../../components/navigation/navigation";
import HeaderAbout from "../../components/header/about/headerAbout";
import NavigationAbout from "../../components/navigation/about/navigationAbout";
import Footer from "../../components/footer/footer";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";

class JoinUs extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>ร่วมงานกับเรา | Silverman</title>
                </Helmet>
                <ScrollToTopOnMount/>
                <Navigation props={this.props}/>
                <HeaderAbout/>
                <NavigationAbout props={this.props}/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default JoinUs;
