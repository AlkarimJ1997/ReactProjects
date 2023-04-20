import React from "react";
import Banner from "./Banner";
import Logo from "../components/Logo";
import {
    Section, Container, Left,
    IconList, MenuItems, Item,
    Bottom
} from "../styles/FooterStyles";

// Icons
import { Facebook } from "../Icons/Facebook";
import { Instagram } from "../Icons/Instagram";
import { Twitter } from "../Icons/Twitter";
import { LinkedIn } from "../Icons/LinkedIn";

const Footer = () => {
    // Method to scroll to corresponding section
    const scrollTo = (id) => {
        const element = document.getElementById(id);

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }

    return (
        <Section>
            <Banner />
            <Container>
                <Left>
                    <Logo />
                    <IconList>
                        <a
                            href="http://facebook.com"
                            target="_blank"
                            rel="noreferrer">
                            <Facebook />
                        </a>
                        <a
                            href="http://instagram.com"
                            target="_blank"
                            rel="noreferrer">
                            <Instagram />
                        </a>
                        <a
                            href="http://twitter.com"
                            target="_blank"
                            rel="noreferrer">
                            <Twitter />
                        </a>
                        <a
                            href="http://linkedin.com"
                            target="_blank"
                            rel="noreferrer">
                            <LinkedIn />
                        </a>
                    </IconList>
                </Left>
                <MenuItems>
                    <Item onClick={() => scrollTo("home")}>Home</Item>
                    <Item onClick={() => scrollTo("about")}>About</Item>
                    <Item onClick={() => scrollTo("roadmap")}>RoadMap</Item>
                    <Item onClick={() => scrollTo("showcase")}>Showcase</Item>
                    <Item onClick={() => scrollTo("team")}>Team</Item>
                    <Item onClick={() => scrollTo("faq")}>FAQ</Item>
                </MenuItems>
            </Container>
            <Bottom>
                <span>
                    &copy; {new Date().getFullYear()} Weirdos Club. All rights reserved.
                </span>
                <span>
                    Made with &#10084; by <a
                        href="http://youtube.com"
                        target="_blank"
                        rel="noreferrer">
                        CodeBucks
                    </a>
                </span>
            </Bottom>
        </Section>
    )
}

export default Footer