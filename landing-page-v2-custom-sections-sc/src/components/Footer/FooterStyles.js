import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--bg-nav);
    padding: 4rem 0 2rem 0;
`;

export const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 24px;
    margin-bottom: 24px;
    color: var(--clr-white);
`;

export const FooterSubHeading = styled.p`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
`;

export const FooterSubText = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    /* Media queries */
    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`;

export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 16px;
    border: 1px solid var(--clr-white);

    &::placeholder {
        color: var(--clr-placeholder);
    }

    /* Media queries */
    @media screen and (max-width: 820px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1000px;

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

export const FooterLinksColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: var(--clr-white);

    /* Media queries */
    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: var(--clr-white);
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
        color: var(--clr-dark-blue);
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
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    /* Media queries */
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    display: flex;
    align-items: center;
    color: var(--clr-white);
    justify-self: flex-start;
    text-decoration: none;
    font-size: 2rem;
    margin-bottom: 16px;
    cursor: pointer;
`;

export const SocialIcon = styled(FaMagento)`
    margin-right: 10px;
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

    &:hover {
        color: var(--clr-dark-blue);
        transition: 0.3s ease-out;
    }
`;

