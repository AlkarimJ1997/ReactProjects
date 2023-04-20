import React from 'react';
import {
    ServicesContainer, ServicesHeading, ServicesWrapper,
    ServicesCard, ServicesIcon, ServicesSubHeading,
    ServicesBody
} from './ServicesSectionStyles';

const ServicesSection = () => {
    return (
        <ServicesContainer id="services">
            <ServicesHeading>Our Services</ServicesHeading>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src="images/svg-1.svg" />
                    <ServicesSubHeading>
                        Reduce expenses
                    </ServicesSubHeading>
                    <ServicesBody>
                        We help reduce your fees and increase your overall revenue.
                    </ServicesBody>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="images/svg-4.svg" />
                    <ServicesSubHeading>
                        Virtual Offices
                    </ServicesSubHeading>
                    <ServicesBody>
                        You can access our platform online anywhere in the world.
                    </ServicesBody>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="images/svg-5.svg" />
                    <ServicesSubHeading>
                        Premium Benefits
                    </ServicesSubHeading>
                    <ServicesBody>
                        Unlock our special membership card that returns 5% cash back.
                    </ServicesBody>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServicesSection