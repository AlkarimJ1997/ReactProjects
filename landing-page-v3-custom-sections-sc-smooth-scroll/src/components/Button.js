import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Button = styled(LinkScroll)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ primary }) => primary ? "var(--clr-green)" : "var(--clr-black)"};
    white-space: nowrap;
    border-radius: 50px;
    padding: ${({ big }) => big ? "14px 48px" : "12px 30px"};
    color: ${({ dark }) => dark ? "var(--clr-black)" : "var(--clr-white)"};
    font-size: ${({ fontBig }) => fontBig ? "20px" : "16px"};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: ${({ primary }) => primary ? "var(--clr-white)" : "var(--clr-green)"};
        transition: all 0.2s ease-in-out;
    }
`;