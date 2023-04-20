import React from "react";
import PostsExcerpt from "./PostsExcerpt";
import { useSelector } from "react-redux";
import { selectPostIds, selectPostsStatus, selectPostsError } from './postsSlice';

const PostsList = () => {
    // Redux
    const orderedPostIds = useSelector(selectPostIds);
    const status = useSelector(selectPostsStatus);
    const error = useSelector(selectPostsError);

    return (
        <section>
            {status === "loading" && <p>Loading...</p>}
            {status === "succeeded" && (
                // Sort posts by date, then render them
                orderedPostIds.map(postId => {
                    return (
                        <PostsExcerpt key={postId} postId={postId} />
                    )
                }))
            }
            {status === "failed" && <p>{error}</p>}
        </section>
    )
}

export default PostsList