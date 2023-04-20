import React from "react";
import Carousel from "../components/Carousel";
import Button from "../components/Button";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/Themes";
import {
    Section, Container, Box,
    Title, SubText, SubTextLight,
    ButtonContainer
} from "../styles/AboutStyles";

const About = () => {
    return (
        <Section id="about">
            <Container>
                <Box>
                    <Carousel />
                </Box>
                <Box>
                    <Title>Welcome To The Weirdos Club.</Title>
                    <SubText>
                        The WEIRDOS CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
                    </SubText>
                    <SubTextLight>
                        With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
                    </SubTextLight>
                    <ButtonContainer>
                        <ThemeProvider theme={darkTheme}>
                            <Button text="Join Our Discord" link="#" />
                        </ThemeProvider>
                    </ButtonContainer>
                </Box>
            </Container>
        </Section>
    )
}

export default About