import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    list-style: none;
    text-decoration: none;
    color: var(--clr-link);
    padding: 20px;
    font-size: 18px;

    &:hover {
        background: var(--clr-grey);
        border-left: 4px solid var(--clr-purple);
        cursor: pointer;
    }
`;

export const SubMenuWrapper = styled.div``;

export const SubMenuSpan = styled.span`
    margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    background: var(--clr-dark-grey);
    height: 60px;
    text-decoration: none;
    color: var(--clr-white);
    padding-left: 3rem;
    font-size: 18px;

    &:hover {
        background: var(--clr-purple);
        cursor: pointer;
    }
`;