import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Vector } from "../Icons/Vector";
import { VectorContainer, Ball } from "../styles/DrawRibbonStyles";

const DrawRibbon = () => {
    // States, references
    const ref = useRef(null);
    const ballRef = useRef(null);

    // Gsap animation for ribbon
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        const element = ref.current;

        // Get reference to the ribbon and its length
        const svg = document.getElementsByClassName("svg-path")[0];
        const length = svg.getTotalLength();

        console.log(length);

        // Start position of the ribbon
        svg.style.strokeDasharray = length;

        // Hide svg before scrolling starts
        svg.style.stokeDashoffset = length;

        // Animation for the ribbon
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "top center",
                end: "bottom bottom",
                onUpdate: (self) => {
                    const draw = length * self.progress;

                    // Also reverse the drawing when scrolling up
                    svg.style.strokeDashoffset = length - draw;
                },
                onToggle: (self) => {
                    if (self.isActive) {
                        ballRef.current.style.display = "none";
                        return;
                    }

                    ballRef.current.style.display = "inline-block";
                }
            }
        })

        return () => t1 && t1.kill();
    }, [])

    return (
        <>
            <Ball ref={ballRef} />
            <VectorContainer ref={ref}>
                <Vector />
            </VectorContainer>
        </>
    )
}

export default DrawRibbon