import React from "react";
import CoverVideo from "../components/CoverVideo";
import TypeWriterText from "../components/TypeWriterText";
import RoundTextBlack from "../assets/Rounded-Text-Black.png";
import { 
    Section, Container, Box,
    Round, Circle
} from "../styles/HomeStyles";

const Home = () => {
    return (
        <Section id="home">
            <Container>
                <Box>
                    <TypeWriterText />
                </Box>
                <Box>
                    <CoverVideo /> 
                </Box>

                <Round>
                    <Circle>&#x2193;</Circle>
                    <img src={RoundTextBlack} alt="NFT" />
                </Round>
            </Container>
        </Section>
    )
}

export default Home