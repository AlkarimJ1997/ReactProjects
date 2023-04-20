import React, { useState, useEffect } from 'react';
import {
    Nav, NavbarContainer, NavLogo,
    MobileIcon, NavMenu, NavItem,
    NavLink, NavBtn, NavBtnLink
} from './NavbarStyles';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
    // States, references
    const [scrollNav, setScrollNav] = useState(false);

    // Add scroll event listener for checking the navbar's position
    useEffect(() => {
        window.addEventListener("scroll", changeNavbar)
    }, [])

    // Method to check if the navbar is scrolled past the top
    const changeNavbar = () => {
        (window.scrollY >= 80) ? setScrollNav(true) : setScrollNav(false);
    }

    return (
        <>
            <IconContext.Provider value={{ color: 'var(--clr-white)' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo
                            to="/"
                            onClick={() => scroll.scrollToTop()}>
                            dolla
                        </NavLogo>
                        <MobileIcon onClick={toggle} >
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLink
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}>
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    to="discover"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}>
                                    Discover
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}>
                                    Services
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    to="signup"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}>
                                    Sign Up
                                </NavLink>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar