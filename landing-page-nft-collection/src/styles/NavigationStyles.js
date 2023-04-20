import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    background-color: ${({ theme }) => theme.body};
`;

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: ${({ theme }) => theme.navHeight};
    margin: 0 auto;
`;

export const NavMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    /* Media queries */
    @media screen and (max-width: 64em) {
        flex-direction: column;
        justify-content: center;
        position: fixed;
        top: ${({ theme }) => theme.navHeight};
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: ${({ theme }) => `calc(100vh - ${theme.navHeight})`};
        background-color: ${({ theme }) => `rgba(${theme.bodyRgba}, 0.85)`};
        backdrop-filter: blur(2px);
        transform: ${({ clicked }) => clicked ? "translateY(0)" : "translateY(100%)"};
        z-index: 50;
        transition: all 0.3s ease;
    }
`;

export const NavItem = styled.li`
    margin: 0 1rem;
    color: ${({ theme }) => theme.text};
    cursor: pointer;

    &::after {
        content: "";
        display: block;
        width: 0%;
        height: 2px;
        background: ${({ theme }) => theme.text};
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }

    /* Media queries */
    @media screen and (max-width: 64em) {
        margin: 1rem 0;

        &::after {
            display: none;
        }
    }
`;

export const HamburgerMenu = styled.span`
    display: none;
    justify-content: center;
    align-items: center;
    width: ${({ clicked }) => clicked ? "2rem" : "1.5rem"};
    height: 2px;
    background: ${({ theme }) => theme.text};
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%) ${({ clicked }) => clicked ? "rotate(90deg)" : "rotate(0)"};
    cursor: pointer;
    user-select: none;
    transition: all 0.3s ease;

    &::after, &::before {
        content: "";
        width: ${({ clicked }) => clicked ? "1rem" : "1.5rem"};
        height: 2px;
        background: ${({ theme }) => theme.text};
        position: absolute;
        right: ${({ clicked }) => clicked ? "-2px" : "0"};
        transition: all 0.3s ease;
    }

    &::after {
        top: ${({ clicked }) => clicked ? "0.3rem" : "0.5rem"};
        transform: ${({ clicked }) => clicked ? "rotate(-40deg)" : "rotate(0)"};
    }

    &::before {
        bottom: ${({ clicked }) => clicked ? "0.3rem" : "0.5rem"};
        transform: ${({ clicked }) => clicked ? "rotate(40deg)" : "rotate(0)"};
    }

    /* Media queries */
    @media screen and (max-width: 64em) {
        display: flex;
    }
`;

export const Mobile = styled.div`
    display: none;

    /* Media queries */
    @media screen and (max-width: 64em) {
        display: inline-block;
    }
`;

export const Desktop = styled.div`
    /* Media queries */
    @media screen and (max-width: 64em) {
        display: none;
    }
`;