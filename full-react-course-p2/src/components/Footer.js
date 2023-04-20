import React from 'react';
import { useStoreState } from 'easy-peasy';

const Footer = () => {
    // States from store
    const postCount = useStoreState(state => state.postCount);

    return (
        <footer className="Footer">
            <p>{postCount} Blog Posts</p>
        </footer>
    )
}

export default Footer