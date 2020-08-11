import React from "react";
import { withAuthenticationRequired } from '@auth0/auth0-react';

import LogInHeader from '../components/LandingPageHeader';
import SignUpPageBody from '../components/SignUpPageBody';

const SignUpPage = () => {
    return (
        <div>
            <LogInHeader type="login" text="Create an Account"/>
            <SignUpPageBody />
        </div>
    );
}

export default withAuthenticationRequired(SignUpPage, {
    onRedirecting: () => <div>Redirecting you to the login page...</div>,
});