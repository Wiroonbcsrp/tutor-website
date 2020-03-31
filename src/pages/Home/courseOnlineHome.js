import React from 'react';

class CourseOnlineHome extends React.PureComponent {

    render() {
        return (
            <div className="course-online-home">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="d-none d-sm-none d-md-block"><strong>คอร์สเรียน </strong>สดตัวต่อตัว (Online)
                            </h1>
                            <h1 className="d-block d-sm-block d-md-none"><strong>คอร์สเรียน </strong><br/>สดตัวต่อตัว
                                (Online)</h1>
                        </div>
                    </div>
                    {/*ม.1*/}
                    <div className="margin-mathayom">
                        <div className="row">
                            <div className="col-12">

                                <div className="topic-mathayom orange">
                                    <h3>คอร์สติวเข้มสอบเข้า ม.1</h3>
                                </div>

                                <h4 className="mt-4 text-orange">(โรงเรียนเครือสาธิต จุฬา / ประสานมิตร / เกษตร /
                                    และอื่นๆ)</h4>

                                <div className="choice">
                                    <div className="box orange delay-100ms slower animated fadeInLeft">
                                        <h4>ปู + ปรับพื้นฐาน เพื่อเตรียมติวเข้า ม.1</h4>
                                    </div>
                                    <div className="box orange delay-100ms slower animated fadeInRight">
                                        <h4>คอร์สติวเข้มสอบเข้า ม.1</h4>
                                    </div>
                                </div>

                                <div className="pre-test mt-4 mt-md-0 delay-200ms slower animated fadeInDown">
                                    <h5>ไม่แน่ใจว่าจะเรียนคอร์สไหนดี? ลองทำแบบทดสอบ Pre-Test ดูสิครับ!</h5>
                                    <button className="btn mt-3">แบบทดสอบ Pre Test</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*ม.1*/}

                {/*ม.4*/}
                <div className="margin-mathayom bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="topic-mathayom green">
                                    <h3>คอร์สติวเข้มสอบเข้า ม.4</h3>
                                </div>
                                <h4 className="mt-4 text-green">(เตรียมอุดม / มหิดลวิทยานุสรณ์ / จุฬาภรณ์ราชวิทยาลัย /
                                    กำเนิดวิทย์ และอื่นๆ)</h4>

                                <div className="choice">
                                    <div className="box green delay-100ms slower animated fadeInLeft">
                                        <h4>ปู + ปรับพื้นฐาน ม.ต้น</h4>
                                    </div>
                                    <div className="box green delay-100ms slower animated fadeInRight">
                                        <h4>ติวเข้มเข้า ม.4 โรงเรียนการแข่งขันสูง</h4>
                                    </div>
                                </div>

                                <div className="pre-test mt-4 mt-md-0 delay-200ms slower animated fadeInDown">
                                    <h5>ไม่แน่ใจว่าจะเรียนคอร์สไหนดี? ลองทำแบบทดสอบ Pre-Test ดูสิครับ!</h5>
                                    <button className="btn mt-3">แบบทดสอบ Pre Test</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*ม.4*/}

                {/*university*/}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="topic-mathayom blue">
                                <h3>คอร์สติวเข้มสอบเข้ามหาวิทยาลัย</h3>
                            </div>
                            <h4 className="mt-4 text-blue">(แพทย์ / ทันตะ / เภสัช / วิศวะ / สถาปัตย์ / MUIC)</h4>

                            <div className="choice">
                                <div className="box blue delay-100ms slower animated fadeInLeft">
                                    <h4>คอร์สปรับพื้นฐาน ม.ปลาย เพื่อเตรียมติวเข้าสอบเข้ามหาวิทยาลัย</h4>
                                </div>
                                <div className="box blue delay-100ms slower animated fadeInRight">
                                    <h4>ติวเข้มเข้ามหาวิทยาลัย</h4>
                                </div>
                            </div>

                            <div className="pre-test mt-4 mt-md-0 delay-200ms slower animated fadeInDown">
                                <h5>ไม่แน่ใจว่าจะเรียนคอร์สไหนดี? ลองทำแบบทดสอบ Pre-Test ดูสิครับ!</h5>
                                <button className="btn mt-3">แบบทดสอบ Pre Test</button>
                            </div>
                        </div>
                    </div>
                    {/*university*/}
                </div>
            </div>
        )
    }
}

export default CourseOnlineHome;