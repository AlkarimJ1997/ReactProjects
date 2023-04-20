import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../features/users/usersSlice";
import { useCreatePostMutation } from "../../features/posts/postsSlice";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
    // Redux and RTK query
    const users = useSelector(selectAllUsers);
    const [createPost, { isLoading }] = useCreatePostMutation();

    // Get navigation from react-router-dom
    const navigate = useNavigate();

    // States, references
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");

    // Method to add a post
    const handleSubmit = async () => {
        if (!title || !content || !userId || isLoading) return;

        // RTK query to create post
        try {
            await createPost({ title, body: content, userId }).unwrap();

            // If successful, reset the state and navigate to the home page
            setTitle("");
            setContent("");
            setUserId("");
            navigate("/");
        } catch (err) {
            console.error("Failed to save the post", err);
        }
    }

    // Mapping users
    const userOptions = users.map(user => {
        return (
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        )
    })

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select
                    id="postAuthor"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}>
                    <option value=""></option>
                    {userOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!title || !content || !userId || isLoading}>
                    Save Post
                </button>
            </form>
        </section>
    )
}

export default AddPostForm