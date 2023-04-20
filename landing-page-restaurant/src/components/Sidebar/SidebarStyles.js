import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
    display: grid;
    align-items: center;
    background: var(--bg-sidebar);
    width: 350px;
    height: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    right: ${({ isOpen }) => isOpen ? "0" : "-1000px"};
    transition: 0.3s ease-in-out;

    /* Media queries */
    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

export const SidebarIcon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    outline: none;
    cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
    color: var(--clr-black);
`;

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;

    /* Media queries */
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(3, 60px);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    color: var(--clr-black);
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: var(--clr-red);
    }
`;

export const SidebarButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarButton = styled(Link)`
    padding: 16px 64px;
    background: var(--clr-red);
    white-space: nowrap;
    color: var(--clr-white);
    font-size: 16px;
    outline: none;
    border: none;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        background: var(--clr-white);
        color: #010606;
        transition: 0.2s ease-in-out;
    }
`;