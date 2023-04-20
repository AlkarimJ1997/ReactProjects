import React from "react";
import Typewriter from "typewriter-effect";
import Button from "../components/Button";
import { Title, SubTitle, ButtonContainer } from "../styles/TypeWriterTextStyles";

const TypeWriterText = () => {
    return (
        <>
            <Title>
                Discover a new era of cool
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString("<span class='text-1'>NFTs.</span>")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("<span class='text-2'>Collectible Items.</span>")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("<span class='text-3'>Ape Killers!</span>")
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }} />
            </Title>
            <SubTitle>Bored of Apes? Try Something New.</SubTitle>
            <ButtonContainer>
                <Button text="Explore" link="#about" />
            </ButtonContainer>
        </>
    )
}

export default TypeWriterText