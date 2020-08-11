import React from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Header from '../components/AuthUserHeader';
import TeamPageBody from '../components/TeamPageBody';

const TeamPage = () => {
    return (
        <div>
            <Header type="authenticated" text="Join or Create a Team"/>
            <TeamPageBody />
        </div>
    );
}

export default withAuthenticationRequired(TeamPage, {
    onRedirecting: () => <div>Redirecting you to the login page...</div>,
});