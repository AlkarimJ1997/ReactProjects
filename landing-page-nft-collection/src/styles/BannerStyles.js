import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 25rem;
    background-color : ${({ theme }) => `rgba(${theme.textRgba}, 0.9)`};
    border-top: 2px solid ${({ theme }) => theme.text};
    position: relative;
    overflow: hidden;
`;

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.2;

    img {
        width: 15rem;
        height: auto;
    }
`;

export const Title = styled.h1`
    width: 35%;
    font-size: ${({ theme }) => theme.fontxxxl};
    padding: 1rem 2rem;
    color: ${({ theme }) => theme.body};
    text-transform: capitalize;
    text-shadow: 1px 1px 2px ${({ theme }) => theme.text};
    z-index: 10;
`;

export const BtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 35%;
`;

export const JoinNow = styled.button`
    display: inline-block;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    outline: none;
    border: none;
    font-size: ${({ theme }) => theme.fontlg};
    font-weight: 600;
    padding: 1.5rem 3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;

    &:hover {
        transform: scale(0.9);
    }

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid ${({ theme }) => theme.body};
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all 0.2s ease;
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`;