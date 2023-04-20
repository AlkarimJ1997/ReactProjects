import React from 'react';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
