import styled from "styled-components";

export const Title = styled.h2`
    font-size: ${({ theme }) => theme.fontxxl};
    text-transform: capitalize;
    width: 80%;
    color: ${({ theme }) => theme.text};
    align-self: flex-start;

    & span {
        text-transform: uppercase;
        font-family: "Akaya Telivigala", cursive;
    }

    & .text-1 {
        color: blue;
    }

    & .text-2 {
        color: orange;
    }

    & .text-3 {
        color: red;
    }

    /* Media queries */
    @media screen and (max-width: 70em) {
        font-size: ${({ theme }) => theme.fontxl};
    }

    @media screen and (max-width: 48em) {
        align-self: center;
        text-align: center;
    }

    @media screen and (max-width: 40em) {
        width: 90%;
    }
`;

export const SubTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontlg};
    text-transform: capitalize;
    color: ${({ theme }) => `rgba(${theme.textRgba}, 0.6)`};
    font-weight: 600;
    width: 80%;
    align-self: flex-start;
    margin-bottom: 1rem;

    /* Media queries */
    @media screen and (max-width: 40em) {
        font-size: ${({ theme }) => theme.fontmd};
    }

    @media screen and (max-width: 48em) {
        align-self: center;
        text-align: center;
    }
`;

export const ButtonContainer = styled.div`
    width: 80%;
    align-self: flex-start;

    /* Media queries */
    @media screen and (max-width: 48em) {
        align-self: center;
        text-align: center;

        button {
            margin: 0 auto;
        }
    }
`;