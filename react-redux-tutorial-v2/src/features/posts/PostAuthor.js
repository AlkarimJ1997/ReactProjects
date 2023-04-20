import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../features/users/usersSlice";

const PostAuthor = ({ userId }) => {
    // Redux
    const users = useSelector(selectAllUsers);

    // Find the author of the post
    const author = users.find(user => user.id === userId);

    return (
        <span>
            by {author ? author.name : "Unknown author"}
        </span>
    )
}

export default PostAuthor