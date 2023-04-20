import { createStore, action, thunk, computed } from "easy-peasy";
import api from "./api/posts";

export default createStore({
    posts: [],
    setPosts: action((state, payload) => {
        state.posts = payload;
    }),
    postConfig: {},
    setPostConfig: action((state, payload) => {
        state.postConfig = payload;
    }),
    editTitle: "",
    setEditTitle: action((state, payload) => {
        state.editTitle = payload;
    }),
    editBody: "",
    setEditBody: action((state, payload) => {
        state.editBody = payload;
    }),
    search: "",
    setSearch: action((state, payload) => {
        state.search = payload;
    }),
    searchResults: [],
    setSearchResults: action((state, payload) => {
        state.searchResults = payload;
    }),
    postCount: computed(state => state.posts.length),
    getPostById: computed(state => {
        return id => {
            return state.posts.find(post => (post.id).toString() === id);
        }
    }),
    savePost: thunk(async (actions, newPost, helpers) => {
        const { posts } = helpers.getState();

        try {
            // Attempt to add new post to API
            const response = await api.post('/posts', newPost);

            // Adds a new post to the posts array
            actions.setPosts([...posts, response.data]);

            // Resets the post config properties
            actions.setPostConfig({
                title: "",
                body: ""
            });
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }),
    deletePost: thunk(async (actions, id, helpers) => {
        const { posts } = helpers.getState();

        try {
            // Attempt to delete post from API
            await api.delete(`/posts/${id}`);

            actions.setPosts(posts.filter(post => post.id !== id));
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }),
    editPost: thunk(async (actions, updatedPost, helpers) => {
        const { posts } = helpers.getState();
        const { id } = updatedPost;

        try {
            // Attempt to update post in API
            const response = await api.put(`/posts/${id}`, updatedPost);

            // Updates the post in the posts array
            actions.setPosts(posts.map(post => post.id === id ? response.data : post));

            // Resets the edit title and body
            actions.setEditTitle("");
            actions.setEditBody("");
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    })
})