import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    position: relative;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    margin: 2rem auto;
    border-bottom: 1px solid ${({ theme }) => theme.text};
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img``;

export const IconList = styled.ul`
    display: flex;
    align-items: center;
    margin: 1rem auto;

    & > * {
        padding-right: 0.5rem;
        transition: all 0.2s ease;

        &:hover {
            transform: scale(1.2);
        }
    }
`;

export const MenuItems = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 1rem;
    width: 50%;
    list-style: none;
`;

export const Item = styled.li`
    width: fit-content;
    cursor: pointer;

    &::after {
        content: "";
        display: block;
        width: 0%;
        height: 2px;
        background: ${({ theme }) => theme.text};
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    margin: 0 auto;

    a {
        text-decoration: underline;
    }
`;