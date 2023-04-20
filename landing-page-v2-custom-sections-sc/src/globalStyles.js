import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* Global CSS variables */
    :root {
        --bg-nav: #101522;

        --clr-placeholder: #242424;
        
        --clr-white: #fff;
        --clr-dark: #1c2237;
        --clr-grey: #f7f8fa;
        --clr-dark-grey: #a9b3c1;
        --clr-blue: #4b59f7;
        --clr-dark-blue: #0467fb;
    }

    /* Remove default margin/padding and reset box-sizing */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 50px;

    /* Media queries */
    @media screen and (max-width: 991px) {
        padding: 0 30px;
    }
`;

export const Button = styled.button`
    background: ${({ primary }) => primary ? 'var(--clr-blue)' : 'var(--clr-dark-blue)'};
    border-radius: 4px;
    white-space: nowrap;
    padding: ${({ big }) => big ? '12px 64px' : '10px 20px'};
    color: var(--clr-white);
    font-size: ${({ fontBig }) => fontBig ? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        color: var(--clr-white);
        background: 
            ${({ primary }) => primary ? 'var(--clr-dark-blue)' : 'var(--clr-blue)'};
        transition: all 0.3s ease-out;
    }

    /* Media queries */
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export default GlobalStyles;