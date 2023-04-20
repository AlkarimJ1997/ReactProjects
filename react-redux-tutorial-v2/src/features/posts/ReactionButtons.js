import React from "react";
import { useDispatch } from "react-redux";
import { addPostReaction } from "./postsSlice";

const ReactionButtons = ({ post }) => {
    // Redux
    const dispatch = useDispatch();

    // Emojis for each reaction
    const emojis = {
        thumbsUp: '👍',
        wow: '😮',
        heart: '❤️',
        rocket: '🚀',
        coffee: '☕'
    }

    // Map each reaction to a button
    const reactionButtons = Object.entries(emojis).map(([reaction, emoji]) => {
        return (
            <button 
            key={reaction} 
            type="button" 
            className="reactionButton"
            onClick={() => dispatch(addPostReaction({
                postId: post.id,
                reaction
            }))}>
                {emoji} {post.reactions[reaction]}
            </button>
        )
    })

    return (
        <div className="reactionBtnContainer">
            {reactionButtons}
        </div>
    )
}

export default ReactionButtons