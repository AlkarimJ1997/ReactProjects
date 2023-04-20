import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: var(--bg-products-section);
    color: var(--clr-white);
`;

export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`;

export const ProductsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
`;

export const ProductCard = styled.div`
    width: 300px;
    line-height: 2;
    margin: 0 2rem;
`;

export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px var(--clr-yellow);
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;

export const ProductTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
`;

export const ProductDesc = styled.p`
    margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

export const ProductButton = styled.button`
    padding: 1rem 4rem;
    font-size: 1rem;
    border: none;
    background: var(--clr-red);
    color: var(--clr-white);
    border-radius: 4px;
    transition: 0.2s ease-out;

    &:hover {
        background: var(--bg-sidebar);
        color: var(--clr-black);
        cursor: pointer;
        transition: 0.2s ease-out;
    }
`;