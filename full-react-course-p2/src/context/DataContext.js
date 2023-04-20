import React, { useState, useEffect, createContext } from "react";
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    // Constants
    const API_URL = "http://localhost:8000/posts";

    // States, references
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // Custom hooks
    const { data, fetchError, isLoading } = useAxiosFetch(API_URL);

    // Set posts from the API once the data is received
    useEffect(() => {
        setPosts(data);
    }, [data, setPosts]);

    // Updates search results when search is updated
    useEffect(() => {
        const results = posts.filter(post => {
            return (post.body).toLowerCase().includes(search.toLowerCase()) ||
                (post.title).toLowerCase().includes(search.toLowerCase())
        });

        setSearchResults(results.reverse());
    }, [posts, search])

    return (
        <DataContext.Provider value={{
            search, setSearch,
            searchResults, fetchError, isLoading,
            posts, setPosts
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;