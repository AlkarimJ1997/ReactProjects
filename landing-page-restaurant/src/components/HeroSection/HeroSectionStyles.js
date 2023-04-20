import styled from "styled-components";

export const HeroContainer = styled.div`
    background: 
        linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
        url("images/pizza-3.jpg");
    height: 100vh;
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div`
    width: 100vw;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 650px;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    color: var(--clr-white);
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    /* Media queries */
    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;

export const HeroHeading = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px var(--clr-yellow);
    letter-spacing: 3px;
`;

export const HeroBody = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
`;

export const HeroButton = styled.button`
    padding: 1rem 4rem;
    font-size: 1.4rem;
    border: none;
    background: var(--clr-red);
    color: var(--clr-white);
    transition: 0.2s ease-out;

    &:hover {
        background: var(--bg-sidebar);
        color: var(--clr-black);
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;