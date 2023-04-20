import { useState, useEffect } from "react";

const useWindowSize = () => {
    // State variables
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })

    // Update window size on page load
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        // Update window size on page load
        handleResize();

        // Update window size on window resize
        window.addEventListener("resize", handleResize);

        // Prevent memory leak (by cleaning up)
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return windowSize;
}

export default useWindowSize;