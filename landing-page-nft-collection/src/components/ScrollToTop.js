import React, { useLayoutEffect, useRef } from "react";
import { useWindowScroll } from "react-use";
import { Up } from "../styles/ScrollToTopStyles";

const ScrollToTop = () => {
    // States, references
    const ref = useRef(null);
    const { y } = useWindowScroll();

    // Method to scroll to top of page
    const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    useLayoutEffect(() => {
        // Only show scroll to top when user is not at the top of the page
        if (y > 200) {
            ref.current.style.display = "flex";
            return;
        }

        ref.current.style.display = "none";
    }, [y])

    return (
        <Up ref={ref} onClick={scrollToTop}>
            &#x2191;
        </Up>
    )
}

export default ScrollToTop