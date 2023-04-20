import React from 'react';
import { Button } from '../../globalStyles';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {
    FooterContainer, FooterSubscription, FooterSubHeading,
    FooterSubText, Form, FormInput, FooterLinksContainer,
    FooterLinksWrapper, FooterLinksColumn, FooterLinkTitle,
    FooterLink, SocialMedia, SocialMediaWrapper, SocialLogo,
    WebsiteRights, SocialIcons, SocialIconLink, SocialIcon,
} from './FooterStyles'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time.</FooterSubText>
                <Form>
                    <FormInput type="email" name="email" placeholder="Your Email" />
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksColumn>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksColumn>
                    <FooterLinksColumn>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/">Contact</FooterLink>
                        <FooterLink to="/">Support</FooterLink>
                        <FooterLink to="/">Destinations</FooterLink>
                        <FooterLink to="/">Sponsorships</FooterLink>
                    </FooterLinksColumn>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksColumn>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/">Submit Video</FooterLink>
                        <FooterLink to="/">Ambassadors</FooterLink>
                        <FooterLink to="/">Agency</FooterLink>
                        <FooterLink to="/">Influencer</FooterLink>
                        <FooterLink to="/">Branding</FooterLink>
                    </FooterLinksColumn>
                    <FooterLinksColumn>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Youtube</FooterLink>
                        <FooterLink to="/">Twitter</FooterLink>
                        <FooterLink to="/">LinkedIn</FooterLink>
                    </FooterLinksColumn>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo to="/">
                        <SocialIcon />
                        ULTRA
                    </SocialLogo>
                    <WebsiteRights>ULTRA &copy; {new Date().getFullYear()}</WebsiteRights>
                    <SocialIcons>
                        {/* Note: a tags are used over react-router-dom links here to go to new pages (not on the website) */}
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
        </FooterContainer>
    )
}

export default Footer