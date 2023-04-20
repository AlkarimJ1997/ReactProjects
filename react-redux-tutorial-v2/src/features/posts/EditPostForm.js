import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPostById, updatePost, deletePost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
import { useParams, useNavigate } from "react-router-dom";

const EditPostForm = () => {
    // Get post id from url
    const { postId } = useParams();

    // Get navigation from react-router-dom
    const navigate = useNavigate();

    // Redux
    const post = useSelector(state => selectPostById(state, Number(postId)));
    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();

    // States, references
    const [title, setTitle] = useState(post?.title);
    const [content, setContent] = useState(post?.body);
    const [userId, setUserId] = useState(post?.userId);
    const [requestStatus, setRequestStatus] = useState("idle");

    // User options for select input
    const userOptions = users.map(user => {
        return (
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        )
    })

    // Method to handle form submission
    const handleSubmit = () => {
        if (!title || !content || !userId || requestStatus !== "idle") return;

        // Dispatch action to update post
        try {
            setRequestStatus("pending");

            dispatch(updatePost({
                id: post.id,
                title,
                body: content,
                userId,
                reactions: post.reactions
            })).unwrap();

            // If successful, reset states and navigate to post details
            setTitle("");
            setContent("");
            setUserId("");
            navigate(`/post/${post.id}`);
        } catch (err) {
            console.error("Failed to edit the post", err);
        } finally {
            setRequestStatus("idle");
        }
    }

    // Method to handle deletion of a post
    const handleDelete = () => {
        if (requestStatus !== "idle") return;

        // Dispatch action to delete post
        try {
            setRequestStatus("pending");

            dispatch(deletePost(post.id)).unwrap();

            // If successful, reset the state and navigate to home page
            setTitle("");
            setContent("");
            setUserId("");
            navigate("/");
        } catch (err) {
            console.error("Failed to delete the post", err);
        } finally {
            setRequestStatus("idle");
        }
    }

    return (
        <>
            {post ? (
                <section>
                    <h2>Edit Post</h2>
                    <form>
                        <label htmlFor="title">Post Title:</label>
                        <input
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <label htmlFor="postAuthor">Author:</label>
                        <select
                            id="postAuthor"
                            defaultValue={userId}
                            onChange={(e) => setUserId(Number(e.target.value))}>
                            <option value=""></option>
                            {userOptions}
                        </select>
                        <label htmlFor="postContent">Content:</label>
                        <textarea
                            id="postContent"
                            name="postContent"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={
                                !title || !content || !userId || requestStatus !== "idle"
                            }>
                            Save Post
                        </button>
                        <button
                            type="button"
                            onClick={handleDelete}
                            disabled={requestStatus !== "idle"}
                            className="deleteButton">
                            Delete Post
                        </button>
                    </form>
                </section>
            ) : (
                <section>
                    <h2>Post not found!</h2>
                </section >
            )}
        </>
    )
}

export default EditPostForm