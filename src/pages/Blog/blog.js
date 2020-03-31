import React from 'react';
import BlogList from "./blogList";
import {
    Switch,
    Route,
} from "react-router-dom";
import BlogDetail from "./detail/blogDetail";

class Blog extends React.PureComponent {
    render() {
        return (
            <Switch>
                <Route path={`${this.props.match.url}/detail/:id?`} component={BlogDetail}/>
                <Route path={`${this.props.match.url}/:category?`} component={BlogList}/>
            </Switch>
        );
    }
}

export default Blog;