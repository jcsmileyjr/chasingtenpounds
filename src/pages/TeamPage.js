import React from 'react'

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

export default TeamPage;