import React from 'react';
import { 
    FeatureContainer, FeatureHeading, FeatureBody, FeatureButton 
} from './FeatureStyles';

const Feature = () => {
    return (
        <FeatureContainer>
            <FeatureHeading>Pizza of the Day</FeatureHeading>
            <FeatureBody>
                Truffle alfredo sauce topped with 24 carat gold dust.
            </FeatureBody>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature