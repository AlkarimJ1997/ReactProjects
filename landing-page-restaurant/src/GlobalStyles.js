import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* Global CSS variables */
    :root {
        --bg-sidebar: #ffc500;
        --bg-products-section: #150f0f;
        --bg-footer: #0d0909;

        --clr-red: #e31837;
        --clr-yellow: #fdc500;
        --clr-white: #fff;
        --clr-black: #000;
    }

    html {
        overflow-x: hidden;
    }

    /* Reset box-sizing and default margin/padding */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Kanit', sans-serif;
    }
`;