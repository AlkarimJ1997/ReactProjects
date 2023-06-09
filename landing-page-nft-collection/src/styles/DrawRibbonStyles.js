import styled, { keyframes } from "styled-components";

// Keyframes
const Bounce = keyframes`
    from {
        transform: translateX(-50%) scale(0.5);
    }

    to {
        transform: translateX(-50%) scale(1);
    }
`

export const VectorContainer = styled.div`
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    overflow: hidden;

    & svg {
        width: 100%;
        height: 100%;
    }
`;

export const Ball = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.text};
    animation: ${Bounce} 0.5s linear infinite alternate;
`;