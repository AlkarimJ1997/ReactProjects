import styled from "styled-components";
import Arrow from "../assets/Arrow.svg";

export const Container = styled.div`
    width: 25vw;
    height: 70vh;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.carouselColor};
        border-radius: 20px;
        -webkit-transform: translateZ(0);
        -webkit-backface-visibility: hidden;
    }

    .swiper-button-next {
        color: ${({ theme }) => theme.text};
        right: 0;
        top: 60%;
        width: 4rem;
        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;

        &::after {
            display: none;
        }
    }

    .swiper-button-prev {
        color: ${({ theme }) => theme.text};
        left: 0;
        top: 60%;
        width: 4rem;
        transform: rotate(180deg);
        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;

        &::after {
            display: none;
        }
    }

    /* Media queries */
    @media screen and (max-width: 70em) {
        height: 60vh;
    }

    @media screen and (max-width: 64em) {
        width: 30vw;
        height: 50vh;

        .swiper-button-next,
        .swiper-button-prev {
            width: 3rem;
        }
    }

    @media screen and (max-width: 48em) {
        width: 40vw;
        height: 50vh;
    }

    @media screen and (max-width: 30em) {
        width: 60vw;
        height: 45vh;

        .swiper-button-next,
        .swiper-button-prev {
            width: 2rem;
        }
    }
`;