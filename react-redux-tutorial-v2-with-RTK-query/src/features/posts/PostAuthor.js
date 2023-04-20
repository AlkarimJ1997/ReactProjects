import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../features/users/usersSlice";
import { Link } from "react-router-dom";

const PostAuthor = ({ userId }) => {
    // Redux
    const users = useSelector(selectAllUsers);

    console.log(users);

    // Find the author of the post
    const author = users.find(user => user.id === userId);

    console.log(author);

    return (
        <span>
            by {author ? <Link to={`/user/${userId}`}>{author.name}</Link> : "Unknown author"}
        </span>
    )
}

export default PostAuthor