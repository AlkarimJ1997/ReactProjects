import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background: var(--bg-footer);
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    max-width: 1300px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    width: 100%;
    max-width: 1300px;
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 16px auto 0 auto;

    /* Media queries */
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-self: flex-start;
    color: var(--clr-white);
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 16px;
    cursor: pointer;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: var(--clr-white);
    font-size: 24px;
    transition: 0.2s ease-in-out;

    &:hover {
        color: var(--clr-yellow);
        transition: 0.2s ease-in-out;
    }
`;