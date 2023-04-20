import React from "react";
import { useAddReactionMutation } from "./postsSlice";

const ReactionButtons = ({ post }) => {
    // Redux and RTK query
    const [addReaction] = useAddReactionMutation();

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
                onClick={() => {
                    const newValue = post.reactions[reaction] + 1;

                    addReaction({
                        postId: post.id,
                        reactions: { ...post.reactions, [reaction]: newValue }
                    });
                }}>
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