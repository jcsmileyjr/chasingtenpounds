import React from 'react';
import LogInPageBody from '../components/LogInPageBody';
import LogInHeader from '../components/LandingPageHeader';
const LogIn = () => {
    return(
        <div>
            <LogInHeader type="login" text="Log In"/>
            <LogInPageBody />
        </div>
    );
}

export default LogIn;