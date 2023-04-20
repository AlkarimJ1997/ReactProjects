import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: var(--bg-sidebar);
    height: 80px;
`;

export const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    font-size: 2rem;
    margin-left: 2rem;
`;

export const BarsIcon = styled(FaBars)``;

export const SidebarNav = styled.nav`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => isOpen ? "0" : "-100%"};
    background: var(--bg-sidebar);
    width: 250px;
    height: 100vh;
    z-index: 10;
    transition: all 0.3s ease-in-out;
`;

export const SidebarWrapper = styled.div`
    width: 100%;
`;

export const CloseIcon = styled(AiOutlineClose)``;

