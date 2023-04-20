import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
    background: var(--bg-nav);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;

    /* Always at top of page */
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    /* Container styles */
    ${Container}
`;

export const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-self: flex-start;
    color: var(--clr-white);
    text-decoration: none;
    font-size: 2rem;
    cursor: pointer;
`

export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;

    /* Media queries */
    @media screen and (max-width: 960px) {
        display: block;
        font-size: 1.8rem;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;

    /* Media queries */
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;

        /* Swoop in effect when bars icon is clicked */
        left: ${({ clicked }) => clicked ? '0' : '-100%'};
        
        opacity: 1;
        transition: all 0.5s ease;
        background: var(--bg-nav);
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid var(--clr-blue);
    }

    /* Media queries */
    @media screen and (max-width: 960px) {
        width: 100%;
    }

    &:hover {
        border: none;
    }
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--clr-white);
    padding: 0.5rem 1rem;
    height: 100%;

    /* Media queries */
    @media screen and (max-width: 960px) {
        display: table;
        text-align: center;
        padding: 2rem;
        width: 100%;

        &:hover {
            color: var(--clr-blue);
            transition: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
    /* Media queries */
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;