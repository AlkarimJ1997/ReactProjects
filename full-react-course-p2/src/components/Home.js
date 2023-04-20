import React from 'react'
import Feed from './Feed'
import { useStoreState } from "easy-peasy";

const Home = ({ fetchError, isLoading }) => {
    // States from store
    const searchResults = useStoreState(state => state.searchResults);

    return (
        <main className="Home">
            {isLoading && <p className="statusMsg">Loading posts...</p>}
            {!isLoading && fetchError &&
                <p className="statusMsg" style={{ color: "red" }}>
                    Error: {fetchError.message}
                </p>
            }
            {!isLoading && !fetchError && (searchResults.length ?
                <Feed posts={searchResults} /> : <p className="statusMsg">No posts found</p>
            )}
        </main>
    )
}

export default Home