import React, { useState } from "react";
import Logo from "./Logo";
import {
    Section, NavBar, NavMenu,
    NavItem, HamburgerMenu, Desktop,
    Mobile
} from "../styles/NavigationStyles";
import Button from "./Button";

const Navigation = () => {
    // States, references
    const [clicked, setClicked] = useState(false);

    // Method to scroll to corresponding section
    const scrollTo = (id) => {
        const element = document.getElementById(id);

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });

        setClicked(!clicked);
    }

    return (
        <Section>
            <NavBar>
                <Logo />
                <HamburgerMenu onClick={() => setClicked(!clicked)} clicked={clicked}>
                    &nbsp;
                </HamburgerMenu>
                <NavMenu clicked={clicked}>
                    <NavItem onClick={() => scrollTo("home")}>Home</NavItem>
                    <NavItem onClick={() => scrollTo("about")}>About</NavItem>
                    <NavItem onClick={() => scrollTo("roadmap")}>RoadMap</NavItem>
                    <NavItem onClick={() => scrollTo("showcase")}>Showcase</NavItem>
                    <NavItem onClick={() => scrollTo("team")}>Team</NavItem>
                    <NavItem onClick={() => scrollTo("faq")}>FAQ</NavItem>
                    <NavItem>
                        <Mobile>
                            <Button text="Connect Wallet" link="https://www.google.com" />
                        </Mobile>
                    </NavItem>
                </NavMenu>
                <Desktop>
                    <Button text="Connect Wallet" link="https://www.google.com" />
                </Desktop>
            </NavBar>
        </Section>
    )
}

export default Navigation