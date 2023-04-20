import styled from "styled-components";

export const FeatureContainer = styled.div`
    background: 
        linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
        url("images/featured3.jpg");
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--clr-white);
    padding: 0 1rem;
`;

export const FeatureHeading = styled.h1`
    font-size: clamp(3rem, 5vw, 5rem);
`;

export const FeatureBody = styled.p`
    font-size: clamp(1rem, 3vw, 2rem);
    margin-bottom: 1rem;
`;

export const FeatureButton = styled.button`
    padding: 0.6rem 3rem;
    font-size: 1.4rem;
    border: none;
    background: var(--bg-sidebar);
    color: var(--clr-black);
    transition: 0.2s ease-out;

    &:hover {
        background: var(--clr-red);
        color: var(--clr-white);
        cursor: pointer;
        transition: 0.2s ease-out;
    }
`;