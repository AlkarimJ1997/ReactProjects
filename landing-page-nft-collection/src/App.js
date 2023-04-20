import React from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Roadmap from "./pages/Roadmap";
import Showcase from "./pages/Showcase";
import Team from "./pages/Team";
import Faq from "./pages/Faq";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme } from "./styles/Themes";

function App() {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={lightTheme}>
                <Navigation />
                <Home />
                <About />
                <Roadmap />
                <Showcase />
                <Team />
                <Faq />
                <Footer />
                <ScrollToTop />
            </ThemeProvider>
        </>
    );
}

export default App;
