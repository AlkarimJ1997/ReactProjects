import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    position: relative;
`;

export const Title = styled.h1`
    width: fit-content;
    font-size: ${({ theme }) => theme.fontxxl};
    text-transform: uppercase;
    color: ${({ theme }) => theme.body};
    margin: 1rem auto;
    border-bottom: 2px solid ${({ theme }) => theme.body};
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    margin: 2rem auto;
`;

export const Box = styled.div`
    width: 45%;
`;