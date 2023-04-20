import styled from "styled-components";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const SliderSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
`;

export const SliderIconLeft = styled(FaArrowAltCircleLeft)`
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: var(--clr-black);
    z-index: 10;
    cursor: pointer;
    user-select: none;
`;

export const SliderIconRight = styled(FaArrowAltCircleRight)`
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: var(--clr-black);
    z-index: 10;
    cursor: pointer;
    user-select: none;
`;

export const SliderCard = styled.div`
    opacity: ${({ active }) => active ? 1 : 0};
    transition-duration: ${({ active }) => active ? "1s" : "1s ease"};
    transform: ${({ active }) => active ? "scale(1.08)" : "scale(1)"};
`;

export const SliderImage = styled.img`
    width: 1000px;
    height: 600px;
    border-radius: 10px;
`;