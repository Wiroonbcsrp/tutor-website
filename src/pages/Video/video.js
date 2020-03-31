import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import VideoList from "./videoList";
import VideoDetail from "./detail/videoDetail";

class Video extends React.PureComponent {
    render() {
        return (
            <Switch>
                <Route path={`${this.props.match.url}/detail/:category/:id?`} component={VideoDetail}/>
                <Route path={`${this.props.match.url}/:category?`} component={VideoList}/>
            </Switch>
        );
    }
}

export default Video;