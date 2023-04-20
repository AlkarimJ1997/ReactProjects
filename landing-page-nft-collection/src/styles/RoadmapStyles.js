import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.body};
    position: relative;
`;

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    font-size: ${({ theme }) => theme.fontxxl};
    text-transform: capitalize;
    color: ${({ theme }) => theme.text};
    margin: 1rem auto;
    border-bottom: 2px solid ${({ theme }) => theme.text};
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 200vw;
    background-color: ${({ theme }) => theme.body};
    margin: 0 auto;
    position: relative;
`;

export const SVGContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ItemList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    list-style: none;

    & > *:nth-of-type(2n + 1) {
        justify-content: start;

        div {
            border-radius: 50px 0 50px 0;
            text-align: right;
        }

        p {
            border-radius: 40px 0 40px 0;
        }
    }

    & > *:nth-of-type(2n) {
        justify-content: end;

        div {
            border-radius: 0 50px 0 50px;
            text-align: left;
        }

        p {
            border-radius: 0 40px 0 40px;
        }
    }
`;

export const Item = styled.li`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const ItemContainer = styled.div`
    width: 40%;
    height: fit-content;
    padding: 1rem;
    border: 3px solid ${({ theme }) => theme.text};
`;

export const Box = styled.p`
    height: fit-content;
    background-color: ${({ theme }) => theme.carouselColor};
    color: ${({ theme }) => theme.text};
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.text};
    position: relative;
`;

export const SubTitle = styled.span`
    display: block;
    font-size: ${({ theme }) => theme.fontxl};
    text-transform: capitalize;
    color: ${({ theme }) => theme.text};
`;

export const Text = styled.span`
    display: block;
    font-size: ${({ theme }) => theme.fontsm};
    /* text-transform: capitalize; */
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    margin: 0.5rem 0;
`;