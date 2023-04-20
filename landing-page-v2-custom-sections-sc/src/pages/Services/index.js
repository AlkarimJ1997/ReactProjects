import React from 'react';
import Pricing from '../../components/Pricing';
import InfoSection from '../../components/InfoSection';
import { homeObjThree } from './Data';

const Services = () => {
    return (
        <>
            <Pricing />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Services