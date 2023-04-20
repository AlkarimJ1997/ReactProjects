import styled from "styled-components";

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 800px;
    background: var(--clr-black);

    /* Media queries */
    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ServicesHeading = styled.h1`
    font-size: 2.5rem;
    color: var(--clr-white);
    margin-bottom: 64px;

    /* Media queries */
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    grid-gap: 16px;
    padding: 0 50px;

    /* Media queries */
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: var(--clr-white);
    max-height: 340px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    width: 160px;
    height: 160px;
    margin-bottom: 10px;
`;

export const ServicesSubHeading = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesBody = styled.p`
    font-size: 1rem;
    text-align: center;
`;