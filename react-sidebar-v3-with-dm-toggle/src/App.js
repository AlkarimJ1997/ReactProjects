import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { GlobalStyles } from './GlobalStyles';

function App() {
    return (
        <>
            <Router>
                <GlobalStyles />
                <Sidebar />
            </Router>
        </>
    );
}

export default App;
