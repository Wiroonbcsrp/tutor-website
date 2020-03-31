import React from "react";

class Download extends React.PureComponent {

    componentDidMount() {
        let userAgent = navigator.userAgent || navigator.vendor || window.opera;
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        }
        if (/android/i.test(userAgent)) {
            return window.location.href = "https://play.google.com/store/apps/details?id=com.port80.silverman";
        }
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return window.location.href = "https://itunes.apple.com/app/id1436707310";
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center p-5 mt-5">
                    <div className="col-md-4 text-center">
                        <img src={process.env.PUBLIC_URL + "/assets/images/navigation/logo-silverman.svg"}
                             alt="silverman" className="img-fluid mb-5" style={{'max-width': 300}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Download;