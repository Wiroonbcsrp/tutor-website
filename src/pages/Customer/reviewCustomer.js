import React from 'react';
import "./style.scss"
import {Translation} from "react-i18next";

class ReviewCustomer extends React.PureComponent {

    render() {
        return (
            <Translation>
                {(t) => (
                    <div className="review-customer">
                        <div className="partner-and-customer">
                            <h1>{t("customer:Our Partners")}</h1>
                            <div className="project-management">
                                <div><img className="img-fluid"
                                          src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/jll.png'}
                                          alt="jll"/></div>
                                <div><img className="img-fluid"
                                          src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/stms.png'}
                                          alt="stms"/></div>
                                <div><img className="img-fluid"
                                          src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/prime.png'}
                                          alt="prime"/></div>
                                <div><img className="img-fluid"
                                          src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/prime-estate.png'}
                                          alt="prime estate"/></div>
                                <div><img className="img-fluid"
                                          src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/infinite.png'}
                                          alt="infinite"/></div>
                                <div><img className="img-fluid"
                                          src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/pmc.png'}
                                          alt="pmc"/></div>
                                <div><img className="img-fluid"
                                          src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/mj.png'}
                                          alt="mj"/></div>
                                <div><img className="img-fluid"
                                          src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/gam.png'}
                                          alt="gam"/></div>
                                <div><img className="img-fluid"
                                          src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/cbm.png'}
                                          alt="cbm"/></div>
                                <div><img className="img-fluid"
                                          src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/ville-con.png'}
                                          alt="ville con"/></div>
                            </div>
                        </div>

                        <div className="partner-and-customer">
                            <h1>{t("customer:Our Clients")}</h1>
                            <div className="row">
                                <div className="border-icon">
                                    <img className="img-fluid" alt="aspire"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/aspire.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="supalai"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/supalai.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="areeya-como"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/areeya-como.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="habitown"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/habitown.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="baan-klang-muang"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/baan-klang-muang.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="daily"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/daily.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="fynn-aree"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/fynn-aree.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="living-nest"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/living-nest.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="tobe"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/tobe.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="manthana"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/manthana.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="the-legend"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/the-legend.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="ashton"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/ashton.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="smart"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/smart.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="supalai-suan-luang"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/supalai-suan-luang.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="life"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/life.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="aspen"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/aspen.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="the-centro"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/the-centro.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="the-key"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/the-key.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="mono"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/mono.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="laddarom"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/laddarom.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="rk"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/rk.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="salaya"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/salaya.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="the light"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/the-light.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="m society"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/m-society.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="plum"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/plum.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="dusit grand"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/dusit-grand.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="pruksa"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/pruksa.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="greenery"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/greenery.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="sky villas"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/sky-villas.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="apool"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/apool.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="jw"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/jw.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="winning"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/winning.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="navara"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/navara.png'}/>
                                </div>
                                <div className="border-icon">
                                    <img className="img-fluid" alt="phetch"
                                         src={process.env.PUBLIC_URL + '/assets/images/about/project-icon/phetch.png'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Translation>
        );
    }
}

export default ReviewCustomer;