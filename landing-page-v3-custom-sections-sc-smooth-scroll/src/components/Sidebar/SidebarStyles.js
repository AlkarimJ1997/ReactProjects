import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
    display: grid;
    align-items: center;
    position: fixed;
    background: var(--bg-sidebar);
    z-index: 999;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    top: ${({ isOpen }) => isOpen ? 0 : -100}%;
`;

export const SidebarIcon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    outline: none;
    font-size: 2rem;
    cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
    color: var(--clr-white);
`;

export const SidebarWrapper = styled.div`
    color: var(--clr-white);
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    list-style: none;

    /* Media queries */
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    color: var(--clr-white);
    cursor: pointer;

    &:hover {
        color: var(--clr-green);
        transition: all 0.2s ease-in-out;
    }
`;

export const SidebarBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarBtn = styled(Link)`
    background: var(--clr-green);
    color: var(--clr-black);
    white-space: nowrap;
    padding: 16px 64px;
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