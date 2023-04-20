import React from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const PostPage = () => {
    // States, actions from store
    const getPostById = useStoreState(state => state.getPostById);
    const deletePost = useStoreActions(actions => actions.deletePost);

    // Get the post id from the url
    const { id } = useParams();

    // Find the post with the id
    const post = getPostById(id);

    // Get navigation from useNavigate
    const navigate = useNavigate();

    // Handle deletion of a post
    const handleDelete = (id) => {
        // Attempt to delete post in API
        deletePost(id);

        // Use history to go back to the home page
        navigate("/");
    }

    return (
        <main className="PostPage">
            <article className="post">
                {post && (
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <Link to={`/edit/${post.id}`}>
                            <button className="editButton">Edit Post</button>
                        </Link>
                        <button className="deleteButton" onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                )}
                {!post && (
                    <>
                        <h2>Post not found</h2>
                        <p className="noPost">Well, that's disappointing.</p>
                        <p className="homeLink">
                            <Link to="/">Visit our <span>Homepage</span></Link>
                        </p>
                    </>
                )}
            </article>
        </main>
    )
}

export default PostPage