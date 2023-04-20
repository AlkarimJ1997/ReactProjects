import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    font-weight: 700;
    height: 80px;
    background: transparent;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    color: var(--clr-white);
    font-size: 2rem;
    text-decoration: none;
    cursor: pointer;

    /* Media queries */
    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    color: var(--clr-white);
    top: 0;
    right: 0;
    cursor: pointer;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`;

export const PizzaSlice = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`;