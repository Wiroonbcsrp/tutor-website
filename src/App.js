import React from 'react';
import './App.scss';
import NoMatch from './pages/404/404';
import Home from './pages/Home/home';
import "./i18n";
import {
    Switch,
    Route,
    BrowserRouter as Router,
} from "react-router-dom";
import Customer from "./pages/Customer/customer";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import ForJuristicAccounting from "./pages/ForJuristicAccounting/forJuristicAccounting";
import ForJuristicManagement from "./pages/ForJuristicManagement/forJuristicManagement";
import ForBoard from "./pages/ForBoard/forBoard";
import ForResident from "./pages/ForResident/forResident";
import Pricing from "./pages/Pricing/pricing";
import Faq from "./pages/Faq/faq";
import JoinUs from "./pages/JoinUs/joinus";
import Blog from "./pages/Blog/blog";
import Video from "./pages/Video/video";
import Register from "./pages/register/register";
import Download from "./pages/download/download";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/:lang?/register" component={Register}/>
                    <Route path="/:lang?/video" component={Video}/>
                    <Route path="/:lang?/blog" component={Blog}/>
                    <Route path="/:lang?/faq" component={Faq}/>
                    <Route path="/:lang?/for-resident" component={ForResident}/>
                    <Route path="/:lang?/for-board" component={ForBoard}/>
                    <Route path="/:lang?/for-juristic-management" component={ForJuristicManagement}/>
                    <Route path="/:lang?/for-juristic-accounting" component={ForJuristicAccounting}/>
                    <Route path="/:lang?/contact" component={Contact}/>
                    <Route path="/:lang?/customer" component={Customer}/>
                    <Route path="/:lang?/about" component={About}/>
                    <Route path="/:lang?/join-us" component={JoinUs}/>
                    <Route path="/:lang?/pricing" component={Pricing}/>
                    <Route path="/download" component={Download}/>
                    <Route exact path="/" component={Home}/>
                    <Route component={NoMatch}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
