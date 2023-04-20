import React, { useState } from 'react';
import {
    HeroContainer, HeroBg, VideoBg,
    HeroContent, HeroTitle, HeroBody,
    HeroBtnWrapper, ArrowForward, ArrowRight
} from './HeroSectionStyles';
import { Button } from '../Button';
import Video from '../../videos/video.mp4';

const HeroSection = () => {
    // States, references
    const [hover, setHover] = useState(false);

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroTitle>Virtual Banking Made Easy</HeroTitle>
                <HeroBody>
                    Sign up for a new account today and receive $250 in credit towards your next payment.
                </HeroBody>
                <HeroBtnWrapper>
                    <Button
                        to="signup"
                        onMouseEnter={() => setHover(!hover)}
                        onMouseLeave={() => setHover(!hover)}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection