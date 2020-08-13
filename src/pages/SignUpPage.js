import React from "react";

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

export default SignUpPage