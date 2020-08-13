import React from 'react';
import LandingPageHeader from '../components/LandingPageHeader';
import LandingPageBody from '../components/LandingPageBody';
import LandingPageFooter from '../components/LandingPageFooter';

const LandingPage = (props) => {
    return(
        <div>
            <LandingPageHeader type="landing" logUser={props.logUser} />
            <LandingPageBody />
            <LandingPageFooter />
        </div>
    );
}

export default LandingPage;