import styled, { keyframes } from "styled-components";

// Keyframes
const rotate = keyframes`
    100% {
        transform: rotate(1turn);
    }
`;

export const Section = styled.section`
    min-height: ${({ theme }) => `calc(100vh - ${theme.navHeight})`};
    width: 100vw;
    background-color: ${({ theme }) => theme.body};
    position: relative;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    width: 75%;
    margin: 0 auto;

    /* Media queries */
    @media screen and (max-width: 64em) {
        width: 85%;
    }

    @media screen and (max-width: 48em) {
        flex-direction: column-reverse;
        width: 100%;

        & > *:first-child {
            width: 100%;
            margin-top: 2rem;
        }
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
`;

export const Round = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 90%;
    width: 6rem;
    height: 6rem;
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 50%;

    & img {
        width: 100%;
        height: auto;
        animation: ${rotate} 6s linear infinite reverse;
    }

    /* Media queries */
    @media screen and (max-width: 64em) {
        width: 4rem;
        height: 4rem;
        left: none;
        right: 2rem;
        bottom: 100%;
    }

    @media screen and (max-width: 48em) {
        right: 1rem;
    }
`;

export const Circle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    font-size: ${({ theme }) => theme.fontxl};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* Media queries */
    @media screen and (max-width: 64em) {
        width: 2rem;
        height: 2rem;
        font-size: ${({ theme }) => theme.fontlg};
    }
`;