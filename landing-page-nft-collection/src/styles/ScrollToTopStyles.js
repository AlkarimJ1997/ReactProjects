import styled from "styled-components";

export const Up = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 3rem;
    height: 3rem;
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontxl};
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-radius: 50%;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.2);
    }

    &:active {
        transform: scale(0.9);
    }
`;