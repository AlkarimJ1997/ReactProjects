import styled from "styled-components";
import { Link } from "react-router-dom";

export const PricingSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--clr-blue);
    padding: 100px 0 160px;
`;

export const PricingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    /* Media queries */
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 30px;
    }
`;

export const PricingHeading = styled.h1`
    color: var(--clr-white);
    font-size: 48px;
    margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    /* Media queries */
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

export const PricingCard = styled(Link)`
    background: var(--clr-placeholder);
    width: 280px;
    height: 500px;
    text-decoration: none;
    border-radius: 4px;
    box-shadow: 0px 6px 20px rgba(56, 125, 255, 0.2);

    /* Middle card */
    &:nth-child(2) {
        margin: 24px;
    }

    &:hover {
        transform: scale(1.06);
        transition: all 0.3s ease-out;
        color: var(--clr-dark);
    }

    /* Media queries */
    @media screen and (max-width: 960px) {
        width: 90%;

        &:hover {
            transform: none;
        }
    }
`;

export const PricingCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    padding: 24px;
    color: var(--clr-white);
`;

export const PricingCardIcon = styled.div`
    margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
    margin-bottom: 5px;
    font-size: 24px;
`;

export const PricingCardCost = styled.h4`
    font-size: 40px;
`;

export const PricingCardLength = styled.p`
    margin-bottom: 24px;
    font-size: 14px;
`;

export const PricingCardFeatures = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    margin: 16px 0 32px;
    color: var(--dark-grey);
`;

export const PricingCardFeature = styled.li`
    margin-bottom: 10px;
`;