import styled from "styled-components";

export const InfoSec = styled.div`
    color: var(--clr-white);
    padding: 160px 0;
    background: ${({ lightBg }) => lightBg ? "var(--clr-white)" : "var(--bg-nav)"};
`;

export const InfoRow = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: ${({ imgStart }) => imgStart ? "row-reverse" : "row"};
    margin: 0 -15px -15px -15px;
`;

export const InfoColumn = styled.div`
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
    margin-bottom: 15px;
    padding: 0 15px;

    /* Media queries */
    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    /* Media queries */
    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`;

export const TopLine = styled.div`
    color: 
        ${({ lightTopLine }) => lightTopLine ? "var(--clr-dark-grey)" : "var(--clr-blue)"};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

export const Heading = styled.div`
    color: ${({ lightText }) => lightText ? "var(--clr-grey)" : "var(--clr-dark)"};
    font-size: 48px;
    line-height: 1.1;
    margin-bottom: 24px;
`;

export const Subtitle = styled.p`
    color: ${({ lightTextDesc }) => lightTextDesc ? "var(--clr-dark-grey)" : "var(--clr-dark)"};
    max-width: 440px;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 35px;
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({ start }) => start ? "flex-start" : "flex-end"};
`;

export const Img = styled.img`
    max-width: 100%;
    max-height: 500px;
    display: inline-block;
    padding-right: 0;
    border: 0;
    vertical-align: middle;
`;