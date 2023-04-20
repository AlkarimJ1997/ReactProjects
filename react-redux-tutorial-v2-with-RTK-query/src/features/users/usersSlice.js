import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

// Entity adapter for normalizing users data
const usersAdapter = createEntityAdapter();

// Asynchronous state with normalization
const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => "/users",
            transformResponse: responseData => {
                // Set state with loaded users
                return usersAdapter.setAll(initialState, responseData);
            },
            providesTags: (result, error, arg) => [
                { type: "User", id: "LIST" },
                ...result.ids.map(id => ({ type: "User", id }))
            ]
        })
    })
})

export const {
    useGetUsersQuery
} = usersApiSlice;

// Returns query result object
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select();

// Creates memoized selector for users (returns normalized state object with ids & entities)
export const selectUsersData = createSelector(selectUsersResult,
    usersResult => usersResult.data);

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds,
} = usersAdapter.getSelectors(state => selectUsersData(state) ?? initialState);