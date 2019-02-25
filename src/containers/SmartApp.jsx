import PreferenceManager from '../preferences/PreferenceManager';
import React from 'react';
import { FullApp } from "./FullApp";
import DataAccess from '../dataaccess/DataAccess';

import 'fhirclient';

/*
    App container to display theoretical SMART patient.
    Upon successful authorization of EHR user, app will handle reading of patient and loads it.
    If user authorization fails or if selected patient is not in the usermap, app will load a fail screen.

    NOTE: see SmartOnFhirLaunchContext.json : redirect_url will need to be changed in different environments
*/

class SmartApp extends FullApp {
    componentDidMount() {
        window.FHIR.oauth2.ready((smart) => {
            smart.user.read().then((user) => {
                const userProfile = this.securityManager.getUserProfile(user);
                if (userProfile) {
                    this.setState({loginUser: userProfile});
                    this.preferenceManager = new PreferenceManager(userProfile);
                    fetch('/ServerConfig.json')
                        .then(res => res.json())
                        .then(config => {
                            const dataSourceOptions = config.fhir;
                            dataSourceOptions.smartClient = smart;

                            this.dataAccess = new DataAccess('SMARTonFHIRDataSource', dataSourceOptions);
                            this.loadPatient(smart.patient.id);
                        });
                } else {
                    console.error("Login failed");
                    this.setState({authorizationFail: true});
                }
            });
        },
        (error) => {
            this.setState({
                loading: false,
                loadingErrorObject: error
            });
        });
    }

    render() {
        if (this.state.authorizationFail) {
            return (<div> Authorization Failed </div>)
        }
        return (this.state.loginUser) ? (<div>{super.render()}</div>) : (<div>Loading...</div>)
    }

}

export default SmartApp;