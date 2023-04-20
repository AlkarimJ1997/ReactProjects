import { GlobalStyle } from "./GlobalStyles";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import { productsData } from "./components/ProductsSection/Data";
import { dessertsData } from "./components/ProductsSection/Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <GlobalStyle />
                <HeroSection />
                <ProductsSection heading="Choose your favorite" data={productsData} />
                <ProductsSection heading="Sweet Treats for You" data={dessertsData} />
                <Feature />
                <Footer />
            </Router>
        </>
    );
}

export default App;
