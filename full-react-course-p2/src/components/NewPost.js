import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useStoreState, useStoreActions } from "easy-peasy";

const NewPost = () => {
    // States, actions from store
    const posts = useStoreState(state => state.posts);
    const postConfig = useStoreState(state => state.postConfig);

    const setPostConfig = useStoreActions(actions => actions.setPostConfig);
    const savePost = useStoreActions(actions => actions.savePost);

    // Navigation from useNavigate
    const navigate = useNavigate();

    // Initializes post config properties on page load
    useEffect(() => {
        setPostConfig({
            title: "",
            body: ""
        });
    }, [])

    // Handles setting the post config properties
    const setField = (name, value) => {
        setPostConfig({ ...postConfig, [name]: value });
    }

    // Handle adding a new post
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create new post
        const newPost = {
            id: posts.length ? posts[posts.length - 1].id + 1 : 1,
            title: postConfig.title,
            datetime: format(new Date(), "MMMM dd, yyyy pp"),
            body: postConfig.body
        }

        // Attempt to add new post to API
        savePost(newPost);

        // Go back to the home page
        navigate("/");
    }

    return (
        <main className="NewPost">
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postConfig.title || ""}
                    onChange={(e) => setField("title", e.target.value)} />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={postConfig.body || ""}
                    onChange={(e) => setField("body", e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewPost