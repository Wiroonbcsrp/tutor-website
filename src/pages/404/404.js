import React from "react";
import {Link} from "react-router-dom";

class NoMatch extends React.PureComponent {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center p-5 mt-5">
                    <div className="col-md-4 text-center">
                        <img src={process.env.PUBLIC_URL + "/assets/images/navigation/mahidol-logo.png"}
                             alt="mahidol tutor logo" className="img-fluid mb-5" style={{'max-width': 300}}/>
                        <h4>ขออภัยไม่พบข้อมูลที่ต้องการ</h4>
                        <Link to={"/"}>
                            <button className="btn btn-dark pl-5 pr-5">
                                เข้าสู่เว็บไซต์หลัก11
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NoMatch;