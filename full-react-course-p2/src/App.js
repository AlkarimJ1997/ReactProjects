import React, { useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import Footer from './components/Footer';
import useAxiosFetch from './hooks/useAxiosFetch';
import { Routes, Route } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

function App() {
    // Constants
    const API_URL = "http://localhost:8000/posts";

    // Get actions from store
    const setPosts = useStoreActions(actions => actions.setPosts);

    // Custom hooks
    const { data, fetchError, isLoading } = useAxiosFetch(API_URL);

    // Set posts from the API once the data is received
    useEffect(() => {
        setPosts(data);
    }, [data, setPosts]);

    return (
        <div className="App">
            <Header title="React JS Blog" />
            <Nav />
            <Routes>
                <Route index element={<Home fetchError={fetchError} isLoading={isLoading} />} />
                <Route path="post" element={<NewPost />} />
                <Route path="edit/:id" element={<EditPost />} />
                <Route path="post/:id" element={<PostPage />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<Missing />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
