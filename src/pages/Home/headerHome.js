import React from "react"

class HeaderHome extends React.PureComponent {
    render() {
        return (
            <div className="header">
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            {/*<ol className="carousel-indicators">*/}
                            {/*    <li data-target="#carouselExampleIndicators" data-slide-to="0"*/}
                            {/*        className="active"/>*/}
                            {/*    <li data-target="#carouselExampleIndicators" data-slide-to="1"/>*/}
                            {/*    <li data-target="#carouselExampleIndicators" data-slide-to="2"/>*/}
                            {/*</ol>*/}
                            <div className="carousel-inner slide-height">
                                <div className="carousel-item active">
                                     <img src={process.env.PUBLIC_URL + '/assets/images/home/banner1.jpg'}
                                          alt="banner" className="d-block w-100"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/home/banner2.jpg'}
                                          alt="banner" className="d-block w-100"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"/>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                            <div className="scroll-down-box text-center">
                                <p>อ่านเพิ่มเติม</p>
                                <img src={process.env.PUBLIC_URL + '/assets/images/home/mouse.svg'}
                                     alt="scroll down" className="scroll-down"/>
                                <img src={process.env.PUBLIC_URL + '/assets/images/home/arrow-down.svg'}
                                     alt="scroll down"
                                     className="scroll-down animated bounce infinite"/>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderHome;
