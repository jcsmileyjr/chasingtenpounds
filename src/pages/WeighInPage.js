import React from 'react'
import WeighInHeader from '../components/AuthUserHeader';
import WeighInPageBody from '../components/WeighInPageBody';

const WeighInPage = () => {

    return (
        <div>
            <WeighInHeader type="authenticated" text="Weigh In"/>
            <WeighInPageBody />
        </div>
    );
}

export default WeighInPage