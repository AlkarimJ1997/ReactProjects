import React from 'react';
import {
    FooterContainer, FooterWrapper, FooterLinksContainer,
    FooterLinksWrapper, FooterLinkColumn, FooterLinkTitle,
    FooterLink, SocialMedia, SocialMediaWrapper, SocialLogo,
    WebsiteRights, SocialIcons, SocialIconLink
} from './FooterStyles';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkColumn>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/about">How it works</FooterLink>
                            <FooterLink to="/about">Testimonials</FooterLink>
                            <FooterLink to="/about">Careers</FooterLink>
                            <FooterLink to="/about">Investors</FooterLink>
                            <FooterLink to="/about">Terms of Service</FooterLink>
                        </FooterLinkColumn>
                        <FooterLinkColumn>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Destinations</FooterLink>
                            <FooterLink to="/">Sponsorships</FooterLink>
                        </FooterLinkColumn>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkColumn>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/">Submit Video</FooterLink>
                            <FooterLink to="/">Ambassadors</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencer</FooterLink>
                        </FooterLinkColumn>
                        <FooterLinkColumn>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">YouTube</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                            <FooterLink to="/">LinkedIn</FooterLink>
                        </FooterLinkColumn>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to="/" onClick={() => scroll.scrollToTop()}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>
                            dolla &copy; {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer