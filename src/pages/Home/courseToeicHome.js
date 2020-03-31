import React from 'react';

class CourseToeicHome extends React.PureComponent {

    render() {
        return (
            <div className="course-toeic-home">
                <div className="container">
                    <div className="margin-mathayom">
                        <div className="row">
                            <div className="col-12">
                                <div className="topic-mathayom teal">
                                    <h3>คอร์สติวเข้มเพื่อสอบวัดระดับภาษา</h3>
                                </div>

                                <h4 className="mt-4 text-teal">(TOEIC / MU-ELT / TOEFL / IELTS / HSK)</h4>

                                <div className="choice">
                                    <div className="box teal delay-100ms slower animated fadeInLeft">
                                        <h3>TOEIC</h3>
                                    </div>

                                    <div className="box teal delay-100ms slower animated fadeInDown">
                                        <h3>MU-ELT</h3>
                                    </div>

                                    <div className="box teal delay-100ms slower animated fadeInRight">
                                        <h3>TOEFL</h3>
                                    </div>
                                </div>

                                <div className="choice">
                                    <div className="box-bottom teal delay-100ms slower animated fadeInLeft">
                                        <h3>IELTS</h3>
                                    </div>

                                    <div className="box-bottom teal delay-100ms slower animated fadeInRight">
                                        <h3>ภาษาจีน<br/>HSK</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseToeicHome;