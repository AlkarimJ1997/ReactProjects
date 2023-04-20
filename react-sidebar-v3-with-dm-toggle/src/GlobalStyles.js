import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* Reset box-sizing and default margin/padding */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }

    body {
        min-height: 100vh;
    }
`;