import { createGlobalStyle } from "styled-components";
import "@fontsource/sora";
import "@fontsource/akaya-telivigala";

export const GlobalStyles = createGlobalStyle`
    /* Reset box-sizing and default margin/padding */
    *, *::before, *::after {
        /* box-sizing: border-box; */
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Sora", sans-serif;
        overflow-x: hidden;
    }

    /* Reset headings */
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }

    /* Reset links */
    a {
        color: inherit;
        text-decoration: none;
    }
`;