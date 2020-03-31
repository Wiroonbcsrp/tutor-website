import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";
// import _ from "lodash";
// import MainNavigationAbout from "./about/mainNavigationAbout";
// import MobileNavigation from "./mobileNavigation";

const $ = window.jQuery;

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // backgroundOpacity: 0,
            isMount: false
        };
    }

    componentDidMount() {
        // this.isMount = true;
        // let _this = this;
        // let navigation = $('#navigation');
        // let has_white = navigation.hasClass("white");
        // $(window).scroll(function () {
        //     if (_this.isMount) {
        //         // _this.setState({backgroundOpacity: $(document).scrollTop() / 400 > 1 ? 1 : $(document).scrollTop() / 400})
        //
        //         if ($(document).scrollTop() > 20 && !has_white) {
        //             navigation.addClass('white');
        //         } else if ($(document).scrollTop() < 20 && !has_white) {
        //             navigation.removeClass('white');
        //         }
        //     }
        // });

        $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            let $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');


            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show').removeClass("show");
            });

            return false;
        });
    }

    componentWillUnmount() {
        this.isMount = false;
    }

    render() {
        return (
            <div id="navigation" className="white">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <span>
                                    <button className="navbar-toggler mt-2" type="button" data-toggle="collapse"
                                            data-target="#navbarTogglerDemo01"
                                            aria-controls="navbarTogglerDemo01"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"/>
                                    </button>
                                    <Link to={"/"}>
                                        <img
                                            src={process.env.PUBLIC_URL + '/assets/images/navigation/mahidol-logo.png'}
                                            alt="mahidol tutor home logo"
                                            className="logo float-right d-block d-sm-block d-md-none"/>
                                        <img
                                            src={process.env.PUBLIC_URL + '/assets/images/navigation/mahidol-logo.png'}
                                            alt="mahidol tutor home logo"
                                            className="logo d-none d-sm-none d-md-block"/>
                                    </Link>
                                </span>

                                <div className="collapse navbar-collapse justify-content-end"
                                     id="navbarTogglerDemo01">
                                    <ul className="navbar-nav justify-content-between align-items-center">
                                        <li className="nav-item active">
                                            <Link to={"/"} className="nav-link">หน้าแรก</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/"} className="nav-link">Home</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link id="navbarDropdownMenuLink" data-toggle="dropdown"
                                                  to={"/"} className="nav-link">คอร์สเรียน</Link>

                                            <ul className="dropdown-menu"
                                                aria-labelledby="navbarDropdownMenuLink">
                                                <li><Link to={"/"} className="dropdown-item">ปรับพื้นฐานสอบเข้า
                                                    ม.1</Link></li>
                                                <li><Link to={"/"} className="dropdown-item">ติวเข้มสอบเข้า
                                                    ม.1</Link></li>
                                                <li><Link to={"/"} className="dropdown-item">ปรับพื้นฐานสอบเข้า
                                                    ม.4</Link></li>

                                                <li className="dropdown-submenu">
                                                    <Link to={""} className="dropdown-item dropdown-toggle">ติวเข้มสอบเข้า
                                                        ม.4</Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link to={"/"} className="dropdown-item">มหิดลวิทยานุสรณ์
                                                            / กำเนิดวิทย์ / จุฬาภรณ์</Link></li>
                                                        <li><Link to={"/"} className="dropdown-item">สาธิตมหิดล
                                                            นานาชาติ (MUIDS)</Link></li>
                                                        <li><Link to={"/"} className="dropdown-item">เตรียมอุดม
                                                            (สายวิทย์คณิต)</Link></li>
                                                        <li><Link to={"/"} className="dropdown-item">เตรียมอุดม
                                                            (สายศิลป์คำนวณ)</Link></li>
                                                        <li><Link to={"/"} className="dropdown-item">เตรียมอุดม
                                                            (สายศิลป์ภาษา)</Link></li>
                                                    </ul>
                                                </li>

                                                <li className="dropdown-submenu">
                                                    <Link to={""}
                                                          className="dropdown-item dropdown-toggle">ติวเข้ามหาวิทยาลัย</Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link to={"/"} className="dropdown-item">ปรับพื้นฐาน
                                                            ม.ปลาย</Link></li>
                                                        <li><Link to={"/"} className="dropdown-item">คณะแพทย์
                                                            / ทันตะ / เภสัช</Link></li>
                                                        <li><Link to={"/"} className="dropdown-item">คณะวิศวะ
                                                            / สถาปัตย์</Link></li>
                                                        <li><Link to={"/"} className="dropdown-item">วิทยาลัย
                                                            นานาชาติ ม.มหิดล (MUIC)</Link></li>
                                                    </ul>
                                                </li>

                                                <li className="dropdown-submenu">
                                                    <Link to={""}
                                                          className="dropdown-item dropdown-toggle">ติวสอบวัดระดับภาษา</Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link to={"/"}
                                                                  className="dropdown-item">TOEIC</Link>
                                                        </li>
                                                        <li><Link to={"/"}
                                                                  className="dropdown-item">MU-ELT</Link>
                                                        </li>
                                                        <li><Link to={"/"}
                                                                  className="dropdown-item">TOEFL</Link>
                                                        </li>
                                                        <li><Link to={"/"}
                                                                  className="dropdown-item">IELTS</Link>
                                                        </li>
                                                        <li><Link to={"/"}
                                                                  className="dropdown-item">HSK</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>


            // <div id="navigation" className={_.get(this.props.props, 'location.pathname') !== "/" ? "white" : ""}
            //      style={{backgroundColor: "rgba(255, 255, 255, " + this.state.backgroundOpacity + ")"}}>
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-12">
            //                 <nav className="navbar navbar-expand-lg navbar-light">
            //
            //                     <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/"}>
            //                         <img
            //                             src={process.env.PUBLIC_URL + '/assets/images/navigation/mahidol-logo.png'}
            //                             alt="mahidol tutor home logo" className="logo"/>
            //                     </Link>
            //
            //                     <div className="switch-language d-flex flex-row">
            //                         <Link to={this.getUrl()} className={i18n.language === "th" ? "active" : ""}>TH</Link>
            //                         <Link to={this.getUrl("en")}  className={i18n.language === "en" ? "active" : ""}>EN</Link>
            //                     </div>
            //
            //                     <MobileNavigation/>
            //
            //                     <div className="collapse navbar-collapse justify-content-end" id="navBarTop">
            //                         <ul className="navbar-nav justify-content-between align-items-center">
            //                             <li className="nav-item dropdown">
            //                                 <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "#"} className="nav-link" id="navbarDropdown"
            //                                       role="button" data-toggle="dropdown" aria-haspopup="true"
            //                                       aria-expanded="false">
            //                                     {t("navigation:For Resident")}
            //                                     <img
            //                                         src={process.env.PUBLIC_URL + '/assets/images/navigation/dropdown.svg'}
            //                                         alt="dropdown-icon" className="dropdown-icon"/>
            //                                 </Link>
            //                                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            //                                     <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/for-board"}
            //                                           className="dropdown-item">{t("navigation:Committee")}</Link>
            //                                     <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/for-resident"}
            //                                           className="dropdown-item">{t("navigation:Resident")}</Link>
            //                                 </div>
            //                             </li>
            //                             <li className="nav-item dropdown">
            //                                 <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "#"} className="nav-link" id="navbarDropdown"
            //                                       role="button" data-toggle="dropdown" aria-haspopup="true"
            //                                       aria-expanded="false">
            //                                     {t("navigation:For Property Management")}
            //                                     <img
            //                                         src={process.env.PUBLIC_URL + '/assets/images/navigation/dropdown.svg'}
            //                                         alt="dropdown-icon" className="dropdown-icon"/>
            //                                 </Link>
            //                                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            //                                     <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/for-juristic-accounting"}
            //                                           className="dropdown-item">{t("navigation:Accounting and Finance")}</Link>
            //                                     <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/for-juristic-management"}
            //                                           className="dropdown-item">{t("navigation:Management")}</Link>
            //                                 </div>
            //                             </li>
            //                             <li className="nav-item">
            //                                 <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/pricing"} className="nav-link">{t("navigation:Pricing Package")}</Link>
            //                             </li>
            //                             <li className="nav-item">
            //                                 <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/about"} className="nav-link">{t("navigation:About Us")}</Link>
            //                             </li>
            //                             <li className="nav-item">
            //                                 <Link to={(i18n.language !== "th" ? "/"+i18n.language : "") + "/register"} className="nav-link text-right">
            //                                     <button className="btn btn-primary registration">
            //                                         {t("navigation:Register")}
            //                                     </button>
            //                                 </Link>
            //                             </li>
            //                         </ul>
            //                     </div>
            //                 </nav>
            //             </div>
            //         </div>
            //     </div>
            //     {_.indexOf(["/:lang?/about", "/:lang?/customer", "/:lang?/contact", "/:lang?/join-us"]
            //         , _.get(this.props.props, 'match.path')) >= 0 &&
            //     <MainNavigationAbout props={this.props.props}/>
            //     }
            // </div>
        );
    }
}

export default Navigation
