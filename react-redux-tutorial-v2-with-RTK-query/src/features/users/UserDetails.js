import React from "react";
import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { useGetPostsByUserIdQuery } from "../posts/postsSlice";
import { useParams, Link } from "react-router-dom";
import { isDate } from "date-fns/esm";

const UserDetails = () => {
    // Get user id from URL
    const { userId } = useParams();

    // Redux
    const user = useSelector(state => selectUserById(state, Number(userId)));

    // Get all posts for this user
    const {
        data: postsForUser,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsByUserIdQuery(userId);

    // Get ids and entities for all posts
    const { ids, entities } = postsForUser || {};

    return (
        <section>
            <h2>{user?.name}</h2>
            <ol>
                {isLoading && <p>Loading...</p>}
                {isSuccess && ids.map(id => {
                    return (
                        <li key={id}>
                            <Link to={`/post/${id}`}>{entities[id].title}</Link>
                        </li>
                    )
                })}
                {isError && <p>{error}</p>}
            </ol>
        </section>
    )
}

export default UserDetails