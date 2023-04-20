import React from "react";
import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { selectAllPosts } from "../posts/postsSlice";
import { useParams, Link } from "react-router-dom";

const UserDetails = () => {
    // Get user id from URL
    const { userId } = useParams();

    // Redux
    const user = useSelector(state => selectUserById(state, Number(userId)));

    // Get all posts for this user
    const postsForUser = useSelector(selectAllPosts).filter(post => {
        return post.userId === Number(userId)
    });

    return (
        <section>
            <h2>{user?.name}</h2>
            <ol>
                {postsForUser.map(post => {
                    return (
                        <li key={post.id}>
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                        </li>
                    )
                })}
            </ol>
        </section>
    )
}

export default UserDetails