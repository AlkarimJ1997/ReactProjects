import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useStoreState, useStoreActions } from "easy-peasy";

const EditPost = () => {
    // States, actions from store
    const editTitle = useStoreState(state => state.editTitle);
    const editBody = useStoreState(state => state.editBody);
    const getPostById = useStoreState(state => state.getPostById);

    const setEditTitle = useStoreActions(actions => actions.setEditTitle);
    const setEditBody = useStoreActions(actions => actions.setEditBody);
    const editPost = useStoreActions(actions => actions.editPost);

    // Get navigation from useNavigate
    const navigate = useNavigate();

    // Get the post id from the url
    const { id } = useParams();

    // Find the post with the id
    const post = getPostById(id);

    // Set the state of the edit title and body to the post's data
    useEffect(() => {
        if (!post) return;

        setEditTitle(post.title);
        setEditBody(post.body);
    }, [post, setEditTitle, setEditBody]);

    // Handle editing a post
    const handleEdit = (id) => {
        // Create updated post
        const updatedPost = {
            id,
            title: editTitle,
            datetime: format(new Date(), "MMMM dd, yyyy pp"),
            body: editBody
        }

        // Attempt to edit post in API
        editPost(updatedPost);

        // Go back to the post page
        navigate(`/post/${id}`);
    }

    return (
        <main className="NewPost">
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input
                            id="postTitle"
                            type="text"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)} />
                        <label htmlFor="postBody">Post:</label>
                        <textarea
                            id="postBody"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)} />
                        <button type="button" onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>Post not found</h2>
                    <p className="noPost">You are trying to edit a post that does not exist...</p>
                    <p className="homeLink">
                        <Link to="/">Visit our <span>Homepage</span></Link>
                    </p>
                </>
            }
        </main>
    )
}

export default EditPost