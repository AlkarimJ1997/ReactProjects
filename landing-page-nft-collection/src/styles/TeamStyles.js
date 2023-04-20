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
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 75%;
    margin: 2rem auto;
`;

export const Item = styled.div`
    width: calc(20rem - 4vw);
    padding: 1rem 0;
    margin: 2rem 1rem;
    color: ${({ theme }) => theme.body};
    border: 2px solid ${({ theme }) => theme.text};
    border-radius: 20px;
    position: relative;
    backdrop-filter: blur(4px);
    z-index: 5;
    transition: all 0.3s ease;

    &:hover {
        img {
            transform: translateY(-2rem) scale(1.2);
        }
    }
`;

export const ImageContainer = styled.div`
    width: 80%;
    background-color: ${({ theme }) => theme.carouselColor};
    padding: 1rem;
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 20px;
    cursor: pointer;

    img {
        width: 100%;
        height: auto;
        transition: all 0.3s ease;
    }
`;

export const Name = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontlg};
    color: ${({ theme }) => theme.text};
    text-transform: uppercase;
    margin-top: 1rem;
`;

export const Position = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontmd};
    font-weight: 400;
    color: ${({ theme }) => `rgba(${theme.textRgba}, 0.9)`};
    text-transform: capitalize;
    margin-top: 1rem;
`;