import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { FaTypo3, FaTimes, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    // States, references
    const [clicked, setClicked] = useState(false);
    const [showButton, setShowButton] = useState(true);

    // Hide the button when the screen is small
    useEffect(() => {
        handleButton();
    }, [])

    // Method to display the button if on desktop (not tablet/mobile)
    const handleButton = () => {
        (window.innerWidth <= 960) ? setShowButton(false) : setShowButton(true);
    }

    // Event listener for resizing the window
    window.addEventListener('resize', handleButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={() => setClicked(false)}>
                        REACT <FaTypo3 />
                    </Link>
                    <div className="menu-icon" onClick={() => setClicked(!clicked)}>
                        {clicked ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={() => setClicked(false)}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={() => setClicked(false)}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={() => setClicked(false)}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={() => setClicked(false)}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {showButton && <Button buttonStyle="btn--outline">SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar