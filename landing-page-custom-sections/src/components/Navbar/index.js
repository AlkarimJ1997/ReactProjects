import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Button from '../Button';
import './Navbar.css';

const Navbar = () => {
    // States, references
    const [clicked, setClicked] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    // Check screen size on page load for mobile button display
    useEffect(() => {
        showMobileButton();
    }, [])

    // Method to show mobile button for small screens
    const showMobileButton = () => {
        (window.innerWidth <= 960) ? setIsDesktop(false) : setIsDesktop(true);
    }

    // Event listener to show mobile button on resize
    window.addEventListener('resize', showMobileButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={() => setClicked(false)}>
                            <FaGithub className="navbar-icon" />
                            REACT
                        </Link>
                        <div className="menu-icon" onClick={() => setClicked(!clicked)}>
                            {clicked ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={() => setClicked(false)}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-links" onClick={() => setClicked(false)}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-links" onClick={() => setClicked(false)}>Products</Link>
                            </li>
                            <li className="nav-btn">
                                <Link to="/sign-up" className="btn-link">
                                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                                </Link>
                                <Link to="/sign-up" className="btn-link">
                                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile" onClick={() => setClicked(false)}>
                                        SIGN UP
                                    </Button>
                                </Link>
                                {/* {isDesktop ? (
                                <Link to="/sign-up" className="btn-link">
                                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                                </Link>
                            ) : (
                                <Link to="/sign-up" className="btn-link">
                                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile" onClick={() => setClicked(false)}>
                                        SIGN UP
                                    </Button>
                                </Link>
                            )} */}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar