import React from "react";
import i18n from "../i18n";

class MasterComponent extends React.Component {
    constructor(props) {
        super(props);
        if (props.match.params.lang === 'en') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('th');
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.match.params.lang === 'en') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('th');
        }
        return true;
    }
}
export default MasterComponent;