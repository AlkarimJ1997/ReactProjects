import styled from "styled-components";

export const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    background: var(--clr-white);
`;

export const AccordionContainer = styled.div`
    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--bg-accordion);
    width: 100%;
    text-align: center;
    color: var(--clr-white);
    cursor: pointer;
    user-select: none;
`;

export const Heading = styled.h1`
    font-size: 2rem;
    padding: 2rem;
`;

export const Span = styled.span`
    margin-right: 1.5rem;
`;

export const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background: var(--bg-dropdown);
    color: var(--clr-icons);
    border-bottom: 1px solid var(--clr-icons);
    border-top: 1px solid var(--clr-icons);
`;

export const Body = styled.p`
    font-size: 2rem;
`;