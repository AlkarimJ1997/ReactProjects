import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { apiSlice } from "../api/apiSlice";

// Entity adapter for normalizing posts data
const postsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date)
})

// Asynchronous state with normalization
const initialState = postsAdapter.getInitialState()

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => "/posts",
            transformResponse: responseData => {
                // minimum minutes since posted
                let minutesSincePosted = 1;

                // Get loaded posts from API (add date and reactions if they don't exist)
                const loadedPosts = responseData.map(post => {
                    return {
                        ...post,
                        date: post.date || sub(new Date(), { minutes: minutesSincePosted++ }).toISOString(),
                        reactions: post.reactions || {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                })

                // Set state with loaded posts
                return postsAdapter.setAll(initialState, loadedPosts);
            },
            providesTags: (result, error, arg) => [
                { type: "Post", id: "LIST" },
                ...result.ids.map(id => ({ type: "Post", id }))
            ]
        }),
        getPostsByUserId: builder.query({
            query: id => `/posts/?userId=${id}`,
            transformResponse: responseData => {
                // minimum minutes since posted
                let minutesSincePosted = 1;

                // Get loaded posts from API (add date and reactions if they don't exist)
                const loadedPosts = responseData.map(post => {
                    return {
                        ...post,
                        date: post.date || sub(new Date(), { minutes: minutesSincePosted++ }).toISOString(),
                        reactions: post.reactions || {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                })

                // Set state with loaded posts
                return postsAdapter.setAll(initialState, loadedPosts);
            },
            providesTags: (result, error, arg) => {
                return [
                    ...result.ids.map(id => ({ type: "Post", id }))
                ]
            }
        }),
        createPost: builder.mutation({
            query: post => ({
                url: "/posts",
                method: "POST",
                body: {
                    ...post,
                    userId: Number(post.userId),
                    date: new Date().toISOString(),
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                }
            }),
            invalidatesTags: [{ type: "Post", id: "LIST" }]
        }),
        updatePost: builder.mutation({
            query: post => ({
                url: `/posts/${post.id}`,
                method: "PUT",
                body: {
                    ...post,
                    date: new Date().toISOString()
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: "Post", id: arg.id }
            ]
        }),
        deletePost: builder.mutation({
            query: id => ({
                url: `/posts/${id}`,
                method: "DELETE",
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: "Post", id: arg.id }
            ]
        }),
        addReaction: builder.mutation({
            // Optimistic update so that we don't have to refresh the entire list
            query: ({ postId, reactions }) => ({
                url: `posts/${postId}`,
                method: "PATCH",
                // In a real app, this would need to be based on userID so that a user
                // cannot do the same reaction more than once
                body: { reactions }
            }),
            async onQueryStarted({ postId, reactions }, { dispatch, queryFulfilled }) {
                // `updateQueryData` requires the endpoint name and cache key arguments,
                // so that it knows which piece of cache state to update
                const patchResult = dispatch(extendedApiSlice.util.updateQueryData(
                    "getPosts",
                    undefined,
                    draft => {
                        // The `draft` is Immer-wrapped and can be mutated directly
                        const post = draft.entities[postId];

                        if (post) post.reactions = reactions;
                    }
                ))

                // Wait for the promise
                try {
                    await queryFulfilled
                } catch {
                    // If the promise fails, revert the optimistic update
                    patchResult.undo();
                }
            }
        })
    })
})

export const { 
    useGetPostsQuery,
    useGetPostsByUserIdQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
    useAddReactionMutation
} = extendedApiSlice;

// Returns query result object
export const selectPostsResult = extendedApiSlice.endpoints.getPosts.select();

// Creates memoized selector for posts (returns normalized state object with ids & entities)
export const selectPostsData = createSelector(selectPostsResult,
    postsResult => postsResult.data)

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds
} = postsAdapter.getSelectors(state => selectPostsData(state) ?? initialState);