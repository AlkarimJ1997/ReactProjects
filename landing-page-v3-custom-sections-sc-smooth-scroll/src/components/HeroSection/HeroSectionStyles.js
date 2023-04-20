import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--bg-hero);
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    /* Dark layer over hero section */
    ::before {
        content: "";
        position: absolute;
        inset: 0;
        background: var(--bg-dark-gradient);
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: var(--bg-video);
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
`;

export const HeroTitle = styled.h1`
    color: var(--clr-white);
    font-size: 48px;
    text-align: center;

    /* Media queries */
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroBody = styled.p`
    color: var(--clr-white);
    font-size: 24px;
    margin-top: 24px;
    text-align: center;
    max-width: 600px;

    /* Media queries */
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
`;

export const ArrowForward = styled(MdArrowForward)`
    font-size: 20px;
    margin-left: 8px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    font-size: 20px;
    margin-left: 8px;
`;