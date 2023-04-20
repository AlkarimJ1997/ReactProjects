import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ scrollNav }) => scrollNav ? "#000" : "transparent"};
    height: 80px;
    font-size: 1rem;

    /* Offset for video and smooth scrolling */
    margin-top: -80px;

    /* Keep navbar at top of page */
    position: sticky;
    top: 0;
    z-index: 10;

    /* Media queries */
    @media screen and (max-width: 960px) {
        transition: all 0.8s ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    z-index: 1;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    color: var(--clr-white);
    justify-self: flex-start;
    font-size: 1.5rem;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
`;

export const MobileIcon = styled.div`
    /* Don't show bars icon on desktop */
    display: none;

    /* Media queries */
    @media screen and (max-width: 768px) {
        display: block;
        color: var(--clr-white);
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    /* Media queries */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    height: 100%;
    color: var(--clr-white);
    padding: 0 1rem;
    text-decoration: none;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid var(--clr-green);
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    /* Media queries */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    background: var(--clr-green);
    color: var(--clr-black);
    white-space: nowrap;
    padding: 10px 22px;
    border-radius: 50px;
    font-size: 16px;
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: var(--clr-white);
        color: var(--clr-black);
        transition: all 0.2s ease-in-out;
    }
`;