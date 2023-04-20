import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const ModalBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
`;

export const ModalWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 800px;
    height: 500px;
    background: var(--clr-white);
    color: var(--clr-black);
    border-radius: 10px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 10;
`;

export const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: var(--clr-black);
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: var(--bg-button);
`;

export const ModalHeading = styled.h1`
    margin-bottom: 1rem;
`;

export const ModalBody = styled.p`
    margin-bottom: 1rem;
`;

export const ModalButton = styled.button`
    padding: 10px 24px;
    background: var(--bg-button);
    color: var(--clr-white);
    border: none;
    border-radius: 4px;

    &:hover {
        background: var(--clr-blue);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }
`;

export const CloseButton = styled(MdClose)`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
    cursor: pointer;
`;