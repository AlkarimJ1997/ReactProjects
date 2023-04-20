import styled from "styled-components";

export const LogoText = styled.h1`
    font-family: "Akaya Telivigala", cursive;
    font-size: ${({ theme }) => theme.fontxxxl};
    color: ${({ theme }) => theme.text};
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.1);
    }

    /* Media queries */
    @media screen and (max-width: 64em) {
        font-size: ${({ theme }) => theme.fontxxl};
    }
`;