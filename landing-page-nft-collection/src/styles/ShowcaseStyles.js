import styled, { keyframes } from "styled-components";

// Keyframes
const move = keyframes`
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.text};
    position: relative;

    & > *:first-child {
        animation-duration: 20s;
    }

    & > *:last-child {
        animation-duration: 15s;
    }
`;

export const Row = styled.div`
    display: flex;
    box-sizing: content-box;
    white-space: nowrap;
    margin: 2rem 0;
    animation: ${move} linear infinite ${({ direction }) => direction};
`;

export const ImgContainer = styled.div`
    width: 15rem;
    background-color: ${({ theme }) => theme.body};
    margin: 0 1rem;
    border-radius: 20px;
    cursor: pointer;

    img {
        width: 100%;
        height: auto;
    }
`;

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    background-color: ${({ theme }) => theme.text};
    border: 2px solid ${({ theme }) => `rgba(${theme.bodyRgba}, 0.5)`};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    span {
        font-size: ${({ theme }) => theme.fontsm};
        color: ${({ theme }) => `rgba(${theme.bodyRgba}, 0.5)`};
        font-weight: 600;
        line-height: 1.5rem;
    }

    h1 {
        font-size: ${({ theme }) => theme.fontmd};
        color: ${({ theme }) => theme.body};
        font-weight: 600;
    }
`;

export const Price = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 1rem;
        height: auto;
    }
`;