import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import { useParams, Link } from "react-router-dom";

const PostDetails = () => {
    // Get post id from url
    const { postId } = useParams();

    // Redux
    const post = useSelector(state => selectPostById(state, Number(postId)))

    return (
        <>
            {post ? (
                <article>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p className="postCredit">
                        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
                        <PostAuthor userId={post.userId} />
                        <TimeAgo timestamp={post.date} />
                    </p>
                    <ReactionButtons post={post} />
                </article>
            ) : (
                <section>
                    <h2>Post not found!</h2>
                </section>
            )}
        </>
    )
}

export default PostDetails