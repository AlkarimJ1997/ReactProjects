import { 
    createSlice, nanoid, createAsyncThunk, createEntityAdapter 
} from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

// Synchronous state
// const initialState = [
//     {
//         id: "1",
//         title: "Learning Redux Toolkit",
//         content: "I've heard good things.",
//         date: sub(new Date(), { minutes: 10 }).toISOString(),
//         reactions: {
//             thumbsUp: 0,
//             wow: 0,
//             heart: 0,
//             rocket: 0,
//             coffee: 0
//         }
//     },
//     {
//         id: "2",
//         title: "Slices...",
//         content: "The more I say slice, the more I want pizza.",
//         date: sub(new Date(), { minutes: 5 }).toISOString(),
//         reactions: {
//             thumbsUp: 0,
//             wow: 0,
//             heart: 0,
//             rocket: 0,
//             coffee: 0
//         }
//     }
// ]

// BASE URL
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

// Entity adapter for normalizing posts data
const postsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date)
})

// Asynchronous state
// const initialState = {
//     posts: [],
//     status: "idle", // "idle" || "loading" || "succeeded || "failed"
//     error: null,
//     count: 0
// }

// Asynchronous state with normalization
const initialState = postsAdapter.getInitialState({
    status: "idle", // "idle" || "loading" || "succeeded || "failed"
    error: null,
    count: 0
})

// Asynchronous thunk to get posts from API
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get(POSTS_URL);

    return response.data;
})

// Asynchronous thunk to create a new post
export const createPost = createAsyncThunk("posts/createPost", async (post) => {
    const response = await axios.post(POSTS_URL, post);

    return response.data;
})

// Asynchronous thunk to update an existing post
export const updatePost = createAsyncThunk("posts/updatePost", async (post) => {
    const { id } = post;

    try {
        const response = await axios.put(`${POSTS_URL}/${id}`, post);
        return response.data
    } catch (err) {
        return post; // only for testing redux
    }
})

// Asynchronous thunk to delete an existing post
export const deletePost = createAsyncThunk("posts/deletePost", async (postId) => {
    try {
        const response = await axios.delete(`${POSTS_URL}/${postId}`);

        if (response?.status === 200) return postId;

        return `${response?.status} ${response?.statusText}`;
    } catch (err) {
        return err.message;
    }
})

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        // Reducers for the posts
        addPost: {
            reducer(state, action) {
                state.posts.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        addPostReaction: (state, action) => {
            const { postId, reaction } = action.payload;

            // Before normalization
            // const existingPost = state.posts.find(post => post.id === postId);

            // After normalization
            const existingPost = state.entities[postId];

            if (!existingPost) return;

            existingPost.reactions[reaction]++;
        },
        removePost: (state, action) => {
            state.posts.filter(post => post.id !== action.payload);
        },
        increaseCount: (state, action) => {
            state.count++;
        }
    },
    extraReducers: {
        // Reducers for the async actions
        [fetchPosts.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = "succeeded";

            // minimum minutes since posted
            let minutesSincePosted = 1;

            // Adding date and reactions to each post (BEFORE normalization)
            // state.posts = action.payload.map(post => {
            //     return {
            //         ...post,
            //         date: sub(new Date(), { minutes: minutesSincePosted++ }).toISOString(),
            //         reactions: {
            //             thumbsUp: 0,
            //             wow: 0,
            //             heart: 0,
            //             rocket: 0,
            //             coffee: 0
            //         }
            //     }
            // })

            // Adding date and reactions to each post (AFTER normalization)
            postsAdapter.upsertMany(state, action.payload.map(post => {
                return {
                    ...post,
                    date: sub(new Date(), { minutes: minutesSincePosted++ }).toISOString(),
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                }
            }))
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [createPost.fulfilled]: (state, action) => {
            action.payload.userId = Number(action.payload.userId);
            action.payload.date = new Date().toISOString();
            action.payload.reactions = {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0
            }

            // Before normalization
            // state.posts.push(action.payload);

            // After normalization
            postsAdapter.addOne(state, action.payload);
        },
        [updatePost.fulfilled]: (state, action) => {
            // In case server gives back 500 error, etc.
            if (!action.payload?.id) {
                console.log("Update could not complete");
                console.log(action.payload);
                return;
            }

            const { id } = action.payload;

            // Update the time of the post
            action.payload.date = new Date().toISOString();

            // Update the state of posts (BEFORE normalization)
            // const posts = state.posts.filter(post => post.id !== id);

            // Before normalization
            // state.posts = [...posts, action.payload];

            // After normalization
            postsAdapter.upsertOne(state, action.payload);
        },
        [deletePost.fulfilled]: (state, action) => {
            // In case server gives back 500 error, etc.
            if (!action.payload) {
                console.log("Delete could not complete");
                console.log(action.payload);
                return;
            }

            // Update the state of posts (BEFORE normalization)
            // const posts = state.posts.filter(post => post.id !== action.payload);

            // Before normalization
            // state.posts = [...posts];

            // After normalization
            postsAdapter.removeOne(state, action.payload);
        }
    }
})

// Selectors before normalization
// export const selectAllPosts = (state) => state.posts.posts;
// export const selectPostById = (state, id) => state.posts.posts.find(post => post.id === id);

// After normalization (with ES6 destructuring)
export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds
} = postsAdapter.getSelectors(state => state.posts);

export const selectPostsStatus = (state) => state.posts.status;
export const selectPostsError = (state) => state.posts.error;
export const selectCount = (state) => state.posts.count;
export const { addPost, addPostReaction, removePost, increaseCount } = postsSlice.actions;
export default postsSlice.reducer