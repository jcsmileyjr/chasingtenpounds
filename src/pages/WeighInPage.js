import React from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useAuth0 } from "@auth0/auth0-react";

import WeighInHeader from '../components/AuthUserHeader';
import WeighInPageBody from '../components/WeighInPageBody';

const WeighInPage = () => {
    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated &&(
        <div>
            <WeighInHeader type="authenticated" text="Weigh In"/>
            <WeighInPageBody />
        </div>
        )
    );
}

export default withAuthenticationRequired(WeighInPage, {
    onRedirecting: () => <div>Redirecting you to the login page...</div>,
});