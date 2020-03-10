import React from 'react';
import LandingPageHeader from '../components/LandingPageHeader';
import LandingPageBody from '../components/LandingPageBody';
import LandingPageFooter from '../components/LandingPageFooter';

const LandingPage = () => {
    return(
        <div>
            <LandingPageHeader />
            <LandingPageBody />
            <LandingPageFooter />
        </div>
    );
}

export default LandingPage;