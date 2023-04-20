import React from 'react';
import Button from '../Button';
import { FaPlayCircle } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
            {/* Video can be replace with a picture here */}
            {/* <video src={video2} autoPlay loop muted /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    WATCH TRAILER <FaPlayCircle className="playIcon" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection