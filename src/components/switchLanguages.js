import i18n from "i18next";
import React, {Component} from 'react';
import {Translation} from "react-i18next";

class switchLanguages extends Component {
    render() {
            i18n.changeLanguage("en");
        return (
            <Translation>
                {
                    t =>
                        <a className="dropdown-item" href="/" onClick={(e) => {
                            e.preventDefault();
                            let languages = "";
                            if (props.userConfig.languages === "th") {
                                languages = "en";
                            } else {
                                languages = "th";
                            }
                            let variables = {
                                input: {languages: languages}
                            };
                            commitMutation(environment, {
                                mutation,
                                variables,
                                onCompleted: (response, errors) => {
                                },
                                onError: error => {
                                    alert('server error')
                                },
                                optimisticUpdater: (store) => {
                                    store.get(props.userConfig.id).setValue(languages, 'languages');
                                    i18n.changeLanguage(languages);
                                }
                            });
                        }}>
                            {t('headerMenu:change language')}
                            <img src={process.env.PUBLIC_URL + '/images/flags/' + t('custom:flag')}
                                 alt="flag" className="flag"/>
                        </a>
                }
            </Translation>
        );
    }
}

export default switchLanguages;
