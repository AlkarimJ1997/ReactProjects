import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.text};
    position: relative;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    margin: 0 auto;

    /* Media queries */
    @media screen and (max-width: 70em) {
        width: 85%;
    }

    @media screen and (max-width: 64em) {
        width: 100%;
        flex-direction: column;

        & > *:last-child {
            width: 80%;
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

export const Title = styled.h2`
    font-size: ${({ theme }) => theme.fontxxl};
    text-transform: capitalize;
    width: 80%;
    color: ${({ theme }) => theme.body};
    align-self: flex-start;
    margin: 0 auto;
`;

export const SubText = styled.p`
    font-size: ${({ theme }) => theme.fontlg};
    font-weight: 400;
    width: 80%;
    color: ${({ theme }) => theme.body};
    align-self: flex-start;
    margin: 1rem auto;
`;

export const SubTextLight = styled.p`
    font-size: ${({ theme }) => theme.fontmd};
    font-weight: 400;
    width: 80%;
    color: ${({ theme }) => `rgba(${theme.bodyRgba}, 0.6)`};
    align-self: flex-start;
    margin: 1rem auto;
`;

export const ButtonContainer = styled.div`
    width: 80%;
    align-self: flex-start;
    margin: 1rem auto;
`;
