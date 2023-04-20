import React from "react";
import Confetti from "../components/Confetti";
import {
    Section, Title, Container,
    Item, ImageContainer, Name,
    Position 
} from "../styles/TeamStyles";

// NFT images
import img1 from "../assets/Nfts/bighead.svg";
import img2 from "../assets/Nfts/bighead-1.svg";
import img3 from "../assets/Nfts/bighead-2.svg";
import img4 from "../assets/Nfts/bighead-3.svg";
import img5 from "../assets/Nfts/bighead-4.svg";
import img6 from "../assets/Nfts/bighead-5.svg";
import img7 from "../assets/Nfts/bighead-6.svg";
import img8 from "../assets/Nfts/bighead-7.svg";
import img9 from "../assets/Nfts/bighead-8.svg";

const Team = () => {
    // JSX for a member of the team
    const Member = ({ img, name = "", position = "" }) => {
        return (
            <Item>
                <ImageContainer>
                    <img src={img} alt={name} />
                </ImageContainer>
                <Name>{name}</Name>
                <Position>{position}</Position>
            </Item>
        )
    }

    return (
        <Section id="team">
            <Confetti />
            <Title>Team</Title>
            <Container>
                <Member img={img1} name="Skyblaze" position="founder" />
                <Member img={img2} name="Megnum" position="co-founder" />
                <Member img={img3} name="Monkey King" position="director" />
                <Member img={img4} name="Black Panther" position="manager" />
                <Member img={img5} name="Deathstroke" position="artist" />
                <Member img={img6} name="Lazy Kong" position="social media expert" />
                <Member img={img7} name="Cyber Punk" position="blockchain specialist" />
                <Member img={img8} name="Monk" position="web developer" />
                <Member img={img9} name="Banana" position="graphic designer" />
            </Container>
        </Section>
    )
}

export default Team