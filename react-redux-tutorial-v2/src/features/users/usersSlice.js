import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Synchronous state
// const initialState = [
//     { id: "0", name: "Dude Lebowski" },
//     { id: "1", name: "Neil Young" },
//     { id: "2", name: "Dave Gray" },
// ]

// BASE URL
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

// Asynchronous state
const initialState = []

// Asynchronous thunk to get users from API
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await axios.get(USERS_URL);

    return response.data;
})

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        // Reducers for the users 
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            return action.payload;
        }
    }
})

export const selectAllUsers = (state) => state.users;
export const selectUserById = (state, id) => state.users.find(user => user.id === id);
export default usersSlice.reducer