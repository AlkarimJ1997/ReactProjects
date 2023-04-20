import React, { useState } from 'react'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
    HeroContainer, HeroContent, HeroItems,
    HeroHeading, HeroBody, HeroButton
} from './HeroSectionStyles';

const HeroSection = () => {
    // States, references
    const [isOpen, setIsOpen] = useState(false);

    // Method to toggle the sidebar
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <HeroContainer>
                <Navbar toggle={toggle} />
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <HeroContent>
                    <HeroItems>
                        <HeroHeading>Greatest Pizza Ever</HeroHeading>
                        <HeroBody>Ready in 60 seconds</HeroBody>
                        <HeroButton>Place Order</HeroButton>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection