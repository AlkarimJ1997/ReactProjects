import styled from "styled-components";

export const InfoContainer = styled.div`
    background: ${({ lightBg }) => lightBg ? "var(--clr-off-white)" : "var(--clr-black)"};
    color: var(--clr-white);

    /* Media queries */
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    justify-content: center;
    width: 100%;
    height: 860px;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    z-index: 1;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => imgStart ? `'col2 col1'` : `'col1 col2'`};

    /* Media queries */
    @media screen and (max-width: 768px) {
        grid-template-areas: 
            ${({ imgStart }) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const ColumnOne = styled.div`
    grid-area: col1;
    margin-bottom: 15px;
    padding: 0 15px;
`;

export const ColumnTwo = styled.div`
    grid-area: col2;
    margin-bottom: 15px;
    padding: 0 15px;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: var(--clr-green);
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => lightText ? "var(--clr-light-text)" : "var(--clr-black)"};
    margin-bottom: 24px;

    /* Media queries */
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    font-size: 18px;
    line-height: 24px;
    max-width: 440px;
    color: 
        ${({ lightTextDesc }) => lightTextDesc ? "var(--clr-white)" : "var(--clr-black)"};
    margin-bottom: 35px;
`;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;