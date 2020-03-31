import React from 'react'

class FeatureHome extends React.PureComponent {

    render() {
        return (
            <div className="feature-home">
                <div className="row">
                    <div className="col-12">
                        <img src={process.env.PUBLIC_URL + '/assets/images/home/bg-we-are.jpg'}
                             alt="we are all" className="img-fluid"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeatureHome;
