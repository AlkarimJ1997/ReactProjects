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
    max-width: 1100px;
    padding: 48px 24px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    /* Media queries */
    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    /* Media queries */
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 160px;
    margin: 16px;
    text-align: left;
    box-sizing: border-box;
    color: var(--clr-white);

    /* Media queries */
    @media screen and (max-width: 420px) {
        width: 100%;
        margin: 0;
        padding: 10px;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: var(--clr-white);
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 0.5rem;

    &:hover {
        color: var(--clr-green);
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    width: 100%;
    max-width: 1000px;
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    /* Media queries */
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: var(--clr-white);
    font-weight: bold;
    justify-self: start;
    text-decoration: none;
    margin-bottom: 16px;
    cursor: pointer;
`;

export const WebsiteRights = styled.small`
    color: var(--clr-white);
    margin-bottom: 16px;
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
    text-decoration: none;

    &:hover {
        color: var(--clr-green);
        transition: 0.3s ease-out;
    }
`;