import React from 'react';
import {
    InfoContainer, InfoWrapper, InfoRow,
    ColumnOne, TextWrapper, TopLine,
    Heading, Subtitle, BtnWrapper,
    ColumnTwo, ImgWrapper, Img
} from './InfoSectionStyles';
import { Button } from '../Button';

const InfoSection = ({ id, lightBg, lightText, lightTextDesc, topLine, headline, description, buttonLabel, imgStart, img, alt, dark, primary, dark2 }) => {
    return (
        <>
            <InfoContainer id={id} lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <ColumnOne>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>
                                    {description}
                                </Subtitle>
                                <BtnWrapper>
                                    <Button
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}>
                                        {buttonLabel}
                                    </Button>
                                </BtnWrapper>
                            </TextWrapper>
                        </ColumnOne>
                        <ColumnTwo>
                            <ImgWrapper>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </ColumnTwo>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection