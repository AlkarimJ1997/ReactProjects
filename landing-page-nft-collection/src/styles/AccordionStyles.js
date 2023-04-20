import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem;
    margin: 3rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.carouselColor};
    cursor: pointer;
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${({ theme }) => theme.fontsm};
    user-select: none;
`;

export const Reveal = styled.div`
    display: ${({ clicked }) => clicked ? "block" : "none"};
    margin-top: 1rem;
    color: ${({ theme }) => `rgba(${theme.bodyRgba}, 0.6)`};
    font-size: ${({ theme }) => theme.fontsm};
    font-weight: 300;
    line-height: 1.1rem;
    user-select: none;
`;

export const Name = styled.div`
    display: flex;
    align-items: center;
`;

export const Indicator = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontxxl};

    svg {
        width: 1rem;
        height: auto;
        fill: ${({ theme }) => theme.carouselColor};
    }
`;