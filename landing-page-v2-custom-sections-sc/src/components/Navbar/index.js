import React, { useEffect, useState } from 'react'
import {
    Nav, NavbarContainer, NavLogo, NavIcon,
    MobileIcon, NavMenu, NavItem, NavLink,
    NavItemBtn, NavBtnLink
} from './NavbarStyles';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Button } from '../../globalStyles';

const Navbar = () => {
    // States, references
    const [clicked, setClicked] = useState(false);
    const [desktopButton, setDesktopButton] = useState(true);

    // Check for tablet/mobile on page load
    useEffect(() => {
        showButton();
    }, []);

    // Method to not show desktop button on tablet/mobile
    const showButton = () => {
        (window.innerWidth <= 960) ? setDesktopButton(false) : setDesktopButton(true);
    }

    // Event listener for desktop button on resize
    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={() => setClicked(false)}>
                            <NavIcon /> ULTRA
                        </NavLogo>
                        <MobileIcon onClick={() => setClicked(!clicked)}>
                            {clicked ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu clicked={clicked} onClick={() => setClicked(!clicked)}>
                            <NavItem>
                                <NavLink to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/services">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/products">Products</NavLink>
                            </NavItem>
                            <NavItemBtn>
                                {desktopButton ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/sign-up">
                                        <Button fontBig primary>SIGN UP</Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar