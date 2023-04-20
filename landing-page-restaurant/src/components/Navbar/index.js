import React from 'react';
import { Nav, NavLink, NavIcon, PizzaSlice } from './NavbarStyles';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to="/">Pizza</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <PizzaSlice />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar