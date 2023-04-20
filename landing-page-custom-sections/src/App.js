import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
