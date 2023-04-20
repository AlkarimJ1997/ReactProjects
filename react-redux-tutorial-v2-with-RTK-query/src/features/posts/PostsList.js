import React from "react";
import PostsExcerpt from "./PostsExcerpt";
import { useSelector } from "react-redux";
import { selectPostIds } from './postsSlice';
import { useGetPostsQuery } from "./postsSlice";

const PostsList = () => {
    // Redux and RTK query
    const { isLoading, isSuccess, isError, error } = useGetPostsQuery();
    const orderedPostIds = useSelector(selectPostIds);

    return (
        <section>
            {isLoading && <p>Loading...</p>}
            {isSuccess && (
                // Sort posts by date, then render them
                orderedPostIds.map(postId => {
                    return (
                        <PostsExcerpt key={postId} postId={postId} />
                    )
                }))
            }
            {isError && <p>{error}</p>}
        </section>
    )
}

export default PostsList