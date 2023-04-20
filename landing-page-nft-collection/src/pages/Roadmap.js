import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import DrawRibbon from "../components/DrawRibbon";
import { Data } from "../data/RoadmapData";
import {
    Section, Title, Container,
    SVGContainer, ItemList, Item,
    ItemContainer, Box, SubTitle, Text
} from "../styles/RoadmapStyles";

const Roadmap = () => {
    // States, references
    const revealRefs = useRef([]);
    revealRefs.current = [];

    // Gsap scroll plugin
    gsap.registerPlugin(ScrollTrigger);

    // Method to add an item to the list of items to reveal
    const addToRefs = (el) => {
        if (!el || revealRefs.current.includes(el)) return;

        revealRefs.current.push(el);
    }

    // JSX for a roadmap item
    const RoadMapItem = ({ title, subtext, addToRef }) => {
        return (
            <Item ref={addToRef}>
                <ItemContainer>
                    <Box>
                        <SubTitle>{title}</SubTitle>
                        <Text>{subtext}</Text>
                    </Box>
                </ItemContainer>
            </Item>
        )
    }

    useLayoutEffect(() => {
        // Gsap timeline
        const tl = gsap.timeline();

        // Add scroll trigger to each item
        revealRefs.current.forEach((el, idx) => {
            tl.fromTo(el.childNodes[0], {
                y: "0",
            }, {
                y: "-30%",
                scrollTrigger: {
                    id: `section-${idx + 1}`,
                    trigger: el,
                    start: "top center+=200px",
                    end: "bottom center",
                    scrub: true
                }
            })
        })

        return () => {

        }
    }, [])

    return (
        <Section id="roadmap">
            <Title>Roadmap</Title>
            <Container>
                <SVGContainer>
                    <DrawRibbon />
                </SVGContainer>
                <ItemList>
                    {/* Empty item for layout */}
                    <Item>&nbsp;</Item>
                    {Data.map((item, idx) => {
                        return (
                            <RoadMapItem
                                key={idx}
                                addToRef={addToRefs}
                                title={item.title}
                                subtext={item.subtext} />
                        )
                    })}
                </ItemList>
            </Container>
        </Section>
    )
}

export default Roadmap